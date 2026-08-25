/* ==========================================================================
   data/reading.js — Contenido del área de Comprensión lectora
   BORRADOR: la estructura es definitiva, los textos son de ejemplo y se
   reemplazarán cuando definamos el contenido real del curso.
   ========================================================================== */

window.Guide.register('reading', {
  title: 'Comprensión lectora',
  kicker: 'Área 1',
  icon: 'book',
  href: 'reading.html',
  description: 'Aprende a entender lo que lees: encontrar la idea principal, seguir el orden de los hechos y descubrir lo que el texto no dice con palabras.',

  units: [
    {
      id: 'u1',
      title: 'Antes de leer',
      summary: 'Prepararse antes de leer hace que entender sea mucho más fácil.',
      lessons: [
        {
          id: 'l1',
          title: 'Mirar el título y hacer predicciones',
          goal: 'usar el título y las imágenes para imaginar de qué trata un texto.',
          blocks: [
            {
              type: 'text',
              paragraphs: [
                'Antes de leer un texto completo, los buenos lectores hacen algo muy sencillo: **miran primero y adivinan después**. Observan el título, las imágenes y el tamaño del texto, y con eso ya se imaginan de qué se va a tratar.',
                'A esa idea que nos imaginamos antes de leer la llamamos **predicción**. No importa si al final acertamos o no: lo importante es que la mente se prepara para entender mejor.'
              ]
            },
            {
              type: 'callout',
              title: 'Truco del lector',
              paragraphs: [
                'Pregúntate siempre tres cosas antes de leer: ¿de qué creo que trata?, ¿qué sé yo sobre ese tema? y ¿qué quiero descubrir?'
              ]
            },
            {
              type: 'activity',
              activity: {
                id: 'a1',
                kind: 'choice',
                question: 'Un texto se titula "El día que la quebrada se llevó el puente". ¿De qué crees que trata?',
                options: [
                  'De una receta para preparar arepas',
                  'De una creciente que dañó un puente del pueblo',
                  'De un partido de fútbol en el colegio'
                ],
                answer: 1,
                hint: 'Fíjate en las palabras "quebrada" y "puente". ¿Con qué tienen que ver?',
                explain: 'El título habla de una quebrada y un puente, así que el texto tratará sobre agua que creció y dañó el puente.'
              }
            },
            {
              type: 'activity',
              activity: {
                id: 'a2',
                kind: 'truefalse',
                question: 'Si mi predicción no coincide con el texto, significa que leí mal.',
                answer: false,
                hint: 'Piensa en para qué sirve predecir.',
                explain: 'Predecir sirve para preparar la mente. Equivocarse en la predicción es normal y no es un error de lectura.'
              }
            }
          ]
        },
        {
          id: 'l2',
          title: 'Palabras nuevas: buscar pistas en el texto',
          goal: 'descubrir el significado de una palabra desconocida usando el resto de la oración.',
          blocks: [
            {
              type: 'text',
              paragraphs: [
                'Cuando aparece una palabra que no conoces, no hay que detenerse ni asustarse. Casi siempre las palabras que están **alrededor** te dan pistas de lo que significa.'
              ]
            },
            {
              type: 'example',
              title: 'Ejemplo',
              lines: [
                '"El sendero era tan **angosto** que solo cabía una persona a la vez."',
                'Pista: "solo cabía una persona". Entonces **angosto** quiere decir estrecho.'
              ]
            },
            {
              type: 'activity',
              activity: {
                id: 'a3',
                kind: 'choice',
                question: '"La abuela guardaba el maíz en una vasija de barro muy antigua." ¿Qué es una vasija?',
                options: ['Un recipiente para guardar cosas', 'Una silla de madera', 'Un tipo de sombrero'],
                answer: 0,
                hint: 'Piensa en dónde se guarda el maíz.',
                explain: 'La oración dice que allí se guardaba el maíz, así que una vasija es un recipiente.'
              }
            },
            {
              type: 'activity',
              activity: {
                id: 'a4',
                kind: 'match',
                question: 'Une cada palabra con su significado.',
                leftLabel: 'Palabra',
                rightLabel: 'Significado',
                pairs: [
                  { left: 'Veloz', right: 'Que va muy rápido' },
                  { left: 'Diminuto', right: 'Muy pequeño' },
                  { left: 'Silencioso', right: 'Que no hace ruido' }
                ],
                explain: 'Muy bien: cada palabra encontró su significado.'
              }
            }
          ]
        }
      ]
    },

    {
      id: 'u2',
      title: 'Mientras leo',
      summary: 'Encontrar la idea principal y seguir el orden de los hechos.',
      lessons: [
        {
          id: 'l3',
          title: 'La idea principal',
          goal: 'reconocer de qué trata principalmente un párrafo.',
          blocks: [
            {
              type: 'text',
              paragraphs: [
                'La **idea principal** es lo más importante que dice un texto. Es la respuesta a la pregunta: ¿de qué trata esto sobre todo?',
                'Los demás datos son **detalles**: acompañan a la idea principal, pero no son lo más importante.'
              ]
            },
            {
              type: 'reading',
              title: 'La huerta de la escuela',
              paragraphs: [
                'En la escuela de Marcela sembraron una huerta detrás del salón. Los niños de tercero llevaron semillas de cilantro, tomate y lechuga. Cada mañana, antes de entrar a clase, dos estudiantes riegan las plantas y quitan la maleza.',
                'Al principio nada crecía y todos estaban desanimados. Doña Rosa, la señora del restaurante escolar, les enseñó a mezclar la tierra con cáscaras de fruta. Tres semanas después aparecieron las primeras hojas verdes.',
                'Hoy la huerta da lechugas grandes que se usan en el almuerzo de la escuela. Marcela dice que lo que más le gusta no es comerlas, sino ver que algo que ella sembró alimenta a sus compañeros.'
              ]
            },
            {
              type: 'activity',
              activity: {
                id: 'a5',
                kind: 'choice',
                question: '¿Cuál es la idea principal del texto?',
                options: [
                  'A Marcela le gusta la lechuga',
                  'Los estudiantes de tercero cuidaron una huerta hasta lograr que diera alimentos',
                  'Doña Rosa trabaja en el restaurante escolar'
                ],
                answer: 1,
                hint: 'Pregúntate: si tuviera que contar el texto en una sola frase, ¿qué diría?',
                explain: 'Todo el texto habla del trabajo de los niños con la huerta y de lo que lograron. Lo demás son detalles.'
              }
            },
            {
              type: 'activity',
              activity: {
                id: 'a6',
                kind: 'fill',
                question: 'Completa con información del texto.',
                text: 'Los niños mezclaron la tierra con cáscaras de {{fruta}} y tres {{semanas}} después salieron las primeras hojas.',
                hint: 'Vuelve al segundo párrafo del texto.',
                explain: 'Exacto: cáscaras de fruta y tres semanas de espera.'
              }
            }
          ]
        },
        {
          id: 'l4',
          title: 'El orden de los hechos',
          goal: 'ordenar lo que pasó primero, después y al final.',
          blocks: [
            {
              type: 'text',
              paragraphs: [
                'En un relato los hechos ocurren en un orden. Palabras como **primero**, **luego**, **después** y **al final** son señales que te ayudan a seguirlo.'
              ]
            },
            {
              type: 'activity',
              activity: {
                id: 'a7',
                kind: 'order',
                question: 'Ordena los hechos del texto "La huerta de la escuela".',
                items: [
                  'Los niños llevaron semillas y sembraron la huerta',
                  'Las plantas no crecían y todos se desanimaron',
                  'Doña Rosa les enseñó a mezclar la tierra con cáscaras',
                  'La huerta dio lechugas para el almuerzo escolar'
                ],
                hint: 'Piensa qué tuvo que pasar antes para que ocurriera lo siguiente.',
                explain: 'Ese es el orden correcto de la historia.'
              }
            }
          ]
        }
      ]
    },

    {
      id: 'u3',
      title: 'Después de leer',
      summary: 'Sacar conclusiones y dar tu propia opinión sobre lo leído.',
      lessons: [
        {
          id: 'l5',
          title: 'Leer entre líneas',
          goal: 'deducir información que el texto no dice con todas sus palabras.',
          blocks: [
            {
              type: 'text',
              paragraphs: [
                'A veces el texto no dice algo directamente, pero nos deja **pistas** para descubrirlo. A eso lo llamamos hacer una **inferencia**.'
              ]
            },
            {
              type: 'example',
              title: 'Ejemplo',
              lines: [
                '"Julián entró con el uniforme empapado y dejando charcos en el piso."',
                'El texto no dice "estaba lloviendo", pero podemos deducirlo.'
              ]
            },
            {
              type: 'activity',
              activity: {
                id: 'a8',
                kind: 'choice',
                question: '"Marcela sonrió cuando vio su lechuga en el plato de su compañero." ¿Qué podemos deducir?',
                options: [
                  'Que Marcela tenía hambre',
                  'Que Marcela se sintió orgullosa de su trabajo',
                  'Que a Marcela no le gustan las lechugas'
                ],
                answer: 1,
                hint: 'Piensa en por qué alguien sonríe al ver el resultado de su esfuerzo.',
                explain: 'La sonrisa es la pista: se sintió orgullosa de lo que sembró.'
              }
            },
            {
              type: 'activity',
              activity: {
                id: 'a9',
                kind: 'truefalse',
                question: 'Una inferencia se debe apoyar en pistas del texto.',
                answer: true,
                hint: 'Inferir no es inventar.',
                explain: 'Correcto: inferir es deducir con pistas, no imaginar cualquier cosa.'
              }
            }
          ]
        }
      ]
    }
  ]
});
