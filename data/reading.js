/* ==========================================================================
   data/reading.js — Jueves 3 de septiembre · Comprensión lectora
   DBA 6 · Competencia lectora · Componente semántico

   Los dos textos son originales, escritos para esta guía. Los datos del
   Texto 1 provienen del Servicio Geológico Colombiano.

   Todo se resuelve en el cuaderno: no hay preguntas de selección ni nada que
   marcar en la página. Las respuestas de las preguntas literales y de las
   actividades de vocabulario, orden y comparación se reúnen al final, en
   "Respuestas de hoy". Las preguntas de opinión no llevan respuesta.
   ========================================================================== */

window.Guide.register('reading', {
  title: 'Comparo textos: informativo e instructivo',
  short: 'Comprensión lectora',
  icon: 'book',
  href: 'reading.html',
  day: { label: 'Jueves 3 de septiembre', short: 'Jueves 3', weekday: 'Jueves' },
  subject: 'DBA 6 · Componente semántico',
  description: 'Dos textos sobre el mismo tema, escritos para cosas distintas. Uno explica por qué tiembla la tierra; el otro enseña qué hacer. Vas a leerlos y trabajarlos en tu cuaderno.',
  learning: 'Comparo textos de diferente formato y finalidad para dar cuenta de sus relaciones de contenido.',

  notice: {
    title: 'Antes de leer',
    dismissLabel: 'Entendido',
    paragraphs: [
      'Todo lo de hoy se escribe **en el cuaderno**: la pregunta y luego tu respuesta, con frases completas. En la página no hay nada que marcar ni que oprimir.',
      'Si alguna parte te hace sentir incómodo o triste, puedes parar, respirar y contarle a un adulto de tu casa. Leer sobre lo que pasó ayuda a entenderlo, pero no hay que hacerlo de afán.',
      'El botón **Ver los textos** te deja tener la lectura a la mano mientras escribes. No tienes que memorizar nada: puedes volver al texto todas las veces que quieras.',
      'Al final de la página está **Respuestas de hoy**, para que compares lo que escribiste y lo completes.'
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
              id: '3ENC',
              title: 'Encabezado',
              intro: 'Abre una hoja nueva del cuaderno y escribe arriba el encabezado, como lo hacemos siempre.',
              ordered: false,
              items: [
                'Nombre: ____________________',
                'Grado: 3°A',
                'Fecha: ____________________',
                'Área: Comprensión lectora — Comparo textos'
              ],
              note: 'Así la profesora Ruby sabe de quién es cada hoja cuando revise los cuadernos.'
            },
            {
              type: 'notebook',
              id: '3A0',
              title: 'Antes de leer: lo que ya pienso',
              intro: '¿Qué crees tú que hace que la tierra tiemble? Escribe tu idea en el cuaderno, aunque no estés seguro. Al final de la guía vas a volver a leerla, así que **ponle la fecha**.',
              ordered: false,
              items: ['Yo creo que la tierra tiembla porque…'],
              note: 'Esta la escribes con tus palabras: no hay respuesta en el solucionario.'
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
              type: 'notebook',
              id: '3A1',
              title: 'Preguntas sobre el Texto 1',
              intro: 'Copia cada pregunta en tu cuaderno y escribe debajo la respuesta **con una frase completa**. Todas están en el texto: si no la encuentras, vuelve a leer el párrafo que habla de eso.',
              items: [
                '¿Cómo se llama la placa que está debajo del océano Pacífico?',
                '¿Qué día y a qué hora ocurrió el sismo del que habla el texto?',
                '¿Cerca de qué municipio y en qué departamento empezó?',
                '¿Cómo se llama la entidad que estudia el suelo de Colombia?',
                '¿Cómo se llaman los sismos pequeños que vienen después de uno grande?',
                'Escribe tres ciudades donde se sintió el movimiento, según el texto.'
              ],
              key: [
                'La placa que está debajo del océano Pacífico se llama placa de Nazca.',
                'El sismo ocurrió el lunes 10 de agosto de 2026, a las 7:34 de la mañana.',
                'Empezó cerca del municipio de San José del Palmar, en el departamento del Chocó.',
                'La entidad que estudia el suelo de Colombia es el Servicio Geológico Colombiano.',
                'Los sismos pequeños que vienen después se llaman réplicas.',
                'El texto nombra Pereira, Cali, Manizales, Armenia, Quibdó y Bogotá. Cualquiera de esas tres está bien.'
              ],
              keyNote: 'Estas son preguntas literales: la respuesta está escrita en el texto, tal cual.'
            },
            {
              type: 'notebook',
              id: '3A2',
              title: 'Preguntas para pensar',
              intro: 'Estas no están escritas tal cual en el texto: hay que deducirlas. Copia cada pregunta en el cuaderno y responde con tus palabras, en frases completas.',
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
                'El texto dice que son normales, aunque asusten; se sabe porque explica que la tierra se está acomodando.'
              ],
              keyNote: 'Aquí no hay una sola manera de decirlo. Si escribiste la misma idea con otras palabras, está bien.'
            },
            {
              type: 'notebook',
              id: '3A3',
              title: 'Vocabulario en contexto',
              intro: 'Copia en tu cuaderno este cuadro de dos columnas. En la primera van las palabras y en la segunda vas a escribir qué significa cada una **según cómo se usa en el texto**. Busca la palabra en su párrafo antes de responder.',
              items: [
                'Placa',
                'Acumular',
                'Superficie',
                'Ondas',
                'Réplica',
                'Resistente'
              ],
              key: [
                'Placa — pedazo grande de la capa exterior de la Tierra.',
                'Acumular — ir juntando algo poco a poco.',
                'Superficie — la parte de afuera, lo que se ve por encima.',
                'Ondas — movimientos que viajan y se van repitiendo, como en el agua.',
                'Réplica — sismo más pequeño que ocurre después de uno grande.',
                'Resistente — que aguanta sin romperse.'
              ]
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
              intro: 'Piensa en una receta de cocina o en las instrucciones de un juego. Copia las dos preguntas en el cuaderno y respóndelas antes de leer el Texto 2.',
              items: [
                '¿En qué se parecen una receta y las instrucciones de un juego?',
                '¿Qué pasaría si hicieras los pasos en desorden?'
              ],
              note: 'Estas las escribes con tus palabras: no hay respuesta en el solucionario.'
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
              intro: 'Busca en el Texto 2 los verbos que dan una orden y escribe **cinco** en tu cuaderno, uno debajo del otro.',
              ordered: false,
              items: ['Verbo 1 · Verbo 2 · Verbo 3 · Verbo 4 · Verbo 5'],
              key: ['Salgan, busquen, revisen, escriban, repitan, consigan, guarden, agreguen, cambien, quédate, agáchate, cúbrete, sostente, aléjate, practiquen. Cualesquiera cinco de esos están bien.']
            },
            {
              type: 'notebook',
              id: '3B2',
              title: 'Pongo los pasos en orden',
              intro: 'Estas cinco acciones están **en desorden**. Cópialas en tu cuaderno numeradas del 1 al 5, en el orden en que hay que hacerlas durante un movimiento. Piensa qué pasa primero: ¿te agachas o sales?',
              ordered: false,
              items: [
                'Salir con calma hacia el punto de encuentro',
                'Agacharse y cubrirse la cabeza',
                'Esperar a que el movimiento pare',
                'Sostenerse de algo firme',
                'Alejarse de las ventanas'
              ],
              key: [
                'Agacharse y cubrirse la cabeza',
                'Sostenerse de algo firme',
                'Alejarse de las ventanas',
                'Esperar a que el movimiento pare',
                'Salir con calma hacia el punto de encuentro'
              ],
              keyNote: 'Primero protegerse, y solo al final salir con calma.'
            },
            {
              type: 'notebook',
              id: '3B3',
              title: 'Escribo mi propio texto instructivo',
              intro: 'Escribe en tu cuaderno un texto instructivo de **cuatro pasos** titulado: "Cómo calmarme cuando me pongo nervioso". Usa verbos que ordenen y numera los pasos. Puedes usar lo que practicaste el martes con la respiración cuadrada.',
              ordered: false,
              items: [
                'Título: Cómo calmarme cuando me pongo nervioso',
                'Paso 1…',
                'Paso 2…',
                'Paso 3…',
                'Paso 4…'
              ],
              note: 'Este lo escribes tú. En el solucionario hay un ejemplo, pero el tuyo debe ser con tus propias palabras y con lo que a ti te sirve.',
              key: [
                'Un texto posible: 1. Busca un lugar tranquilo y siéntate. 2. Respira contando hasta cuatro, cuatro veces. 3. Nombra cinco cosas que veas a tu alrededor. 4. Cuéntale a un adulto cómo te sientes.'
              ],
              keyNote: 'Fíjate que cada paso empieza con un verbo que ordena y que van numerados: eso es lo que hace que sea un texto instructivo.'
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
              intro: 'Los dos textos hablan de sismos. Si tuvieras que escoger uno para un examen de ciencias y otro para pegar en la pared de tu casa, ¿cuál escogerías para cada cosa? Copia las dos frases en tu cuaderno y complétalas.',
              ordered: false,
              items: ['Para el examen de ciencias escogería… porque…', 'Para pegar en la pared escogería… porque…'],
              note: 'Estas las escribes con tus palabras: no hay respuesta en el solucionario.'
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
              intro: 'Dibuja en tu cuaderno un cuadro de **tres columnas**: la primera para la pregunta, la segunda para el Texto 1 y la tercera para el Texto 2. Copia estas cinco preguntas en la primera columna y complétalo.',
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
                'Lo que aprendí: esta fila es tu respuesta personal, no tiene clave.'
              ]
            },
            {
              type: 'notebook',
              id: '3C2',
              title: 'Preguntas para opinar',
              intro: 'Aquí no hay una sola respuesta correcta y tampoco están en el solucionario. Lo importante es que expliques tu razón. Copia cada pregunta en el cuaderno y responde.',
              items: [
                'El Texto 1 dice que prepararse "no evita los sismos, pero sí ayuda a que hagan mucho menos daño". ¿Estás de acuerdo? Explica por qué.',
                '¿Cuál de los dos textos te pareció más útil a ti y a tu familia en este momento? Justifica tu respuesta.',
                'Si tuvieras que agregarle un paso más al Texto 2, ¿cuál agregarías y por qué?',
                '¿Qué le dirías a un niño más pequeño que te pregunta si va a volver a temblar? Escribe tu respuesta como si se la estuvieras diciendo.'
              ],
              note: 'Si alguna no quieres responderla, déjala en blanco y sigue. Está bien.'
            },
            {
              type: 'list',
              title: 'Los pasos para hacer un resumen',
              ordered: true,
              items: [
                'Lee todo el texto de principio a fin.',
                'Divídelo por párrafos.',
                'Subraya la idea principal de cada uno.',
                'Une esas ideas con tus propias palabras, sin copiar frases enteras.'
              ]
            },
            {
              type: 'notebook',
              id: '3C3',
              title: 'El resumen',
              intro: 'Sigue los cuatro pasos de arriba y escribe en tu cuaderno un resumen del Texto 1, de máximo **cinco renglones**.',
              ordered: false,
              items: ['Resumen del Texto 1 (máximo 5 renglones)'],
              key: [
                'Un resumen posible: la capa exterior de la Tierra está partida en placas que se mueven muy despacio y a veces se traban. Cuando se sueltan de golpe ocurre un sismo. El 10 de agosto de 2026 pasó uno que empezó en el Chocó y se sintió en muchas ciudades. Después vienen réplicas, que son normales. Nadie puede saber cuándo va a temblar, pero sí podemos prepararnos.'
              ],
              keyNote: 'El tuyo no tiene que decir exactamente lo mismo, pero sí debe recoger la idea principal de cada párrafo y estar escrito con tus palabras.'
            },
            {
              type: 'notebook',
              id: '3C4',
              title: 'Vuelvo al principio',
              intro: 'Busca en tu cuaderno lo que escribiste al comienzo de la guía sobre por qué tiembla la tierra. Léelo otra vez y escribe debajo tu respuesta.',
              ordered: false,
              items: ['¿Cambió mi idea? ¿En qué cambió?'],
              note: 'Esta la escribes con tus palabras: no hay respuesta en el solucionario.'
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
              title: 'Nota para la profesora Ruby',
              paragraphs: [
                'La pregunta 4 de **3.C.2** ("¿Qué le dirías a un niño más pequeño que te pregunta si va a volver a temblar?") suele ser la más reveladora del estado emocional del grupo.',
                'Como toda la guía se escribe en el cuaderno, vale la pena leerla con atención en todas las entregas físicas y marcar las que requieran seguimiento.',
                'Las preguntas de opinión (3.A.0, 3.B.0, 3.C.0, 3.C.2 y 3.C.4) no aparecen en el solucionario a propósito: no tienen respuesta correcta y no deben corregirse como si la tuvieran.'
              ]
            }
          ]
        }
      ]
    }
  ]
});
