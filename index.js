    // index.js

    // Importar las preguntas de cada unidad
    import { unit1Questions } from './questions/unit1_questions.js';
    import { unit2Questions } from './questions/unit2_questions.js';
    import { unit3Questions } from './questions/unit3_questions.js';
    import { unit4Questions } from './questions/unit4_questions.js';
    import { unit5Questions } from './questions/unit5_questions.js';
    import { unit6Questions } from './questions/unit6_questions.js';
    import { unit7Questions } from './questions/unit7_questions.js';
    import { unit8Questions } from './questions/unit8_questions.js';
    import { unit9Questions } from './questions/unit9_questions.js';

    // Constante para el número total de preguntas por partida
    const TOTAL_QUESTIONS_PER_GAME = 20;

    // Combinar todas las preguntas en una sola estructura
    // (ya no se necesita el objeto allQuestionsData con la clave "questions" anidada)
    const allQuestions = [
        ...unit1Questions,
        ...unit2Questions,
        ...unit3Questions,
        ...unit4Questions,
        ...unit5Questions,
        ...unit6Questions,
        ...unit7Questions,
        ...unit8Questions,
        ...unit9Questions
    ];

    // Estado inicial del juego
    const gameState = {
        questions: [], // Se poblará en loadQuestions
        currentQuestionIndex: 0,
        scoreCorrect: 0,
        scoreIncorrect: 0,
        currentQuestionSet: [],
        lastGameQuestionIds: [],
        gamePhase: 'start',
        selectedAnswerIndex: null,
        timerId: null,
    };

    // Obtención de elementos del DOM (sin cambios)
    const gameContainer = document.getElementById('game-container');
    const startScreen = document.getElementById('start-screen');
    const gameScreen = document.getElementById('game-screen');
    const endScreen = document.getElementById('end-screen');
    const startGameBtn = document.getElementById('start-game-btn');
    const questionCounterEl = document.getElementById('question-counter');
    const correctScoreEl = document.getElementById('correct-score');
    const incorrectScoreEl = document.getElementById('incorrect-score');
    const questionTextEl = document.getElementById('question-text');
    const optionsContainerEl = document.getElementById('options-container');
    const feedbackMessageEl = document.getElementById('feedback-message');
    const explanationTextEl = document.getElementById('explanation-text');
    const nextQuestionBtn = document.getElementById('next-question-btn');
    const playAgainBtn = document.getElementById('play-again-btn');
    const finalCorrectEl = document.getElementById('final-correct');
    const finalIncorrectEl = document.getElementById('final-incorrect');

    /**
     * Carga las preguntas desde la constante allQuestions combinada.
     */
    function loadQuestions() {
        return new Promise((resolve, reject) => {
            if (allQuestions && Array.isArray(allQuestions)) {
                gameState.questions = allQuestions; // Usar el array combinado
                console.log("Preguntas cargadas desde módulos:", gameState.questions.length);
                if (gameState.questions.length === 0) {
                    console.warn("Advertencia: El array combinado de preguntas está vacío.");
                }
                resolve();
            } else {
                console.error("Error: El array combinado 'allQuestions' no es un array o no está definido.");
                // ... (manejo de error en UI como antes)
                if (startScreen && !gameScreen.classList.contains('hidden')) {
                     startScreen.innerHTML = `
                        <h1 class="text-3xl sm:text-4xl font-bold text-indigo-700 mb-4">Error de Carga</h1>
                        <p class="text-gray-600 mb-8 text-lg">No se pudieron cargar las preguntas. Problema con los datos internos.</p>
                    `;
                }
                reject(new Error("Datos de preguntas combinados no encontrados o en formato incorrecto."));
            }
        });
    }

    // --- EL RESTO DE LAS FUNCIONES DEL JUEGO (selectNewQuestions, startGame, displayQuestion, etc.) ---
    // --- PERMANECEN IGUAL QUE EN LA ÚLTIMA VERSIÓN QUE FUNCIONABA ---
    // --- Solo asegúrate de que hacen referencia a gameState.questions para obtener el banco total ---

    /**
     * Selecciona un nuevo conjunto de preguntas.
     */
    function selectNewQuestions() {
        let availableQuestions = gameState.questions.filter(
            q => !gameState.lastGameQuestionIds.includes(q.id)
        );

        if (availableQuestions.length < TOTAL_QUESTIONS_PER_GAME) {
            if (gameState.questions.length >= TOTAL_QUESTIONS_PER_GAME) {
                console.warn(`No hay suficientes preguntas únicas no vistas recientemente (${availableQuestions.length}). Permitiendo repetición del banco total (${gameState.questions.length}).`);
                availableQuestions = gameState.questions;
            } else {
                console.error(`El banco total de preguntas (${gameState.questions.length}) es menor que TOTAL_QUESTIONS_PER_GAME (${TOTAL_QUESTIONS_PER_GAME}).`);
                return []; 
            }
        }

        const shuffled = [...availableQuestions].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, TOTAL_QUESTIONS_PER_GAME);
    }

    /**
     * Inicia una nueva partida.
     */
    function startGame() {
        console.log("Intentando iniciar juego...");
        gameState.currentQuestionIndex = 0;
        gameState.scoreCorrect = 0;
        gameState.scoreIncorrect = 0;
        
        const selectedQuestions = selectNewQuestions();

        if (!selectedQuestions || selectedQuestions.length < TOTAL_QUESTIONS_PER_GAME) {
            console.error("No se pudieron seleccionar suficientes preguntas para la partida. Seleccionadas:", selectedQuestions.length);
            startScreen.classList.remove('hidden');
            gameScreen.classList.add('hidden');
            endScreen.classList.add('hidden');
            startScreen.innerHTML = `
                <h1 class="text-3xl sm:text-4xl font-bold text-indigo-700 mb-4">Preguntas Insuficientes</h1>
                <p class="text-gray-600 mb-8 text-lg">No hay suficientes preguntas en el banco (${gameState.questions.length}) para iniciar una partida de ${TOTAL_QUESTIONS_PER_GAME}. Por favor, añade más preguntas o reduce TOTAL_QUESTIONS_PER_GAME.</p>
                <button id="reload-page-btn" class="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg">Recargar</button>
            `;
            const reloadBtn = document.getElementById('reload-page-btn');
            if (reloadBtn) {
                reloadBtn.addEventListener('click', () => window.location.reload());
            }
            return; 
        }
        
        gameState.currentQuestionSet = selectedQuestions;
        gameState.lastGameQuestionIds = gameState.currentQuestionSet.map(q => q.id); 
        gameState.gamePhase = 'playing';
        
        startScreen.classList.add('hidden');
        endScreen.classList.add('hidden');
        gameScreen.classList.remove('hidden');
        gameContainer.classList.remove('max-w-md'); 
        gameContainer.classList.add('max-w-2xl');

        displayQuestion();
        updateScoreDisplay();
    }

    /**
     * Muestra la pregunta actual.
     */
    function displayQuestion() {
        if (gameState.currentQuestionIndex >= gameState.currentQuestionSet.length) {
            endGame();
            return;
        }

        clearTimeout(gameState.timerId); 

        const question = gameState.currentQuestionSet[gameState.currentQuestionIndex];
        questionTextEl.textContent = question.questionText;
        questionCounterEl.textContent = `Pregunta ${gameState.currentQuestionIndex + 1} / ${TOTAL_QUESTIONS_PER_GAME}`;
        
        optionsContainerEl.innerHTML = ''; 
        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.textContent = option;
            button.classList.add(
                'option-button', 'w-full', 'p-3', 'sm:p-4', 'border-2', 'border-indigo-300', 'rounded-lg', 
                'text-gray-700', 'hover:bg-indigo-100', 'hover:border-indigo-500', 'transition-colors', 'duration-200',
                'focus:outline-none', 'focus:ring-2', 'focus:ring-indigo-400', 'focus:ring-opacity-75'
            );
            button.dataset.index = index.toString(); 
            button.addEventListener('click', () => handleAnswer(index));
            optionsContainerEl.appendChild(button);
        });

        feedbackMessageEl.classList.add('hidden');
        explanationTextEl.classList.add('hidden');
        explanationTextEl.textContent = '';
        nextQuestionBtn.classList.add('hidden');
        gameState.gamePhase = 'playing'; 
        gameState.selectedAnswerIndex = null; 

        optionsContainerEl.querySelectorAll('button').forEach(btn => {
            btn.disabled = false;
            btn.classList.remove('correct-answer-highlight', 'selected-incorrect-answer', 'opacity-50', 'cursor-not-allowed');
        });
    }

    /**
     * Maneja la respuesta del usuario.
     */
    function handleAnswer(selectedIndex) {
        if (gameState.gamePhase !== 'playing') return; 

        gameState.selectedAnswerIndex = selectedIndex;
        gameState.gamePhase = 'feedback'; 

        const question = gameState.currentQuestionSet[gameState.currentQuestionIndex];
        const correct = selectedIndex === question.correctAnswerIndex;

        const optionButtons = optionsContainerEl.querySelectorAll('button');
        optionButtons.forEach(btn => {
            btn.disabled = true;
            btn.classList.add('opacity-50', 'cursor-not-allowed');
        });
        
        const selectedButton = optionsContainerEl.querySelector(`button[data-index="${selectedIndex}"]`);

        feedbackMessageEl.classList.remove('hidden', 'bg-green-100', 'text-green-700', 'bg-red-100', 'text-red-700');

        if (correct) {
            gameState.scoreCorrect++;
            feedbackMessageEl.textContent = "¡Respuesta Correcta!";
            feedbackMessageEl.classList.add('bg-green-100', 'text-green-700');
            selectedButton?.classList.add('correct-answer-highlight');
            gameState.timerId = setTimeout(() => {
                nextQuestion();
            }, 1500); 
        } else {
            gameState.scoreIncorrect++;
            feedbackMessageEl.textContent = "Respuesta Incorrecta.";
            feedbackMessageEl.classList.add('bg-red-100', 'text-red-700');
            
            explanationTextEl.textContent = `Explicación: ${question.explanation}`;
            explanationTextEl.classList.remove('hidden');

            selectedButton?.classList.add('selected-incorrect-answer');
            const correctButton = optionsContainerEl.querySelector(`button[data-index="${question.correctAnswerIndex}"]`);
            correctButton?.classList.add('correct-answer-highlight');
            
            nextQuestionBtn.classList.remove('hidden'); 
        }
        updateScoreDisplay(); 
    }

    /**
     * Avanza a la siguiente pregunta.
     */
    function nextQuestion() {
        clearTimeout(gameState.timerId); 
        gameState.currentQuestionIndex++;
        if (gameState.currentQuestionIndex < TOTAL_QUESTIONS_PER_GAME) {
            displayQuestion();
        } else {
            endGame();
        }
    }

    /**
     * Actualiza la visualización de la puntuación.
     */
    function updateScoreDisplay() {
        correctScoreEl.textContent = gameState.scoreCorrect.toString();
        incorrectScoreEl.textContent = gameState.scoreIncorrect.toString();
    }

    /**
     * Finaliza la partida.
     */
    function endGame() {
        gameState.gamePhase = 'end';
        gameScreen.classList.add('hidden'); 
        endScreen.classList.remove('hidden'); 
        gameContainer.classList.remove('max-w-2xl'); 
        gameContainer.classList.add('max-w-md');

        finalCorrectEl.textContent = gameState.scoreCorrect.toString();
        finalIncorrectEl.textContent = gameState.scoreIncorrect.toString();
    }

    // Event Listeners
    if (nextQuestionBtn) {
        nextQuestionBtn.addEventListener('click', nextQuestion);
    }
    if (playAgainBtn) {
        playAgainBtn.addEventListener('click', () => {
            startGame();
        });
    }

    // Carga inicial y configuración
    document.addEventListener('DOMContentLoaded', async () => {
        console.log("DOM completamente cargado y procesado.");
        try {
            await loadQuestions(); 
            
            if (!gameState.questions || gameState.questions.length === 0) {
                console.error("No se cargaron preguntas o el array está vacío, el botón de inicio no se activará.");
                if (startScreen && !gameScreen.classList.contains('hidden')) {
                     startScreen.innerHTML = `
                        <h1 class="text-3xl sm:text-4xl font-bold text-indigo-700 mb-4">Error de Carga Inicial</h1>
                        <p class="text-gray-600 mb-8 text-lg">No se pudieron cargar las preguntas. La base de datos interna parece estar vacía o con errores.</p>
                    `;
                }
                return; 
            }
            
            if (startGameBtn) {
                console.log("Añadiendo event listener al botón de inicio.");
                startGameBtn.addEventListener('click', startGame);
            } else {
                console.error("El botón de inicio (startGameBtn) no se encontró en el DOM.");
            }

        } catch (error) {
            console.error("Error crítico durante la carga inicial:", error);
            if (startScreen && !gameScreen.classList.contains('hidden')) {
                 startScreen.innerHTML = `
                    <h1 class="text-3xl sm:text-4xl font-bold text-indigo-700 mb-4">Error Crítico</h1>
                    <p class="text-gray-600 mb-8 text-lg">Ocurrió un error al cargar los datos necesarios para el juego.</p>
                `;
            }
        }
    });
    
