/* ==========================================================================
   data/wellbeing.js — Contenido del área Psicosocial
   BORRADOR: la estructura es definitiva, las situaciones son de ejemplo y se
   reemplazarán cuando definamos el contenido real del curso.
   ========================================================================== */

window.Guide.register('wellbeing', {
  title: 'Psicosocial',
  kicker: 'Área 3',
  icon: 'heart',
  href: 'wellbeing.html',
  description: 'Reconocer lo que siento, convivir con los demás y saber a quién pedir ayuda. Situaciones cotidianas para pensar y conversar.',

  units: [
    {
      id: 'u1',
      title: 'Conozco mis emociones',
      summary: 'Ponerle nombre a lo que siento es el primer paso para manejarlo.',
      lessons: [
        {
          id: 'l1',
          title: 'Todas las emociones sirven',
          goal: 'nombrar tus emociones y entender para qué sirve cada una.',
          blocks: [
            {
              type: 'text',
              paragraphs: [
                'Las emociones son señales que nos manda el cuerpo. No hay emociones **buenas** ni **malas**: todas nos avisan algo importante.',
                'La alegría nos dice que algo nos gusta. El miedo nos protege del peligro. La rabia aparece cuando sentimos que algo es injusto. La tristeza nos pide compañía.'
              ]
            },
            {
              type: 'callout',
              title: 'Recuerda',
              paragraphs: [
                'Sentir rabia no está mal. Lo que puede estar mal es lo que hago cuando tengo rabia, por ejemplo, golpear o gritar.'
              ]
            },
            {
              type: 'activity',
              activity: {
                id: 'a1',
                kind: 'match',
                question: 'Une cada situación con la emoción que suele producir.',
                leftLabel: 'Situación',
                rightLabel: 'Emoción',
                pairs: [
                  { left: 'Me eligieron para el equipo', right: 'Alegría' },
                  { left: 'Se burlaron de mi cuaderno', right: 'Tristeza' },
                  { left: 'Alguien me quitó el turno', right: 'Rabia' },
                  { left: 'Me perdí en un lugar grande', right: 'Miedo' }
                ],
                explain: 'Cada emoción tiene una razón de ser.'
              }
            },
            {
              type: 'activity',
              activity: {
                id: 'a2',
                kind: 'truefalse',
                question: 'Los niños grandes no deberían sentir miedo.',
                answer: false,
                hint: 'Piensa para qué sirve el miedo.',
                explain: 'Todas las personas sienten miedo a cualquier edad. El miedo nos cuida.'
              }
            }
          ]
        },
        {
          id: 'l2',
          title: 'Calmarme cuando me sube la rabia',
          goal: 'usar una técnica sencilla para calmarte antes de reaccionar.',
          blocks: [
            {
              type: 'list',
              title: 'La técnica de la tortuga',
              items: [
                'Me detengo. No hago ni digo nada todavía.',
                'Respiro hondo tres veces, despacio.',
                'Pienso qué me pasó y qué quiero decir.',
                'Hablo diciendo lo que siento, sin gritar ni golpear.'
              ]
            },
            {
              type: 'activity',
              activity: {
                id: 'a3',
                kind: 'order',
                question: 'Ordena los pasos de la técnica de la tortuga.',
                items: [
                  'Me detengo',
                  'Respiro hondo tres veces',
                  'Pienso qué me pasó',
                  'Hablo sin gritar'
                ],
                hint: 'Lo primero es frenar; lo último, hablar.',
                explain: 'Ese es el orden: parar, respirar, pensar y hablar.'
              }
            },
            {
              type: 'activity',
              activity: {
                id: 'a4',
                kind: 'choice',
                question: 'Un compañero te empujó sin querer y te dio mucha rabia. ¿Qué haces primero?',
                options: [
                  'Lo empujo de vuelta para que sienta lo mismo',
                  'Respiro hondo y le digo que me molestó',
                  'Me quedo callado y guardo la rabia todo el día'
                ],
                answer: 1,
                hint: 'Ni devolver el golpe ni callar: hay una tercera opción.',
                explain: 'Respirar y decir lo que sientes te permite resolver sin lastimar y sin quedarte cargado.'
              }
            }
          ]
        }
      ]
    },

    {
      id: 'u2',
      title: 'Convivo con los demás',
      summary: 'Acuerdos, respeto y solución de conflictos en el salón.',
      lessons: [
        {
          id: 'l3',
          title: 'Resolver un conflicto sin pelear',
          goal: 'usar palabras para resolver un desacuerdo.',
          blocks: [
            {
              type: 'text',
              paragraphs: [
                'Un **conflicto** es cuando dos personas quieren cosas distintas al mismo tiempo. Los conflictos son normales; lo importante es cómo los resolvemos.'
              ]
            },
            {
              type: 'reading',
              title: 'El balón del descanso',
              paragraphs: [
                'Samuel y Valeria llegaron al mismo tiempo por el único balón del salón. Samuel lo agarró primero y dijo que era suyo porque lo vio antes. Valeria se cruzó de brazos y dijo que ella lo había pedido prestado el día anterior.',
                'Los dos se quedaron mirando el balón sin jugar. El descanso pasaba y ninguno cedía. Entonces Valeria propuso algo: jugar juntos y turnarse cada cinco minutos.',
                'Al final del descanso los dos habían jugado y además se rieron un rato.'
              ]
            },
            {
              type: 'activity',
              activity: {
                id: 'a5',
                kind: 'choice',
                question: '¿Qué hizo que el conflicto se resolviera?',
                options: [
                  'Que Samuel se rindiera',
                  'Que Valeria propusiera una solución para los dos',
                  'Que llegara un profesor a regañarlos'
                ],
                answer: 1,
                hint: 'Fíjate en el segundo párrafo.',
                explain: 'Valeria propuso una solución en la que ambos ganaban. Eso es negociar.'
              }
            },
            {
              type: 'activity',
              activity: {
                id: 'a6',
                kind: 'fill',
                question: 'Completa la frase para pedir algo sin pelear.',
                text: 'Cuando me quitan el turno me siento {{mal|triste|con rabia}}, por eso te pido que esperemos por {{turnos}}.',
                hint: 'Primero digo cómo me siento, después pido lo que quiero.',
                explain: 'Decir cómo me siento y pedir con claridad evita muchas peleas.'
              }
            }
          ]
        },
        {
          id: 'l4',
          title: 'Cuando alguien molesta a otro',
          goal: 'reconocer el maltrato entre compañeros y saber qué hacer.',
          blocks: [
            {
              type: 'text',
              paragraphs: [
                'Una broma deja de ser broma cuando **se repite** y cuando a la otra persona **le hace daño**. Eso ya no es un juego.'
              ]
            },
            {
              type: 'activity',
              activity: {
                id: 'a7',
                kind: 'truefalse',
                question: 'Si veo que molestan a un compañero y me quedo callado, no estoy haciendo nada malo.',
                answer: false,
                hint: 'Piensa en cómo se siente quien está siendo molestado.',
                explain: 'Callar deja solo al que sufre. Avisar a un adulto de confianza sí ayuda.'
              }
            },
            {
              type: 'activity',
              activity: {
                id: 'a8',
                kind: 'choice',
                question: 'Un compañero le esconde la maleta a otro todos los días y todos se ríen. ¿Qué es lo mejor que puedes hacer?',
                options: [
                  'Reírme también para no quedar mal',
                  'Contarle a un adulto de confianza lo que está pasando',
                  'Esconder yo también algo para que se den cuenta'
                ],
                answer: 1,
                hint: 'Buscar ayuda no es acusar: es cuidar.',
                explain: 'Contarle a un adulto de confianza es la forma más segura de detenerlo.'
              }
            }
          ]
        }
      ]
    },

    {
      id: 'u3',
      title: 'Me cuido y pido ayuda',
      summary: 'Mi cuerpo, mis límites y las personas de confianza.',
      lessons: [
        {
          id: 'l5',
          title: 'Mis límites y mis personas de confianza',
          goal: 'identificar situaciones que debes contarle a un adulto de confianza.',
          blocks: [
            {
              type: 'text',
              paragraphs: [
                'Tu cuerpo es tuyo. Nadie puede tocarte de una forma que te haga sentir incómodo, ni pedirte que guardes un secreto que te preocupa.',
                'Una **persona de confianza** es un adulto que te escucha, te cree y te cuida: tu mamá, tu papá, un cuidador, tu profesora, la orientadora del colegio.'
              ]
            },
            {
              type: 'callout',
              title: 'Regla clara',
              paragraphs: [
                'Ningún secreto que te haga sentir mal debe guardarse. Si alguien te pide que no cuentes algo así, cuéntalo de todas formas.'
              ]
            },
            {
              type: 'activity',
              activity: {
                id: 'a9',
                kind: 'choice',
                question: 'Alguien te pide guardar un secreto que te hace sentir incómodo. ¿Qué haces?',
                options: [
                  'Lo guardo porque lo prometí',
                  'Se lo cuento a un adulto de confianza',
                  'Se lo cuento solo a un amigo del salón'
                ],
                answer: 1,
                hint: 'Piensa quién puede realmente ayudarte.',
                explain: 'Los secretos que incomodan siempre se cuentan a un adulto de confianza.'
              }
            },
            {
              type: 'activity',
              activity: {
                id: 'a10',
                kind: 'match',
                question: 'Une cada situación con la mejor respuesta.',
                leftLabel: 'Situación',
                rightLabel: 'Qué hago',
                pairs: [
                  { left: 'Me siento triste hace varios días', right: 'Le cuento a un adulto de confianza' },
                  { left: 'Un juego me hace sentir incómodo', right: 'Digo "no quiero" y me retiro' },
                  { left: 'Vi que un compañero está siendo maltratado', right: 'Aviso a la profesora' }
                ],
                explain: 'Pedir ayuda es una manera valiente de cuidarte y cuidar a otros.'
              }
            }
          ]
        }
      ]
    }
  ]
});
