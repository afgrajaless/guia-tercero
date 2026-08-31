/* ==========================================================================
   data/math.js — Sección 2 · Matemáticas
   DBA 2 · Razonamiento y resolución de problemas · Componente numérico-variacional

   Toda esta sección se trabaja en el cuaderno. La página explica, muestra los
   ejemplos y deja la consigna; el estudiante copia y resuelve en su cuaderno.
   Las respuestas de cada actividad se reúnen al final de la página, en el
   solucionario "Respuestas de esta sección", para que también las pase al cuaderno.
   ========================================================================== */

window.Guide.register('math', {
  title: 'Analizo, calculo, reparto',
  short: 'Matemáticas',
  icon: 'numbers',
  href: 'math.html',
  section: { number: 2, label: 'Sección 2', short: 'Sección 2' },
  subject: 'DBA 2 · Componente numérico-variacional',
  description: 'Números naturales hasta seis cifras, las cuatro operaciones y problemas de nuestro entorno. Copia cada actividad en el cuaderno, resuélvela allí y al final compara con las respuestas.',
  learning: 'Uso las cuatro operaciones y las propiedades de los números naturales hasta seis cifras para resolver situaciones de mi entorno.',

  notice: {
    title: 'Antes de empezar',
    dismissLabel: 'Listo, ya tengo el cuaderno',
    paragraphs: [
      'Esta guía **no se responde en el computador**. Todo se copia y se resuelve en el cuaderno: el título de la actividad, cada operación y su resultado.',
      'Desarrolla las operaciones bien alineadas por columnas. Escribe los números con punto de miles (**424.002**), como aparecen aquí.',
      'Al final de la página está **Respuestas de esta sección**. Ve allí cuando ya hayas resuelto, compara con lo tuyo y pasa también la respuesta al cuaderno.',
      'Si te trabas, abre **Ver el procedimiento**. Usarlo no es hacer trampa.'
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
              type: 'notebook',
              id: '2ENC',
              title: 'Encabezado',
              intro: 'Abre una hoja nueva del cuaderno y escribe arriba el encabezado, como lo hacemos siempre.',
              ordered: false,
              items: [
                'Nombre: ____________________',
                'Grado: 3°A',
                'Fecha: ____________________',
                'Área: Matemáticas — Analizo, calculo, reparto'
              ],
              note: 'Así la profesora Ruby sabe de quién es cada hoja cuando revise los cuadernos.'
            },
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
              note: 'Cada cifra vale distinto según el lugar que ocupa. Copia esta tabla en tu cuaderno: te va a servir toda la semana.'
            },
            {
              type: 'notebook',
              id: '2A1',
              title: 'Escribo con letras',
              intro: 'Copia estos ocho números en tu cuaderno, uno debajo del otro, y escribe al frente de cada uno cómo se lee.',
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
              type: 'notebook',
              id: '2A2',
              title: 'Escribo con cifras',
              intro: 'Ahora al revés. Copia cada nombre en tu cuaderno y escribe al frente el número en cifras, con su punto de miles.',
              items: [
                'Cuatrocientos doce mil quinientos ocho',
                'Ochocientos mil setenta',
                'Seiscientos treinta y cinco mil doscientos catorce',
                'Novecientos nueve mil novecientos',
                'Doscientos siete mil tres',
                'Setecientos cincuenta mil cuatrocientos sesenta y uno'
              ],
              key: [
                'Cuatrocientos doce mil quinientos ocho = 412.508',
                'Ochocientos mil setenta = 800.070',
                'Seiscientos treinta y cinco mil doscientos catorce = 635.214',
                'Novecientos nueve mil novecientos = 909.900',
                'Doscientos siete mil tres = 207.003',
                'Setecientos cincuenta mil cuatrocientos sesenta y uno = 750.461'
              ],
              keyNote: 'Fíjate que el cero también ocupa su lugar: sin él, el número cambia de valor.'
            },
            {
              type: 'notebook',
              id: '2A3',
              title: 'Descompongo',
              intro: 'Descompón estos números en tu cuaderno, como en el ejemplo: **526.407 = 500.000 + 20.000 + 6.000 + 400 + 0 + 7**',
              items: ['347.205', '810.064', '209.730'],
              key: [
                '347.205 = 300.000 + 40.000 + 7.000 + 200 + 0 + 5',
                '810.064 = 800.000 + 10.000 + 0 + 0 + 60 + 4',
                '209.730 = 200.000 + 0 + 9.000 + 700 + 30 + 0'
              ]
            },
            {
              type: 'notebook',
              id: '2A4',
              title: 'Comparo',
              intro: 'Copia cada pareja de números en tu cuaderno y escribe entre los dos el signo que corresponde: **<**, **>** o **=**.',
              items: [
                '348.912 ____ 348.921',
                '700.000 ____ 699.999',
                '205.064 ____ 205.064',
                '530.800 ____ 53.800',
                '999.099 ____ 990.999'
              ],
              key: [
                '348.912 < 348.921',
                '700.000 > 699.999',
                '205.064 = 205.064',
                '530.800 > 53.800',
                '999.099 > 990.999'
              ],
              keyNote: 'Cuando las primeras cifras son iguales, hay que seguir comparando hacia la derecha. Y antes que nada: el número con más cifras es el mayor.'
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
              type: 'notebook',
              id: '2B1',
              title: 'Adiciones',
              intro: 'Copia cada adición en tu cuaderno en forma vertical, alineando unidades con unidades, y resuélvela.',
              items: [
                '234.567 + 189.435',
                '405.812 + 97.649',
                '318.204 + 258.796',
                '560.039 + 249.961',
                '127.450 + 63.280 + 209.315',
                '400.008 + 99.992 + 150.000'
              ],
              key: [
                '234.567 + 189.435 = 424.002',
                '405.812 + 97.649 = 503.461',
                '318.204 + 258.796 = 577.000',
                '560.039 + 249.961 = 810.000',
                '127.450 + 63.280 + 209.315 = 400.045',
                '400.008 + 99.992 + 150.000 = 650.000'
              ],
              keyNote: 'Revisa lo que llevabas en cada columna: ahí es donde más se equivoca uno.'
            },
            {
              type: 'notebook',
              id: '2B2',
              title: 'Sustracciones',
              intro: 'Copia cada sustracción en forma vertical y resuélvela. Ojo con los ceros del minuendo: hay que pedir prestado varias veces seguidas.',
              items: [
                '700.000 − 348.912',
                '512.340 − 279.865',
                '903.006 − 456.789',
                '850.200 − 99.999',
                '604.010 − 385.427',
                '999.999 − 456.123'
              ],
              key: [
                '700.000 − 348.912 = 351.088',
                '512.340 − 279.865 = 232.475',
                '903.006 − 456.789 = 446.217',
                '850.200 − 99.999 = 750.201',
                '604.010 − 385.427 = 218.583',
                '999.999 − 456.123 = 543.876'
              ]
            },
            {
              type: 'notebook',
              id: '2B3',
              title: 'Compruebo mis restas',
              intro: 'Debajo de las seis sustracciones, escribe la comprobación de cada una: suma la diferencia con el sustraendo y verifica que te dé el minuendo. La primera te queda así: **351.088 + 348.912 = 700.000 ✔**',
              ordered: false,
              items: ['Comprobación 1 · Comprobación 2 · Comprobación 3 · Comprobación 4 · Comprobación 5 · Comprobación 6'],
              key: [
                '351.088 + 348.912 = 700.000 ✔',
                '232.475 + 279.865 = 512.340 ✔',
                '446.217 + 456.789 = 903.006 ✔',
                '750.201 + 99.999 = 850.200 ✔',
                '218.583 + 385.427 = 604.010 ✔',
                '543.876 + 456.123 = 999.999 ✔'
              ]
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
              type: 'notebook',
              id: '2C1',
              title: 'Multiplicaciones por 2 cifras',
              intro: 'Copia cada multiplicación en tu cuaderno, en forma vertical, y desarrolla los dos renglones antes de sumar.',
              items: [
                '1.243 × 26',
                '3.508 × 47',
                '2.076 × 35',
                '4.890 × 62',
                '1.509 × 84',
                '6.207 × 39'
              ],
              key: [
                '1.243 × 26 = 32.318',
                '3.508 × 47 = 164.876',
                '2.076 × 35 = 72.660',
                '4.890 × 62 = 303.180',
                '1.509 × 84 = 126.756',
                '6.207 × 39 = 242.073'
              ]
            },
            {
              type: 'notebook',
              id: '2C2',
              title: 'Multiplicaciones por 3 cifras',
              intro: 'Las mismas de antes, pero con tres renglones. Revisa que el tercero quede corrido **dos** lugares hacia la izquierda antes de sumar.',
              items: [
                '2.164 × 315',
                '4.027 × 208',
                '1.856 × 134',
                '3.405 × 260',
                '1.078 × 523',
                '2.930 × 407'
              ],
              key: [
                '2.164 × 315 = 681.660',
                '4.027 × 208 = 837.616',
                '1.856 × 134 = 248.704',
                '3.405 × 260 = 885.300',
                '1.078 × 523 = 563.794',
                '2.930 × 407 = 1.192.510'
              ],
              keyNote: 'Estas son las más difíciles del día. Si alguna no te dio, revisa primero si los renglones quedaron bien corridos.'
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
              type: 'notebook',
              id: '2D1',
              title: 'Divisiones por 2 cifras',
              intro: 'Copia cada división en tu cuaderno con su casita y resuélvela. Escribe siempre las dos respuestas: **cociente** y **residuo**.',
              items: [
                '9.135 ÷ 35',
                '15.876 ÷ 42',
                '8.052 ÷ 61',
                '23.940 ÷ 28',
                '47.736 ÷ 56',
                '61.245 ÷ 73'
              ],
              key: [
                '9.135 ÷ 35 → cociente 261, residuo 0',
                '15.876 ÷ 42 → cociente 378, residuo 0',
                '8.052 ÷ 61 → cociente 132, residuo 0',
                '23.940 ÷ 28 → cociente 855, residuo 0',
                '47.736 ÷ 56 → cociente 852, residuo 24',
                '61.245 ÷ 73 → cociente 838, residuo 71'
              ],
              keyNote: 'En todas, el residuo quedó menor que el divisor. Si el tuyo salió mayor, es que el cociente se quedó corto.'
            },
            {
              type: 'notebook',
              id: '2D2',
              title: 'Divisiones por 3 cifras',
              intro: 'Ahora el divisor tiene tres cifras, así que hay que tomar más cifras del dividendo para empezar. Copia cada una y escribe cociente y residuo.',
              items: [
                '68.352 ÷ 356',
                '91.500 ÷ 250',
                '45.780 ÷ 120',
                '137.592 ÷ 408',
                '258.750 ÷ 375',
                '504.432 ÷ 624'
              ],
              key: [
                '68.352 ÷ 356 → cociente 192, residuo 0',
                '91.500 ÷ 250 → cociente 366, residuo 0',
                '45.780 ÷ 120 → cociente 381, residuo 60',
                '137.592 ÷ 408 → cociente 337, residuo 96',
                '258.750 ÷ 375 → cociente 690, residuo 0',
                '504.432 ÷ 624 → cociente 808, residuo 240'
              ],
              keyNote: 'Comprueba cada una en el cuaderno: (cociente × divisor) + residuo debe darte el dividendo.'
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
              type: 'notebook',
              id: '2E1',
              title: 'Once problemas',
              intro: 'Copia cada problema en tu cuaderno. Debajo escribe **la operación** que usaste, desarróllala y termina con **la respuesta completa**, con su palabra: "Ahora tiene 280.400 libros".',
              items: [
                'La biblioteca del municipio tenía 234.780 libros y recibió una donación de 45.620 libros más. ¿Cuántos libros tiene ahora?',
                'Una empresa de agua embotelló 128.500 litros y los repartió en canecas iguales de 250 litros. ¿Cuántas canecas llenó?',
                'Un colegio recibió 3.456 cuadernos y los repartió por partes iguales entre sus 24 salones. ¿Cuántos cuadernos recibió cada salón?',
                'En una bodega hay 315 cajas y cada caja trae 148 lápices. ¿Cuántos lápices hay en total?',
                'Una fundación tenía 520.000 pesos para materiales escolares y gastó 348.750 pesos. ¿Cuánto dinero le quedó?',
                'En una panadería hornearon 1.248 panes y los empacan en bolsas de 24. ¿Cuántas bolsas necesitan?',
                'Una planta trepadora sube 60 milímetros cada semana. ¿Cuántos milímetros sube en 100 semanas?',
                'Un camión recorrió 1.256 kilómetros en un viaje. Si hizo 8 viajes iguales, ¿cuántos kilómetros recorrió en total?',
                'Tres escuelas reunieron útiles: la primera 12.480, la segunda 9.755 y la tercera 15.302. ¿Cuántos reunieron entre las tres?',
                'De las tres escuelas anteriores, ¿cuántos útiles más reunió la tercera que la segunda?',
                'En un acueducto se almacenan 604.800 litros de agua y se reparten en 144 tanques iguales. ¿Cuántos litros quedan en cada tanque?'
              ],
              key: [
                '234.780 + 45.620 = 280.400 libros',
                '128.500 ÷ 250 = 514 canecas',
                '3.456 ÷ 24 = 144 cuadernos',
                '315 × 148 = 46.620 lápices',
                '520.000 − 348.750 = 171.250 pesos',
                '1.248 ÷ 24 = 52 bolsas',
                '60 × 100 = 6.000 milímetros',
                '1.256 × 8 = 10.048 kilómetros',
                '12.480 + 9.755 + 15.302 = 37.537 útiles',
                '15.302 − 9.755 = 5.547 útiles',
                '604.800 ÷ 144 = 4.200 litros'
              ],
              keyNote: 'La respuesta completa lleva la palabra: no basta con escribir "280.400", se escribe "280.400 libros".'
            },
            {
              type: 'notebook',
              id: '2E2',
              title: 'De milímetros a metros',
              intro: 'En el problema 7 calculaste que la planta sube 6.000 milímetros. Sabiendo que **1.000 mm = 1 m**, escribe en tu cuaderno a cuántos metros equivale y con qué operación lo averiguaste.',
              ordered: false,
              items: ['6.000 mm = ______ metros'],
              key: ['6.000 ÷ 1.000 = 6. Entonces 6.000 mm = 6 metros.']
            },
            {
              type: 'links',
              title: 'Videos de refuerzo',
              items: [
                { label: 'Valor posicional', href: 'https://www.youtube.com/watch?v=eNodAB9v6YM', note: 'Desde las unidades hasta las centenas de mil, que es justo lo de la lección 2.A.' },
                { label: 'Multiplicación por 2 cifras', href: 'https://www.youtube.com/watch?v=aIde9ulEs58', note: 'Muestra cómo se corre el segundo renglón.' },
                { label: 'División por 2 cifras', href: 'https://www.youtube.com/watch?v=k_I6i8FtDJ4', note: 'La Eduteca. Va muy despacio, que es lo que se necesita aquí.' },
                { label: 'División por 3 cifras', href: 'https://www.youtube.com/watch?v=onIQHLnoU2I', note: 'Para la lección 2.D, cuando el divisor tiene tres cifras.' }
              ]
            },
            {
              type: 'adult',
              title: 'Nota editorial para la profesora Ruby',
              paragraphs: [
                'Los contextos de los problemas son todos cotidianos y reconocibles para un niño de 7 a 9 años: bibliotecas, acueductos, útiles escolares, una panadería, una planta que crece. **Ningún enunciado se apoya en sucesos difíciles ni en situaciones que puedan angustiar.**',
                'A esta edad el contexto no es decoración: si el enunciado inquieta, el niño deja de pensar en la operación y se queda en la historia. Por eso conviene que los problemas hablen de cosas que ya conoce y que no le pesan.',
                'El solucionario del final está pensado para comparar y transcribir **después** de resolver. Si prefiere que el estudiante no lo vea antes de tiempo, pídale que trabaje con la página cerrada y la abra solo al terminar.'
              ],
              items: ['Si se agregan problemas nuevos, mantener este criterio.', 'Al cambiar el contexto de un problema, revisar que la operación y el resultado del solucionario sigan cuadrando. El validador lo recalcula.']
            }
          ]
        }
      ]
    }
  ]
});
