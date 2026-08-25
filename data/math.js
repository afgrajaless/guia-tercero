/* ==========================================================================
   data/math.js — Contenido del área de Matemáticas
   BORRADOR: la estructura es definitiva, los ejercicios son de ejemplo y se
   reemplazarán cuando definamos el contenido real del curso.
   ========================================================================== */

window.Guide.register('math', {
  title: 'Matemáticas',
  kicker: 'Área 2',
  icon: 'numbers',
  href: 'math.html',
  description: 'Números hasta el 9.999, sumas y restas con reagrupación, tablas de multiplicar y los primeros repartos. Paso a paso y con ejemplos de la vida diaria.',

  units: [
    {
      id: 'u1',
      title: 'Números hasta 9.999',
      summary: 'Leer, escribir y comparar números de cuatro cifras.',
      lessons: [
        {
          id: 'l1',
          title: 'Valor posicional',
          goal: 'saber cuánto vale cada cifra según el lugar que ocupa.',
          blocks: [
            {
              type: 'text',
              paragraphs: [
                'En un número, cada cifra vale distinto según **el lugar donde está**. De derecha a izquierda tenemos: unidades, decenas, centenas y unidades de mil.'
              ]
            },
            {
              type: 'example',
              title: 'El número 3.472 por dentro',
              lines: [
                '3 unidades de mil = 3.000',
                '4 centenas = 400',
                '7 decenas = 70',
                '2 unidades = 2',
                '3.000 + 400 + 70 + 2 = **3.472**'
              ]
            },
            {
              type: 'activity',
              activity: {
                id: 'a1',
                kind: 'choice',
                question: 'En el número 5.681, ¿cuánto vale la cifra 6?',
                options: ['6', '60', '600', '6.000'],
                answer: 2,
                hint: 'Cuenta desde la derecha: unidades, decenas, centenas...',
                explain: 'El 6 está en las centenas, así que vale 600.'
              }
            },
            {
              type: 'activity',
              activity: {
                id: 'a2',
                kind: 'fill',
                question: 'Descompón el número 2.905.',
                text: '2.905 = {{2000}} + {{900}} + {{5}}',
                hint: 'Ojo: en las decenas hay un cero, así que ese lugar no aporta.',
                explain: 'Correcto: 2.000 + 900 + 5 = 2.905.'
              }
            },
            {
              type: 'activity',
              activity: {
                id: 'a3',
                kind: 'order',
                question: 'Ordena los números de menor a mayor.',
                items: ['1.209', '1.290', '2.109', '2.190'],
                hint: 'Compara primero la cifra de las unidades de mil.',
                explain: 'Ese es el orden de menor a mayor.'
              }
            }
          ]
        },
        {
          id: 'l2',
          title: 'Comparar números',
          goal: 'usar los signos mayor que, menor que e igual.',
          blocks: [
            {
              type: 'list',
              title: 'Cómo comparar sin equivocarse',
              items: [
                'Primero cuenta cuántas cifras tiene cada número: el que tiene más cifras es mayor.',
                'Si tienen las mismas cifras, compara de izquierda a derecha hasta encontrar una diferencia.',
                'El signo siempre "abre la boca" hacia el número más grande.'
              ]
            },
            {
              type: 'activity',
              activity: {
                id: 'a4',
                kind: 'choice',
                question: '¿Qué signo va entre 4.320 y 4.302?',
                options: ['Mayor que (>)', 'Menor que (<)', 'Igual (=)'],
                answer: 0,
                hint: 'Las tres primeras cifras son iguales. Fíjate en las decenas.',
                explain: '4.320 tiene 2 decenas y 4.302 tiene 0 decenas, así que 4.320 > 4.302.'
              }
            }
          ]
        }
      ]
    },

    {
      id: 'u2',
      title: 'Sumar y restar',
      summary: 'Operaciones con reagrupación y problemas de la vida diaria.',
      lessons: [
        {
          id: 'l3',
          title: 'Sumar llevando',
          goal: 'sumar números de tres y cuatro cifras cuando hay que llevar.',
          blocks: [
            {
              type: 'text',
              paragraphs: [
                'Cuando al sumar una columna el resultado pasa de 9, escribimos la unidad y **llevamos** la decena a la columna siguiente.'
              ]
            },
            {
              type: 'example',
              title: 'Paso a paso: 478 + 265',
              lines: [
                'Unidades: 8 + 5 = 13. Escribo 3 y llevo 1.',
                'Decenas: 7 + 6 + 1 = 14. Escribo 4 y llevo 1.',
                'Centenas: 4 + 2 + 1 = 7.',
                'Resultado: **743**'
              ]
            },
            {
              type: 'activity',
              activity: {
                id: 'a5',
                kind: 'fill',
                question: 'Resuelve la suma.',
                text: '356 + 187 = {{543}}',
                hint: 'Empieza por las unidades y no olvides lo que llevas.',
                explain: '356 + 187 = 543.'
              }
            },
            {
              type: 'activity',
              activity: {
                id: 'a6',
                kind: 'choice',
                question: 'En la tienda de la esquina hay 1.245 dulces y llegan 380 más. ¿Cuántos hay ahora?',
                options: ['1.525', '1.625', '1.615'],
                answer: 1,
                hint: 'Es una suma: 1.245 + 380.',
                explain: '1.245 + 380 = 1.625 dulces.'
              }
            }
          ]
        },
        {
          id: 'l4',
          title: 'Restar prestando',
          goal: 'restar cuando la cifra de arriba es menor que la de abajo.',
          blocks: [
            {
              type: 'text',
              paragraphs: [
                'Si arriba hay menos que abajo, le **pedimos prestada** una decena a la columna vecina. Esa decena se convierte en 10 unidades.'
              ]
            },
            {
              type: 'activity',
              activity: {
                id: 'a7',
                kind: 'fill',
                question: 'Resuelve la resta.',
                text: '604 - 258 = {{346}}',
                hint: 'En las unidades: 4 no alcanza para quitarle 8, hay que prestar.',
                explain: '604 - 258 = 346.'
              }
            },
            {
              type: 'activity',
              activity: {
                id: 'a8',
                kind: 'truefalse',
                question: 'Para comprobar si una resta está bien, puedo sumar el resultado con el número que resté.',
                answer: true,
                hint: 'Si 604 - 258 = 346, ¿cuánto da 346 + 258?',
                explain: 'Sí: 346 + 258 = 604. La suma es la prueba de la resta.'
              }
            }
          ]
        }
      ]
    },

    {
      id: 'u3',
      title: 'Multiplicar y repartir',
      summary: 'Las tablas como sumas repetidas y la división como reparto justo.',
      lessons: [
        {
          id: 'l5',
          title: 'Multiplicar es sumar varias veces',
          goal: 'entender qué significa multiplicar y usar las tablas.',
          blocks: [
            {
              type: 'text',
              paragraphs: [
                'Multiplicar es una manera rápida de sumar **grupos iguales**. En lugar de sumar 6 + 6 + 6 + 6, decimos 4 × 6.'
              ]
            },
            {
              type: 'activity',
              activity: {
                id: 'a9',
                kind: 'choice',
                question: 'En el salón hay 7 mesas y en cada una hay 4 sillas. ¿Cuántas sillas hay?',
                options: ['11 sillas', '24 sillas', '28 sillas'],
                answer: 2,
                hint: 'Son 7 grupos de 4.',
                explain: '7 × 4 = 28 sillas.'
              }
            },
            {
              type: 'activity',
              activity: {
                id: 'a10',
                kind: 'match',
                question: 'Une cada multiplicación con su resultado.',
                leftLabel: 'Operación',
                rightLabel: 'Resultado',
                pairs: [
                  { left: '6 × 7', right: '42' },
                  { left: '8 × 4', right: '32' },
                  { left: '9 × 5', right: '45' },
                  { left: '3 × 8', right: '24' }
                ],
                explain: 'Todas las tablas quedaron bien emparejadas.'
              }
            }
          ]
        },
        {
          id: 'l6',
          title: 'Repartir en partes iguales',
          goal: 'resolver divisiones sencillas repartiendo en grupos iguales.',
          blocks: [
            {
              type: 'text',
              paragraphs: [
                'Dividir es **repartir en partes iguales**. Si tengo 24 colombinas y las reparto entre 6 amigos, cada uno recibe 4.'
              ]
            },
            {
              type: 'activity',
              activity: {
                id: 'a11',
                kind: 'fill',
                question: 'Completa el reparto.',
                text: '35 lápices repartidos entre 5 niños: a cada uno le tocan {{7}} lápices.',
                hint: 'Piensa: ¿por cuánto multiplico 5 para llegar a 35?',
                explain: '35 ÷ 5 = 7 lápices para cada uno.'
              }
            },
            {
              type: 'activity',
              activity: {
                id: 'a12',
                kind: 'choice',
                question: 'Tengo 26 galletas para repartir entre 4 niños en partes iguales. ¿Qué pasa?',
                options: [
                  'A cada uno le tocan 6 y sobran 2',
                  'A cada uno le tocan 7 y no sobra nada',
                  'No se puede repartir'
                ],
                answer: 0,
                hint: '4 × 6 = 24. ¿Cuánto falta para 26?',
                explain: 'A cada niño le tocan 6 galletas y sobran 2: ese sobrante se llama residuo.'
              }
            }
          ]
        }
      ]
    }
  ]
});
