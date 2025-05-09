// index.js

// Constante para el número total de preguntas por partida
const TOTAL_QUESTIONS_PER_GAME = 20;

// BASE DE PREGUNTAS INTEGRADA
// Anteriormente esto estaba en metadata.json
const allQuestionsData = {
    "questions": [
        {
            "id": 1001,
            "unit": 1,
            "questionText": "¿Cuál es la vía principal de incorporación al mercado laboral que implica trabajar para un tercero a cambio de un salario, de forma voluntaria, personal y directa?",
            "options": [
                "Trabajo por cuenta propia",
                "Trabajo por cuenta ajena",
                "Funcionario interino",
                "Autónomo económicamente dependiente (TRADE)"
            ],
            "correctAnswerIndex": 1,
            "explanation": "El trabajo por cuenta ajena se define como una relación laboral voluntaria, personal y directa, donde se trabaja bajo la organización de un tercero a cambio de un salario."
        },
        {
            "id": 1002,
            "unit": 1,
            "questionText": "Un autónomo cuya facturación depende en un 75% o más de un solo cliente se denomina:",
            "options": [
                "Autónomo colaborador",
                "Profesional autónomo colegiado",
                "Autónomo económicamente dependiente (TRADE)",
                "Autónomo societario"
            ],
            "correctAnswerIndex": 2,
            "explanation": "El Autónomo Económicamente Dependiente (TRADE) es aquel cuya facturación en un 75% o más depende de un solo cliente."
        },
        {
            "id": 1003,
            "unit": 1,
            "questionText": "¿Qué programa de la UE facilita la comunicación de habilidades y titulaciones de forma estandarizada mediante cinco documentos?",
            "options": [
                "Erasmus+",
                "Red EURES",
                "Portal Europeo de la Juventud",
                "Europass"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Europass es un conjunto de cinco documentos que permiten comunicar habilidades, titulaciones y capacidades de forma estandarizada en toda la UE."
        },
        {
            "id": 1004,
            "unit": 1,
            "questionText": "La capacidad de anticiparse a los problemas, proponer soluciones y tomar la iniciativa se conoce como:",
            "options": [
                "Flexibilidad",
                "Proactividad",
                "Empatía",
                "Liderazgo"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La proactividad es la actitud de anticiparse a los problemas, proponer soluciones y tomar la iniciativa."
        },
        {
            "id": 1005,
            "unit": 1,
            "questionText": "El espacio entre lo que un individuo puede hacer por sí solo y lo que puede lograr con guía y colaboración de otros se llama:",
            "options": [
                "Zona de Confort",
                "Zona de Desarrollo Próximo (ZDP)",
                "Umbral de Competencia",
                "Nivel de Aptitud"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La Zona de Desarrollo Próximo (ZDP) es el espacio entre lo que un individuo puede hacer por sí solo y lo que puede lograr con la guía y colaboración de otros."
        },
        {
            "id": 2001,
            "unit": 2,
            "questionText": "Según la OMS, la salud es solo la ausencia de afecciones o enfermedades.",
            "options": [
                "Verdadero",
                "Falso"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Falso. Según la OMS, la salud es un estado de completo bienestar físico, mental y social, y no solamente la ausencia de afecciones o enfermedades."
        },
        {
            "id": 2002,
            "unit": 2,
            "questionText": "¿Qué se considera legalmente como 'Accidente de Trabajo' (AT)?",
            "options": [
                "Cualquier lesión sufrida por el trabajador",
                "Solo las lesiones graves ocurridas en el centro de trabajo",
                "Toda lesión corporal que el trabajador sufra con ocasión o por consecuencia del trabajo por cuenta ajena",
                "Enfermedades comunes agravadas por el trabajo"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Según el TRLGSS, el accidente de trabajo es toda aquella lesión corporal que el trabajador sufra con ocasión o por consecuencia del trabajo que ejecute por cuenta ajena."
        },
        {
            "id": 2003,
            "unit": 2,
            "questionText": "El síndrome de 'estar quemado', caracterizado por agotamiento emocional y despersonalización, se conoce como:",
            "options": [
                "Estrés agudo",
                "Fatiga crónica",
                "Mobbing",
                "Burnout"
            ],
            "correctAnswerIndex": 3,
            "explanation": "El Burnout o síndrome de estar quemado es una respuesta al estrés crónico laboral que incluye agotamiento emocional, despersonalización y baja realización personal."
        },
        {
            "id": 2004,
            "unit": 2,
            "questionText": "El ruido, las vibraciones y las radiaciones son ejemplos de factores de riesgo:",
            "options": [
                "Químicos",
                "Biológicos",
                "Ergonómicos",
                "Físicos"
            ],
            "correctAnswerIndex": 3,
            "explanation": "El ruido, las vibraciones, las radiaciones, la temperatura y la iluminación son agentes físicos que pueden constituir factores de riesgo medioambientales."
        },
        {
            "id": 2005,
            "unit": 2,
            "questionText": "La técnica preventiva que busca adaptar las condiciones de trabajo a las características del trabajador para mayor seguridad y confort es la:",
            "options": [
                "Higiene Industrial",
                "Medicina Laboral",
                "Ergonomía",
                "Seguridad en el Trabajo"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La ergonomía es una técnica dirigida a la adaptación de las condiciones de trabajo para que haya mayor seguridad, confort y eficiencia en los puestos de trabajo."
        },
        {
            "id": 3001,
            "unit": 3,
            "questionText": "¿Cuál es la ley fundamental en España que establece las bases normativas sobre seguridad y salud en el trabajo?",
            "options": [
                "Ley General de la Seguridad Social (TRLGSS)",
                "Estatuto de los Trabajadores (ET)",
                "Ley de Prevención de Riesgos Laborales (LPRL)",
                "Reglamento de los Servicios de Prevención"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La Ley 31/1995, de Prevención de Riesgos Laborales (LPRL), es la que sentó las bases normativas en España sobre seguridad y salud en el trabajo."
        },
        {
            "id": 3002,
            "unit": 3,
            "questionText": "El empresario tiene el deber de integrar la actividad preventiva en toda la actividad empresarial y asumir el coste de las medidas de seguridad y salud.",
            "options": [
                "Verdadero",
                "Falso"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Verdadero. Entre los deberes generales de la empresa está garantizar la seguridad y salud, integrar la actividad preventiva y asumir el coste de las medidas."
        },
        {
            "id": 3003,
            "unit": 3,
            "questionText": "¿Cómo se denomina el órgano paritario de participación en PRL obligatorio en empresas con 50 o más trabajadores?",
            "options": [
                "Delegados de Prevención",
                "Servicio de Prevención Propio",
                "Comité de Seguridad y Salud",
                "Comité de Empresa"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Se constituirá un Comité de Seguridad y Salud en todas las empresas o centros de trabajo que cuenten con 50 o más trabajadores, formado paritariamente por delegados de prevención y representantes del empresario."
        },
        {
            "id": 3004,
            "unit": 3,
            "questionText": "Los Equipos de Protección Individual (EPIs) tienen prioridad sobre las medidas de protección colectiva.",
            "options": [
                "Verdadero",
                "Falso"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Falso. Las medidas de protección colectiva tienen prioridad sobre las individuales (EPIs), que solo se usarán como complemento o si las colectivas son ineficaces."
        },
        {
            "id": 3005,
            "unit": 3,
            "questionText": "En la secuencia de primeros auxilios PAS, ¿qué significa la 'A'?",
            "options": [
                "Actuar",
                "Apartar",
                "Avisar",
                "Analizar"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La conducta PAS corresponde a Proteger, Avisar (alertar a los servicios de emergencia 112) y Socorrer."
        },
        {
            "id": 4001,
            "unit": 4,
            "questionText": "El principio del Derecho Laboral que establece que, en caso de duda en la interpretación de una norma, se aplicará la más favorable al trabajador se llama:",
            "options": [
                "Principio de Norma Mínima",
                "Principio In Dubio Pro Operario",
                "Principio de Condición Más Beneficiosa",
                "Principio de Irrenunciabilidad de Derechos"
            ],
            "correctAnswerIndex": 1,
            "explanation": "El principio 'In Dubio Pro Operario' significa que, cuando haya confusión en la interpretación de una norma, se aplicará aquella que favorezca al trabajador."
        },
        {
            "id": 4002,
            "unit": 4,
            "questionText": "¿Cuál de las siguientes NO es una característica de la relación laboral ordinaria según el Estatuto de los Trabajadores?",
            "options": [
                "Voluntaria",
                "Por cuenta propia",
                "Remunerada",
                "Dependiente"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Las características de la relación laboral ordinaria son: voluntaria, por cuenta AJENA, remunerada, personalista y dependiente."
        },
        {
            "id": 4003,
            "unit": 4,
            "questionText": "El organismo encargado de vigilar el cumplimiento de la legislación laboral y proponer sanciones es:",
            "options": [
                "El Juzgado de lo Social",
                "El Sindicato",
                "La Inspección de Trabajo y Seguridad Social (ITSS)",
                "El FOGASA"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La Inspección de Trabajo y Seguridad Social (ITSS) tiene como funciones principales la vigilancia del cumplimiento de las normas legales y la propuesta de sanciones en caso de infracción."
        },
        {
            "id": 4004,
            "unit": 4,
            "questionText": "El acuerdo suscrito entre representantes de los trabajadores y empresarios para fijar condiciones de trabajo y productividad, con fuerza de ley, es el:",
            "options": [
                "Contrato de trabajo",
                "Reglamento interno de la empresa",
                "Convenio Colectivo",
                "Laudo arbitral"
            ],
            "correctAnswerIndex": 2,
            "explanation": "El Convenio Colectivo es un acuerdo suscrito por los representantes de los trabajadores y los empresarios para fijar las condiciones de trabajo y productividad, y tiene fuerza de ley para los afectados."
        },
        {
            "id": 4005,
            "unit": 4,
            "questionText": "La cesación de la prestación de trabajo llevada a cabo de forma colectiva y concertada por los trabajadores se denomina:",
            "options": [
                "Despido colectivo",
                "Cierre patronal",
                "Huelga",
                "Suspensión de contrato"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La huelga es la cesación de la prestación de trabajo llevada a cabo de forma colectiva y concertada por los trabajadores."
        },
        {
            "id": 5001,
            "unit": 5,
            "questionText": "¿Cuál es la edad mínima general para firmar un contrato de trabajo en España, sin necesidad de autorización?",
            "options": [
                "16 años",
                "18 años",
                "21 años",
                "No hay edad mínima"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Para firmar un contrato de trabajo, es necesario ser persona física y ser mayor de 18 años. Con 16 o 17 se puede con autorización o emancipado."
        },
        {
            "id": 5002,
            "unit": 5,
            "questionText": "Un contrato de trabajo se presume concertado por tiempo indefinido, salvo prueba en contrario.",
            "options": [
                "Verdadero",
                "Falso"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Verdadero. Con la reforma laboral, el contrato de trabajo se presume concertado por tiempo indefinido y sólo admite la duración determinada para algunas situaciones justificadas."
        },
        {
            "id": 5003,
            "unit": 5,
            "questionText": "¿Cuál es el contrato temporal utilizado para sustituir a trabajadores con derecho a reserva de puesto o cubrir temporalmente un puesto durante un proceso de selección?",
            "options": [
                "Contrato por circunstancias de la producción",
                "Contrato fijo discontinuo",
                "Contrato de relevo",
                "Contrato de sustitución"
            ],
            "correctAnswerIndex": 3,
            "explanation": "El contrato de sustitución tiene por objeto sustituir a trabajadores con derecho a reserva de puesto o cubrir temporalmente un puesto durante el proceso de selección o promoción."
        },
        {
            "id": 5004,
            "unit": 5,
            "questionText": "La modificación del contrato que implica un cambio de funciones a un grupo profesional superior, con derecho a la retribución correspondiente, se denomina:",
            "options": [
                "Movilidad funcional horizontal",
                "Movilidad funcional descendente",
                "Movilidad funcional ascendente",
                "Modificación sustancial de condiciones"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La movilidad funcional ascendente ocurre cuando se asignan funciones de un grupo profesional superior, teniendo el trabajador derecho a la retribución de dicha categoría."
        },
        {
            "id": 5005,
            "unit": 5,
            "questionText": "Si un trabajador no está de acuerdo con su despido, el primer paso obligatorio antes de la vía judicial es interponer una 'papeleta de conciliación' ante el:",
            "options": [
                "Juzgado de lo Social",
                "Inspección de Trabajo",
                "FOGASA",
                "Servicio de Mediación, Arbitraje y Conciliación (SMAC)"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Si el trabajador no está de acuerdo con su despido, debe intentar llegar a un acuerdo extrajudicial con el empresario mediante el Servicio de Mediación, Arbitraje y Conciliación (SMAC), interponiendo una 'papeleta de conciliación'."
        },
        {
            "id": 6001,
            "unit": 6,
            "questionText": "La duración máxima de la jornada laboral ordinaria en España es de:",
            "options": [
                "35 horas semanales de promedio anual",
                "40 horas semanales de promedio anual",
                "45 horas semanales de promedio anual",
                "No hay límite máximo"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La duración máxima de la jornada será de 40 horas semanales de promedio en cómputo anual."
        },
        {
            "id": 6002,
            "unit": 6,
            "questionText": "El trabajo realizado entre las 22:00 y las 6:00 horas se considera:",
            "options": [
                "Trabajo a turnos",
                "Hora extraordinaria",
                "Trabajo nocturno",
                "Jornada partida"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Para considerarlo trabajo nocturno, debe darse al menos durante 3 horas o 1/3 de la jornada en horario nocturno (entre las 22:00 y las 6:00)."
        },
        {
            "id": 6003,
            "unit": 6,
            "questionText": "El periodo mínimo de vacaciones anuales retribuidas es de:",
            "options": [
                "20 días naturales",
                "25 días laborables",
                "30 días naturales",
                "30 días laborables"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La duración de las vacaciones estará establecida en el convenio colectivo o en el contrato, aunque no podrá ser inferior a 30 días naturales al año."
        },
        {
            "id": 6004,
            "unit": 6,
            "questionText": "El periodo de prueba en un contrato de trabajo es obligatorio.",
            "options": [
                "Verdadero",
                "Falso"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Falso. Establecer o no período de prueba es optativo y debe pactarse por escrito en el contrato."
        },
        {
            "id": 6005,
            "unit": 6,
            "questionText": "La capacidad de una persona para ajustarse y responder eficazmente a cambios y nuevas circunstancias en el entorno laboral se denomina:",
            "options": [
                "Productividad",
                "Proactividad",
                "Adaptabilidad y flexibilidad",
                "Asertividad"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Las habilidades de adaptación y flexibilidad son competencias clave que permiten a los individuos ajustarse y responder eficazmente a cambios, desafíos y nuevas circunstancias."
        },
        {
            "id": 7001,
            "unit": 7,
            "questionText": "El Salario Mínimo Interprofesional (SMI) es la cuantía mínima que debe percibir un trabajador por cuenta ajena a tiempo completo.",
            "options": [
                "Verdadero",
                "Falso"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Verdadero. El SMI se define como la cuantía mínima que se debe percibir por la realización de un trabajo por cuenta ajena a tiempo completo."
        },
        {
            "id": 7002,
            "unit": 7,
            "questionText": "Las cantidades que se restan del total devengado en una nómina para obtener el salario neto se llaman:",
            "options": [
                "Percepciones salariales",
                "Bases de cotización",
                "Devengos",
                "Deducciones"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Las deducciones son los importes que se restarán del total devengado, convirtiendo la remuneración bruta en el salario neto o líquido (ej. cotizaciones SS, IRPF)."
        },
        {
            "id": 7003,
            "unit": 7,
            "questionText": "La Incapacidad Temporal (IT) por enfermedad común requiere un periodo mínimo de cotización de:",
            "options": [
                "No requiere cotización previa",
                "90 días en los últimos 7 años",
                "180 días en los últimos 5 años",
                "360 días en los últimos 6 años"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Para ser beneficiario de la IT por enfermedad común, es necesario tener cotizados 180 días dentro de los 5 años inmediatamente anteriores a la fecha de baja."
        },
        {
            "id": 7004,
            "unit": 7,
            "questionText": "¿Cuál es la duración estándar del permiso por nacimiento y cuidado de menor para cada progenitor?",
            "options": [
                "12 semanas",
                "16 semanas",
                "20 semanas",
                "Varía según el convenio"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Tanto la madre biológica como cualquier otro progenitor dispondrán de un período de suspensión de 16 semanas por nacimiento y cuidado de menor."
        },
        {
            "id": 7005,
            "unit": 7,
            "questionText": "Para acceder a la prestación contributiva por desempleo, se necesita un periodo mínimo de cotización de:",
            "options": [
                "180 días en los últimos 6 años",
                "360 días en los últimos 6 años",
                "540 días en los últimos 7 años",
                "No hay mínimo si tienes cargas familiares"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Para acceder a la prestación contributiva por desempleo se requiere tener cubierto el período mínimo de cotización de 360 días, dentro de los 6 años anteriores a la situación legal de desempleo."
        },
        {
            "id": 8001,
            "unit": 8,
            "questionText": "La capacidad de comprender las propias características, como intereses, valores y habilidades, se denomina:",
            "options": [
                "Autoestima",
                "Autoconocimiento",
                "Autonomía",
                "Automotivación"
            ],
            "correctAnswerIndex": 1,
            "explanation": "El autoconocimiento es la capacidad de una persona para comprender sus propias características, es decir, sus intereses, valores, motivaciones, habilidades y destrezas."
        },
        {
            "id": 8002,
            "unit": 8,
            "questionText": "En el análisis DAFO personal, las 'Fortalezas' son factores externos positivos que se pueden aprovechar.",
            "options": [
                "Verdadero",
                "Falso"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Falso. Las Fortalezas son atributos internos y positivos que una persona posee. Los factores externos positivos son las Oportunidades."
        },
        {
            "id": 8003,
            "unit": 8,
            "questionText": "Completar un Ciclo Formativo de Grado Superior es un ejemplo de:",
            "options": [
                "Hito personal",
                "Hito laboral",
                "Hito educativo",
                "Preferencia profesional"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Los hitos educativos son eventos significativos en la trayectoria académica, como completar un nivel educativo o obtener certificaciones."
        },
        {
            "id": 8004,
            "unit": 8,
            "questionText": "Para acceder a un Ciclo Formativo de Grado Superior (CFGS) es imprescindible haber cursado Bachillerato.",
            "options": [
                "Verdadero",
                "Falso"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Falso. Se puede acceder a un CFGS con el título de Técnico (CFGM), título de Bachillerato, título universitario, superando la prueba de acceso específica, o un curso preparatorio."
        },
        {
            "id": 8005,
            "unit": 8,
            "questionText": "Las metas profesionales que se pueden alcanzar en un período de 6 meses a 1 año se consideran:",
            "options": [
                "Metas a largo plazo",
                "Metas a medio plazo",
                "Metas a corto plazo",
                "Metas estratégicas"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Las metas a corto plazo se centran en logros que se pueden alcanzar en un período de tiempo relativamente breve, entre seis meses y un año."
        },
        {
            "id": 9001,
            "unit": 9,
            "questionText": "Las habilidades técnicas y conocimientos específicos que se pueden cuantificar y medir fácilmente se conocen como:",
            "options": [
                "Soft skills",
                "Hard skills",
                "Competencias transversales",
                "Aptitudes innatas"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Las habilidades duras (hard skills) son competencias técnicas y conocimientos específicos que se pueden cuantificar y medir fácilmente."
        },
        {
            "id": 9002,
            "unit": 9,
            "questionText": "La capacidad de asumir con flexibilidad situaciones límite y sobreponerse a ellas en el entorno laboral se llama:",
            "options": [
                "Adaptabilidad",
                "Proactividad",
                "Resiliencia",
                "Asertividad"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La resiliencia es la capacidad de asumir con flexibilidad situaciones límite y sobreponerse a ellas, siendo crucial para adaptarse y crecer frente a las adversidades laborales."
        },
        {
            "id": 9003,
            "unit": 9,
            "questionText": "El conjunto de información sobre un individuo disponible online, construida a partir de sus actividades en Internet, se denomina:",
            "options": [
                "Currículum Vitae Digital",
                "Entorno Personal de Aprendizaje (EPA)",
                "Identidad Digital o Identidad 2.0",
                "Marca Personal Online"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La identidad digital, también conocida como identidad 2.0, se refiere al conjunto de información sobre un individuo que hay disponible en línea."
        },
        {
            "id": 9004,
            "unit": 9,
            "questionText": "Un Entorno Personal de Aprendizaje (EPA o PLE) es un sistema que ayuda a las personas a tomar control y gestión de su propio aprendizaje.",
            "options": [
                "Verdadero",
                "Falso"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Verdadero. Un Entorno Personal de Aprendizaje (EPA) es un sistema compuesto por herramientas, fuentes de información, personas y actividades que ayuda a gestionar el propio aprendizaje."
        },
        {
            "id": 9005,
            "unit": 9,
            "questionText": "¿Cuál es el propósito principal de un Plan de Desarrollo Individual (PDI)?",
            "options": [
                "Evaluar el desempeño de otros compañeros",
                "Cumplir con un requisito de la empresa",
                "Proporcionar una hoja de ruta personalizada para guiar la trayectoria profesional",
                "Documentar únicamente los errores cometidos"
            ],
            "correctAnswerIndex": 2,
            "explanation": "El propósito principal de un PDI es proporcionar una hoja de ruta personalizada que guíe a los trabajadores en su trayectoria profesional, alineando sus aspiraciones personales con las necesidades del mercado."
        }
    ]
};


// Estado inicial del juego
const gameState = {
    questions: [], // Almacenará todas las preguntas cargadas
    currentQuestionIndex: 0, // Índice de la pregunta actual
    scoreCorrect: 0, // Puntuación de respuestas correctas
    scoreIncorrect: 0, // Puntuación de respuestas incorrectas
    currentQuestionSet: [], // Subconjunto de preguntas para la partida actual
    lastGameQuestionIds: [], // IDs de las preguntas usadas en la última partida para evitar repetición inmediata
    gamePhase: 'start', // Fase actual del juego: 'start', 'playing', 'feedback', 'end'
    selectedAnswerIndex: null, // Índice de la respuesta seleccionada por el usuario
    timerId: null, // ID del temporizador para auto-avanzar en respuestas correctas
};

// Obtención de elementos del DOM para interactuar con ellos
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
 * Carga las preguntas directamente desde la constante allQuestionsData.
 * Actualiza el estado del juego con las preguntas cargadas.
 */
function loadQuestions() {
    // Simula una carga asíncrona aunque los datos ya están disponibles
    return new Promise((resolve, reject) => {
        if (allQuestionsData && allQuestionsData.questions) {
            gameState.questions = allQuestionsData.questions;
            resolve();
        } else {
            console.error("No se pudieron cargar las preguntas desde la constante interna.");
            if (startScreen && !gameScreen.classList.contains('hidden')) {
                 startScreen.innerHTML = `
                    <h1 class="text-3xl sm:text-4xl font-bold text-indigo-700 mb-4">Error de Carga</h1>
                    <p class="text-gray-600 mb-8 text-lg">No se pudieron cargar las preguntas del juego. Problema con los datos internos.</p>
                `;
            } else if (questionTextEl) {
                questionTextEl.textContent = "Error al cargar preguntas. Datos internos no disponibles.";
            }
            reject(new Error("Datos de preguntas no encontrados en la constante interna."));
        }
    });
}


/**
 * Selecciona un nuevo conjunto de preguntas para una partida,
 * evitando repetir las de la partida inmediatamente anterior.
 * @returns {Array<Object>} Un array de objetos de pregunta.
 */
function selectNewQuestions() {
    // Filtra las preguntas que ya se usaron en la última partida
    const availableQuestions = gameState.questions.filter(
        q => !gameState.lastGameQuestionIds.includes(q.id)
    );

    // Si no hay suficientes preguntas "nuevas", se usa todo el banco de preguntas.
    // Esto asegura que siempre haya suficientes preguntas para una partida.
    const questionsToPickFrom = availableQuestions.length >= TOTAL_QUESTIONS_PER_GAME 
        ? availableQuestions 
        : gameState.questions;

    // Mezcla las preguntas disponibles de forma aleatoria
    const shuffled = [...questionsToPickFrom].sort(() => 0.5 - Math.random());
    // Selecciona el número de preguntas necesarias para la partida
    const selected = shuffled.slice(0, TOTAL_QUESTIONS_PER_GAME);
    
    // Actualiza la lista de IDs de preguntas usadas para el próximo juego
    gameState.lastGameQuestionIds = selected.map(q => q.id);
    return selected;
}

/**
 * Inicia una nueva partida del juego.
 * Reinicia el estado del juego y muestra la primera pregunta.
 */
function startGame() {
    gameState.currentQuestionIndex = 0;
    gameState.scoreCorrect = 0;
    gameState.scoreIncorrect = 0;
    gameState.currentQuestionSet = selectNewQuestions(); // Esto debe usar las preguntas ya cargadas en gameState.questions
    
    // Verificar si hay preguntas disponibles para el juego
    if (!gameState.currentQuestionSet || gameState.currentQuestionSet.length < TOTAL_QUESTIONS_PER_GAME) {
        console.error("No hay suficientes preguntas para iniciar una nueva partida.");
        if (startScreen && !gameScreen.classList.contains('hidden')) {
            startScreen.innerHTML = `
                <h1 class="text-3xl sm:text-4xl font-bold text-indigo-700 mb-4">No hay suficientes preguntas</h1>
                <p class="text-gray-600 mb-8 text-lg">No se pueden iniciar más partidas sin repetir preguntas inmediatamente o no hay suficientes preguntas en total. Por favor, añade más preguntas.</p>
            `;
        }
        // Podrías optar por reiniciar lastGameQuestionIds aquí si quieres permitir repeticiones
        // gameState.lastGameQuestionIds = []; 
        // gameState.currentQuestionSet = selectNewQuestions(); // Y volver a intentar seleccionar
        // if (!gameState.currentQuestionSet || gameState.currentQuestionSet.length < TOTAL_QUESTIONS_PER_GAME) return; // Si aún falla, no iniciar
        return; 
    }


    gameState.gamePhase = 'playing';
    
    // Oculta la pantalla de inicio y final, muestra la pantalla de juego
    startScreen.classList.add('hidden');
    endScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    gameContainer.classList.remove('max-w-md'); // Si estaba en pantalla final
    gameContainer.classList.add('max-w-2xl'); // Tamaño estándar para el juego

    displayQuestion();
    updateScoreDisplay();
}

/**
 * Muestra la pregunta actual y sus opciones de respuesta.
 * Si no hay más preguntas, finaliza el juego.
 */
function displayQuestion() {
    // Si se han mostrado todas las preguntas, termina el juego
    if (gameState.currentQuestionIndex >= gameState.currentQuestionSet.length) {
        endGame();
        return;
    }

    clearTimeout(gameState.timerId); // Limpia cualquier temporizador de auto-avance

    const question = gameState.currentQuestionSet[gameState.currentQuestionIndex];
    questionTextEl.textContent = question.questionText;
    questionCounterEl.textContent = `Pregunta ${gameState.currentQuestionIndex + 1} / ${TOTAL_QUESTIONS_PER_GAME}`;
    
    optionsContainerEl.innerHTML = ''; // Limpia opciones de la pregunta anterior
    // Crea y añade los botones de opción para la pregunta actual
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add(
            'option-button', 'w-full', 'p-3', 'sm:p-4', 'border-2', 'border-indigo-300', 'rounded-lg', 
            'text-gray-700', 'hover:bg-indigo-100', 'hover:border-indigo-500', 'transition-colors', 'duration-200',
            'focus:outline-none', 'focus:ring-2', 'focus:ring-indigo-400', 'focus:ring-opacity-75'
        );
        button.dataset.index = index.toString(); // Almacena el índice de la opción en el botón
        button.addEventListener('click', () => handleAnswer(index));
        optionsContainerEl.appendChild(button);
    });

    // Oculta mensajes de feedback y el botón de siguiente pregunta
    feedbackMessageEl.classList.add('hidden');
    explanationTextEl.classList.add('hidden');
    explanationTextEl.textContent = '';
    nextQuestionBtn.classList.add('hidden');
    gameState.gamePhase = 'playing'; // Establece la fase a 'jugando'
    gameState.selectedAnswerIndex = null; // Resetea la respuesta seleccionada

    // Rehabilita los botones de opción para la nueva pregunta
    optionsContainerEl.querySelectorAll('button').forEach(btn => {
        btn.disabled = false;
        btn.classList.remove('correct-answer-highlight', 'selected-incorrect-answer', 'opacity-50', 'cursor-not-allowed');
    });
}

/**
 * Maneja la selección de una respuesta por parte del usuario.
 * Evalúa si la respuesta es correcta, actualiza la puntuación y muestra feedback.
 * @param {number} selectedIndex - El índice de la opción seleccionada.
 */
function handleAnswer(selectedIndex) {
    if (gameState.gamePhase !== 'playing') return; // Solo procesa si se está jugando

    gameState.selectedAnswerIndex = selectedIndex;
    gameState.gamePhase = 'feedback'; // Cambia la fase a 'feedback'

    const question = gameState.currentQuestionSet[gameState.currentQuestionIndex];
    const correct = selectedIndex === question.correctAnswerIndex;

    // Deshabilita todos los botones de opción tras una selección
    const optionButtons = optionsContainerEl.querySelectorAll('button');
    optionButtons.forEach(btn => {
        btn.disabled = true;
        btn.classList.add('opacity-50', 'cursor-not-allowed');
    });
    
    const selectedButton = optionsContainerEl.querySelector(`button[data-index="${selectedIndex}"]`);

    // Muestra el mensaje de feedback
    feedbackMessageEl.classList.remove('hidden', 'bg-green-100', 'text-green-700', 'bg-red-100', 'text-red-700');

    if (correct) {
        gameState.scoreCorrect++;
        feedbackMessageEl.textContent = "¡Respuesta Correcta!";
        feedbackMessageEl.classList.add('bg-green-100', 'text-green-700');
        selectedButton?.classList.add('correct-answer-highlight');
        // Auto-avanza a la siguiente pregunta tras un breve retardo
        gameState.timerId = setTimeout(() => {
            nextQuestion();
        }, 1500); // 1.5 segundos
    } else {
        gameState.scoreIncorrect++;
        feedbackMessageEl.textContent = "Respuesta Incorrecta.";
        feedbackMessageEl.classList.add('bg-red-100', 'text-red-700');
        
        // Muestra la explicación
        explanationTextEl.textContent = `Explicación: ${question.explanation}`;
        explanationTextEl.classList.remove('hidden');

        // Resalta la respuesta incorrecta seleccionada y la respuesta correcta
        selectedButton?.classList.add('selected-incorrect-answer');
        const correctButton = optionsContainerEl.querySelector(`button[data-index="${question.correctAnswerIndex}"]`);
        correctButton?.classList.add('correct-answer-highlight');
        
        nextQuestionBtn.classList.remove('hidden'); // Muestra el botón para avanzar manualmente
    }
    updateScoreDisplay(); // Actualiza la visualización de la puntuación
}

/**
 * Avanza a la siguiente pregunta o finaliza el juego si no hay más.
 */
function nextQuestion() {
    clearTimeout(gameState.timerId); // Limpia el temporizador si se avanza manualmente
    gameState.currentQuestionIndex++;
    if (gameState.currentQuestionIndex < TOTAL_QUESTIONS_PER_GAME) {
        displayQuestion();
    } else {
        endGame();
    }
}

/**
 * Actualiza la visualización de la puntuación en la pantalla.
 */
function updateScoreDisplay() {
    correctScoreEl.textContent = gameState.scoreCorrect.toString();
    incorrectScoreEl.textContent = gameState.scoreIncorrect.toString();
}

/**
 * Finaliza la partida actual y muestra la pantalla de resultados.
 */
function endGame() {
    gameState.gamePhase = 'end';
    gameScreen.classList.add('hidden'); // Oculta pantalla de juego
    endScreen.classList.remove('hidden'); // Muestra pantalla final
    gameContainer.classList.remove('max-w-2xl'); // Ajusta tamaño del contenedor
    gameContainer.classList.add('max-w-md');


    // Muestra la puntuación final
    finalCorrectEl.textContent = gameState.scoreCorrect.toString();
    finalIncorrectEl.textContent = gameState.scoreIncorrect.toString();
}

// Asignación de manejadores de eventos a los botones
startGameBtn.addEventListener('click', startGame);
nextQuestionBtn.addEventListener('click', nextQuestion);
playAgainBtn.addEventListener('click', () => {
    // Al jugar de nuevo, se mantienen las `lastGameQuestionIds` para
    // intentar no repetir preguntas de la partida inmediatamente anterior.
    startGame();
});

// Carga las preguntas cuando el contenido del DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', async () => {
    // La función loadQuestions ahora es síncrona en efecto, pero la mantenemos como promesa
    // para coherencia si en el futuro se quisiera volver a cargar de un archivo.
    try {
        await loadQuestions();
        // Verifica si se cargaron preguntas; si no, muestra un error.
        if (gameState.questions.length === 0 && startScreen && !gameScreen.classList.contains('hidden')) {
             startScreen.innerHTML = `
                <h1 class="text-3xl sm:text-4xl font-bold text-indigo-700 mb-4">Error</h1>
                <p class="text-gray-600 mb-8 text-lg">No se pudieron cargar las preguntas. Datos internos no encontrados.</p>
            `;
        }
    } catch (error) {
        // El error ya se maneja dentro de loadQuestions para la UI, aquí solo log a consola
        console.error("Error final al intentar cargar preguntas:", error);
    }
});
