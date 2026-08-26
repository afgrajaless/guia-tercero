/* ==========================================================================
   data/math.js — Miércoles 2 de septiembre · Matemáticas
   DBA 2 · Razonamiento y resolución de problemas · Componente numérico-variacional

   Todas las respuestas de esta sección se autocorrigen. Los números se
   comparan ignorando los puntos de miles, así que "424.002" y "424002"
   valen igual.
   ========================================================================== */

window.Guide.register('math', {
  title: 'Analizo, calculo, reparto',
  short: 'Matemáticas',
  icon: 'numbers',
  href: 'math.html',
  day: { label: 'Miércoles 2 de septiembre', short: 'Miércoles 2', weekday: 'Miércoles' },
  subject: 'DBA 2 · Componente numérico-variacional',
  description: 'Números naturales hasta seis cifras, las cuatro operaciones y problemas de nuestro entorno. Desarrolla las operaciones en el cuaderno y escribe aquí solo el resultado.',
  learning: 'Uso las cuatro operaciones y las propiedades de los números naturales hasta seis cifras para resolver situaciones de mi entorno.',

  notice: {
    title: 'Antes de empezar',
    dismissLabel: 'Listo, ya tengo el cuaderno',
    paragraphs: [
      'Desarrolla las operaciones **también en el cuaderno**, bien alineadas por columnas. Aquí solo escribes el resultado.',
      'Puedes escribir los números con punto de miles (**424.002**) o sin él (**424002**): las dos formas se aceptan.',
      'Si te trabas, abre **Ver el procedimiento**. Usarlo no cuenta como error.'
    ]
  },

  units: [
    {
      id: 'u1',
      title: 'Números naturales hasta 6 cifras',
      summary: 'Leer, escribir, descomponer y comparar números grandes.',
      lessons: [
        {
          id: 'l1',
          code: '2.A',
          title: 'Hasta las centenas de mil',
          goal: 'leer, escribir y comparar números de hasta seis cifras.',
          blocks: [
            {
              type: 'text',
              paragraphs: [
                'Un número de 6 cifras llega hasta las **CENTENAS DE MIL**. Para leerlo:'
              ]
            },
            {
              type: 'list',
              ordered: true,
              items: [
                'Ubico el punto que separa los miles, contando tres cifras desde la derecha.',
                'Digo la cantidad que está a la izquierda del punto y agrego la palabra **MIL**.',
                'Digo la cantidad que está a la derecha del punto.'
              ]
            },
            {
              type: 'example',
              title: 'Ejemplo',
              lines: [
                '**348.912** se lee TRESCIENTOS CUARENTA Y OCHO MIL NOVECIENTOS DOCE.'
              ]
            },
            {
              type: 'table',
              title: 'Tabla posicional',
              headers: ['CM', 'DM', 'UM', 'C', 'D', 'U'],
              rows: [
                ['Centena de mil', 'Decena de mil', 'Unidad de mil', 'Centena', 'Decena', 'Unidad'],
                ['100.000', '10.000', '1.000', '100', '10', '1'],
                ['**3**', '**4**', '**8**', '**9**', '**1**', '**2**']
              ],
              note: 'Cada cifra vale distinto según el lugar que ocupa.'
            },
            {
              type: 'notebook',
              id: '2A1',
              title: 'Escribo con letras',
              intro: 'Copia estos números en tu cuaderno y escríbelos con letras. Cuando termines, marca "Ya lo escribí" para ver las respuestas y comparar.',
              keyTitle: 'Respuestas para comparar',
              items: ['190.408', '862.500', '999.999', '604.007', '250.190', '483.026', '570.004', '316.280'],
              key: [
                '190.408 — ciento noventa mil cuatrocientos ocho',
                '862.500 — ochocientos sesenta y dos mil quinientos',
                '999.999 — novecientos noventa y nueve mil novecientos noventa y nueve',
                '604.007 — seiscientos cuatro mil siete',
                '250.190 — doscientos cincuenta mil ciento noventa',
                '483.026 — cuatrocientos ochenta y tres mil veintiséis',
                '570.004 — quinientos setenta mil cuatro',
                '316.280 — trescientos dieciséis mil doscientos ochenta'
              ]
            },
            {
              type: 'activity',
              activity: {
                id: '2A2',
                kind: 'numeric',
                question: 'Escribo con cifras',
                layout: 'stacked',
                explain: 'Muy bien. Fíjate que el cero también ocupa su lugar.',
                items: [
                  { text: 'Cuatrocientos doce mil quinientos ocho', answer: '412.508' },
                  { text: 'Ochocientos mil setenta', answer: '800.070' },
                  { text: 'Seiscientos treinta y cinco mil doscientos catorce', answer: '635.214' },
                  { text: 'Novecientos nueve mil novecientos', answer: '909.900' },
                  { text: 'Doscientos siete mil tres', answer: '207.003' },
                  { text: 'Setecientos cincuenta mil cuatrocientos sesenta y uno', answer: '750.461' }
                ]
              }
            },
            {
              type: 'notebook',
              id: '2A3',
              title: 'Descompongo',
              intro: 'Descompón estos números en tu cuaderno, como en el ejemplo: **526.407 = 500.000 + 20.000 + 6.000 + 400 + 0 + 7**',
              keyTitle: 'Respuestas para comparar',
              items: ['347.205', '810.064', '209.730'],
              key: [
                '347.205 = 300.000 + 40.000 + 7.000 + 200 + 0 + 5',
                '810.064 = 800.000 + 10.000 + 0 + 0 + 60 + 4',
                '209.730 = 200.000 + 0 + 9.000 + 700 + 30 + 0'
              ]
            },
            {
              type: 'activity',
              activity: {
                id: '2A4',
                kind: 'numeric',
                question: 'Comparo: elige el signo que va en cada casilla.',
                explain: 'Cuando las primeras cifras son iguales, hay que seguir comparando hacia la derecha.',
                items: [
                  { text: '348.912 ___ 348.921', options: ['<', '>', '='], answer: '<' },
                  { text: '700.000 ___ 699.999', options: ['<', '>', '='], answer: '>' },
                  { text: '205.064 ___ 205.064', options: ['<', '>', '='], answer: '=' },
                  { text: '530.800 ___ 53.800', options: ['<', '>', '='], answer: '>' },
                  { text: '999.099 ___ 990.999', options: ['<', '>', '='], answer: '>' }
                ]
              }
            }
          ]
        }
      ]
    },

    {
      id: 'u2',
      title: 'Adición y sustracción',
      summary: 'Sumar llevando y restar prestando, con números de seis cifras.',
      lessons: [
        {
          id: 'l2',
          code: '2.B',
          title: 'Sumo y resto',
          goal: 'sumar y restar números grandes y comprobar el resultado.',
          blocks: [
            {
              type: 'text',
              paragraphs: [
                'En la **suma**, los términos se llaman SUMANDOS y el resultado, SUMA o TOTAL. Se organizan las cifras por columnas (unidades bajo unidades) y se empieza por la derecha. Si una columna pasa de 9, se lleva una unidad a la columna siguiente.',
                'En la **resta**, el número de arriba es el MINUENDO, el de abajo el SUSTRAENDO y el resultado la DIFERENCIA. Cuando una cifra de arriba es menor que la de abajo, se pide prestado a la columna de la izquierda.'
              ]
            },
            {
              type: 'callout',
              title: 'Prueba de la resta',
              paragraphs: [
                '**diferencia + sustraendo = minuendo.** Si no da, hay un error.'
              ]
            },
            {
              type: 'activity',
              activity: {
                id: '2B1',
                kind: 'numeric',
                question: 'Adiciones',
                explain: 'Bien. Recuerda revisar lo que llevas en cada columna.',
                items: [
                  { text: '234.567 + 189.435', answer: '424.002' },
                  { text: '405.812 + 97.649', answer: '503.461' },
                  { text: '318.204 + 258.796', answer: '577.000' },
                  { text: '560.039 + 249.961', answer: '810.000' },
                  { text: '127.450 + 63.280 + 209.315', answer: '400.045' },
                  { text: '400.008 + 99.992 + 150.000', answer: '650.000' }
                ]
              }
            },
            {
              type: 'activity',
              activity: {
                id: '2B2',
                kind: 'numeric',
                question: 'Sustracciones',
                explain: 'Muy bien. Comprueba cada una con la prueba de la resta.',
                items: [
                  { text: '700.000 − 348.912', answer: '351.088' },
                  { text: '512.340 − 279.865', answer: '232.475' },
                  { text: '903.006 − 456.789', answer: '446.217' },
                  { text: '850.200 − 99.999', answer: '750.201' },
                  { text: '604.010 − 385.427', answer: '218.583' },
                  { text: '999.999 − 456.123', answer: '543.876' }
                ]
              }
            },
            {
              type: 'notebook',
              id: '2B3',
              title: 'Compruebo mis restas',
              intro: 'En el cuaderno, comprueba las seis sustracciones con la prueba de la resta: suma la diferencia con el sustraendo y verifica que te dé el minuendo.',
              items: ['Ejemplo: 351.088 + 348.912 = 700.000 ✔']
            }
          ]
        }
      ]
    },

    {
      id: 'u3',
      title: 'Multiplicación',
      summary: 'Multiplicar por dos y por tres cifras sin perder los renglones.',
      lessons: [
        {
          id: 'l3',
          code: '2.C',
          title: 'Multiplico por 2 y 3 cifras',
          goal: 'multiplicar corriendo bien cada renglón.',
          blocks: [
            {
              type: 'text',
              paragraphs: [
                'Los términos de la multiplicación son los **FACTORES** y el resultado es el **PRODUCTO**.'
              ]
            },
            {
              type: 'steps',
              title: 'Ver el procedimiento',
              lines: [
                'Multiplico primero por las unidades del segundo factor y escribo el resultado.',
                'Luego multiplico por las decenas y escribo ese resultado corrido **un** lugar hacia la izquierda.',
                'Si el segundo factor tiene centenas, agrego un tercer renglón corrido **dos** lugares hacia la izquierda.',
                'Al final sumo todos los renglones.'
              ],
              note: '**Ojo con el cero:** si el segundo factor tiene un cero (por ejemplo 208), ese renglón da cero. Puedes escribirlo o saltarlo, pero no olvides correr el renglón siguiente dos lugares.'
            },
            {
              type: 'activity',
              activity: {
                id: '2C1',
                kind: 'numeric',
                question: 'Multiplicaciones por 2 cifras',
                explain: 'Bien. Los dos renglones quedaron en su lugar.',
                items: [
                  { text: '1.243 × 26', answer: '32.318' },
                  { text: '3.508 × 47', answer: '164.876' },
                  { text: '2.076 × 35', answer: '72.660' },
                  { text: '4.890 × 62', answer: '303.180' },
                  { text: '1.509 × 84', answer: '126.756' },
                  { text: '6.207 × 39', answer: '242.073' }
                ]
              }
            },
            {
              type: 'activity',
              activity: {
                id: '2C2',
                kind: 'numeric',
                question: 'Multiplicaciones por 3 cifras',
                hint: 'Revisa que el tercer renglón esté corrido dos lugares hacia la izquierda.',
                explain: 'Excelente. Esas son las más difíciles del día.',
                items: [
                  { text: '2.164 × 315', answer: '681.660' },
                  { text: '4.027 × 208', answer: '837.616' },
                  { text: '1.856 × 134', answer: '248.704' },
                  { text: '3.405 × 260', answer: '885.300' },
                  { text: '1.078 × 523', answer: '563.794' },
                  { text: '2.930 × 407', answer: '1.192.510' }
                ]
              }
            }
          ]
        }
      ]
    },

    {
      id: 'u4',
      title: 'División',
      summary: 'Repartir por dos y tres cifras, con su cociente y su residuo.',
      lessons: [
        {
          id: 'l4',
          code: '2.D',
          title: 'Divido por 2 y 3 cifras',
          goal: 'dividir y saber siempre cuánto sobra.',
          blocks: [
            {
              type: 'text',
              paragraphs: [
                'Los términos de la división son: **DIVIDENDO** (lo que se reparte), **DIVISOR** (entre cuántos se reparte), **COCIENTE** (lo que le toca a cada uno) y **RESIDUO** (lo que sobra).'
              ]
            },
            {
              type: 'steps',
              title: 'Ver el procedimiento',
              lines: [
                'Tomo del dividendo tantas cifras como tenga el divisor. Si el número que formé es menor que el divisor, tomo una cifra más.',
                'Busco cuántas veces cabe el divisor en ese número. Escribo esa cifra en el cociente.',
                'Multiplico esa cifra por el divisor y resto el resultado.',
                'Bajo la siguiente cifra del dividendo y repito desde el paso 2.',
                'Cuando ya no quedan cifras por bajar, lo que queda es el **RESIDUO**. El residuo siempre debe ser menor que el divisor.'
              ]
            },
            {
              type: 'example',
              title: 'Ejemplo resuelto: 7.488 ÷ 24',
              lines: [
                'Tomo 74. El 24 cabe 3 veces (24 × 3 = 72). Escribo 3. Resto: 74 − 72 = 2.',
                'Bajo el 8: queda 28. El 24 cabe 1 vez. Escribo 1. Resto: 28 − 24 = 4.',
                'Bajo el 8: queda 48. El 24 cabe 2 veces. Escribo 2. Resto: 48 − 48 = 0.',
                'Cociente: **312**. Residuo: **0**.',
                '**Prueba de la división:** (cociente × divisor) + residuo = dividendo → (312 × 24) + 0 = 7.488 ✔'
              ]
            },
            {
              type: 'activity',
              activity: {
                id: '2D1',
                kind: 'numericPair',
                question: 'Divisiones por 2 cifras',
                explain: 'Muy bien. Fíjate que en todas el residuo quedó menor que el divisor.',
                operations: [
                  { text: '9.135 ÷ 35', quotient: 261, remainder: 0 },
                  { text: '15.876 ÷ 42', quotient: 378, remainder: 0 },
                  { text: '8.052 ÷ 61', quotient: 132, remainder: 0 },
                  { text: '23.940 ÷ 28', quotient: 855, remainder: 0 },
                  { text: '47.736 ÷ 56', quotient: 852, remainder: 24 },
                  { text: '61.245 ÷ 73', quotient: 838, remainder: 71 }
                ]
              }
            },
            {
              type: 'activity',
              activity: {
                id: '2D2',
                kind: 'numericPair',
                question: 'Divisiones por 3 cifras',
                explain: 'Excelente trabajo. Comprueba cada una con la prueba de la división.',
                operations: [
                  { text: '68.352 ÷ 356', quotient: 192, remainder: 0 },
                  { text: '91.500 ÷ 250', quotient: 366, remainder: 0 },
                  { text: '45.780 ÷ 120', quotient: 381, remainder: 60 },
                  { text: '137.592 ÷ 408', quotient: 337, remainder: 96 },
                  { text: '258.750 ÷ 375', quotient: 690, remainder: 0 },
                  { text: '504.432 ÷ 624', quotient: 808, remainder: 240 }
                ]
              }
            }
          ]
        }
      ]
    },

    {
      id: 'u5',
      title: 'Resuelvo problemas',
      summary: 'Entender la situación antes de escoger la operación.',
      lessons: [
        {
          id: 'l5',
          code: '2.E',
          title: 'Problemas de mi entorno',
          goal: 'escoger la operación correcta a partir de la situación.',
          blocks: [
            {
              type: 'text',
              paragraphs: [
                'Antes de calcular, siempre hago tres preguntas: **¿qué me están preguntando?**, **¿qué datos tengo?**, **¿qué operación necesito?**'
              ]
            },
            {
              type: 'list',
              title: 'Palabras que dan pistas',
              items: [
                '"En total", "juntos" → **suma**.',
                '"Quedaron", "cuánto más", "diferencia" → **resta**.',
                '"Cada uno tiene", "veces" → **multiplicación**.',
                '"Repartir en partes iguales", "a cada uno le toca" → **división**.'
              ]
            },
            {
              type: 'callout',
              title: 'Ojo',
              paragraphs: [
                'Las pistas ayudan, pero lo que manda es entender la situación. Léela dos veces.'
              ]
            },
            {
              type: 'activity',
              activity: {
                id: '2E1',
                kind: 'numeric',
                question: 'Resuelve cada problema en el cuaderno y escribe aquí el resultado.',
                layout: 'stacked',
                explain: 'Muy bien. Leíste la situación antes de calcular.',
                items: [
                  { text: 'La biblioteca del municipio tenía 234.780 libros y recibió una donación de 45.620 libros más. ¿Cuántos libros tiene ahora?', answer: '280.400', unit: 'libros' },
                  { text: 'Una empresa de agua embotelló 128.500 litros y los repartió en canecas iguales de 250 litros. ¿Cuántas canecas llenó?', answer: '514', unit: 'canecas' },
                  { text: 'Un colegio recibió 3.456 cuadernos y los repartió por partes iguales entre sus 24 salones. ¿Cuántos cuadernos recibió cada salón?', answer: '144', unit: 'cuadernos' },
                  { text: 'En una bodega hay 315 cajas y cada caja trae 148 lápices. ¿Cuántos lápices hay en total?', answer: '46.620', unit: 'lápices' },
                  { text: 'Una fundación tenía 520.000 pesos para materiales escolares y gastó 348.750 pesos. ¿Cuánto dinero le quedó?', answer: '171.250', unit: 'pesos' },
                  { text: 'Un grupo de voluntarios armó 1.248 kits de aseo. Si en cada caja caben 24 kits, ¿cuántas cajas necesitan?', answer: '52', unit: 'cajas' },
                  { text: 'La placa de Nazca se mueve 60 milímetros cada año. ¿Cuántos milímetros se mueve en 100 años?', answer: '6.000', unit: 'mm' },
                  { text: 'Un camión recorrió 1.256 kilómetros en un viaje. Si hizo 8 viajes iguales, ¿cuántos kilómetros recorrió en total?', answer: '10.048', unit: 'km' },
                  { text: 'Tres escuelas reunieron útiles: la primera 12.480, la segunda 9.755 y la tercera 15.302. ¿Cuántos reunieron entre las tres?', answer: '37.537', unit: 'útiles' },
                  { text: 'De las tres escuelas anteriores, ¿cuántos útiles más reunió la tercera que la segunda?', answer: '5.547', unit: 'útiles' },
                  { text: 'En un acueducto se almacenan 604.800 litros de agua y se reparten en 144 tanques iguales. ¿Cuántos litros quedan en cada tanque?', answer: '4.200', unit: 'litros' }
                ]
              }
            },
            {
              type: 'notebook',
              id: '2E2',
              title: 'De milímetros a metros',
              intro: 'En el problema de la placa de Nazca calculaste 6.000 milímetros. Sabiendo que **1.000 mm = 1 m**, escribe en tu cuaderno a cuántos metros equivale.',
              keyTitle: 'Respuesta',
              items: ['6.000 mm = ______ metros'],
              key: ['6.000 mm = 6 metros. Se divide entre 1.000.']
            },
            {
              type: 'links',
              title: 'Videos de refuerzo',
              items: [
                { label: 'Valor posicional', href: 'https://www.youtube.com/watch?v=CpBVPMBXvt4' },
                { label: 'Multiplicación por 2 y 3 cifras', href: 'https://www.youtube.com/watch?v=huLO63dpPok' },
                { label: 'División por 2 cifras', href: 'https://www.youtube.com/watch?v=Jxjhfqo7wRQ' },
                { label: 'División por 3 cifras', href: 'https://www.youtube.com/watch?v=KrJ2aZfMPOU' }
              ]
            },
            {
              type: 'adult',
              title: 'Nota editorial para la docente',
              paragraphs: [
                'Los contextos de los problemas se escogieron a propósito: bibliotecas, acueductos, útiles escolares, voluntarios y datos científicos. **No se usan cifras de personas fallecidas, heridas ni de edificios colapsados.**',
                'Convertir la tragedia en un enunciado matemático obliga al niño a manipular numéricamente aquello que todavía le duele, y a esta edad eso reactiva la angustia en lugar de elaborarla. Los contextos de ayuda y reconstrucción sí se conservan porque refuerzan que la comunidad está respondiendo.'
              ],
              items: ['Si se agregan problemas nuevos, mantener este criterio.']
            }
          ]
        }
      ]
    }
  ]
});
