// index.js

// Importar las preguntas de cada unidad (asumiendo que están en la raíz junto a index.js)
import { unit1Questions } from './unit1_questions.js';
import { unit2Questions } from './unit2_questions.js';
import { unit3Questions } from './unit3_questions.js';
import { unit4Questions } from './unit4_questions.js';
import { unit5Questions } from './unit5_questions.js';
import { unit6Questions } from './unit6_questions.js';
import { unit7Questions } from './unit7_questions.js';
import { unit8Questions } from './unit8_questions.js';
import { unit9Questions } from './unit9_questions.js';

// Constantes del juego
const TOTAL_QUESTIONS_PER_GAME = 20;
const NUM_UNITS = 9; // Asumiendo que siempre hay 9 unidades
const QUESTIONS_PER_UNIT_GUARANTEED = 1;
const NUM_GUARANTEED_QUESTIONS = NUM_UNITS * QUESTIONS_PER_UNIT_GUARANTEED;
const NUM_RANDOM_FILL_QUESTIONS = TOTAL_QUESTIONS_PER_GAME - NUM_GUARANTEED_QUESTIONS;

// Combinar todas las preguntas en una sola estructura
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
    lastGameQuestionIds: [], // IDs de las preguntas usadas en la última partida
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
            gameState.questions = allQuestions;
            console.log("Preguntas cargadas desde módulos:", gameState.questions.length);
            if (gameState.questions.length === 0) {
                console.warn("Advertencia: El array combinado de preguntas está vacío.");
            }
            resolve();
        } else {
            console.error("Error: El array combinado 'allQuestions' no es un array o no está definido.");
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

/**
 * Selecciona un nuevo conjunto de preguntas para una partida,
 * garantizando al menos una pregunta de cada unidad y aleatoriedad.
 * Intenta evitar repetir preguntas de la partida inmediatamente anterior.
 * @returns {Array<Object>} Un array de objetos de pregunta, o un array vacío si no se cumplen las condiciones.
 */
function selectNewQuestions() {
    console.log("Seleccionando nuevas preguntas...");
    const selectedQuestionsForGame = [];
    const tempLastGameQuestionIds = new Set(gameState.lastGameQuestionIds); // Usar Set para búsqueda eficiente

    // 1. Agrupar todas las preguntas por unidad
    const questionsByUnit = {};
    for (let i = 1; i <= NUM_UNITS; i++) {
        questionsByUnit[i] = gameState.questions.filter(q => q.unit === i);
        if (questionsByUnit[i].length === 0) {
            console.error(`Error: La unidad ${i} no tiene preguntas definidas en el banco total.`);
            return []; // Imposible garantizar una de cada unidad
        }
    }

    // 2. Seleccionar preguntas garantizadas (una por unidad)
    const guaranteedPicksIds = new Set(); // Para no repetir IDs en los garantizados

    for (let unitNum = 1; unitNum <= NUM_UNITS; unitNum++) {
        let unitQuestionsPool = questionsByUnit[unitNum].filter(q => !tempLastGameQuestionIds.has(q.id));

        if (unitQuestionsPool.length === 0) { // Si todas las de esta unidad se jugaron recientemente
            console.warn(`Unidad ${unitNum}: Todas las preguntas se jugaron recientemente. Permitiendo repetición para esta unidad.`);
            unitQuestionsPool = questionsByUnit[unitNum]; // Usar todas las de la unidad
        }
        
        if (unitQuestionsPool.length === 0) { 
            console.error(`Error crítico: La unidad ${unitNum} se quedó sin preguntas incluso después del fallback.`);
            return [];
        }
        
        const randomIndex = Math.floor(Math.random() * unitQuestionsPool.length);
        const pickedQuestion = unitQuestionsPool[randomIndex];
        
        selectedQuestionsForGame.push(pickedQuestion);
        guaranteedPicksIds.add(pickedQuestion.id);
    }

    // 3. Seleccionar preguntas restantes aleatoriamente
    if (NUM_RANDOM_FILL_QUESTIONS > 0) {
        let remainingPool = gameState.questions.filter(q => 
            !guaranteedPicksIds.has(q.id) && !tempLastGameQuestionIds.has(q.id)
        );

        if (remainingPool.length < NUM_RANDOM_FILL_QUESTIONS) {
            console.warn("No hay suficientes preguntas 'nuevas' para el relleno aleatorio. Incluyendo preguntas de la última partida si es necesario.");
            remainingPool = gameState.questions.filter(q => !guaranteedPicksIds.has(q.id));
        }
        
        if (remainingPool.length < NUM_RANDOM_FILL_QUESTIONS) {
            console.warn(`Advertencia: No hay suficientes preguntas distintas para completar las ${TOTAL_QUESTIONS_PER_GAME}. El juego tendrá ${selectedQuestionsForGame.length + remainingPool.length} preguntas.`);
             const shuffledRemaining = [...remainingPool].sort(() => 0.5 - Math.random());
             selectedQuestionsForGame.push(...shuffledRemaining);
        } else {
            const shuffledRemaining = [...remainingPool].sort(() => 0.5 - Math.random());
            selectedQuestionsForGame.push(...shuffledRemaining.slice(0, NUM_RANDOM_FILL_QUESTIONS));
        }
    }
    
    // 4. Mezcla final del conjunto de preguntas seleccionadas
    const finalShuffledSet = [...selectedQuestionsForGame].sort(() => 0.5 - Math.random());
    
    console.log("Preguntas seleccionadas para la partida:", finalShuffledSet.length);
    return finalShuffledSet.slice(0, TOTAL_QUESTIONS_PER_GAME); 
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

        if (!selectedQuestions || selectedQuestions.length < NUM_GUARANTEED_QUESTIONS || (selectedQuestions.length < TOTAL_QUESTIONS_PER_GAME && gameState.questions.length >= TOTAL_QUESTIONS_PER_GAME) ) {
            console.error("No se pudieron seleccionar suficientes preguntas para la partida. Seleccionadas:", selectedQuestions.length);
            startScreen.classList.remove('hidden');
            gameScreen.classList.add('hidden');
            endScreen.classList.add('hidden');
            let errorMessage = `No hay suficientes preguntas en el banco (${gameState.questions.length}) para iniciar una partida de ${TOTAL_QUESTIONS_PER_GAME} garantizando todas las unidades.`;
            if (gameState.questions.length < NUM_UNITS) {
                errorMessage = `Se necesitan preguntas de al menos ${NUM_UNITS} unidades diferentes y solo hay de ${new Set(gameState.questions.map(q=>q.unit)).size}.`;
            } else if (gameState.questions.length < TOTAL_QUESTIONS_PER_GAME) {
                 errorMessage = `Se necesitan ${TOTAL_QUESTIONS_PER_GAME} preguntas y solo hay ${gameState.questions.length} en total.`;
            }

            startScreen.innerHTML = `
                <h1 class="text-3xl sm:text-4xl font-bold text-indigo-700 mb-4">Preguntas Insuficientes</h1>
                <p class="text-gray-600 mb-8 text-lg">${errorMessage} Por favor, añade más preguntas.</p>
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
        if (!gameState.currentQuestionSet || gameState.currentQuestionSet.length === 0 || gameState.currentQuestionIndex >= gameState.currentQuestionSet.length) {
            endGame();
            return;
        }

        clearTimeout(gameState.timerId); 

        const question = gameState.currentQuestionSet[gameState.currentQuestionIndex];
        if (!question || !question.options) {
            console.error("Error: Pregunta o sus opciones no definidas en el índice actual:", gameState.currentQuestionIndex, question);
            nextQuestion(); 
            return;
        }

        questionTextEl.textContent = question.questionText;
        questionCounterEl.textContent = `Pregunta ${gameState.currentQuestionIndex + 1} / ${gameState.currentQuestionSet.length}`; 
        
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
        if (gameState.currentQuestionSet && gameState.currentQuestionIndex < gameState.currentQuestionSet.length) {
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
            
            if (!gameState.questions || gameState.questions.length < NUM_UNITS) { 
                console.error(`No se cargaron suficientes preguntas o de suficientes unidades (${new Set(gameState.questions.map(q=>q.unit)).size} unidades presentes), el botón de inicio no se activará o el juego podría fallar.`);
                if (startScreen && !gameScreen.classList.contains('hidden')) {
                     startScreen.innerHTML = `
                        <h1 class="text-3xl sm:text-4xl font-bold text-indigo-700 mb-4">Error de Carga Inicial</h1>
                        <p class="text-gray-600 mb-8 text-lg">No hay suficientes preguntas o unidades representadas en el banco de preguntas. Se necesitan al menos ${NUM_UNITS} preguntas de unidades diferentes.</p>
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
