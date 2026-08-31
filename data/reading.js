/* ==========================================================================
   data/reading.js — Sección 3 · Comprensión lectora
   DBA 6 · Competencia lectora · Componente semántico

   Los dos textos son originales, escritos para esta guía. Tratan de hábitos
   y convivencia: uno explica por qué necesitamos dormir y el otro enseña a
   organizar la tarde. Sirven para lo de siempre: comparar un texto
   informativo con uno instructivo.

   Todo se resuelve en el cuaderno: no hay preguntas de selección ni nada que
   marcar en la página. Las respuestas de las preguntas literales y de las
   actividades de vocabulario, orden y comparación se reúnen al final, en
   "Respuestas de esta sección". Las preguntas de opinión no llevan respuesta.
   ========================================================================== */

window.Guide.register('reading', {
  title: 'Comparo textos: informativo e instructivo',
  short: 'Comprensión lectora',
  icon: 'book',
  href: 'reading.html',
  section: { number: 3, label: 'Sección 3', short: 'Sección 3' },
  subject: 'DBA 6 · Componente semántico',
  description: 'Dos textos sobre el mismo tema, escritos para cosas distintas. Uno explica por qué necesitamos dormir; el otro enseña a organizar la tarde. Vas a leerlos y trabajarlos en tu cuaderno.',
  learning: 'Comparo textos de diferente formato y finalidad para dar cuenta de sus relaciones de contenido.',

  notice: {
    title: 'Antes de leer',
    dismissLabel: 'Entendido',
    paragraphs: [
      'Todo lo de esta sección se escribe **en el cuaderno**: la pregunta y luego tu respuesta, con frases completas. En la página no hay nada que marcar ni que oprimir.',
      'Lee cada texto **dos veces** antes de responder. La primera para enterarte de qué se trata; la segunda, despacio, buscando los datos.',
      'El botón **Ver los textos** te deja tener la lectura a la mano mientras escribes. No tienes que memorizar nada: puedes volver al texto todas las veces que quieras.',
      'Al final de la página está **Respuestas de esta sección**, para que compares lo que escribiste y lo completes.'
    ]
  },

  units: [
    {
      id: 'u1',
      title: 'Leo un texto informativo',
      summary: 'El texto informativo explica algo real: da hechos, datos y cifras.',
      lessons: [
        {
          id: 'l1',
          code: '3.A',
          title: '¿Por qué necesitamos dormir?',
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
              intro: '¿Cuántas horas crees que necesita dormir un niño de tu edad? ¿Qué crees que le pasa a alguien que duerme poco? Escribe tu idea en el cuaderno, aunque no estés seguro. Al final vas a volver a leerla, así que **ponle la fecha**.',
              ordered: false,
              items: ['Yo creo que un niño necesita dormir… porque…'],
              note: 'Esta la escribes con tus palabras: no hay respuesta en el solucionario.'
            },
            {
              type: 'text',
              paragraphs: [
                'El **TEXTO INFORMATIVO** sirve para explicar algo real. No inventa personajes ni historias: cuenta hechos, da datos y responde preguntas como qué, cuándo, cómo y por qué. Suele tener un título, párrafos organizados por temas y a veces cifras.'
              ]
            },
            {
              type: 'reading',
              title: 'Texto 1 · ¿Por qué necesitamos dormir?',
              paragraphs: [
                'Dormir parece una pérdida de tiempo. Uno cierra los ojos y, cuando los vuelve a abrir, ya amaneció. Parece que no hubiera pasado nada. Pero mientras duermes tu cuerpo no está quieto: está trabajando.',
                'Las personas que estudian el sueño recomiendan que los niños entre seis y doce años duerman entre nueve y doce horas cada noche. Puede sonar exagerado, pero es el tiempo que el cuerpo necesita para hacer todo lo que tiene pendiente.',
                'Lo primero que hace es ordenar lo que aprendiste. Durante el día tu cerebro recibe muchísima información: lo que explicó la profesora, lo que jugaste, lo que te dijeron en la casa. De noche la repasa, bota lo que no sirve y guarda lo importante. Por eso, cuando duermes bien, al otro día recuerdas mejor lo que estudiaste.',
                'Lo segundo es crecer. Mientras duermes profundo, el cuerpo produce una sustancia llamada hormona del crecimiento, que es la que hace que los huesos se alarguen. Así que eso que dicen los abuelos, que los niños crecen mientras duermen, resultó ser cierto.',
                'Lo tercero es reparar. Los músculos que usaste corriendo se arreglan de noche, y las defensas, que son lo que protege al cuerpo de las enfermedades, se hacen más fuertes. Por eso, cuando alguien está enfermo, lo primero que le dicen es que duerma.',
                'Hay algo que le vuelve difícil el trabajo al cuerpo: las pantallas. La luz del celular, del televisor o del computador le dice al cerebro que todavía es de día, y entonces el cerebro tarda más en dar la orden de dormir. Por eso conviene apagarlas un buen rato antes de acostarse.',
                'Acostarse siempre a la misma hora también ayuda. El cuerpo tiene un reloj propio y aprende con la repetición: si todos los días te acuestas a la misma hora, el sueño llega solo. Si cada noche es distinta, ese reloj se confunde y después cuesta mucho quedarse dormido.'
              ],
              source: 'Texto original escrito para esta guía.'
            },
            {
              type: 'notebook',
              id: '3A1',
              title: 'Preguntas sobre el Texto 1',
              intro: 'Copia cada pregunta en tu cuaderno y escribe debajo la respuesta **con una frase completa**. Todas están en el texto: si no la encuentras, vuelve a leer el párrafo que habla de eso.',
              items: [
                '¿Cuántas horas recomiendan que duerman los niños entre seis y doce años?',
                'Según el texto, ¿qué hace el cerebro de noche con lo que aprendiste durante el día?',
                '¿Cómo se llama la sustancia que produce el cuerpo mientras duermes profundo?',
                '¿Qué dos cosas repara el cuerpo mientras duermes?',
                '¿Por qué las pantallas hacen que cueste más dormirse?',
                '¿Qué le pasa al reloj del cuerpo si cada noche te acuestas a una hora distinta?'
              ],
              key: [
                'Recomiendan que duerman entre nueve y doce horas cada noche.',
                'De noche el cerebro repasa la información, bota lo que no sirve y guarda lo importante.',
                'Se llama hormona del crecimiento, y es la que hace que los huesos se alarguen.',
                'Repara los músculos que usaste corriendo y hace más fuertes las defensas.',
                'Porque su luz le dice al cerebro que todavía es de día, y entonces tarda más en dar la orden de dormir.',
                'Ese reloj se confunde y después cuesta mucho quedarse dormido.'
              ],
              keyNote: 'Estas son preguntas literales: la respuesta está escrita en el texto, tal cual.'
            },
            {
              type: 'notebook',
              id: '3A2',
              title: 'Preguntas para pensar',
              intro: 'Estas no están escritas tal cual en el texto: hay que deducirlas. Copia cada pregunta en el cuaderno y responde con tus palabras, en frases completas.',
              items: [
                'El texto dice que mientras duermes tu cuerpo "está trabajando". ¿En qué está trabajando?',
                '¿Por qué crees que a una persona enferma lo primero que le dicen es que duerma?',
                'Si un niño estudia mucho pero duerme muy poco, ¿qué crees que le pasa al otro día en el colegio?',
                '¿Por qué el texto dice que el cuerpo tiene "un reloj propio"? ¿En qué se parece a un reloj?',
                'El texto empieza diciendo que dormir "parece una pérdida de tiempo". ¿Por qué lo parece, si no lo es?'
              ],
              key: [
                'Está ordenando lo que aprendiste, haciendo crecer los huesos y reparando los músculos y las defensas.',
                'Porque mientras duerme el cuerpo repara lo dañado y las defensas se hacen más fuertes, que es justo lo que necesita para mejorarse.',
                'Se le olvida más de lo que estudió, porque el cerebro no alcanzó a guardar lo aprendido.',
                'Porque mide el tiempo por su cuenta y se acostumbra a los horarios: aprende a qué hora toca dormir.',
                'Porque uno no se da cuenta de nada mientras duerme, pero el cuerpo está haciendo tres tareas importantes.'
              ],
              keyNote: 'Aquí no hay una sola manera de decirlo. Si escribiste la misma idea con otras palabras, está bien.'
            },
            {
              type: 'notebook',
              id: '3A3',
              title: 'Vocabulario en contexto',
              intro: 'Copia en tu cuaderno un cuadro de dos columnas. En la primera van las palabras y en la segunda vas a escribir qué significa cada una **según cómo se usa en el texto**. Busca la palabra en su párrafo antes de responder.',
              items: [
                'Recomendar',
                'Información',
                'Producir',
                'Reparar',
                'Defensas',
                'Repetición'
              ],
              key: [
                'Recomendar — decir lo que a uno le conviene hacer.',
                'Información — todo lo que uno ve, oye y aprende.',
                'Producir — hacer o fabricar algo.',
                'Reparar — arreglar algo que se gastó o se dañó.',
                'Defensas — lo que tiene el cuerpo para protegerse de las enfermedades.',
                'Repetición — hacer una misma cosa muchas veces.'
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
          title: 'Cómo organizar mi tarde en tres pasos',
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
                'El **TEXTO INSTRUCTIVO** sirve para enseñar a hacer algo. Se reconoce porque tiene pasos numerados o con viñetas, usa verbos que ordenan (busca, saca, guarda, apaga) y sigue un orden que no se puede cambiar. Ejemplos: una receta, el manual de un juguete, una rutina.'
              ]
            },
            {
              type: 'reading',
              title: 'Texto 2 · Cómo organizar mi tarde en tres pasos',
              lead: 'Las tardes se van volando y uno termina haciendo la tarea de afán, a las carreras, cuando ya tiene sueño. Con un orden sencillo alcanza para todo: para la tarea, para jugar y para descansar. Prueba estos tres pasos durante una semana.',
              paragraphs: [
                {
                  heading: 'Paso 1. Llega y descansa.',
                  steps: [
                    'Deja el morral siempre en el mismo lugar, para no perder tiempo buscándolo mañana.',
                    'Lávate las manos y come algo antes de empezar cualquier otra cosa.',
                    'Descansa veinte minutos: juega, conversa con alguien de tu casa o simplemente quédate quieto.',
                    'No empieces la tarea con hambre ni con afán. Cansado, todo se demora el doble.'
                  ]
                },
                {
                  heading: 'Paso 2. Prepara el puesto y haz la tarea.',
                  steps: [
                    'Busca una mesa despejada, con buena luz y lejos del televisor.',
                    'Saca solo lo que vas a usar: el cuaderno, el lápiz, el borrador y el sacapuntas.',
                    'Empieza por la tarea más difícil, mientras todavía tienes energía.',
                    'Cuando termines una materia, levántate, estírate y vuelve. Descansar cinco minutos no es perder el tiempo.',
                    'Guarda cada cuaderno apenas lo termines, así no se te queda ninguno por fuera.'
                  ]
                },
                {
                  heading: 'Paso 3. Deja todo listo para mañana.',
                  steps: [
                    'Revisa qué necesitas llevar y empaca el morral esta noche, no en la mañana.',
                    'Alista el uniforme y los zapatos donde puedas verlos apenas te levantes.',
                    'Apaga las pantallas un buen rato antes de acostarte.',
                    'Acuéstate a la misma hora todos los días, para que el sueño llegue solo.'
                  ]
                }
              ],
              source: 'Hazlo una semana seguida. Al principio hay que acordarse; después el cuerpo lo hace solo.'
            },
            {
              type: 'notebook',
              id: '3B1',
              title: 'Cazo verbos',
              intro: 'Busca en el Texto 2 los verbos que dan una orden y escribe **cinco** en tu cuaderno, uno debajo del otro.',
              ordered: false,
              items: ['Verbo 1 · Verbo 2 · Verbo 3 · Verbo 4 · Verbo 5'],
              key: ['Prueba, deja, lávate, come, descansa, juega, conversa, quédate, busca, saca, empieza, levántate, estírate, vuelve, guarda, revisa, empaca, alista, apaga, acuéstate. Cualesquiera cinco de esos están bien.']
            },
            {
              type: 'notebook',
              id: '3B2',
              title: 'Pongo los pasos en orden',
              intro: 'Estas cinco acciones están **en desorden**. Cópialas en tu cuaderno numeradas del 1 al 5, en el orden en que el texto dice que hay que hacerlas. Piensa qué va primero: ¿comes o sacas los cuadernos?',
              ordered: false,
              items: [
                'Empacar el morral para el día siguiente',
                'Dejar el morral en su lugar al llegar',
                'Hacer primero la tarea más difícil',
                'Comer algo y descansar un rato',
                'Buscar una mesa despejada y sacar los útiles'
              ],
              key: [
                'Dejar el morral en su lugar al llegar',
                'Comer algo y descansar un rato',
                'Buscar una mesa despejada y sacar los útiles',
                'Hacer primero la tarea más difícil',
                'Empacar el morral para el día siguiente'
              ],
              keyNote: 'Primero descansar, después trabajar y de último dejar todo listo. Ese orden es el que hace que alcance el tiempo.'
            },
            {
              type: 'notebook',
              id: '3B3',
              title: 'Escribo mi propio texto instructivo',
              intro: 'Escribe en tu cuaderno un texto instructivo de **cuatro pasos** titulado: "Cómo calmarme cuando me pongo nervioso". Usa verbos que ordenen y numera los pasos. Puedes usar lo que practicaste en la **Sección 1** con la respiración cuadrada.',
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
              intro: 'Los dos textos hablan de descansar y organizarse. Si tuvieras que escoger uno para una exposición de ciencias y otro para pegar en la puerta de tu cuarto, ¿cuál escogerías para cada cosa? Copia las dos frases en tu cuaderno y complétalas.',
              ordered: false,
              items: ['Para la exposición de ciencias escogería… porque…', 'Para pegar en la puerta escogería… porque…'],
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
                'Finalidad: el 1 explica por qué necesitamos dormir; el 2 enseña a organizar la tarde.',
                'Organización: el 1 va en párrafos, uno por idea; el 2 va en pasos numerados, en orden.',
                'Palabras: el 1 da datos y cifras; el 2 da órdenes, con verbos de acción.',
                'Lo que aprendí: esta fila es tu respuesta personal, no tiene clave.'
              ]
            },
            {
              type: 'notebook',
              id: '3C2',
              title: 'Preguntas para opinar',
              intro: 'Aquí no hay una sola respuesta correcta y tampoco están en el solucionario. Lo importante es que expliques tu razón. Copia cada pregunta en el cuaderno y responde.',
              items: [
                'El Texto 2 dice que "descansar cinco minutos no es perder el tiempo". ¿Estás de acuerdo? Explica por qué.',
                '¿Cuál de los dos textos te pareció más útil a ti en este momento? Justifica tu respuesta.',
                'Si tuvieras que agregarle un paso más al Texto 2, ¿cuál agregarías y por qué?',
                '¿Qué le dirías a un compañero que se acuesta muy tarde todas las noches? Escribe tu respuesta como si se la estuvieras diciendo.'
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
                'Un resumen posible: dormir parece perder el tiempo, pero mientras tanto el cuerpo trabaja. Los niños de seis a doce años necesitan entre nueve y doce horas. Mientras duermen, el cerebro guarda lo aprendido, el cuerpo crece y repara los músculos y las defensas. Las pantallas dificultan el sueño, y acostarse siempre a la misma hora ayuda.'
              ],
              keyNote: 'El tuyo no tiene que decir exactamente lo mismo, pero sí debe recoger la idea principal de cada párrafo y estar escrito con tus palabras.'
            },
            {
              type: 'notebook',
              id: '3C4',
              title: 'Vuelvo al principio',
              intro: 'Busca en tu cuaderno lo que escribiste al comienzo sobre cuántas horas necesita dormir un niño. Léelo otra vez y escribe debajo tu respuesta.',
              ordered: false,
              items: ['¿Cambió mi idea? ¿En qué cambió?'],
              note: 'Esta la escribes con tus palabras: no hay respuesta en el solucionario.'
            },
            {
              type: 'notebook',
              id: '3C5',
              title: 'Mi compromiso',
              intro: 'Escoge **un solo** paso del Texto 2 para cumplir esta semana. Uno solo, el que creas que sí puedes sostener. Cópialo en tu cuaderno y escribe al lado los días que lo lograste.',
              ordered: false,
              items: ['Esta semana me comprometo a…', 'Lo logré los días: …'],
              note: 'Cambiar una costumbre cuesta. Si un día no se pudo, no pasa nada: se sigue al otro.'
            },
            {
              type: 'links',
              title: 'Para seguir aprendiendo',
              items: [
                { label: 'Cómo hacer un resumen (video)', href: 'https://www.youtube.com/watch?v=vuuagyKU55Y', note: 'Los mismos cuatro pasos de arriba, explicados en video. Sirve para la actividad 3.C.3.' }
              ]
            },
            {
              type: 'adult',
              title: 'Nota para la profesora Ruby',
              paragraphs: [
                'Los dos textos son originales y están calibrados para 7 a 9 años: frases cortas, una idea por párrafo y vocabulario cotidiano. La cifra de sueño que aparece en el Texto 1 —de nueve a doce horas para niños de seis a doce años— corresponde a la recomendación que manejan los especialistas en sueño infantil.',
                'La pregunta 4 de **3.C.2** y la actividad **3.C.5** conectan la lectura con la vida del estudiante. Vale la pena leerlas: suelen mostrar quién no está durmiendo bien en la casa.',
                'Las preguntas de opinión (3.A.0, 3.B.0, 3.C.0, 3.C.2, 3.C.4 y 3.C.5) no aparecen en el solucionario a propósito: no tienen respuesta correcta y no deben corregirse como si la tuvieran.'
              ]
            }
          ]
        }
      ]
    }
  ]
});
