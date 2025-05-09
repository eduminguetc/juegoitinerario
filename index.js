// index.js

// ... (importaciones y constantes iniciales como estaban) ...
// import { unit1Questions } from './unit1_questions.js';
// ... etc.

// const TOTAL_QUESTIONS_PER_GAME = 20;
// const NUM_UNITS = 9;
// ... etc.

// const allQuestions = [ ... ];
// const gameState = { ... };
// const gameContainer = ... ;
// ... etc. ...

// function loadQuestions() { ... } // Sin cambios respecto a la última versión

/**
 * Selecciona un nuevo conjunto de preguntas para una partida,
 * garantizando al menos una pregunta de cada unidad y aleatoriedad.
 * Intenta evitar repetir preguntas de la partida inmediatamente anterior.
 * @returns {Array<Object>} Un array de objetos de pregunta, o un array vacío si no se cumplen las condiciones.
 */
function selectNewQuestions() {
    console.log("Seleccionando nuevas preguntas...");
    const selectedQuestionsForGame = [];
    const tempLastGameQuestionIds = new Set(gameState.lastGameQuestionIds);

    // 1. Agrupar todas las preguntas por unidad
    const questionsByUnit = {};
    for (let i = 1; i <= NUM_UNITS; i++) {
        // MODIFICACIÓN AQUÍ: Convertir q.unit a número antes de comparar
        questionsByUnit[i] = gameState.questions.filter(q => Number(q.unit) === i); 
        if (questionsByUnit[i].length === 0) {
            console.error(`Error: La unidad ${i} no tiene preguntas definidas en el banco total o la propiedad 'unit' no coincide (se esperaba ${i}).`);
            // Para depurar, puedes mostrar algunas preguntas que SÍ se cargaron:
            // if (i === 1 && gameState.questions.length > 0) {
            //     console.log("Primeras preguntas en gameState.questions:", gameState.questions.slice(0, 5).map(q => ({id: q.id, unit: q.unit}) ));
            // }
            return []; 
        }
    }

    // 2. Seleccionar preguntas garantizadas (una por unidad)
    const guaranteedPicksIds = new Set(); 

    for (let unitNum = 1; unitNum <= NUM_UNITS; unitNum++) {
        let unitQuestionsPool = questionsByUnit[unitNum].filter(q => !tempLastGameQuestionIds.has(q.id));

        if (unitQuestionsPool.length === 0) { 
            console.warn(`Unidad ${unitNum}: Todas las preguntas se jugaron recientemente o no hay preguntas 'nuevas'. Permitiendo repetición para esta unidad.`);
            unitQuestionsPool = questionsByUnit[unitNum]; 
        }
        
        if (unitQuestionsPool.length === 0) { 
            console.error(`Error crítico: La unidad ${unitNum} se quedó sin preguntas incluso después del fallback.`);
            return [];
        }
        
        const randomIndex = Math.floor(Math.random() * unitQuestionsPool.length);
        const pickedQuestion = unitQuestionsPool[randomIndex];
        
        // Verificar que pickedQuestion no sea undefined
        if (!pickedQuestion) {
            console.error(`Error: No se pudo seleccionar una pregunta para la unidad ${unitNum}. Pool de la unidad:`, unitQuestionsPool);
            return [];
        }

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

// --- EL RESTO DE LAS FUNCIONES DEL JUEGO (startGame, displayQuestion, etc.) ---
// --- PERMANECEN IGUAL QUE EN LA ÚLTIMA VERSIÓN ---
// ... (pega aquí el resto de tus funciones startGame, displayQuestion, handleAnswer, etc. sin cambios)

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
        console.error("No se pudieron seleccionar suficientes preguntas para la partida. Seleccionadas:", selectedQuestions.length, "Total en gameState:", gameState.questions.length);
        startScreen.classList.remove('hidden');
        gameScreen.classList.add('hidden');
        endScreen.classList.add('hidden');
        let errorMessage = `No hay suficientes preguntas en el banco (${gameState.questions.length}) para iniciar una partida de ${TOTAL_QUESTIONS_PER_GAME} garantizando todas las unidades.`;
        
        const uniqueUnitsInBank = new Set(gameState.questions.map(q => Number(q.unit))).size;
        if (gameState.questions.length < NUM_UNITS || uniqueUnitsInBank < NUM_UNITS) {
            errorMessage = `Se necesitan preguntas de al menos ${NUM_UNITS} unidades diferentes y solo hay de ${uniqueUnitsInBank} unidades representadas en el banco.`;
        } else if (gameState.questions.length < TOTAL_QUESTIONS_PER_GAME) {
             errorMessage = `Se necesitan ${TOTAL_QUESTIONS_PER_GAME} preguntas y solo hay ${gameState.questions.length} en total.`;
        }


        startScreen.innerHTML = `
            <h1 class="text-3xl sm:text-4xl font-bold text-indigo-700 mb-4">Preguntas Insuficientes</h1>
            <p class="text-gray-600 mb-8 text-lg">${errorMessage} Por favor, añade más preguntas o revisa los datos.</p>
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
        
        const uniqueUnitsInBank = new Set(gameState.questions.map(q => Number(q.unit))).size;
        if (!gameState.questions || gameState.questions.length < NUM_UNITS || uniqueUnitsInBank < NUM_UNITS) { 
            console.error(`No se cargaron suficientes preguntas o de suficientes unidades (${uniqueUnitsInBank} unidades presentes de ${NUM_UNITS} requeridas), el botón de inicio no se activará o el juego podría fallar.`);
            if (startScreen && !gameScreen.classList.contains('hidden')) {
                 startScreen.innerHTML = `
                    <h1 class="text-3xl sm:text-4xl font-bold text-indigo-700 mb-4">Error de Carga Inicial</h1>
                    <p class="text-gray-600 mb-8 text-lg">No hay suficientes preguntas o unidades representadas en el banco de preguntas. Se necesitan al menos ${NUM_UNITS} preguntas de unidades diferentes (actualmente hay de ${uniqueUnitsInBank} unidades).</p>
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
