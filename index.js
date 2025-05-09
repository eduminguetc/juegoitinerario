// index.js

// Constante para el número total de preguntas por partida
const TOTAL_QUESTIONS_PER_GAME = 20;
const allQuestionsData = {
    "questions": [
        {
            "id": 1001,
            "questionText": "El trabajo realizado de forma voluntaria, personal y directa, bajo la organización de un tercero a cambio de un salario, se denomina:",
            "options": [
                "Trabajo por cuenta propia",
                "Trabajo por cuenta ajena",
                "Autoempleo",
                "Autónomo colaborador"
            ],
            "correctAnswerIndex": 1,
            "explanation": "El trabajo por cuenta ajena es una relación laboral voluntaria, personal y directa, donde se trabaja bajo la organización de un tercero a cambio de un salario."
        },
        {
            "id": 1002,
            "questionText": "¿Qué es un Trabajador Autónomo Económicamente Dependiente (TRADE)?",
            "options": [
                "Un autónomo que tiene muchos empleados a su cargo.",
                "Un autónomo que factura al menos el 75% de sus ingresos a un único cliente.",
                "Un autónomo que trabaja exclusivamente para la Administración Pública.",
                "Un familiar que colabora con un trabajador autónomo."
            ],
            "correctAnswerIndex": 1,
            "explanation": "Un TRADE es un autónomo cuya facturación depende en un 75% o más de un solo cliente, teniendo un contrato que le aporta garantías similares a las del trabajador por cuenta ajena."
        },
        {
            "id": 1003,
            "questionText": "El acceso a la función pública en España debe regirse por los principios de:",
            "options": [
                "Antigüedad y lealtad",
                "Mérito y capacidad",
                "Recomendación y afinidad política",
                "Sorteo y disponibilidad"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La Constitución Española indica que el ingreso a la función pública debe regirse por los principios de mérito y capacidad, mediante convocatoria pública."
        },
        {
            "id": 1004,
            "questionText": "¿Cuál de estos NO es un tipo de personal al servicio de la Administración Pública?",
            "options": [
                "Funcionario de carrera",
                "Personal laboral fijo",
                "Autónomo económicamente dependiente (TRADE)",
                "Funcionario interino"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Los funcionarios de carrera, personal laboral (fijo o temporal) y funcionarios interinos son tipos de personal de la Administración. El TRADE es una figura del trabajo por cuenta propia."
        },
        {
            "id": 1005,
            "questionText": "El portal europeo que ofrece información sobre oportunidades de estudiar, trabajar o realizar voluntariado en otros países de la UE es:",
            "options": [
                "LinkedIn Europa",
                "Europass",
                "Portal Europeo de la Juventud",
                "Red EURES"
            ],
            "correctAnswerIndex": 2,
            "explanation": "El Portal Europeo de la Juventud aporta diversas informaciones sobre oportunidades no solo dentro de Europa, sino también fuera, incluyendo trabajar, estudiar o realizar voluntariado."
        },
        {
            "id": 1006,
            "questionText": "La actitud profesional que implica anticiparse a los problemas y proponer soluciones se denomina:",
            "options": [
                "Responsabilidad",
                "Flexibilidad",
                "Proactividad",
                "Empatía"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La proactividad es la capacidad de anticiparse a los problemas, proponer soluciones y tomar la iniciativa."
        },
        {
            "id": 1007,
            "questionText": "La 'Zona de Desarrollo Próximo' (ZDP) se refiere a:",
            "options": [
                "Las competencias que ya se dominan completamente.",
                "El espacio entre lo que se puede hacer solo y lo que se puede lograr con ayuda.",
                "Los objetivos profesionales a largo plazo.",
                "El área geográfica donde se busca empleo."
            ],
            "correctAnswerIndex": 1,
            "explanation": "La Zona de Desarrollo Próximo es un concepto que hace referencia al espacio entre lo que un individuo puede hacer por sí solo y lo que puede lograr con la guía y colaboración de otros."
        },
        {
            "id": 1008,
            "questionText": "El conjunto de cinco documentos que permiten comunicar habilidades y titulaciones de forma estandarizada en la UE se llama:",
            "options": [
                "Carta de Presentación Europea",
                "Suplemento al Título Europeo",
                "Europass",
                "Certificado de Movilidad UE"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Europass engloba cinco documentos (CV, Pasaporte de Lenguas, etc.) para comunicar de manera simple y comprensible las cualificaciones en toda la UE."
        },
        {
            "id": 1009,
            "questionText": "El sistema selectivo de acceso al empleo público que consiste en la comprobación y clasificación de méritos (experiencia, formación) es:",
            "options": [
                "Oposición",
                "Concurso",
                "Concurso-oposición",
                "Bolsa de empleo"
            ],
            "correctAnswerIndex": 1,
            "explanation": "El concurso es un proceso en el que se comprueban y clasifican los méritos de los solicitantes, dándole a cada uno una puntuación."
        },
        {
            "id": 1010,
            "questionText": "Un profesional autónomo que desarrolla actividades como arquitecto o abogado, ¿necesita estar siempre colegiado?",
            "options": [
                "Sí, es obligatorio para todos los profesionales autónomos.",
                "No, algunos pueden ejercer sin colegiación (ej. programadores).",
                "Solo si trabajan para la Administración Pública.",
                "Solo si tienen empleados a su cargo."
            ],
            "correctAnswerIndex": 1,
            "explanation": "Es conveniente distinguir entre los autónomos que están colegiados (médicos, farmacéuticos) y los que no lo están (programadores informáticos, traductores)."
        },
        {
            "id": 1011,
            "questionText": "La Red EURES se enfoca principalmente en:",
            "options": [
                "Financiar proyectos de investigación.",
                "Facilitar la libre circulación de trabajadores en Europa.",
                "Ofrecer cursos de idiomas online.",
                "Gestionar becas Erasmus+."
            ],
            "correctAnswerIndex": 1,
            "explanation": "La Red EURES (European Employment Services) tiene como meta primordial la cooperación en materia laboral y la libre circulación de trabajadores en el espacio europeo."
        },
        {
            "id": 1012,
            "questionText": "La capacidad innata o adquirida para realizar ciertas tareas de forma idónea se conoce como:",
            "options": [
                "Actitud",
                "Aptitud",
                "Motivación",
                "Interés"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La aptitud hace referencia a la capacidad innata o adquirida de una persona para realizar ciertas tareas o actividades de forma idónea."
        },
        {
            "id": 1013,
            "questionText": "El grupo de clasificación para el acceso al empleo público que exige el Título de Técnico Superior (CFGS) es el Grupo:",
            "options": [
                "A1",
                "A2",
                "B",
                "C1"
            ],
            "correctAnswerIndex": 2,
            "explanation": "El Grupo B de acceso al empleo público exige el Título de Técnico Superior (Ciclo Formativo de Grado Superior)."
        },
        {
            "id": 1014,
            "questionText": "El __________ es un tipo de relación laboral que se da cuando el trabajo se hace de forma voluntaria, personal y directa, pero organizado por una tercera persona, a cambio de un salario.",
            "options": [
                "autoempleo",
                "trabajo por cuenta propia",
                "trabajo por cuenta ajena",
                "trabajo colaborativo"
            ],
            "correctAnswerIndex": 2,
            "explanation": "El trabajo por cuenta ajena se define por ser voluntario, personal, directo, organizado por un tercero y remunerado con un salario."
        },
        {
            "id": 1015,
            "questionText": "¿Cuál de estas NO es una actitud relevante para la actividad profesional mencionada en la unidad?",
            "options": [
                "Proactividad",
                "Conformismo",
                "Flexibilidad y adaptabilidad",
                "Positividad y motivación"
            ],
            "correctAnswerIndex": 1,
            "explanation": "El conformismo no se considera una actitud profesional relevante; al contrario, se valoran la proactividad, flexibilidad, adaptabilidad, positividad y motivación."
        },
        {
            "id": 1016,
            "questionText": "El primer paso para determinar la Zona de Desarrollo Próximo (ZDP) es:",
            "options": [
                "Buscar recursos y apoyo.",
                "Definir objetivos de aprendizaje.",
                "Evaluar las competencias actuales.",
                "Practicar y aplicar lo aprendido."
            ],
            "correctAnswerIndex": 2,
            "explanation": "El primer paso para determinar la ZDP es realizar un autodiagnóstico para identificar las fortalezas y áreas de mejora con respecto a las competencias requeridas."
        },
        {
            "id": 1017,
            "questionText": "Las ofertas de empleo público se publican generalmente en:",
            "options": [
                "Redes sociales profesionales",
                "Portales de empleo privados",
                "Boletines Oficiales (del Estado, CCAA)",
                "Directamente en las oficinas de la Administración"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Las ofertas de empleo público se hacen públicas en los boletines oficiales correspondientes (BOE, boletines autonómicos)."
        },
        {
            "id": 1018,
            "questionText": "El programa Erasmus+ incluye acciones clave para la movilidad educativa de los ciudadanos europeos, identificada como:",
            "options": [
                "KA1",
                "KA2",
                "KA3",
                "Acciones Jean Monet"
            ],
            "correctAnswerIndex": 0,
            "explanation": "La Acción Clave 1 (KA1) del programa Erasmus+ está centrada en la movilidad educativa de los ciudadanos europeos."
        },
        {
            "id": 1019,
            "questionText": "La capacidad de entender y valorar los sentimientos y perspectivas de los demás, mejorando la interacción laboral, es la:",
            "options": [
                "Gestión del tiempo",
                "Empatía",
                "Proactividad",
                "Autonomía"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La empatía y las relaciones interpersonales implican entender y valorar los sentimientos y perspectivas de los demás, contribuyendo a un ambiente de trabajo positivo."
        },
        {
            "id": 1020,
            "questionText": "Un autónomo societario es aquel que:",
            "options": [
                "Colabora con un familiar autónomo.",
                "Depende económicamente de un solo cliente.",
                "Es administrador o miembro del consejo de dirección de una sociedad mercantil.",
                "Trabaja para una empresa como profesional autónomo."
            ],
            "correctAnswerIndex": 2,
            "explanation": "El autónomo societario es el administrador o miembro del consejo de dirección de una sociedad mercantil."
        },
        {
            "id": 1021,
            "questionText": "El mercado laboral se compone de oferta, demanda y:",
            "options": [
                "Competidores",
                "Intermediarios",
                "Sindicatos",
                "Legislación"
            ],
            "correctAnswerIndex": 1,
            "explanation": "El mercado laboral se compone de tres elementos: la oferta (puestos disponibles), la demanda (personas buscando empleo) y los intermediarios (entidades que conectan oferta y demanda)."
        },
        {
            "id": 1022,
            "questionText": "Para acceder a un puesto de funcionario de carrera, ¿es siempre necesario superar una oposición?",
            "options": [
                "Sí, siempre es mediante oposición.",
                "No, también puede ser por concurso de méritos únicamente.",
                "Depende, los sistemas selectivos pueden ser oposición, concurso o concurso-oposición.",
                "No, se accede directamente tras finalizar los estudios."
            ],
            "correctAnswerIndex": 2,
            "explanation": "Los sistemas selectivos de acceso a la función pública son: la oposición, el concurso y el concurso-oposición."
        },
        {
            "id": 1023,
            "questionText": "El CV Europass forma parte de un conjunto de documentos diseñados para facilitar la movilidad en Europa. ¿Cuántos documentos componen Europass en total?",
            "options": [
                "Dos",
                "Tres",
                "Cinco",
                "Siete"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Europass engloba cinco documentos: el CV Europass, el Pasaporte de las Lenguas Europass, el Documento de Movilidad Europass, el Suplemento Europass al Título/Certificado y el Suplemento Europass al Título Superior."
        },
        {
            "id": 1024,
            "questionText": "La disposición mental y emocional de una persona hacia una situación, influenciada por experiencias y creencias, es su:",
            "options": [
                "Aptitud",
                "Competencia",
                "Actitud",
                "Destreza"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La actitud es la disposición mental y emocional de una persona hacia una situación, persona, objeto o tarea."
        },
        {
            "id": 1025,
            "questionText": "El dominio de herramientas, técnicas y procedimientos propios de un campo profesional específico es un ejemplo de:",
            "options": [
                "Conocimientos técnicos (aptitud)",
                "Proactividad (actitud)",
                "Trabajo en equipo (competencia social)",
                "Gestión del tiempo (competencia personal)"
            ],
            "correctAnswerIndex": 0,
            "explanation": "Los conocimientos técnicos son una aptitud que implica el dominio de las competencias específicas relacionadas con un título, como el manejo de herramientas y técnicas."
        },
        {
            "id": 1026,
            "questionText": "El Real Decreto Legislativo 5/2015, de 30 de octubre, aprueba el texto refundido de la Ley del:",
            "options": [
                "Estatuto de los Trabajadores",
                "Estatuto Básico del Empleado Público",
                "Reglamento de los Servicios de Prevención",
                "Impuesto sobre Actividades Económicas"
            ],
            "correctAnswerIndex": 1,
            "explanation": "El Real Decreto Legislativo 5/2015, de 30 de octubre, aprueba el texto refundido de la Ley del Estatuto Básico del Empleado Público (EBEP)."
        },
        {
            "id": 1027,
            "questionText": "Las Empresas de Trabajo Temporal (ETT) actúan en el mercado laboral como:",
            "options": [
                "Empleadores públicos",
                "Empleadores privados directos",
                "Intermediarios",
                "Organismos de formación"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Los intermediarios son empresas o entidades que se encargan de unir la demanda con la oferta. Este papel lo pueden ejercer las bolsas de trabajo, las Empresas de Trabajo Temporal (ETT), los servicios públicos de empleo, etc."
        },
        {
            "id": 1028,
            "questionText": "La capacidad de guiar e inspirar a equipos de trabajo, estableciendo una meta compartida, se conoce como:",
            "options": [
                "Empatía",
                "Liderazgo",
                "Adaptabilidad",
                "Responsabilidad"
            ],
            "correctAnswerIndex": 1,
            "explanation": "El liderazgo es la competencia personal y social de guiar e inspirar a equipos de trabajo, estableciendo una meta compartida que motiva a todos los miembros."
        },
        {
            "id": 1029,
            "questionText": "Si un titulado de Ciclo Formativo de Grado Medio desea acceder a un Ciclo Formativo de Grado Superior, ¿qué opción NO es válida directamente?",
            "options": [
                "Tener el título de Técnico (CFGM).",
                "Superar la prueba de acceso a CFGS.",
                "Tener el título de Bachiller.",
                "Tener únicamente el título de Graduado en ESO."
            ],
            "correctAnswerIndex": 3,
            "explanation": "Para acceder a un CFGS se necesita el título de Técnico (CFGM), Bachiller, superar la prueba de acceso específica, o un título universitario. El título de Graduado en ESO por sí solo permite el acceso a CFGM, no a CFGS directamente."
        },
        {
            "id": 1030,
            "questionText": "El último paso para determinar la Zona de Desarrollo Próximo (ZDP) es:",
            "options": [
                "Evaluar competencias actuales.",
                "Definir objetivos de aprendizaje.",
                "Acceder a recursos y apoyo.",
                "Practicar y aplicar los conocimientos adquiridos."
            ],
            "correctAnswerIndex": 3,
            "explanation": "El último paso para determinar la ZDP es implementar los conocimientos y habilidades adquiridos en situaciones reales de trabajo, obteniendo un aprendizaje práctico y efectivo."
        },
       {
            "id": 2001,
            "questionText": "Según la OMS, ¿qué tres dimensiones principales incorpora la definición de salud?",
            "options": [
                "Física, económica y laboral",
                "Física, mental y social",
                "Mental, espiritual y ambiental",
                "Social, laboral y preventiva"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La OMS define la salud como el estado de completo bienestar físico, mental y social, incorporando estas tres dimensiones."
        },
        {
            "id": 2002,
            "questionText": "¿Qué se entiende por 'condiciones de trabajo' en el contexto de la prevención de riesgos?",
            "options": [
                "Únicamente el salario y el horario laboral.",
                "Solo las características físicas del local de trabajo.",
                "Cualquier particularidad laboral que pueda influenciar en la generación de riesgos para la seguridad y salud.",
                "Las relaciones entre compañeros y superiores."
            ],
            "correctAnswerIndex": 2,
            "explanation": "Las condiciones de trabajo son cualquier particularidad laboral que pueda influenciar en la generación de riesgos, incluyendo locales, equipos, agentes, procedimientos y organización del trabajo."
        },
        {
            "id": 2003,
            "questionText": "Para que una enfermedad sea considerada legalmente como 'Enfermedad Profesional' en España, debe estar:",
            "options": [
                "Diagnosticada por al menos dos médicos especialistas.",
                "Relacionada directamente con un accidente de trabajo previo.",
                "Incluida en el cuadro oficial (RD 1299/2006) y provocada por elementos o actividades especificados en él.",
                "Manifestarse durante los primeros seis meses de actividad laboral."
            ],
            "correctAnswerIndex": 2,
            "explanation": "Legalmente, una enfermedad profesional debe estar recogida en el Real Decreto 1299/2006 y ser provocada por la acción de los elementos o sustancias, o la realización de actividades que contempla dicho Real Decreto."
        },
        {
            "id": 2004,
            "questionText": "Un accidente sufrido al ir o volver del lugar de trabajo se conoce como accidente:",
            "options": [
                "En misión",
                "In itinere",
                "Profesional directo",
                "Por enfermedad común"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Los accidentes que se sufren al ir o al volver del lugar de trabajo se consideran accidentes de trabajo 'in itinere'."
        },
        {
            "id": 2005,
            "questionText": "¿Cuál de las siguientes situaciones NO se considera accidente de trabajo?",
            "options": [
                "Una lesión realizando tareas ordenadas por el empresario, aunque no sean las habituales.",
                "Una enfermedad que se agrava como consecuencia de una lesión sufrida en el trabajo.",
                "Un accidente debido a una imprudencia temeraria del trabajador.",
                "Una caída en el pasillo de la oficina durante la jornada laboral."
            ],
            "correctAnswerIndex": 2,
            "explanation": "No tendrán la consideración de accidente de trabajo los que sean debidos a dolo o a imprudencia temeraria del trabajador accidentado."
        },
        {
            "id": 2006,
            "questionText": "El estrés laboral es una respuesta física y emocional al desequilibrio entre las __________ percibidas y las __________ del trabajador para hacerles frente.",
            "options": [
                "oportunidades / ambiciones",
                "exigencias / capacidades",
                "recompensas / expectativas",
                "normativas / responsabilidades"
            ],
            "correctAnswerIndex": 1,
            "explanation": "El estrés laboral se describe como una respuesta física y emocional al desequilibrio entre las exigencias percibidas y las capacidades del trabajador para hacer frente a esas exigencias."
        },
        {
            "id": 2007,
            "questionText": "El síndrome caracterizado por agotamiento emocional, despersonalización y baja realización personal debido al estrés crónico laboral se denomina:",
            "options": [
                "Fatiga laboral aguda",
                "Mobbing",
                "Burnout",
                "Estrés postraumático laboral"
            ],
            "correctAnswerIndex": 2,
            "explanation": "El Burnout o síndrome de estar quemado es una respuesta al estrés crónico que produce el trabajo, conformada por actitudes y sentimientos negativos, y suele ir acompañado de agotamiento emocional, despersonalización y baja realización personal."
        },
        {
            "id": 2008,
            "questionText": "Las agresiones psicológicas reiteradas y prolongadas sobre una o más personas en el lugar de trabajo, por parte de compañeros o superiores/subordinados, se conocen como:",
            "options": [
                "Conflicto laboral",
                "Estrés laboral",
                "Discriminación laboral",
                "Mobbing o acoso laboral"
            ],
            "correctAnswerIndex": 3,
            "explanation": "El acoso laboral, también conocido como mobbing, engloba las agresiones psicológicas que se producen en el lugar de trabajo y que están dirigidas de forma reiterada y prolongada sobre una o más personas."
        },
        {
            "id": 2009,
            "questionText": "La posibilidad de que el trabajo o sus condiciones provoquen un daño en la salud del empleado se define como:",
            "options": [
                "Peligro laboral",
                "Incidente laboral",
                "Riesgo laboral",
                "Daño laboral"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Se puede definir el riesgo laboral como la posibilidad que hay de que el trabajo o las condiciones de este provoquen un daño en la salud del empleado."
        },
        {
            "id": 2010,
            "questionText": "En los lugares de trabajo, ¿cuál es la altura mínima general para los locales (excluyendo oficinas)?",
            "options": [
                "2.0 metros",
                "2.5 metros",
                "3.0 metros",
                "3.5 metros"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Los locales deben tener, al menos, 3 metros de altura, a excepción de las oficinas, en las que se permiten 2,5 metros."
        },
        {
            "id": 2011,
            "questionText": "El ruido se caracteriza por su intensidad, frecuencia y:",
            "options": [
                "Tono",
                "Volumen",
                "Duración",
                "Sonoridad"
            ],
            "correctAnswerIndex": 2,
            "explanation": "El ruido está conformado por tres elementos: intensidad (volumen), frecuencia (tono agudo/grave) y duración (continuo, intermitente, impacto)."
        },
        {
            "id": 2012,
            "questionText": "Las vibraciones que afectan principalmente a la columna vertebral, causando lumbalgias, suelen ser de:",
            "options": [
                "Muy baja frecuencia (<1 Hz)",
                "Baja frecuencia (1-20 Hz)",
                "Alta frecuencia (20-1000 Hz)",
                "Frecuencia ultrasónica (>1000 Hz)"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Las vibraciones de baja frecuencia (1 a 20 Hz) generalmente son las vibraciones de cuerpo completo que dañan la zona lumbar (asientos de vehículos industriales, tractores, etc.)."
        },
        {
            "id": 2013,
            "questionText": "Los Rayos X y los rayos gamma son ejemplos de radiaciones:",
            "options": [
                "No ionizantes de baja frecuencia",
                "No ionizantes de alta frecuencia",
                "Ionizantes",
                "Electromagnéticas visibles"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Las radiaciones ionizantes son potentes y peligrosas. Destacan los rayos X, los rayos gamma, las partículas alfa y beta, y los neutrones."
        },
        {
            "id": 2014,
            "questionText": "Según el RD 486/1997, la temperatura en trabajos sedentarios (oficinas) debe estar entre:",
            "options": [
                "14°C y 25°C",
                "17°C y 27°C",
                "20°C y 30°C",
                "10°C y 20°C"
            ],
            "correctAnswerIndex": 1,
            "explanation": "En los trabajos sedentarios (oficinas y similares), la temperatura debe estar entre 17°C y 27°C."
        },
        {
            "id": 2015,
            "questionText": "Un agente químico clasificado como 'Comburente' (O) es aquel que:",
            "options": [
                "Explota al contacto con el fuego.",
                "Arde fácilmente a baja temperatura.",
                "En contacto con otras sustancias, especialmente inflamables, causa una reacción exotérmica potente.",
                "Por inhalación o ingestión puede provocar la muerte."
            ],
            "correctAnswerIndex": 2,
            "explanation": "Los agentes comburentes, al contacto con otro tipo de sustancias (sobre todo las inflamables), causan una reacción exotérmica potente (desprenden calor)."
        },
        {
            "id": 2016,
            "questionText": "¿Cuál de estas NO es una vía de entrada principal de los agentes biológicos al organismo?",
            "options": [
                "Respiratoria",
                "Auditiva",
                "Digestiva",
                "Dérmica"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Las vías de entrada al organismo de los agentes biológicos son: respiratoria, digestiva, dérmica y parenteral (heridas)."
        },
        {
            "id": 2017,
            "questionText": "Los factores psicosociales en el trabajo consisten en interacciones entre el trabajo, su medio ambiente, la organización y:",
            "options": [
                "Las condiciones económicas del país.",
                "Las capacidades, necesidades y cultura del trabajador, y su situación personal fuera del trabajo.",
                "El tipo de maquinaria utilizada.",
                "La legislación laboral vigente."
            ],
            "correctAnswerIndex": 1,
            "explanation": "Los factores psicosociales consisten en interacciones entre el trabajo, su medio ambiente y las condiciones de organización y, por otra parte, las capacidades del trabajador, sus necesidades, su cultura y su situación personal fuera del trabajo."
        },
        {
            "id": 2018,
            "questionText": "La técnica preventiva que se encarga de adaptar el puesto y el medio de trabajo a las condiciones fisiológicas y psicológicas del trabajador se llama:",
            "options": [
                "Seguridad en el trabajo",
                "Higiene industrial",
                "Medicina laboral",
                "Ergonomía"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La ergonomía es una técnica dirigida a la adaptación de las condiciones de trabajo para que haya mayor seguridad, confort y eficiencia en los puestos de trabajo."
        },
        {
            "id": 2019,
            "questionText": "Al manipular manualmente una carga, ¿cuál es la recomendación principal respecto al tronco?",
            "options": [
                "Girar el tronco rápidamente para ganar impulso.",
                "Mantener el tronco lo más alejado posible de la carga.",
                "No girar el tronco mientras se levanta o transporta la carga.",
                "Inclinar el tronco hacia adelante para usar el peso corporal."
            ],
            "correctAnswerIndex": 2,
            "explanation": "Al levantar una carga, es fundamental no girar el tronco; los giros deben hacerse con los pies."
        },
        {
            "id": 2020,
            "questionText": "En un accidente eléctrico, ¿qué factor NO influye directamente en la gravedad del daño?",
            "options": [
                "Intensidad de la corriente",
                "Resistencia del cuerpo al paso de la corriente",
                "Tiempo de exposición",
                "Marca del aparato eléctrico"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La gravedad de un accidente eléctrico dependerá de la intensidad, la resistencia del cuerpo, el tiempo de exposición y la frecuencia de la señal, no de la marca del aparato."
        },
        {
            "id": 2021,
            "questionText": "La 'fatiga laboral' se define como la disminución de la capacidad física y mental que aparece cuando el trabajador:",
            "options": [
                "Está desmotivado con sus tareas.",
                "Realiza un trabajo que no le gusta.",
                "No puede recuperarse íntegramente de la cantidad de trabajo en un corto periodo.",
                "Tiene conflictos con sus compañeros."
            ],
            "correctAnswerIndex": 2,
            "explanation": "La fatiga laboral es la disminución de la capacidad física y mental que aparecerá cuando la cantidad de trabajo que realice el trabajador en un corto periodo de tiempo le impida recuperarse íntegramente."
        },
        {
            "id": 2022,
            "questionText": "El Real Decreto 1299/2006 aprueba:",
            "options": [
                "Las disposiciones mínimas de seguridad en lugares de trabajo.",
                "El cuadro de enfermedades profesionales.",
                "La protección de trabajadores contra el ruido.",
                "El reglamento de los servicios de prevención."
            ],
            "correctAnswerIndex": 1,
            "explanation": "El Real Decreto 1299/2006, de 10 de noviembre, aprueba el cuadro de enfermedades profesionales en el sistema de la Seguridad Social."
        },
        {
            "id": 2023,
            "questionText": "Un riesgo laboral se considera 'grave e inminente' cuando es probable que suceda en un futuro muy próximo y suponga un:",
            "options": [
                "Coste económico elevado para la empresa.",
                "Daño leve y fácilmente recuperable.",
                "Daño importante para la salud del trabajador.",
                "Retraso en la producción."
            ],
            "correctAnswerIndex": 2,
            "explanation": "El riesgo laboral se considera grave e inminente cuando es probable que suceda en un futuro muy próximo y suponga un daño importante para la salud."
        },
        {
            "id": 2024,
            "questionText": "La unidad de medida de la intensidad del ruido es el:",
            "options": [
                "Hercio (Hz)",
                "Lux (lx)",
                "Decibelio (dB)",
                "Metro por segundo (m/s)"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La intensidad del ruido se mide en decibelios (dB)."
        },
        {
            "id": 2025,
            "questionText": "Las sustancias químicas que, por inhalación, ingestión o penetración cutánea, pueden producir cáncer o aumentar su frecuencia se denominan:",
            "options": [
                "Mutagénicas",
                "Teratogénicas",
                "Corrosivas",
                "Carcinógenas"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Los agentes carcinógenos son sustancias y preparados que, por inhalación, ingestión o penetración cutánea pueden producir cáncer o aumento de su frecuencia."
        },
        {
            "id": 2026,
            "questionText": "La vía parenteral de entrada de agentes biológicos al organismo se refiere a:",
            "options": [
                "Inhalación por nariz o boca.",
                "Ingestión a través del sistema digestivo.",
                "Contacto directo con la piel intacta.",
                "Entrada directa a la sangre a través de heridas o llagas."
            ],
            "correctAnswerIndex": 3,
            "explanation": "La vía parenteral de entrada de agentes biológicos es mediante heridas o llagas, entrando directos a la sangre."
        },
        {
            "id": 2027,
            "questionText": "Una medida preventiva frente al riesgo por vibraciones mano-brazo es:",
            "options": [
                "Aumentar la presión de agarre de la herramienta.",
                "Utilizar herramientas sin mantenimiento.",
                "Limitar el tiempo de exposición.",
                "Trabajar en ambientes muy fríos."
            ],
            "correctAnswerIndex": 2,
            "explanation": "Limitar el tiempo de exposición es una medida clave para prevenir los daños por vibraciones transmitidas al sistema mano-brazo."
        },
        {
            "id": 2028,
            "questionText": "El confort térmico en un puesto de trabajo se alcanza cuando:",
            "options": [
                "La temperatura es lo más baja posible.",
                "No se percibe de manera especial ninguna sensación relacionada con la temperatura.",
                "La humedad relativa es superior al 80%.",
                "Hay fuertes corrientes de aire para ventilar."
            ],
            "correctAnswerIndex": 1,
            "explanation": "El confort térmico es aquella situación en la que no se percibe de manera especial ninguna sensación relacionada con la temperatura, reuniendo condiciones ideales."
        },
        {
            "id": 2029,
            "questionText": "Al levantar una carga manualmente, ¿dónde deben estar los pies para una postura correcta?",
            "options": [
                "Juntos y rectos.",
                "Separados, para una base estable, y apoyados fuertemente.",
                "Uno delante del otro, como al caminar.",
                "Sobre las puntas para mayor elevación."
            ],
            "correctAnswerIndex": 1,
            "explanation": "Al levantar una carga, se deben separar los pies para proporcionar una postura estable y equilibrada, apoyándolos fuertemente."
        },
        {
            "id": 2030,
            "questionText": "La tetanización muscular es un daño que puede ser causado por:",
            "options": [
                "Exposición prolongada al ruido.",
                "Inhalación de agentes químicos.",
                "El paso de corriente eléctrica por el cuerpo.",
                "Posturas de trabajo inadecuadas."
            ],
            "correctAnswerIndex": 2,
            "explanation": "El agarrotamiento muscular o tetanización, que es una contracción sostenida de los músculos, es uno de los daños que puede provocar un accidente eléctrico."
        },
            {
            "id": 3001,
            "questionText": "¿Cuál es la principal ley en España que establece el marco normativo básico de la prevención de riesgos laborales?",
            "options": [
                "El Estatuto de los Trabajadores (ET)",
                "La Ley General de la Seguridad Social (TRLGSS)",
                "La Ley de Prevención de Riesgos Laborales (LPRL 31/1995)",
                "El Reglamento de los Servicios de Prevención (RD 39/1997)"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La Ley 31/1995, de Prevención de Riesgos Laborales (LPRL), es la ley fundamental en España que sentó las bases normativas sobre seguridad y salud en el trabajo."
        },
        {
            "id": 3002,
            "questionText": "Según el artículo 40.2 de la Constitución Española, ¿quiénes tienen la obligación de velar por la seguridad e higiene en el trabajo?",
            "options": [
                "Los sindicatos exclusivamente",
                "Los propios trabajadores",
                "Los poderes públicos",
                "Las mutuas de accidentes de trabajo"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La Constitución Española impone a los poderes públicos la obligación de velar por la seguridad e higiene en el trabajo (Art. 40.2)."
        },
        {
            "id": 3003,
            "questionText": "¿Cuál de los siguientes es un deber de la empresa respecto a sus trabajadores en materia de PRL?",
            "options": [
                "Asumir solo una parte del coste de las medidas de seguridad.",
                "Informar y formar a los trabajadores únicamente al inicio del contrato.",
                "Consultar y permitir la participación de los trabajadores en materia de prevención.",
                "Delegar toda la responsabilidad preventiva en una entidad externa."
            ],
            "correctAnswerIndex": 2,
            "explanation": "Entre los deberes de la empresa respecto a los trabajadores está el de consultar y permitir su participación en materia de prevención de riesgos laborales."
        },
        {
            "id": 3004,
            "questionText": "Un trabajador tiene derecho a interrumpir su actividad y abandonar el lugar de trabajo cuando:",
            "options": [
                "Se sienta cansado.",
                "Considere que su salario es bajo.",
                "Haya un riesgo grave e inminente para su vida o su salud.",
                "Tenga una discusión con un compañero."
            ],
            "correctAnswerIndex": 2,
            "explanation": "El trabajador tiene derecho a interrumpir su actividad e, incluso, abandonar el lugar de trabajo, cuando haya un riesgo grave e inminente para su vida o su salud."
        },
        {
            "id": 3005,
            "questionText": "Si un empresario incumple la normativa de PRL, ¿qué tipo de responsabilidad NO se le podría exigir?",
            "options": [
                "Administrativa",
                "Civil",
                "Penal",
                "Moral exclusivamente"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Al empresario se le pueden exigir responsabilidades administrativa, civil y penal por incumplimientos en PRL. La responsabilidad moral puede existir, pero no es un tipo de responsabilidad legal sancionable como las otras."
        },
        {
            "id": 3006,
            "questionText": "Los representantes de los trabajadores con funciones específicas en materia de PRL se denominan:",
            "options": [
                "Delegados Sindicales",
                "Delegados de Personal",
                "Miembros del Comité de Empresa",
                "Delegados de Prevención"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Los Delegados de Prevención son los representantes de los trabajadores con funciones específicas en materia de prevención de riesgos en el trabajo."
        },
        {
            "id": 3007,
            "questionText": "El Comité de Seguridad y Salud es un órgano paritario obligatorio en empresas o centros de trabajo con:",
            "options": [
                "10 o más trabajadores.",
                "25 o más trabajadores.",
                "50 o más trabajadores.",
                "100 o más trabajadores."
            ],
            "correctAnswerIndex": 2,
            "explanation": "Se constituirá un Comité de Seguridad y Salud en todas las empresas o centros de trabajo que cuenten con 50 o más trabajadores."
        },
        {
            "id": 3008,
            "questionText": "Si una empresa de 8 trabajadores, cuya actividad no está en el Anexo I del RD 39/1997, y el empresario trabaja habitualmente en el centro y tiene la formación requerida, ¿puede el empresario asumir personalmente la actividad preventiva?",
            "options": [
                "No, siempre debe contratar un servicio de prevención ajeno.",
                "Sí, pero solo si todos los trabajadores están de acuerdo.",
                "Sí, cumpliendo esos requisitos, excepto la vigilancia de la salud.",
                "Solo si la empresa tiene menos de 5 trabajadores."
            ],
            "correctAnswerIndex": 2,
            "explanation": "El empresario puede asumir personalmente la actividad preventiva si la empresa tiene menos de 10 trabajadores (o menos de 25 si es un único centro y la actividad no está en el Anexo I), si trabaja habitualmente en el centro y si tiene la capacitación necesaria. No puede asumir la vigilancia de la salud."
        },
        {
            "id": 3009,
            "questionText": "Un Servicio de Prevención Propio es obligatorio, entre otros casos, cuando la empresa tiene más de:",
            "options": [
                "100 trabajadores.",
                "250 trabajadores.",
                "500 trabajadores.",
                "1000 trabajadores."
            ],
            "correctAnswerIndex": 2,
            "explanation": "Es obligatorio constituir un Servicio de Prevención Propio si la empresa tiene más de 500 trabajadores, o entre 250 y 500 si realizan alguna actividad del Anexo I del Reglamento de Servicios de Prevención."
        },
        {
            "id": 3010,
            "questionText": "El primer principio de la acción preventiva según el Art. 15 de la LPRL es:",
            "options": [
                "Evaluar los riesgos que no se puedan evitar.",
                "Combatir los riesgos en su origen.",
                "Evitar los riesgos.",
                "Adaptar el trabajo a la persona."
            ],
            "correctAnswerIndex": 2,
            "explanation": "El primer principio de la acción preventiva es evitar los riesgos. Si no es posible, se deben evaluar los que no se puedan evitar."
        },
        {
            "id": 3011,
            "questionText": "¿Cuál de estas técnicas preventivas se centra en evitar o controlar los accidentes de trabajo?",
            "options": [
                "Higiene industrial",
                "Ergonomía",
                "Seguridad en el trabajo",
                "Psicosociología aplicada"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La seguridad en el trabajo es la técnica preventiva que tiene como objetivo evitar o controlar los accidentes de trabajo."
        },
        {
            "id": 3012,
            "questionText": "Las medidas de protección __________ tienen prioridad sobre las medidas de protección __________.",
            "options": [
                "individuales / colectivas",
                "colectivas / individuales",
                "temporales / permanentes",
                "económicas / técnicas"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Las medidas de protección colectiva deben priorizarse sobre las medidas de protección individual."
        },
        {
            "id": 3013,
            "questionText": "Un casco de seguridad, guantes de protección y gafas contra impactos son ejemplos de:",
            "options": [
                "Medidas de protección colectiva.",
                "Equipos de Trabajo.",
                "Equipos de Protección Individual (EPI).",
                "Señalización de seguridad."
            ],
            "correctAnswerIndex": 2,
            "explanation": "El casco, los guantes y las gafas son Equipos de Protección Individual (EPI) diseñados para proteger al trabajador."
        },
        {
            "id": 3014,
            "questionText": "¿Qué significa una señal de seguridad de forma triangular con pictograma negro sobre fondo amarillo y borde negro?",
            "options": [
                "Prohibición",
                "Obligación",
                "Advertencia de peligro",
                "Salvamento o auxilio"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Las señales de advertencia tienen forma triangular, pictograma negro sobre fondo amarillo y borde negro, indicando un peligro."
        },
        {
            "id": 3015,
            "questionText": "El documento que establece el marco organizativo y funcional de un centro ante posibles emergencias para prevenir y controlar riesgos es el:",
            "options": [
                "Plan de Evacuación.",
                "Plan de Primeros Auxilios.",
                "Plan de Autoprotección.",
                "Informe de Evaluación de Riesgos."
            ],
            "correctAnswerIndex": 2,
            "explanation": "El Plan de Autoprotección (RD 393/2007) es el documento que establece el marco orgánico y funcional previsto para un centro, con el objeto de prevenir y controlar los riesgos sobre las personas y los bienes."
        },
        {
            "id": 3016,
            "questionText": "En caso de emergencia, la primera acción del protocolo PAS es:",
            "options": [
                "Avisar a los servicios de emergencia.",
                "Socorrer a la víctima.",
                "Proteger la zona y a la víctima.",
                "Evaluar el estado de consciencia."
            ],
            "correctAnswerIndex": 2,
            "explanation": "La primera actuación en la conducta PAS es Proteger, asegurando la zona del accidente para evitar nuevos peligros tanto para la víctima como para el auxiliador."
        },
        {
            "id": 3017,
            "questionText": "El botiquín de primeros auxilios en una empresa debe contener, entre otros elementos:",
            "options": [
                "Medicamentos con receta para dolencias comunes.",
                "Únicamente vendas y esparadrapo.",
                "Desinfectantes, antisépticos, gasas estériles y material de cura.",
                "Equipos de diagnóstico médico complejos."
            ],
            "correctAnswerIndex": 2,
            "explanation": "El contenido mínimo del botiquín incluye desinfectantes, antisépticos autorizados, gasas estériles, algodón hidrófilo, vendas, esparadrapo, apósitos adhesivos, tijeras, pinzas y guantes desechables."
        },
        {
            "id": 3018,
            "questionText": "Si una persona está inconsciente pero respira normalmente y no se sospecha traumatismo grave, ¿cuál es la posición recomendada?",
            "options": [
                "Tumbada boca arriba con las piernas elevadas.",
                "Sentada con la cabeza entre las rodillas.",
                "En Posición Lateral de Seguridad (PLS).",
                "Boca abajo para facilitar la respiración."
            ],
            "correctAnswerIndex": 2,
            "explanation": "Si la víctima está inconsciente pero respira normalmente y no hay sospecha de trauma, se debe colocar en Posición Lateral de Seguridad (PLS) para evitar atragantamientos."
        },
        {
            "id": 3019,
            "questionText": "La Maniobra de Heimlich se utiliza para:",
            "options": [
                "Controlar una hemorragia externa grave.",
                "Realizar la reanimación cardiopulmonar (RCP).",
                "Desobstruir la vía aérea por un cuerpo extraño (OVACE).",
                "Inmovilizar una fractura."
            ],
            "correctAnswerIndex": 2,
            "explanation": "La Maniobra de Heimlich es la técnica de primeros auxilios para la desobstrucción de la vía aérea en caso de atragantamiento (OVACE)."
        },
        {
            "id": 3020,
            "questionText": "En la clasificación de heridos por triaje, el color ROJO se asigna a los heridos:",
            "options": [
                "Leves que pueden esperar.",
                "Fallecidos o sin posibilidad de supervivencia.",
                "Con máxima prioridad que necesitan atención inmediata para sobrevivir.",
                "Urgentes pero que no están en peligro crítico inmediato."
            ],
            "correctAnswerIndex": 2,
            "explanation": "El código ROJO en triaje indica máxima prioridad, para heridos que necesitan atención inmediata para sobrevivir (ej. hemorragias severas)."
        },
        {
            "id": 3021,
            "questionText": "¿Cuál es el organismo técnico especializado de la Administración General del Estado que tiene como misión el análisis y estudio de las condiciones de seguridad y salud en el trabajo?",
            "options": [
                "La Inspección de Trabajo y Seguridad Social (ITSS).",
                "El Instituto Nacional de Seguridad y Salud en el Trabajo (INSST).",
                "La Comisión Nacional de Seguridad y Salud en el Trabajo (CNSST).",
                "La Fundación para la Prevención de Riesgos Laborales."
            ],
            "correctAnswerIndex": 1,
            "explanation": "El Instituto Nacional de Seguridad y Salud en el Trabajo (INSST) es el organismo científico técnico especializado de la Administración General del Estado que tiene como misión el análisis y estudio de las condiciones de seguridad y salud en el trabajo."
        },
        {
            "id": 3022,
            "questionText": "La ropa de trabajo común, como uniformes que no ofrecen protección específica contra un riesgo, ¿se considera EPI?",
            "options": [
                "Sí, siempre que la proporcione la empresa.",
                "No, la ropa de trabajo corriente no es un EPI.",
                "Solo si lleva el logotipo de la empresa.",
                "Depende del sector de actividad."
            ],
            "correctAnswerIndex": 1,
            "explanation": "La ropa de trabajo corriente y los uniformes que no estén específicamente destinados a proteger la salud o la integridad física del trabajador NO se consideran Equipos de Protección Individual."
        },
        {
            "id": 3023,
            "questionText": "El sistema de gestión de la prevención en la empresa debe incluir una fase de __________ para examinar sistemáticamente su eficacia.",
            "options": [
                "publicidad",
                "contratación",
                "auditoría",
                "sanción"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La auditoría es un examen sistemático para evaluar la eficacia del sistema de gestión de la prevención y su adecuación a la normativa."
        },
        {
            "id": 3024,
            "questionText": "Una señal de obligación (fondo azul, pictograma blanco) indica:",
            "options": [
                "Una advertencia de peligro.",
                "Un comportamiento o acción específica que se debe seguir.",
                "Una prohibición absoluta.",
                "La ubicación de equipos de salvamento."
            ],
            "correctAnswerIndex": 1,
            "explanation": "Las señales de obligación tienen forma redonda, pictograma blanco sobre fondo azul, e indican un comportamiento o acción específica que se debe seguir (ej. uso obligatorio de casco)."
        },
        {
            "id": 3025,
            "questionText": "Ante una quemadura grave, ¿cuál de las siguientes acciones es INCORRECTA?",
            "options": [
                "Alejar a la víctima de la fuente de calor.",
                "Aplicar abundante hielo directamente sobre la quemadura.",
                "Retirar ropa que no esté pegada a la piel.",
                "Llamar inmediatamente a los servicios de emergencia (112)."
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ante quemaduras graves, NO se debe aplicar hielo directamente, ni pomadas o remedios caseros. Se debe enfriar con agua templada si es pequeña, o cubrir y esperar ayuda si es extensa."
        },
        {
            "id": 3026,
            "questionText": "El número de Delegados de Prevención en una empresa se determina en función de:",
            "options": [
                "La facturación anual de la empresa.",
                "El número de trabajadores de la plantilla.",
                "La peligrosidad de la actividad.",
                "El acuerdo con la dirección."
            ],
            "correctAnswerIndex": 1,
            "explanation": "El número de Delegados de Prevención se determina según una escala basada en el número de trabajadores de la empresa o centro de trabajo."
        },
        {
            "id": 3027,
            "questionText": "Si una empresa contrata un Servicio de Prevención Ajeno, ¿queda eximida de toda responsabilidad en materia de PRL?",
            "options": [
                "Sí, la responsabilidad se transfiere completamente al servicio ajeno.",
                "No, la responsabilidad final siempre recae en el empresario.",
                "Solo si el servicio ajeno está acreditado oficialmente.",
                "Depende del tipo de contrato con el servicio ajeno."
            ],
            "correctAnswerIndex": 1,
            "explanation": "Aunque se recurra a un servicio de prevención ajeno, la responsabilidad última en materia de prevención de riesgos laborales siempre recae en el empresario."
        },
        {
            "id": 3028,
            "questionText": "La técnica preventiva que se ocupa de los contaminantes ambientales (físicos, químicos, biológicos) para prevenir enfermedades profesionales es la:",
            "options": [
                "Ergonomía",
                "Medicina laboral",
                "Seguridad en el trabajo",
                "Higiene industrial"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La Higiene Industrial es la técnica no médica de prevención de enfermedades profesionales que actúa identificando, midiendo y corrigiendo los factores ambientales contaminantes."
        },
        {
            "id": 3029,
            "questionText": "En el contexto de un plan de emergencias, los equipos de personas encargados de guiar la evacuación se denominan:",
            "options": [
                "Equipos de Primera Intervención (EPI)",
                "Equipos de Primeros Auxilios (EPA)",
                "Equipos de Alarma y Evacuación (EAE)",
                "Equipos de Segunda Intervención (ESI)"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Los Equipos de Alarma y Evacuación (EAE) son los responsables de asegurar que se haya transmitido la alarma y dirigir ordenadamente el flujo de evacuación."
        },
        {
            "id": 3030,
            "questionText": "¿Cuál es el objetivo principal al inmovilizar una fractura en primeros auxilios?",
            "options": [
                "Reducir la fractura y colocar el hueso en su sitio.",
                "Evitar el movimiento de los fragmentos óseos para no agravar la lesión.",
                "Aplicar calor para aliviar el dolor.",
                "Limpiar la herida interna si es una fractura abierta."
            ],
            "correctAnswerIndex": 1,
            "explanation": "El objetivo de inmovilizar una fractura es evitar el movimiento de los fragmentos óseos, lo que previene el dolor, el shock y que la lesión se agrave o se dañen partes blandas cercanas."
        },
   {
            "id": 4001,
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
            "id": 4006,
            "questionText": "Según la jerarquía normativa, ¿cuál de las siguientes fuentes del Derecho del Trabajo tiene un rango superior?",
            "options": [
                "El Contrato de Trabajo",
                "El Convenio Colectivo",
                "Los Usos y Costumbres locales",
                "La Constitución Española"
            ],
            "correctAnswerIndex": 3,
            "explanation": "La Constitución Española es la norma de mayor rango en el ordenamiento jurídico español, y todas las demás fuentes deben ajustarse a ella."
        },
        {
            "id": 4007,
            "questionText": "Un deportista profesional tiene una relación laboral de tipo:",
            "options": [
                "Ordinaria",
                "Especial",
                "Excluida (no laboral)",
                "Autónoma"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La relación laboral de los deportistas profesionales es una de las consideradas como 'relación laboral de carácter especial', regulada por normativa específica."
        },
        {
            "id": 4008,
            "questionText": "El derecho del trabajador a no ser discriminado en el acceso al empleo o una vez ocupado el puesto es un derecho derivado de:",
            "options": [
                "Únicamente el Convenio Colectivo",
                "La relación laboral y el Estatuto de los Trabajadores",
                "La costumbre del lugar",
                "Las políticas internas de la empresa exclusivamente"
            ],
            "correctAnswerIndex": 1,
            "explanation": "El derecho a la no discriminación es un derecho fundamental y laboral reconocido en la Constitución y el Estatuto de los Trabajadores."
        },
        {
            "id": 4009,
            "questionText": "Si un conflicto laboral no se resuelve por la vía administrativa (ITSS) o amistosa, ¿a qué órgano se puede acudir?",
            "options": [
                "Al Defensor del Pueblo",
                "A la Jurisdicción Social (Juzgados de lo Social)",
                "A la Agencia de Protección de Datos",
                "Al Ministerio de Economía"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Cuando un conflicto no ha podido ser resuelto por la ITSS o de forma amistosa, se puede acudir a los tribunales de la Jurisdicción Social."
        },
        {
            "id": 4010,
            "questionText": "En empresas con menos de 50 trabajadores, la representación unitaria se ejerce a través de:",
            "options": [
                "El Comité de Empresa",
                "Las Secciones Sindicales",
                "Los Delegados de Personal",
                "Un representante designado por el empresario"
            ],
            "correctAnswerIndex": 2,
            "explanation": "En empresas de menos de 50 trabajadores (y más de 10, o 6 si así se decide), la representación unitaria se realiza mediante los Delegados de Personal."
        },
        {
            "id": 4011,
            "questionText": "El principio que establece que, si una nueva norma empeora las condiciones de un contrato vigente, prevalecen las del contrato, se llama:",
            "options": [
                "Principio de Norma Mínima",
                "Principio de Primacía de la Realidad",
                "Principio de Condición Más Beneficiosa",
                "Principio In Dubio Pro Operario"
            ],
            "correctAnswerIndex": 2,
            "explanation": "El Principio de Condición Más Beneficiosa implica que, en caso de que se apruebe una norma posterior con condiciones menos beneficiosas que las que se estén disfrutando en un contrato, prevalecerán las del contrato."
        },
        {
            "id": 4012,
            "questionText": "El trabajo realizado por familiares que convivan con el empresario (hasta 2º grado) se considera, en general:",
            "options": [
                "Relación laboral ordinaria",
                "Relación laboral especial",
                "Relación no laboral (excluida del ET)",
                "Siempre trabajo autónomo"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Los trabajos familiares realizados por familiares que convivan con el empresario (hasta el segundo grado) están excluidos del ámbito del Estatuto de los Trabajadores, salvo que se demuestre su condición de asalariados."
        },
        {
            "id": 4013,
            "questionText": "El derecho a la 'ocupación efectiva' significa que el trabajador tiene derecho a:",
            "options": [
                "Un puesto de trabajo con vistas al exterior.",
                "Que se le asignen tareas y los medios para realizarlas.",
                "Un contrato de duración indefinida.",
                "Trabajar siempre en el mismo departamento."
            ],
            "correctAnswerIndex": 1,
            "explanation": "El derecho a la ocupación efectiva implica la asignación de unas tareas y funciones específicas y de los medios necesarios para el desarrollo de estas."
        },
        {
            "id": 4014,
            "questionText": "Los sindicatos más representativos a nivel estatal son aquellos que acreditan al menos el ____ del total de delegados de personal y miembros de comité de empresa.",
            "options": [
                "5%",
                "10%",
                "15%",
                "20%"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Los sindicatos más representativos a nivel estatal deben acreditar el 10% o más del total de delegados de personal y miembros de comité de empresa."
        },
        {
            "id": 4015,
            "questionText": "El ámbito de aplicación de un Convenio Colectivo que se refiere a la rama, sector o actividad a la que afecta, es el ámbito:",
            "options": [
                "Geográfico",
                "Personal",
                "Temporal",
                "Funcional"
            ],
            "correctAnswerIndex": 3,
            "explanation": "El ámbito funcional de un convenio colectivo se refiere a la rama, sector, actividad o empresa a la que afecta."
        },
        {
            "id": 4016,
            "questionText": "Si un Convenio Colectivo es denunciado y transcurre un año sin nuevo acuerdo ni laudo, ¿qué sucede con su vigencia?",
            "options": [
                "Se prorroga automáticamente por otro año.",
                "Pierde su vigencia y se aplica el Estatuto de los Trabajadores directamente.",
                "Pierde su vigencia, aplicándose, en su caso, el convenio colectivo de ámbito superior.",
                "Sigue vigente indefinidamente hasta que haya un nuevo acuerdo."
            ],
            "correctAnswerIndex": 2,
            "explanation": "Si pasa un año desde la denuncia de un convenio y no se ha pactado uno nuevo o dictado un laudo arbitral, el convenio pierde la vigencia, aplicándose, si existe, el convenio colectivo de ámbito superior."
        },
        {
            "id": 4017,
            "questionText": "El cierre del centro de trabajo por decisión del empresario como medida de conflicto colectivo se denomina:",
            "options": [
                "Huelga de celo",
                "Despido colectivo",
                "Cierre patronal (lock-out)",
                "Suspensión de pagos"
            ],
            "correctAnswerIndex": 2,
            "explanation": "El cierre patronal es la suspensión colectiva del trabajo y la clausura del centro laboral por decisión del empresario, bajo causas tasadas."
        },
        {
            "id": 4018,
            "questionText": "En el procedimiento extrajudicial de solución de conflictos, ¿cuál implica que un tercero imparcial toma una decisión vinculante para las partes?",
            "options": [
                "Negociación",
                "Mediación",
                "Conciliación",
                "Arbitraje"
            ],
            "correctAnswerIndex": 3,
            "explanation": "En el arbitraje, las partes deciden contar con un tercero imparcial (árbitro) para que solucione el problema, y su decisión (laudo) es vinculante."
        },
        {
            "id": 4019,
            "questionText": "El Estatuto Básico del Empleado Público (EBEP) regula la relación laboral de:",
            "options": [
                "Los trabajadores autónomos.",
                "Los trabajadores por cuenta ajena del sector privado.",
                "Los funcionarios públicos.",
                "Los deportistas profesionales."
            ],
            "correctAnswerIndex": 2,
            "explanation": "El Estatuto Básico del Empleado Público (EBEP) regula la relación de servicio de los funcionarios públicos, que es una relación no laboral excluida del ET."
        },
        {
            "id": 4020,
            "questionText": "La característica de la relación laboral que implica que el trabajador sigue las órdenes y directrices del empresario se denomina:",
            "options": [
                "Voluntariedad",
                "Ajenidad",
                "Dependencia",
                "Personalista"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La dependencia significa que el empresario organiza y dirige la actividad laboral y el trabajador sigue sus órdenes."
        },
        {
            "id": 4021,
            "questionText": "El derecho a la libre sindicación incluye el derecho a:",
            "options": [
                "Fundar sindicatos y afiliarse al de su elección.",
                "No pagar cuotas sindicales aunque se esté afiliado.",
                "Obligar a otros trabajadores a afiliarse.",
                "Que el sindicato negocie individualmente el salario de cada afiliado."
            ],
            "correctAnswerIndex": 0,
            "explanation": "La libertad sindical, reconocida como derecho fundamental, incluye el derecho a fundar sindicatos, afiliarse al de su elección, elegir representación dentro del sindicato y ejercer la actividad sindical."
        },
        {
            "id": 4022,
            "questionText": "El Comité de Empresa, como órgano de representación unitaria, se constituye en empresas con:",
            "options": [
                "Cualquier número de trabajadores.",
                "Menos de 50 trabajadores.",
                "50 o más trabajadores.",
                "Más de 250 trabajadores exclusivamente."
            ],
            "correctAnswerIndex": 2,
            "explanation": "Cuando una organización cuente con 50 trabajadores o más, la representación unitaria deberá ejercerse mediante un comité de empresa."
        },
        {
            "id": 4023,
            "questionText": "Una de las garantías de los representantes de los trabajadores es la prioridad de permanencia en la empresa en caso de:",
            "options": [
                "Solicitud de vacaciones.",
                "Reparto de beneficios.",
                "Movilidad geográfica o suspensión/extinción por causas económicas/tecnológicas.",
                "Ascensos a puestos directivos."
            ],
            "correctAnswerIndex": 2,
            "explanation": "Los representantes de los trabajadores tienen prioridad de permanencia en la empresa o lugar de trabajo en supuestos de movilidad geográfica y de suspensión o extinción de contratos por razones económicas o tecnológicas."
        },
        {
            "id": 4024,
            "questionText": "Las Secciones Sindicales se constituyen en el ámbito de:",
            "options": [
                "La provincia.",
                "La comunidad autónoma.",
                "La empresa o centro de trabajo.",
                "El sector de actividad a nivel nacional."
            ],
            "correctAnswerIndex": 2,
            "explanation": "Las Secciones Sindicales se constituyen por los trabajadores afiliados a un sindicato en el ámbito de la empresa o centro de trabajo."
        },
        {
            "id": 4025,
            "questionText": "El contenido mínimo de un Convenio Colectivo debe incluir, entre otros:",
            "options": [
                "El plan de marketing de la empresa.",
                "La determinación de las partes que lo conciertan y su ámbito de aplicación.",
                "Los nombres de todos los trabajadores de la empresa.",
                "Un análisis DAFO del sector."
            ],
            "correctAnswerIndex": 1,
            "explanation": "El contenido mínimo de todo convenio colectivo debe incluir la determinación de las partes que lo conciertan, el ámbito personal, funcional, territorial y temporal, y la forma y condiciones de denuncia del convenio."
        },
        {
            "id": 4026,
            "questionText": "Si un trabajador considera que sus derechos laborales están siendo vulnerados, puede presentar una denuncia ante:",
            "options": [
                "La policía local.",
                "El ayuntamiento.",
                "La Inspección de Trabajo y Seguridad Social (ITSS).",
                "El Defensor del Menor."
            ],
            "correctAnswerIndex": 2,
            "explanation": "Los trabajadores pueden presentar denuncias ante la ITSS si consideran que sus derechos laborales están siendo vulnerados."
        },
        {
            "id": 4027,
            "questionText": "La fuente del Derecho del Trabajo que se crea e impone de manera espontánea por la actividad diaria de trabajadores y empresarios en una localidad o profesión es:",
            "options": [
                "El Reglamento de la empresa.",
                "La Ley Orgánica.",
                "El Contrato de Trabajo.",
                "Los Usos y Costumbres locales y profesionales."
            ],
            "correctAnswerIndex": 3,
            "explanation": "Los Usos y Costumbres locales y profesionales son normas que se crean e imponen de manera espontánea y solo se aplican en defecto de disposiciones legales o contractuales."
        },
        {
            "id": 4028,
            "questionText": "Un conflicto laboral que afecta a los intereses generales de un grupo de trabajadores se considera:",
            "options": [
                "Conflicto individual",
                "Conflicto de intereses personales",
                "Conflicto colectivo",
                "Conflicto disciplinario"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Un conflicto colectivo es la manifestación de las discrepancias laborales entre los empresarios y un grupo más o menos amplio de trabajadores, que afecta a los intereses generales de estos últimos."
        },
        {
            "id": 4029,
            "questionText": "La Ley Orgánica 11/1985, de 2 de agosto, desarrolla el derecho fundamental a:",
            "options": [
                "La huelga.",
                "La negociación colectiva.",
                "La Libertad Sindical.",
                "La participación en la empresa."
            ],
            "correctAnswerIndex": 2,
            "explanation": "La Ley Orgánica 11/1985, de 2 de agosto, de Libertad Sindical (LOLS), desarrolla el derecho fundamental a la libertad sindical reconocido en la Constitución."
        },
        {
            "id": 4030,
            "questionText": "El 'crédito de horas' es una garantía de los representantes de los trabajadores que consiste en:",
            "options": [
                "Un préstamo de la empresa para formación.",
                "Un número de horas retribuidas al mes para realizar sus funciones de representación.",
                "Horas extra obligatorias para los representantes.",
                "Un descuento en la jornada laboral sin reducción de salario."
            ],
            "correctAnswerIndex": 1,
            "explanation": "El crédito de horas es un número de horas de trabajo retribuidas al mes de las que disponen los representantes de los trabajadores para realizar sus funciones de representación."
        },
{
            "id": 5001,
            "questionText": "¿Cuál es la edad mínima general para que una persona física pueda firmar un contrato de trabajo sin necesidad de autorización de sus padres o tutores?",
            "options": [
                "16 años",
                "18 años",
                "21 años",
                "No hay límite de edad"
            ],
            "correctAnswerIndex": 1,
            "explanation": "Para firmar un contrato de trabajo, es necesario ser mayor de 18 años. Los mayores de 16 y menores de 18 pueden hacerlo si están emancipados o cuentan con autorización parental."
        },
        {
            "id": 5002,
            "questionText": "El acuerdo entre empresario y trabajador donde este se compromete a realizar un servicio a cambio de una remuneración se denomina:",
            "options": [
                "Convenio Colectivo",
                "Pacto de empresa",
                "Contrato de trabajo",
                "Acuerdo de colaboración"
            ],
            "correctAnswerIndex": 2,
            "explanation": "El contrato de trabajo es un acuerdo entre el empresario y el trabajador, donde el trabajador se compromete, de forma voluntaria, a la realización de un servicio a cambio de una remuneración."
        },
        {
            "id": 5003,
            "questionText": "¿Cuál de estos contratos NO necesita formalizarse por escrito obligatoriamente?",
            "options": [
                "Contrato fijo discontinuo",
                "Contrato para la formación en alternancia",
                "Contrato indefinido ordinario",
                "Contrato de sustitución"
            ],
            "correctAnswerIndex": 2,
            "explanation": "El contrato indefinido ordinario puede formalizarse de manera verbal, aunque cualquiera de las partes puede exigir su formalización por escrito."
        },
        {
            "id": 5004,
            "questionText": "La cláusula contractual por la que el trabajador se compromete a no trabajar para empresas competidoras una vez finalizada la relación laboral, a cambio de una compensación, se llama:",
            "options": [
                "Pacto de confidencialidad",
                "Pacto de permanencia",
                "Pacto de no competencia postcontractual",
                "Pacto de dedicación plena"
            ],
            "correctAnswerIndex": 2,
            "explanation": "El pacto de no competencia postcontractual implica que el trabajador se compromete a no trabajar para empresas competidoras una vez finalizada la relación laboral, con una duración máxima y compensación económica."
        },
        {
            "id": 5005,
            "questionText": "Según la reforma laboral (RD-ley 32/2021), el contrato de trabajo se presume concertado por tiempo:",
            "options": [
                "Determinado, salvo pacto en contrario.",
                "Indefinido.",
                "Parcial, por defecto.",
                "Formativo, si el trabajador es joven."
            ],
            "correctAnswerIndex": 1,
            "explanation": "La reforma laboral de 2021 busca generalizar el contrato indefinido, por lo que el contrato de trabajo se presume concertado por tiempo indefinido."
        },
        {
            "id": 5006,
            "questionText": "Un contrato fijo discontinuo se utiliza para trabajos de naturaleza estacional o actividades productivas de temporada que se repiten en fechas:",
            "options": [
                "Ciertas y determinadas cada año.",
                "Inciertas dentro de la actividad normal.",
                "Exclusivamente durante un mes al año.",
                "Que no superan los 90 días."
            ],
            "correctAnswerIndex": 1,
            "explanation": "El contrato fijo discontinuo es para trabajos de naturaleza estacional o actividades productivas de temporada, o para prestaciones intermitentes en períodos que pueden ser inciertos dentro del volumen normal de actividad."
        },
        {
            "id": 5007,
            "questionText": "El contrato temporal por circunstancias de la producción para atender situaciones ocasionales, PREVISIBLES y de duración reducida, tiene una duración máxima de:",
            "options": [
                "3 meses al año natural.",
                "6 meses al año natural.",
                "90 días en el año natural, no continuados.",
                "1 año si lo establece el convenio."
            ],
            "correctAnswerIndex": 2,
            "explanation": "Para atender situaciones ocasionales, previsibles y de duración reducida, el contrato por circunstancias de la producción puede durar un máximo de 90 días en el año natural, que no pueden ser utilizados de forma continuada."
        },
        {
            "id": 5008,
            "questionText": "El contrato de sustitución para cubrir temporalmente un puesto durante un proceso de selección o promoción tiene una duración máxima de:",
            "options": [
                "1 mes",
                "3 meses",
                "6 meses",
                "Hasta que finalice el proceso, sin límite."
            ],
            "correctAnswerIndex": 1,
            "explanation": "En el caso de que el contrato de sustitución se realice para cubrir temporalmente un puesto de trabajo durante el proceso de selección o promoción, la duración máxima será de tres meses."
        },
        {
            "id": 5009,
            "questionText": "¿Cuál es el objetivo principal del contrato para la formación en alternancia?",
            "options": [
                "Sustituir a un trabajador de baja.",
                "Realizar trabajos de muy corta duración.",
                "Compatibilizar actividad laboral retribuida con formación reglada.",
                "Adquirir experiencia tras finalizar los estudios."
            ],
            "correctAnswerIndex": 2,
            "explanation": "El contrato para la formación en alternancia tiene como objetivo compatibilizar la actividad laboral retribuida por cuenta ajena con la formación necesaria para adquirir una competencia profesional."
        },
        {
            "id": 5010,
            "questionText": "El contrato formativo para la obtención de la práctica profesional se puede celebrar si no han pasado más de ____ años desde la finalización de los estudios (o ____ si es persona con discapacidad).",
            "options": [
                "1 año / 3 años",
                "2 años / 4 años",
                "3 años / 5 años",
                "5 años / 7 años"
            ],
            "correctAnswerIndex": 2,
            "explanation": "El contrato para la obtención de la práctica profesional se puede celebrar si no han pasado más de tres años (o cinco años en caso de discapacidad) desde la finalización de los estudios."
        },
        {
            "id": 5011,
            "questionText": "El contrato de relevo se utiliza para sustituir la jornada de un trabajador que accede a:",
            "options": [
                "Una excedencia voluntaria.",
                "Un permiso de paternidad.",
                "La jubilación parcial anticipada.",
                "Una incapacidad temporal."
            ],
            "correctAnswerIndex": 2,
            "explanation": "El contrato de relevo se establece para la sustitución de un trabajador de la empresa que accede a la jubilación parcial anticipada."
        },
        {
            "id": 5012,
            "questionText": "En un contrato a tiempo parcial, ¿se pueden realizar horas extraordinarias?",
            "options": [
                "Sí, sin ningún límite.",
                "No, están totalmente prohibidas.",
                "Solo las de fuerza mayor.",
                "Sí, hasta un 15% de la jornada ordinaria."
            ],
            "correctAnswerIndex": 2,
            "explanation": "Los empleados con contrato a tiempo parcial, a no ser que sea por fuerza mayor, no están autorizados a la realización de horas extraordinarias. Pueden realizar horas complementarias si se pactan."
        },
        {
            "id": 5013,
            "questionText": "La asignación al trabajador de funciones de un grupo profesional inferior, manteniendo el salario de origen, se denomina:",
            "options": [
                "Movilidad funcional horizontal.",
                "Movilidad funcional ascendente.",
                "Movilidad funcional descendente.",
                "Traslado geográfico."
            ],
            "correctAnswerIndex": 2,
            "explanation": "La movilidad funcional descendente consiste en asignar funciones de un grupo profesional inferior, respetando siempre el salario de origen del trabajador."
        },
        {
            "id": 5014,
            "questionText": "Un cambio de centro de trabajo que obliga al trabajador a cambiar de residencia de forma definitiva se considera:",
            "options": [
                "Desplazamiento temporal.",
                "Modificación sustancial de condiciones.",
                "Traslado geográfico.",
                "Movilidad funcional."
            ],
            "correctAnswerIndex": 2,
            "explanation": "Se considera traslado geográfico cuando el trabajador es destinado a un centro de trabajo que le supone un cambio de residencia definitivo o acumula desplazamientos que superan los doce meses en tres años."
        },
        {
            "id": 5015,
            "questionText": "¿Cuál de estas NO es una materia considerada modificación sustancial de las condiciones de trabajo según el Art. 41 ET?",
            "options": [
                "Jornada de trabajo.",
                "Horario y distribución del tiempo.",
                "Sistema de remuneración y cuantía salarial.",
                "El color del uniforme de trabajo."
            ],
            "correctAnswerIndex": 3,
            "explanation": "Las modificaciones sustanciales afectan a jornada, horario, régimen de turnos, sistema de remuneración, sistema de trabajo y rendimiento, y funciones (si exceden movilidad funcional). El color del uniforme no suele considerarse sustancial."
        },
        {
            "id": 5016,
            "questionText": "La interrupción temporal de las obligaciones de trabajar y remunerar, manteniendo el vínculo jurídico, se llama:",
            "options": [
                "Extinción del contrato.",
                "Modificación del contrato.",
                "Suspensión del contrato.",
                "Periodo de prueba."
            ],
            "correctAnswerIndex": 2,
            "explanation": "La suspensión de la relación laboral supone la exoneración temporal de las obligaciones de trabajar y remunerar el trabajo, pero manteniendo el vínculo jurídico existente."
        },
        {
            "id": 5017,
            "questionText": "La dimisión del trabajador es una causa de extinción del contrato que requiere, generalmente:",
            "options": [
                "La aprobación del empresario.",
                "Una indemnización al empresario.",
                "Un preaviso según convenio o costumbre.",
                "Una causa justificada por parte del trabajador."
            ],
            "correctAnswerIndex": 2,
            "explanation": "La dimisión del trabajador es una causa de extinción del contrato, debiendo mediar el preaviso que señalen los convenios colectivos o la costumbre del lugar."
        },
        {
            "id": 5018,
            "questionText": "El despido basado en un incumplimiento grave y culpable del trabajador se denomina:",
            "options": [
                "Despido objetivo.",
                "Despido colectivo.",
                "Despido disciplinario.",
                "Despido por fuerza mayor."
            ],
            "correctAnswerIndex": 2,
            "explanation": "El despido disciplinario es la extinción del contrato por decisión del empresario basada en un incumplimiento grave y culpable del trabajador."
        },
        {
            "id": 5019,
            "questionText": "La ineptitud del trabajador conocida o sobrevenida con posterioridad es una causa de:",
            "options": [
                "Despido disciplinario.",
                "Despido objetivo.",
                "Suspensión del contrato.",
                "Movilidad funcional."
            ],
            "correctAnswerIndex": 1,
            "explanation": "La ineptitud del trabajador conocida o sobrevenida con posterioridad a su colocación efectiva en la empresa es una de las causas objetivas de despido."
        },
        {
            "id": 5020,
            "questionText": "Si un despido es declarado IMPROCEDENTE por un juez, el empresario debe optar entre la readmisión del trabajador o:",
            "options": [
                "Una sanción económica al trabajador.",
                "El pago de una indemnización.",
                "Una disculpa pública.",
                "La reducción de la jornada del trabajador."
            ],
            "correctAnswerIndex": 1,
            "explanation": "En caso de despido improcedente, el empresario tendrá que optar entre la readmisión del trabajador (abonando salarios de tramitación) o el pago de una indemnización (generalmente 33 días por año trabajado)."
        },
        {
            "id": 5021,
            "questionText": "El documento que liquida las cantidades adeudadas al trabajador al finalizar la relación laboral se llama:",
            "options": [
                "Certificado de empresa.",
                "Carta de despido.",
                "Finiquito.",
                "Nómina final."
            ],
            "correctAnswerIndex": 2,
            "explanation": "El finiquito es el documento con el cual se pone fin de manera oficial a la relación laboral, reflejando la propuesta de liquidación de las cantidades adeudadas."
        },
        {
            "id": 5022,
            "questionText": "La duración máxima del contrato para la formación en alternancia es de:",
            "options": [
                "6 meses",
                "1 año",
                "2 años",
                "3 años"
            ],
            "correctAnswerIndex": 2,
            "explanation": "La duración mínima del contrato para la formación en alternancia será de tres meses y la máxima de 2 años."
        },
        {
            "id": 5023,
            "questionText": "El contrato fijo discontinuo debe formalizarse siempre:",
            "options": [
                "Verbalmente, si es inferior a un mes.",
                "Por escrito.",
                "Solo si lo solicita el trabajador.",
                "Depende del sector de actividad."
            ],
            "correctAnswerIndex": 1,
            "explanation": "El contrato fijo discontinuo se debe formalizar por escrito, indicando la duración estimada de la actividad, la jornada y su distribución horaria."
        },
        {
            "id": 5024,
            "questionText": "Si un trabajador encadena dos o más contratos por circunstancias de la producción superando los 18 meses en un periodo de 24, ¿qué sucede?",
            "options": [
                "Debe tomar un descanso obligatorio de 6 meses.",
                "La empresa debe ofrecerle un contrato formativo.",
                "Adquiere la condición de trabajador fijo.",
                "Su último contrato se considera nulo."
            ],
            "correctAnswerIndex": 2,
            "explanation": "Si un trabajador, dentro de un período de 24 meses, hubiera estado contratado durante un plazo superior a 18 meses mediante dos o más contratos por circunstancias de la producción, adquirirá la condición de trabajador fijo."
        },
        {
            "id": 5025,
            "questionText": "La suspensión del contrato por Incapacidad Temporal (IT) tiene una duración máxima inicial de:",
            "options": [
                "3 meses, prorrogables por otros 3.",
                "6 meses, prorrogables por otros 6.",
                "12 meses, prorrogables por otros 6.",
                "18 meses, sin prórroga posible."
            ],
            "correctAnswerIndex": 2,
            "explanation": "La duración de la incapacidad temporal es de 365 días (12 meses), prorrogable otros 180 días (6 meses) si se estima que la persona puede concluir su recuperación."
        },
        {
            "id": 5026,
            "questionText": "Un despido declarado NULO por un juez implica:",
            "options": [
                "El pago de una doble indemnización.",
                "La readmisión obligatoria del trabajador y el pago de salarios de tramitación.",
                "La posibilidad de que el empresario elija entre readmisión o indemnización.",
                "Una sanción económica para el trabajador."
            ],
            "correctAnswerIndex": 1,
            "explanation": "Un despido nulo atenta contra derechos fundamentales y/o libertades públicas, por lo que queda anulado y se obliga a la readmisión del trabajador en la empresa y al pago de los salarios de tramitación."
        },
        {
            "id": 5027,
            "questionText": "El contrato de relevo está vinculado a la situación de un trabajador que:",
            "options": [
                "Pide una excedencia para cuidado de hijos.",
                "Accede a la jubilación parcial.",
                "Es trasladado a otro centro de trabajo.",
                "Está en situación de incapacidad temporal."
            ],
            "correctAnswerIndex": 1,
            "explanation": "El contrato de relevo se concierta con un trabajador para sustituir la jornada dejada vacante por otro trabajador de la empresa que accede a la jubilación parcial."
        },
        {
            "id": 5028,
            "questionText": "Las horas complementarias son propias del contrato:",
            "options": [
                "Indefinido ordinario a jornada completa.",
                "De formación en alternancia.",
                "A tiempo parcial.",
                "De sustitución."
            ],
            "correctAnswerIndex": 2,
            "explanation": "Las horas complementarias son aquellas que se pueden realizar en los contratos a tiempo parcial, previo pacto escrito, y que exceden la jornada ordinaria pactada."
        },
        {
            "id": 5029,
            "questionText": "Si el empresario modifica sustancialmente las condiciones de trabajo (MSCT) y el trabajador no está de acuerdo, una de sus opciones es:",
            "options": [
                "Solicitar una excedencia forzosa.",
                "Rescindir el contrato con derecho a indemnización de 20 días por año.",
                "Exigir una subida salarial inmediata.",
                "Denunciar a la empresa por acoso laboral."
            ],
            "correctAnswerIndex": 1,
            "explanation": "Ante una MSCT, si el trabajador resulta perjudicado y no la acepta, tiene derecho a rescindir su contrato y percibir una indemnización de 20 días de salario por año de servicio, con un máximo de nueve mensualidades."
        },
        {
            "id": 5030,
            "questionText": "El plazo para que el empresario comunique a los servicios públicos de empleo la formalización de un contrato es de:",
            "options": [
                "24 horas.",
                "3 días hábiles.",
                "10 días naturales.",
                "15 días naturales."
            ],
            "correctAnswerIndex": 2,
            "explanation": "El empresario tiene la obligación de comunicar a los servicios públicos de empleo correspondientes la formalización del contrato, en un plazo de diez días tras su celebración."
        },
{
            "id": 6001,
            "questionText": "La duración máxima de la jornada laboral ordinaria en España, en cómputo anual, es de:",
            "options": [
                "35 horas semanales",
                "40 horas semanales",
                "42 horas semanales",
                "38 horas semanales"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La duración máxima de la jornada será de 40 horas semanales de trabajo efectivo de promedio en cómputo anual."
        },
        {
            "id": 6002,
            "questionText": "El tiempo de trabajo que se realiza entre las 22:00 y las 6:00 horas se considera:",
            "options": [
                "Trabajo a turnos",
                "Hora extraordinaria",
                "Trabajo nocturno",
                "Jornada partida"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Se considera trabajo nocturno el realizado entre las diez de la noche (22:00) y las seis de la mañana (6:00)."
        },
        {
            "id": 6003,
            "questionText": "El periodo mínimo de vacaciones anuales retribuidas que garantiza el Estatuto de los Trabajadores es de:",
            "options": [
                "20 días naturales",
                "25 días laborables",
                "30 días naturales",
                "22 días laborables"
            ],
            "correctAnswerIndex": 2,
            "explanation": "El periodo de vacaciones anuales retribuidas, no sustituible por compensación económica, será el pactado en convenio colectivo o contrato individual, y en ningún caso su duración será inferior a treinta días naturales."
        },
        {
            "id": 6004,
            "questionText": "¿Cuál es la duración máxima del periodo de prueba para un técnico titulado según el Estatuto de los Trabajadores, si el convenio no dice nada?",
            "options": [
                "1 mes",
                "2 meses",
                "3 meses",
                "6 meses"
            ],
            "correctAnswerIndex": 3,
            "explanation": "Si el convenio colectivo no establece otra cosa, la duración máxima del periodo de prueba será de seis meses para los técnicos titulados."
        },
        {
            "id": 6005,
            "questionText": "La capacidad de una persona para ajustarse y responder eficazmente a cambios, desafíos y nuevas circunstancias en el entorno laboral se denomina:",
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
            "id": 6006,
            "questionText": "Las horas de trabajo que se completan fuera de la jornada ordinaria establecida se denominan:",
            "options": [
                "Horas complementarias",
                "Horas de presencia",
                "Horas extraordinarias",
                "Horas de guardia"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Son horas extraordinarias las horas de trabajo que se completan fuera de la jornada establecida en el contrato o convenio."
        },
        {
            "id": 6007,
            "questionText": "El descanso mínimo entre el final de una jornada y el comienzo de la siguiente debe ser de:",
            "options": [
                "8 horas",
                "10 horas",
                "12 horas",
                "14 horas"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Entre el final de una jornada y el comienzo de la siguiente mediarán, como mínimo, doce horas."
        },
        {
            "id": 6008,
            "questionText": "Si una jornada diaria continuada excede de seis horas, el trabajador tiene derecho a un descanso durante la misma de, al menos:",
            "options": [
                "10 minutos",
                "15 minutos",
                "20 minutos",
                "30 minutos"
            ],
            "correctAnswerIndex": 1,
            "explanation": "En jornadas continuadas que excedan de seis horas, se disfrutará de un descanso no inferior a 15 minutos."
        },
        {
            "id": 6009,
            "questionText": "¿Cuántas fiestas laborales, como máximo, puede haber al año, incluyendo nacionales, autonómicas y locales?",
            "options": [
                "10",
                "12",
                "14",
                "16"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Las fiestas laborales, que tendrán carácter retribuido y no recuperable, no excederán de catorce al año, de las cuales dos serán locales."
        },
        {
            "id": 6010,
            "questionText": "Un trabajador puede ausentarse del trabajo con derecho a remuneración por motivo de matrimonio durante:",
            "options": [
                "5 días naturales",
                "10 días naturales",
                "15 días naturales",
                "1 mes natural"
            ],
            "correctAnswerIndex": 2,
            "explanation": "El trabajador, previo aviso y justificación, podrá ausentarse del trabajo, con derecho a remuneración, por matrimonio, durante quince días naturales."
        },
        {
            "id": 6011,
            "questionText": "El periodo de prueba en un contrato de trabajo:",
            "options": [
                "Es obligatorio en todos los contratos.",
                "No computa a efectos de antigüedad.",
                "Puede ser resuelto libremente por cualquiera de las partes sin alegar causa.",
                "Tiene una duración fija de 1 mes para todos los trabajadores."
            ],
            "correctAnswerIndex": 2,
            "explanation": "Durante el periodo de prueba, cualquiera de las partes puede romper la relación laboral en cualquier momento y sin ningún tipo de consecuencia o penalización, sin necesidad de alegar causa."
        },
        {
            "id": 6012,
            "questionText": "La transformación digital, la flexibilidad laboral y el auge del teletrabajo son características del:",
            "options": [
                "Entorno laboral del siglo XX",
                "Entorno laboral actual",
                "Sistema de Formación Profesional",
                "Derecho procesal social"
            ],
            "correctAnswerIndex": 1,
            "explanation": "El entorno laboral actual se caracteriza por la transformación digital, la flexibilidad, el trabajo remoto, el enfoque en diversidad e inclusión, y la economía gig, entre otros."
        },
        {
            "id": 6013,
            "questionText": "El derecho del trabajador a no estar disponible las 24 horas del día, marcando límites entre el espacio laboral y personal, se relaciona con:",
            "options": [
                "El derecho a la promoción profesional.",
                "El derecho a la desconexión digital.",
                "El derecho a la libre sindicación.",
                "El derecho a la huelga."
            ],
            "correctAnswerIndex": 1,
            "explanation": "El derecho a la desconexión digital implica que los empleados no deben estar disponibles constantemente, estableciendo límites claros entre el tiempo de trabajo y el personal."
        },
        {
            "id": 6014,
            "questionText": "La capacidad de asumir con flexibilidad situaciones límite y sobreponerse a ellas, aprendiendo de los fracasos, se denomina:",
            "options": [
                "Optimismo",
                "Resiliencia",
                "Empatía",
                "Autoconfianza"
            ],
            "correctAnswerIndex": 1,
            "explanation": "La resiliencia es la capacidad de adaptarse, recuperarse y crecer frente a las adversidades y los desafíos, como los fracasos."
        },
        {
            "id": 6015,
            "questionText": "Antes de acudir a la vía judicial por un conflicto laboral individual, generalmente es obligatorio intentar una:",
            "options": [
                "Huelga",
                "Manifestación",
                "Conciliación o mediación ante el SMAC",
                "Denuncia ante la policía"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Cuando un trabajador no está conforme con decisiones del empresario, debe intentar una mediación o conciliación ante el Servicio de Mediación, Arbitraje y Conciliación (SMAC) antes de la vía judicial."
        },
        {
            "id": 6016,
            "questionText": "El máximo de horas extraordinarias que se pueden realizar al año, sin contar las compensadas con descanso o las de fuerza mayor, es de:",
            "options": [
                "40 horas",
                "60 horas",
                "80 horas",
                "100 horas"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Como máximo, se harán 80 horas extraordinarias al año, a no ser que se compensen con tiempo libre o sean por fuerza mayor."
        },
        {
            "id": 6017,
            "questionText": "Un trabajador nocturno es aquel que realiza en horario nocturno (22:00-6:00) al menos:",
            "options": [
                "1 hora de su jornada diaria.",
                "2 horas de su jornada diaria o 1/4 de su jornada anual.",
                "3 horas de su jornada diaria o 1/3 de su jornada anual.",
                "La mitad de su jornada diaria."
            ],
            "correctAnswerIndex": 2,
            "explanation": "Se considera trabajador nocturno a aquel que realice normalmente en período nocturno una parte no inferior a tres horas de su jornada diaria de trabajo, o que se prevea que puede realizar en tal período una parte no inferior a un tercio de su jornada de trabajo anual."
        },
        {
            "id": 6018,
            "questionText": "El descanso semanal mínimo para los trabajadores menores de 18 años es de:",
            "options": [
                "Un día y medio ininterrumpido.",
                "Dos días ininterrumpidos.",
                "Un día completo.",
                "Depende del convenio colectivo."
            ],
            "correctAnswerIndex": 1,
            "explanation": "Los trabajadores menores de dieciocho años deberán disfrutar de un descanso semanal de, como mínimo, dos días ininterrumpidos."
        },
        {
            "id": 6019,
            "questionText": "¿Pueden las vacaciones anuales ser sustituidas por una compensación económica si el trabajador así lo prefiere?",
            "options": [
                "Sí, siempre que haya acuerdo con la empresa.",
                "No, salvo en caso de extinción del contrato antes de disfrutarlas.",
                "Sí, si el convenio colectivo lo permite.",
                "Solo si el trabajador tiene más de 30 días de vacaciones."
            ],
            "correctAnswerIndex": 1,
            "explanation": "Las vacaciones anuales son retribuidas y no se podrán sustituir por una compensación económica, excepto en el caso de que el contrato de trabajo se extinga antes de haber podido disfrutarlas."
        },
        {
            "id": 6020,
            "questionText": "El permiso retribuido por traslado del domicilio habitual es de:",
            "options": [
                "Medio día.",
                "Un día.",
                "Dos días.",
                "Depende de la distancia del traslado."
            ],
            "correctAnswerIndex": 1,
            "explanation": "Por traslado del domicilio habitual, el trabajador tiene derecho a un día de permiso retribuido."
        },
        {
            "id": 6021,
            "questionText": "La reducción de jornada por guarda legal de un menor de 12 años implica una disminución proporcional del:",
            "options": [
                "Número de días de vacaciones.",
                "Salario.",
                "Crédito horario sindical.",
                "Tiempo de descanso en jornada continuada."
            ],
            "correctAnswerIndex": 1,
            "explanation": "Quienes por razones de guarda legal tengan a su cuidado directo algún menor de doce años tienen derecho a una reducción de la jornada de trabajo diaria, con la disminución proporcional del salario."
        },
        {
            "id": 6022,
            "questionText": "El periodo de prueba se considera nulo si:",
            "options": [
                "El trabajador tiene más de 5 años de experiencia.",
                "El contrato es indefinido.",
                "El trabajador ya ha desempeñado las mismas funciones antes en la empresa.",
                "La empresa tiene menos de 25 trabajadores."
            ],
            "correctAnswerIndex": 2,
            "explanation": "Se considerará nulo el pacto de periodo de prueba que se establezca cuando el trabajador haya desempeñado con anterioridad las mismas funciones en la empresa, bajo cualquier modalidad de contratación."
        },
        {
            "id": 6023,
            "questionText": "La 'economía gig' o 'freelance' se refiere a un modelo laboral basado en:",
            "options": [
                "Contratos indefinidos a tiempo completo.",
                "Trabajos para la administración pública exclusivamente.",
                "Trabajos temporales o de corta duración y trabajadores independientes.",
                "Puestos directivos en grandes corporaciones."
            ],
            "correctAnswerIndex": 2,
            "explanation": "La economía gig y freelance se refiere al modelo económico y laboral basado en trabajos temporales o de corta duración y el aumento de los trabajadores independientes."
        },
        {
            "id": 6024,
            "questionText": "El documento que elabora la empresa anualmente con la distribución de días laborables, festivos y descansos se llama:",
            "options": [
                "Plan de prevención",
                "Convenio colectivo",
                "Calendario laboral",
                "Registro de jornada"
            ],
            "correctAnswerIndex": 2,
            "explanation": "El calendario laboral se elabora cada año con la distribución de los días laborales, los festivos y los descansos, y ha de estar a disposición de todos los trabajadores."
        },
        {
            "id": 6025,
            "questionText": "El permiso por lactancia de un hijo menor de 9 meses permite una ausencia del trabajo de:",
            "options": [
                "Media hora al día.",
                "Una hora al día, divisible en dos fracciones.",
                "Dos horas al día.",
                "Una jornada completa a la semana."
            ],
            "correctAnswerIndex": 1,
            "explanation": "Por lactancia de un hijo natural, adoptado o acogido, que sea menor de 9 meses, los trabajadores podrán ausentarse del trabajo durante 1 hora, que podrá dividirse en dos periodos."
        },
        {
            "id": 6026,
            "questionText": "La obligación de las empresas de llevar un registro diario e individual de la jornada de los trabajadores se aplica a:",
            "options": [
                "Solo a los trabajadores a tiempo parcial.",
                "Solo a los trabajadores con contrato temporal.",
                "A todos los trabajadores, independientemente de su tipo de contrato o jornada.",
                "Solo a los trabajadores que realizan horas extraordinarias."
            ],
            "correctAnswerIndex": 2,
            "explanation": "Es obligatorio para las empresas el registro diario e individual de la jornada de todos los trabajadores, al comienzo y al final de esta."
        },
        {
            "id": 6027,
            "questionText": "En un trabajo a turnos, ¿cuántas semanas consecutivas como máximo puede estar un trabajador en el turno de noche, salvo adscripción voluntaria?",
            "options": [
                "Una semana.",
                "Dos semanas.",
                "Tres semanas.",
                "Cuatro semanas."
            ],
            "correctAnswerIndex": 1,
            "explanation": "En el trabajo a turnos, ningún trabajador estará en el de noche más de dos semanas consecutivas, salvo adscripción voluntaria."
        },
        {
            "id": 6028,
            "questionText": "Si un trabajador se casa, ¿cuántos días naturales de permiso retribuido le corresponden?",
            "options": [
                "5 días",
                "10 días",
                "15 días",
                "20 días"
            ],
            "correctAnswerIndex": 2,
            "explanation": "Por matrimonio, el trabajador tiene derecho a un permiso retribuido de quince días naturales."
        },
        {
            "id": 6029,
            "questionText": "La duración máxima del periodo de prueba para trabajadores que NO sean técnicos titulados en empresas de menos de 25 empleados es de:",
            "options": [
                "1 mes",
                "2 meses",
                "3 meses",
                "6 meses"
            ],
            "correctAnswerIndex": 2,
            "explanation": "En las empresas de menos de 25 empleados, el límite del periodo de prueba para aquellos que no sean técnicos titulados se amplía a los tres meses."
        },
        {
            "id": 6030,
            "questionText": "El Servicio de Mediación, Arbitraje y Conciliación (SMAC) interviene en los conflictos laborales:",
            "options": [
                "Únicamente para imponer sanciones a las empresas.",
                "Como fase previa y obligatoria antes de la vía judicial en muchos casos.",
                "Solo si el conflicto afecta a más de 100 trabajadores.",
                "Para organizar las elecciones sindicales."
            ],
            "correctAnswerIndex": 1,
            "explanation": "La solicitud de mediación, conciliación o reclamación previa ante el SMAC (o el órgano autonómico correspondiente) es un trámite obligatorio antes de interponer una demanda judicial en la mayoría de los conflictos laborales individuales."
        }
    ]
}; // ESTE ES EL CIERRE CORRECTO del objeto allQuestionsData

// Estado inicial del juego
const gameState = {
    questions: [],
    currentQuestionIndex: 0,
    scoreCorrect: 0,
    scoreIncorrect: 0,
    currentQuestionSet: [],
    lastGameQuestionIds: [],
    gamePhase: 'start',
    selectedAnswerIndex: null,
    timerId: null,
};

// Obtención de elementos del DOM
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
 */
function loadQuestions() {
    return new Promise((resolve, reject) => {
        if (allQuestionsData && allQuestionsData.questions && Array.isArray(allQuestionsData.questions)) {
            gameState.questions = allQuestionsData.questions;
            console.log("Preguntas cargadas:", gameState.questions.length); // Log para depuración
            if (gameState.questions.length === 0) {
                console.warn("Advertencia: El array de preguntas está vacío después de la carga inicial.");
            }
            resolve();
        } else {
            console.error("Error: allQuestionsData.questions no es un array o no está definido.");
            if (startScreen && !gameScreen.classList.contains('hidden')) {
                 startScreen.innerHTML = `
                    <h1 class="text-3xl sm:text-4xl font-bold text-indigo-700 mb-4">Error de Carga</h1>
                    <p class="text-gray-600 mb-8 text-lg">No se pudieron cargar las preguntas. Problema con los datos internos.</p>
                `;
            }
            reject(new Error("Datos de preguntas no encontrados o en formato incorrecto."));
        }
    });
}

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
            return []; // No hay suficientes preguntas en total
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
// El listener para startGameBtn se añade en DOMContentLoaded
if (nextQuestionBtn) { // Comprobar si el botón existe antes de añadir listener
    nextQuestionBtn.addEventListener('click', nextQuestion);
}
if (playAgainBtn) { // Comprobar si el botón existe
    playAgainBtn.addEventListener('click', () => {
        startGame();
    });
}

// Carga inicial y configuración
document.addEventListener('DOMContentLoaded', async () => {
    console.log("DOM completamente cargado y procesado.");
    try {
        await loadQuestions(); 
        
        if (!gameState.questions || gameState.questions.length === 0) { // Comprobación más robusta
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
