/* ==========================================================================
   data/reading.js — Jueves 3 de septiembre · Comprensión lectora
   DBA 6 · Competencia lectora · Componente semántico

   Los dos textos son originales, escritos para esta guía. Los datos del
   Texto 1 provienen del Servicio Geológico Colombiano.

   Las preguntas literales se autocorrigen. Las inferenciales y críticas se
   escriben en el cuaderno y muestran una clave orientadora: nunca se marcan
   como incorrectas.
   ========================================================================== */

window.Guide.register('reading', {
  title: 'Comparo textos: informativo e instructivo',
  short: 'Comprensión lectora',
  icon: 'book',
  href: 'reading.html',
  day: { label: 'Jueves 3 de septiembre', short: 'Jueves 3', weekday: 'Jueves' },
  subject: 'DBA 6 · Componente semántico',
  description: 'Dos textos sobre el mismo tema, escritos para cosas distintas. Uno explica por qué tiembla la tierra; el otro enseña qué hacer. Vas a leerlos, entenderlos y compararlos.',
  learning: 'Comparo textos de diferente formato y finalidad para dar cuenta de sus relaciones de contenido.',

  notice: {
    title: 'Antes de leer',
    dismissLabel: 'Entendido',
    paragraphs: [
      'Si alguna parte te hace sentir incómodo o triste, puedes parar, respirar y contarle a un adulto de tu casa. Leer sobre lo que pasó ayuda a entenderlo, pero no hay que hacerlo de afán.',
      'El botón **Ver el texto** te deja abrir la lectura en cualquier momento mientras respondes. No tienes que memorizar nada.'
    ]
  },

  units: [
    {
      id: 'u1',
      title: 'Leo un texto informativo',
      summary: 'El texto informativo explica algo real: da hechos, datos y fechas.',
      lessons: [
        {
          id: 'l1',
          code: '3.A',
          title: '¿Por qué se mueve la tierra?',
          goal: 'reconocer un texto informativo y encontrar la información que da.',
          blocks: [
            {
              type: 'notebook',
              id: '3A0',
              title: 'Antes de leer: lo que ya pienso',
              intro: '¿Qué crees tú que hace que la tierra tiemble? Escribe tu idea en el cuaderno, aunque no estés seguro. Al final de la guía vas a volver a leerla, así que **ponle la fecha**.',
              items: ['Yo creo que la tierra tiembla porque…']
            },
            {
              type: 'text',
              paragraphs: [
                'El **TEXTO INFORMATIVO** sirve para explicar algo real. No inventa personajes ni historias: cuenta hechos, da datos y responde preguntas como qué, cuándo, dónde y por qué. Suele tener un título, párrafos organizados por temas y a veces cifras o fechas.'
              ]
            },
            {
              type: 'reading',
              title: 'Texto 1 · ¿Por qué se mueve la tierra?',
              paragraphs: [
                'El suelo que pisamos parece firme y quieto, pero no lo es. La capa exterior de la Tierra está partida en pedazos enormes, como si fuera un rompecabezas gigante. Esos pedazos se llaman placas y se mueven todo el tiempo, muy despacio.',
                'Colombia está justo encima del borde de dos de esas piezas. En el occidente del país, una placa que está bajo el océano Pacífico, llamada placa de Nazca, se mete poco a poco por debajo de la placa donde está América del Sur. Avanza unos sesenta milímetros cada año, más o menos lo que crecen tus uñas. Es tan lento que nadie lo siente.',
                'El problema es que las placas no se deslizan suavemente: se traban. Durante muchos años se van apretando la una contra la otra y acumulan fuerza, como cuando doblamos una regla plástica sin soltarla. Un día la regla se libera de golpe y suelta toda esa fuerza de una sola vez. Eso es un sismo.',
                'El lunes 10 de agosto de 2026, a las 7:34 de la mañana, ocurrió uno de esos movimientos. El Servicio Geológico Colombiano, que es la entidad encargada de estudiar el suelo del país, midió su tamaño en 7,4 y encontró que había empezado cerca del municipio de San José del Palmar, en el departamento del Chocó. El punto donde nació estaba muy profundo: a más de cien kilómetros bajo la superficie.',
                'Aunque nació en el Chocó, se sintió lejísimos. En Pereira, en Cali, en Manizales, en Armenia, en Quibdó y hasta en Bogotá la gente sintió cómo se movía el piso. Eso pasa porque la energía viaja por dentro de la tierra en forma de ondas, parecidas a las que se forman cuando tiramos una piedra a un charco.',
                'Después de un sismo grande siempre vienen otros más pequeños. Se llaman réplicas y son la manera en que la tierra termina de acomodarse. Pueden durar días o semanas. Son normales, aunque asusten.',
                'Hay algo que los científicos repiten siempre: nadie en el mundo puede saber el día ni la hora exacta en que va a temblar. Ni en Colombia, ni en Japón, ni en Chile. Lo que sí podemos hacer es aprender qué hacer cuando ocurre. Por eso existen los simulacros, los planes familiares y las normas para construir casas más resistentes. Prepararse no evita los sismos, pero sí ayuda a que hagan mucho menos daño.'
              ],
              source: 'Texto original escrito para esta guía. Datos del Servicio Geológico Colombiano.'
            },
            {
              type: 'activity',
              activity: {
                id: '3A1a',
                kind: 'choice',
                question: '¿Cómo se llama la placa que está debajo del océano Pacífico?',
                options: ['Placa de Cocos', 'Placa de Nazca', 'Placa del Caribe', 'Placa Suramericana'],
                answer: 1,
                hint: 'Está en el segundo párrafo del texto.',
                explain: 'La placa de Nazca es la que se mete por debajo de la placa donde está América del Sur.'
              }
            },
            {
              type: 'activity',
              activity: {
                id: '3A1b',
                kind: 'choice',
                question: '¿Qué día y a qué hora ocurrió el sismo del que habla el texto?',
                options: [
                  'El lunes 10 de agosto de 2026, a las 7:34 de la mañana',
                  'El lunes 10 de agosto de 2026, a las 7:34 de la noche',
                  'El domingo 10 de agosto de 2026, a las 6:34 de la mañana'
                ],
                answer: 0,
                hint: 'Busca la fecha en el cuarto párrafo.',
                explain: 'El texto lo dice con día, mes, año y hora exacta: así de preciso es un texto informativo.'
              }
            },
            {
              type: 'activity',
              activity: {
                id: '3A1c',
                kind: 'choice',
                question: '¿Cerca de qué municipio y en qué departamento empezó?',
                options: [
                  'Quibdó, en el Chocó',
                  'San José del Palmar, en el Chocó',
                  'San José del Palmar, en Risaralda'
                ],
                answer: 1,
                hint: 'Ojo: el municipio y el departamento están juntos en la misma frase.',
                explain: 'Empezó cerca de San José del Palmar, en el departamento del Chocó.'
              }
            },
            {
              type: 'activity',
              activity: {
                id: '3A1d',
                kind: 'choice',
                question: '¿Cómo se llama la entidad que estudia el suelo de Colombia?',
                options: [
                  'Instituto Geográfico Agustín Codazzi',
                  'Servicio Geológico Colombiano',
                  'Instituto de Hidrología y Meteorología'
                ],
                answer: 1,
                hint: 'El texto la nombra justo antes de dar el tamaño del sismo.',
                explain: 'El Servicio Geológico Colombiano es el que mide y estudia los sismos del país.'
              }
            },
            {
              type: 'activity',
              activity: {
                id: '3A1e',
                kind: 'choice',
                question: '¿Cómo se llaman los sismos pequeños que vienen después de uno grande?',
                options: ['Ondas', 'Réplicas', 'Placas'],
                answer: 1,
                hint: 'Están en el sexto párrafo.',
                explain: 'Se llaman réplicas y son la manera en que la tierra termina de acomodarse.'
              }
            },
            {
              type: 'notebook',
              id: '3A1f',
              title: 'Tres ciudades',
              intro: 'Escribe en tu cuaderno tres ciudades donde se sintió el movimiento, según el texto.',
              keyTitle: 'Las que menciona el texto',
              items: ['Ciudad 1 · Ciudad 2 · Ciudad 3'],
              key: ['Pereira, Cali, Manizales, Armenia, Quibdó y Bogotá. Cualquiera de esas tres está bien.']
            },
            {
              type: 'notebook',
              id: '3A2',
              title: 'Preguntas para pensar',
              intro: 'Responde estas preguntas en tu cuaderno con frases completas. Aquí no hay una sola respuesta correcta: al marcar "Ya lo escribí" vas a ver una respuesta posible para comparar con la tuya.',
              keyTitle: 'Respuestas posibles para comparar',
              items: [
                '¿Por qué el texto compara las placas con un rompecabezas? ¿Qué se parece entre las dos cosas?',
                'El texto dice que las placas avanzan "más o menos lo que crecen tus uñas". ¿Para qué crees que el autor usa esa comparación?',
                'Si nadie puede saber cuándo va a temblar, ¿por qué entonces se hacen simulacros?',
                '¿Por qué el sismo empezó en el Chocó pero también se sintió en Bogotá?',
                'Según el texto, ¿las réplicas son peligrosas o son normales? Explica cómo lo supiste.'
              ],
              key: [
                'Porque son piezas grandes que encajan unas con otras y forman una superficie completa.',
                'Para que entendamos con algo cotidiano qué tan lento es ese movimiento.',
                'Porque no podemos controlar cuándo ocurre, pero sí podemos aprender qué hacer y hacerlo rápido y sin miedo.',
                'Porque la energía viaja por dentro de la tierra en forma de ondas que llegan muy lejos.',
                'El texto dice que son normales y que asustan; lo supe porque explica que la tierra se está acomodando.'
              ]
            },
            {
              type: 'activity',
              activity: {
                id: '3A3',
                kind: 'match',
                question: 'Vocabulario en contexto: une cada palabra con su significado.',
                leftLabel: 'Palabra',
                rightLabel: 'Significado',
                hint: 'Vuelve al texto y mira cómo se usa la palabra en su frase.',
                explain: 'Todas las palabras se pueden entender releyendo la frase donde aparecen.',
                pairs: [
                  { left: 'Placa', right: 'Pedazo grande de la capa exterior de la Tierra' },
                  { left: 'Acumular', right: 'Ir juntando algo poco a poco' },
                  { left: 'Superficie', right: 'La parte de afuera, lo que se ve por encima' },
                  { left: 'Ondas', right: 'Movimientos que viajan y se van repitiendo, como en el agua' },
                  { left: 'Réplica', right: 'Sismo más pequeño que ocurre después de uno grande' },
                  { left: 'Resistente', right: 'Que aguanta sin romperse' }
                ]
              }
            }
          ]
        }
      ]
    },

    {
      id: 'u2',
      title: 'Leo un texto instructivo',
      summary: 'El texto instructivo enseña a hacer algo, con pasos en orden.',
      lessons: [
        {
          id: 'l2',
          code: '3.B',
          title: 'Nuestro plan familiar en tres pasos',
          goal: 'reconocer un texto instructivo y seguir su orden.',
          blocks: [
            {
              type: 'notebook',
              id: '3B0',
              title: 'Antes de leer',
              intro: 'Piensa en una receta de cocina o en las instrucciones de un juego y responde en tu cuaderno.',
              items: [
                '¿En qué se parecen una receta y las instrucciones de un juego?',
                '¿Qué pasaría si hicieras los pasos en desorden?'
              ]
            },
            {
              type: 'text',
              paragraphs: [
                'El **TEXTO INSTRUCTIVO** sirve para enseñar a hacer algo. Se reconoce porque tiene pasos numerados o con viñetas, usa verbos que ordenan (busca, escribe, guarda, avisa) y sigue un orden que no se puede cambiar. Ejemplos: una receta, el manual de un juguete, un plan de emergencia.'
              ]
            },
            {
              type: 'reading',
              title: 'Texto 2 · Nuestro plan familiar en tres pasos',
              lead: 'Cada familia necesita un plan. No es para tener miedo: es para tener claro qué hacer y no perder tiempo. Reúne a tu familia una tarde y sigan estos pasos.',
              paragraphs: [
                {
                  heading: 'Paso 1. Escojan el punto de encuentro.',
                  steps: [
                    'Salgan juntos a la calle y busquen un lugar abierto y cercano: un parque, una cancha, una esquina amplia.',
                    'Revisen que no tenga postes de luz, muros altos ni vidrios encima.',
                    'Escriban la dirección de ese lugar en un papel y péguenlo en la nevera.',
                    'Repitan en voz alta el nombre del lugar hasta que todos lo recuerden.'
                  ]
                },
                {
                  heading: 'Paso 2. Preparen la maleta de emergencia.',
                  steps: [
                    'Consigan un morral que no pese mucho y déjenlo cerca de la puerta.',
                    'Guarden dentro: agua, una linterna, pilas, una cobija, comida que no se dañe, papeles importantes en una bolsa plástica y los medicamentos que alguien de la casa necesite.',
                    'Agreguen algo tuyo que te dé tranquilidad: un juguete pequeño, un cuaderno, unos colores.',
                    'Revisen la maleta cada tres meses y cambien lo que ya esté vencido.'
                  ]
                },
                {
                  heading: 'Paso 3. Aprendan qué hacer durante el movimiento.',
                  steps: [
                    'Si estás adentro, quédate adentro. La mayoría de los golpes ocurren cuando la gente corre.',
                    'Agáchate, cúbrete la cabeza con los brazos y sostente de algo firme, debajo de una mesa o al lado de un muro interno.',
                    'Aléjate de ventanas, espejos y de todo lo que pueda caerse.',
                    'Cuando el movimiento pare, salgan con calma hacia el punto de encuentro que escogieron.',
                    'No usen el ascensor y no vuelvan a entrar a la casa hasta que un adulto revise que es seguro.'
                  ]
                }
              ],
              source: 'Practiquen el plan una vez al mes. Al principio parecerá un juego; con el tiempo, el cuerpo lo aprende solo.'
            },
            {
              type: 'notebook',
              id: '3B1',
              title: 'Cazo verbos',
              intro: 'Busca en el Texto 2 los verbos que dan una orden y escribe **cinco** en tu cuaderno.',
              keyTitle: 'Algunos de los que están en el texto',
              items: ['Verbo 1 · Verbo 2 · Verbo 3 · Verbo 4 · Verbo 5'],
              key: ['Salgan, busquen, revisen, escriban, repitan, consigan, guarden, agreguen, cambien, quédate, agáchate, cúbrete, sostente, aléjate, practiquen.']
            },
            {
              type: 'activity',
              activity: {
                id: '3B2',
                kind: 'order',
                question: 'Ordena lo que debe hacerse durante un movimiento.',
                hint: 'Piensa qué pasa primero: ¿te agachas o sales?',
                explain: 'Ese es el orden. Primero protegerse, y solo al final salir con calma.',
                items: [
                  'Agacharse y cubrirse la cabeza',
                  'Sostenerse de algo firme',
                  'Alejarse de las ventanas',
                  'Esperar a que el movimiento pare',
                  'Salir con calma hacia el punto de encuentro'
                ]
              }
            },
            {
              type: 'notebook',
              id: '3B3',
              title: 'Escribo mi propio texto instructivo',
              intro: 'Escribe en tu cuaderno un texto instructivo de **cuatro pasos** titulado: "Cómo calmarme cuando me pongo nervioso". Recuerda usar verbos que ordenen y numerar los pasos. Puedes usar lo que practicaste el martes con la respiración cuadrada.',
              items: [
                'Título: Cómo calmarme cuando me pongo nervioso',
                'Paso 1…',
                'Paso 2…',
                'Paso 3…',
                'Paso 4…'
              ]
            }
          ]
        }
      ]
    },

    {
      id: 'u3',
      title: 'Comparo los dos textos',
      summary: 'Mismo tema, dos finalidades distintas.',
      lessons: [
        {
          id: 'l3',
          code: '3.C',
          title: 'Finalidad, formato y palabras',
          goal: 'comparar dos textos que tratan el mismo tema.',
          blocks: [
            {
              type: 'notebook',
              id: '3C0',
              title: 'Antes de comparar',
              intro: 'Los dos textos hablan de sismos. Si tuvieras que escoger uno para un examen de ciencias y otro para pegar en la pared de tu casa, ¿cuál escogerías para cada cosa? ¿Por qué? Escríbelo en el cuaderno.',
              items: ['Para el examen de ciencias escogería… porque…', 'Para pegar en la pared escogería… porque…']
            },
            {
              type: 'text',
              paragraphs: [
                'Dos textos pueden tratar el mismo tema y aun así ser distintos. Para compararlos nos fijamos en cuatro cosas: cuál es su **FINALIDAD** (para qué fue escrito), cuál es su **FORMATO** (cómo está organizado), qué **TIPO DE PALABRAS** usa y **A QUIÉN** va dirigido.'
              ]
            },
            {
              type: 'notebook',
              id: '3C1',
              title: 'Cuadro comparativo',
              intro: 'Copia este cuadro en tu cuaderno y complétalo con los dos textos.',
              keyTitle: 'Claves para comparar',
              items: [
                '¿Qué tipo de texto es?',
                '¿Para qué fue escrito?',
                '¿Cómo está organizado?',
                '¿Da datos o da órdenes?',
                '¿Qué aprendí con él?'
              ],
              key: [
                'Tipo: el Texto 1 es informativo; el Texto 2 es instructivo.',
                'Finalidad: el 1 explica por qué ocurren los sismos; el 2 enseña qué hacer y cómo prepararse.',
                'Organización: el 1 va en párrafos, uno por idea; el 2 va en pasos numerados, en orden.',
                'Palabras: el 1 da datos, fechas y cifras; el 2 da órdenes, con verbos de acción.',
                'La última fila es tu respuesta personal: no hay clave.'
              ]
            },
            {
              type: 'notebook',
              id: '3C2',
              title: 'Preguntas para opinar',
              intro: 'Aquí no hay una sola respuesta correcta. Lo importante es que expliques tu razón. Responde en el cuaderno.',
              optOut: true,
              items: [
                'El Texto 1 dice que prepararse "no evita los sismos, pero sí ayuda a que hagan mucho menos daño". ¿Estás de acuerdo? Explica por qué.',
                '¿Cuál de los dos textos te pareció más útil a ti y a tu familia en este momento? Justifica tu respuesta.',
                'Si tuvieras que agregarle un paso más al Texto 2, ¿cuál agregarías y por qué?',
                '¿Qué le dirías a un niño más pequeño que te pregunta si va a volver a temblar? Escribe tu respuesta como si se la estuvieras diciendo.'
              ]
            },
            {
              type: 'notebook',
              id: '3C3',
              title: 'El resumen',
              intro: 'Escribe en tu cuaderno un resumen del Texto 1, de máximo **cinco renglones**.',
              keyTitle: 'Los pasos para resumir',
              items: ['Resumen del Texto 1 (máximo 5 renglones)'],
              key: [
                'Lee todo el texto.',
                'Divídelo por párrafos.',
                'Subraya la idea principal de cada uno.',
                'Úne esas ideas con tus propias palabras.'
              ]
            },
            {
              type: 'notebook',
              id: '3C4',
              title: 'Vuelvo al principio',
              intro: 'Busca en tu cuaderno lo que escribiste al comienzo de la guía sobre por qué tiembla la tierra. Léelo otra vez y responde debajo.',
              items: ['¿Cambió mi idea? ¿En qué cambió?']
            },
            {
              type: 'links',
              title: 'Para seguir aprendiendo',
              items: [
                { label: 'Servicio Geológico Colombiano', href: 'https://www.sgc.gov.co', note: 'La entidad que estudia el suelo del país.' },
                { label: 'Cómo hacer un resumen (video)', href: 'https://www.youtube.com/watch?v=vuuagyKU55Y' }
              ]
            },
            {
              type: 'adult',
              title: 'Nota para la docente',
              paragraphs: [
                'La pregunta 4 de **3.C.2** ("¿Qué le dirías a un niño más pequeño que te pregunta si va a volver a temblar?") suele ser la más reveladora del estado emocional del grupo.',
                'Como las respuestas abiertas se escriben en el cuaderno, vale la pena leerla con atención en todas las entregas físicas y marcar las que requieran seguimiento.'
              ]
            }
          ]
        }
      ]
    }
  ]
});
