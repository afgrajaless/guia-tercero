/* ==========================================================================
   data/wellbeing.js — Sección 1 · Emociones
   Ética y Valores / Orientación de grupo.

   REGLA DE ESTA SECCIÓN: no se califica y no hay respuestas malas.
   Todo se escribe en el cuaderno. Lo único que se hace en la página es la
   práctica de respiración cuadrada, que no pide respuesta ni deja registro.
   El bloque de cierre no se titula "Respuestas": se llama "Para comparar en
   familia" y solo trae la clave de dos actividades: los dos círculos (1.B.1)
   y lo que sí ayuda (1.E.1).

   El contenido habla de emociones cotidianas y de autocontrol. No se apoya en
   ningún suceso concreto ni en ninguna fecha.
   ========================================================================== */

window.Guide.register('wellbeing', {
  title: 'Hablemos de cómo nos sentimos',
  short: 'Emociones',
  icon: 'heart',
  href: 'wellbeing.html',
  grades: false,
  section: { number: 1, label: 'Sección 1', short: 'Sección 1' },
  subject: 'Ética y Valores · Orientación de grupo',
  description: 'Reconocer lo que siento, aprender a calmar mi cuerpo, saber a quién puedo pedir ayuda y acompañar al que lo necesite. Aquí no hay nota ni respuestas malas: todo se escribe en el cuaderno.',
  learning: 'Reconozco y nombro lo que siento, aplico estrategias sencillas para calmar mi cuerpo, sé a quién puedo pedir ayuda y acompaño a quien lo está pasando mal.',

  banner: {
    title: 'Para la familia: léalo antes de empezar',
    dismissLabel: 'Ya lo leí',
    paragraphs: [
      'Esta sección no es una tarea que se califica con nota. Es un espacio para que su hijo o hija aprenda a reconocer lo que siente y a calmarse cuando lo necesita.',
      'Todo se escribe en el cuaderno. La página solo explica y propone; no le pide al niño responder nada en el computador ni guarda lo que escriba.',
      'Acompáñelo mientras la desarrolla. No hace falta que sepa qué decir: basta con estar al lado, escuchar sin interrumpir y no apurar la conversación.',
      'Si el niño o la niña no quiere hablar de algo, no insista. Puede dejar el punto en blanco y volver a él otro día. Todo lo que escriba está bien.',
      'Si nota que hace más de un mes no duerme, no juega, no come o no quiere separarse de usted, comuníquese con la profesora Ruby y llame a la **Línea Amiga 106**.'
    ]
  },

  help: {
    title: 'Si necesitas ayuda',
    lines: [
      '**Línea Amiga 106** — gratuita, confidencial, 24 horas, desde cualquier teléfono.',
      '**Risaralda: 606 333 9610** — Ruta de Atención en Salud Mental.',
      'También puedes escribirle a la profesora Ruby o contarle a un adulto de tu casa.'
    ]
  },

  units: [
    {
      id: 'u1',
      title: 'Mis emociones tienen nombre',
      summary: 'Ponerle nombre a lo que siento es el primer paso para entenderlo.',
      lessons: [
        {
          id: 'l1',
          code: '1.A',
          title: 'Las emociones son avisos del cuerpo',
          goal: 'nombrar lo que sientes y entender para qué sirve cada emoción.',
          blocks: [
            {
              type: 'callout',
              title: 'Un mensaje de tu profe',
              paragraphs: ['Hola. Soy la profesora Ruby y quiero contarte algo: todos, hasta los adultos, tenemos días buenos y días difíciles. Sentir miedo, rabia, tristeza o incluso no sentir nada especial: todo eso está bien. Aquí no hay respuestas malas.']
            },
            {
              type: 'notebook',
              id: '1ENC',
              title: 'Encabezado',
              intro: 'Abre una hoja nueva del cuaderno y escribe arriba el encabezado, como lo hacemos siempre.',
              ordered: false,
              items: [
                'Nombre: ____________________',
                'Grado: 3°A',
                'Fecha: ____________________',
                'Área: Emociones — Hablemos de cómo nos sentimos'
              ],
              note: 'Así la profesora Ruby sabe de quién es cada hoja cuando revise los cuadernos.'
            },
            {
              type: 'text',
              paragraphs: [
                'Las emociones son señales. No son buenas ni malas: son avisos que nos manda el cuerpo para cuidarnos.'
              ]
            },
            {
              type: 'list',
              title: 'Qué nos avisa cada una',
              items: [
                '**MIEDO:** nos avisa que algo puede ser peligroso, para protegernos.',
                '**TRISTEZA:** nos avisa que perdimos algo o a alguien importante, y que necesitamos consuelo.',
                '**RABIA:** nos avisa que algo nos parece injusto.',
                '**SORPRESA:** nos avisa que pasó algo que no esperábamos.',
                '**CALMA:** nos avisa que estamos a salvo.',
                '**ALEGRÍA:** nos avisa que estamos bien y con ganas de compartir.'
              ]
            },
            {
              type: 'callout',
              title: 'Algo importante',
              paragraphs: [
                'Las emociones vienen en olas. Suben, se quedan un rato y bajan. Ninguna se queda para siempre, aunque a veces parezca.',
                'Tampoco hay emociones prohibidas. La rabia no es mala: lo que puede hacer daño es lo que uno hace con ella. Sentir es una cosa y actuar es otra, y entre las dos siempre hay un momentico para pensar.'
              ]
            },
            {
              type: 'notebook',
              id: '1A1',
              title: 'Mi termómetro de hoy',
              intro: 'Dibuja en tu cuaderno un termómetro con estos cinco niveles, de abajo hacia arriba. Pinta hasta el nivel en el que te sientes hoy y escribe al lado la fecha.',
              ordered: false,
              items: [
                'Muy tranquilo o tranquila',
                'Tranquilo o tranquila',
                'Más o menos',
                'Nervioso o nerviosa',
                'Muy nervioso o nerviosa'
              ],
              note: 'Puedes volver a pintarlo otro día, con otro color, para ver cómo va cambiando.'
            },
            {
              type: 'notebook',
              id: '1A2',
              title: 'Mi cuerpo también habla',
              intro: 'Dibuja en tu cuaderno un cuadro de **cuatro columnas**: MIEDO, TRISTEZA, RABIA y CALMA. Copia cada una de estas señales en la columna de la emoción con la que tú la sientes.',
              ordered: false,
              items: [
                'El corazón late rápido',
                'Me tiemblan las manos',
                'Me dan ganas de esconderme',
                'Me pesa el pecho',
                'Me dan ganas de llorar',
                'No quiero hablar',
                'Me pongo caliente',
                'Aprieto los puños',
                'Hablo fuerte',
                'Respiro despacio',
                'Los hombros están sueltos',
                'Me dan ganas de jugar'
              ],
              note: 'Cada cuerpo es distinto: aquí no hay una manera correcta de organizarlas. Si una señal te sirve para dos emociones, escríbela en las dos.'
            },
            {
              type: 'notebook',
              id: '1A3',
              title: 'Completo las frases',
              intro: 'Copia estas frases en tu cuaderno y complétalas.',
              items: [
                'Hoy me sentí ______ cuando…',
                'Algo que me pone nervioso o nerviosa es…',
                'Algo que me hace sentir seguro o segura es…',
                'Cuando me da rabia, yo…',
                'Lo que más me gusta de mí es…',
                'Alguien que me hace sentir bien es…',
                'Algo bonito que alguien hizo por mí fue…'
              ],
              note: 'Si alguna no quieres responderla, déjala en blanco y sigue. Está bien.'
            },
            {
              type: 'notebook',
              id: '1A4',
              title: 'Mi diccionario de emociones',
              intro: 'Escribe en tu cuaderno tres frases con este formato: **Sentí ______ cuando ______.**',
              ordered: false,
              items: [
                'Sentí ______ cuando ______',
                'Sentí ______ cuando ______',
                'Sentí ______ cuando ______'
              ],
              note: 'Si alguna no quieres responderla, déjala en blanco y sigue. Está bien.'
            }
          ]
        }
      ]
    },

    {
      id: 'u2',
      title: 'Lo que puedo controlar y lo que no',
      summary: 'Dedicar la energía a lo que sí decido yo me hace sentir más tranquilo.',
      lessons: [
        {
          id: 'l2',
          code: '1.B',
          title: 'Mis dos círculos',
          goal: 'distinguir lo que está en tus manos de lo que no depende de nadie.',
          blocks: [
            {
              type: 'text',
              paragraphs: [
                'Hay cosas que están DENTRO de nuestro círculo: podemos decidirlas. Y hay cosas que están FUERA: no dependen de nosotros, por más que queramos.',
                'Cuando pasamos mucho tiempo pensando en lo de afuera, la preocupación crece. Cuando dedicamos nuestra energía a lo de adentro, nos sentimos más tranquilos y más fuertes. Eso no significa que lo de afuera no importe: significa que no es nuestra responsabilidad.'
              ]
            },
            {
              type: 'callout',
              title: 'Un truco que sirve',
              paragraphs: [
                'Preocuparse por algo que no depende de ti no lo cambia: solo te cansa. En cambio, hacer **una sola cosa pequeña** de las que sí dependen de ti ya te hace sentir distinto. Pruébalo la próxima vez que algo te dé vueltas en la cabeza.'
              ]
            },
            {
              type: 'notebook',
              id: '1B1',
              title: 'Mis dos círculos',
              intro: 'Dibuja en tu cuaderno dos círculos grandes, uno al lado del otro. Titula el primero **LO QUE SÍ PUEDO CONTROLAR** y el segundo **LO QUE NO PUEDO CONTROLAR**. Copia cada una de estas frases dentro del círculo que le corresponde.',
              ordered: false,
              items: [
                'Que llueva el día del paseo',
                'Cómo trato a mis compañeros',
                'Lo que otro niño piense de mí',
                'Pedir ayuda cuando no entiendo algo',
                'Que un amigo se cambie de colegio',
                'Cuánto me esfuerzo en una tarea',
                'El genio con que amanezca otra persona',
                'La hora a la que me acuesto',
                'Ganar siempre en un juego',
                'Avisarle a un adulto si me siento mal'
              ],
              key: [
                'Lo que sí puedo controlar: cómo trato a mis compañeros · pedir ayuda cuando no entiendo algo · cuánto me esfuerzo en una tarea · la hora a la que me acuesto · avisarle a un adulto si me siento mal.',
                'Lo que no puedo controlar: que llueva el día del paseo · lo que otro niño piense de mí · que un amigo se cambie de colegio · el genio con que amanezca otra persona · ganar siempre en un juego.'
              ],
              keyNote: 'Si alguna te quedó en el otro círculo, no está mal: vuelve a leerla con un adulto y pregúntate "¿esto lo decido yo?". Fíjate en todo lo que sí está en tus manos: ahí es donde vale la pena poner tu energía.'
            },
            {
              type: 'notebook',
              id: '1B2',
              title: 'Mis tres acciones',
              intro: 'Escribe en tu cuaderno tres cosas que tú sí puedes hacer esta semana para sentirte más tranquilo o tranquila.',
              ordered: false,
              items: ['Esta semana yo puedo…', 'También puedo…', 'Y puedo…'],
              note: 'Si no quieres responder, déjalo en blanco y sigue. Está bien.'
            }
          ]
        }
      ]
    },

    {
      id: 'u3',
      title: 'Mi rincón de la calma',
      summary: 'Enseñarle al cuerpo a respirar despacio es un truco real, no un cuento.',
      lessons: [
        {
          id: 'l3',
          code: '1.C',
          title: 'La respiración cuadrada',
          goal: 'usar la respiración y el juego 5–4–3–2–1 para calmarte.',
          blocks: [
            {
              type: 'text',
              paragraphs: [
                'Cuando nos asustamos o nos da mucha rabia, el cuerpo respira rápido y corto, como si tuviéramos que salir corriendo. Si le enseñamos al cuerpo a respirar despacio, el cerebro entiende el mensaje: "ya estamos bien". Es un truco real, no un cuento.'
              ]
            },
            {
              type: 'list',
              title: 'La respiración cuadrada, paso a paso',
              ordered: true,
              items: [
                'Lado 1 — **TOMO** aire por la nariz mientras cuento 1, 2, 3, 4.',
                'Lado 2 — **GUARDO** el aire mientras cuento 1, 2, 3, 4.',
                'Lado 3 — **SUELTO** el aire por la boca mientras cuento 1, 2, 3, 4.',
                'Lado 4 — **ESPERO** sin aire mientras cuento 1, 2, 3, 4.'
              ]
            },
            {
              type: 'breathing',
              id: '1C1',
              title: 'Practica aquí conmigo',
              cycles: 4,
              closing: 'Si quieres, vuelve a pintar tu termómetro del cuaderno y mira si cambió algo.'
            },
            {
              type: 'callout',
              title: 'El juego 5–4–3–2–1',
              paragraphs: [
                'Para cuando la cabeza va muy rápido: mira a tu alrededor y busca, en voz baja, **5** cosas que puedes VER, **4** que puedes TOCAR, **3** que puedes OÍR, **2** que puedes OLER y **1** que te guste de ti.',
                'Este juego trae la mente de vuelta al lugar donde estás ahora, que es un lugar seguro.'
              ]
            },
            {
              type: 'notebook',
              id: '1C2',
              title: 'Mi rincón de la calma',
              intro: 'Escoge un lugar de tu casa (una esquina, un cojín, debajo de la mesa) y pon allí tres cosas que te ayuden a calmarte. Copia las dos frases en tu cuaderno y complétalas.',
              ordered: false,
              items: ['Mi rincón de la calma está en…', 'Puse allí estas tres cosas…'],
              note: 'Si quieres, dibújalo también.'
            },
            {
              type: 'notebook',
              id: '1C3',
              title: 'Mi registro de la semana',
              intro: 'Dibuja en tu cuaderno una tabla con estos siete días y marca con una X el día que practicaste la respiración cuadrada.',
              ordered: false,
              items: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
              note: 'No hay puntaje, ni racha, ni regaño por los días en blanco. Es solo para que veas cómo te va.'
            }
          ]
        }
      ]
    },

    {
      id: 'u4',
      title: 'Mi red de apoyo',
      summary: 'Pedir ayuda no es ser débil ni ser cansón: es ser inteligente.',
      lessons: [
        {
          id: 'l4',
          code: '1.D',
          title: 'Pedir ayuda es de valientes',
          goal: 'saber a quién acudir cuando algo te preocupa.',
          blocks: [
            {
              type: 'text',
              paragraphs: [
                'Nadie sale solo de las cosas difíciles. Los adultos también pedimos ayuda: los bomberos piden ayuda a otros bomberos, los médicos a otros médicos. Pedir ayuda no es ser débil ni ser cansón: es ser inteligente.'
              ]
            },
            {
              type: 'callout',
              title: 'Una regla útil',
              paragraphs: [
                'Si algo te preocupa tanto que no te deja dormir, jugar o comer, eso ya es motivo suficiente para contárselo a un adulto de confianza. No tienes que esperar a que sea "grave".'
              ]
            },
            {
              type: 'notebook',
              id: '1D1',
              title: 'La mano de la ayuda',
              intro: 'Dibuja tu mano en el cuaderno y escribe, en cada dedo, el nombre de una persona a la que puedes acudir cuando te sientas mal. Pueden ser de tu casa, del colegio o del barrio.',
              ordered: false,
              items: ['Dedo 1', 'Dedo 2', 'Dedo 3', 'Dedo 4', 'Dedo 5'],
              note: 'Si no se te ocurren cinco, escribe las que sí. Está bien.'
            },
            {
              type: 'notebook',
              id: '1D2',
              title: 'Una carta que abraza',
              intro: 'Escribe en tu cuaderno una carta corta para alguien que te importa, contándole algo bueno que esa persona hace por ti. Si quieres, después se la entregas.',
              ordered: false,
              items: ['Querido amigo o amiga: …'],
              note: 'Si no quieres escribirla, déjalo para otro día. Está bien.'
            },
            {
              type: 'notebook',
              id: '1D3',
              title: 'Nuestro acuerdo en casa',
              intro: 'Con un adulto de tu casa, copien y respondan en el cuaderno estas tres preguntas. La idea es dejar claro, antes de necesitarlo, cómo se pide ayuda en tu casa.',
              items: [
                '¿Cómo aviso en la casa cuando algo me está preocupando?',
                '¿Qué palabra o señal podemos usar para decir "necesito hablar"?',
                '¿En qué momento del día podemos hablar con calma, sin afán?'
              ]
            },
            {
              type: 'links',
              title: 'Cuentos para leer en familia',
              items: [
                {
                  label: 'Tres cuentos sobre las emociones',
                  href: 'https://www.unicef.org/peru/informes/cuentos-sobre-desarrollo-socioemocional',
                  note: 'Ministerio de Educación del Perú con apoyo de UNICEF · "Mono y su gran corazón", "La furia de otorongo" y "El regalo de ratón". Descarga gratuita.'
                },
                {
                  label: 'La furia de otorongo',
                  href: 'https://www.unicef.org/peru/media/10296/file/La%20furia%20de%20otorongo.pdf',
                  note: 'El de la rabia, que es el que más se parece a lo que trabajamos aquí. Va directo al PDF: pesa unos 6 MB, mejor con wifi.'
                },
                {
                  label: 'Colombia Aprende · habilidades socioemocionales',
                  href: 'https://www.colombiaaprende.edu.co/recurso-coleccion/catalogo-de-contenidos-competencias-ciudadanas-y-habilidades-socioemocionales',
                  note: 'Catálogo del Ministerio de Educación, con videos y actividades para 1.°, 2.° y 3.°.'
                }
              ]
            }
          ]
        }
      ]
    },

    {
      id: 'u5',
      title: 'Juntos nos cuidamos',
      summary: 'Hasta aquí miramos hacia adentro. Ahora miramos al de al lado.',
      lessons: [
        {
          id: 'l5',
          code: '1.E',
          title: 'Cuando un compañero lo está pasando mal',
          goal: 'acompañar a un compañero que lo está pasando mal y guardar tu propio mensaje de esperanza.',
          blocks: [
            {
              type: 'text',
              paragraphs: [
                'Todo lo que hiciste hasta aquí fue para entender lo que **tú** sientes. Esta última parte es distinta: es para mirar al de al lado.',
                'No todos los días son iguales para todos. Puede que tú estés contento y que un compañero llegue triste, o al revés. Eso no significa que uno sea más fuerte que el otro: significa que cada quien lleva su ritmo, y que a veces uno necesita que lo acompañen.'
              ]
            },
            {
              type: 'callout',
              title: 'Algo que sirve saber',
              paragraphs: [
                'No hace falta saber qué decir para ayudar a alguien. La mayoría de las veces basta con quedarse al lado y escuchar. Eso ya es ayudar.'
              ]
            },
            {
              type: 'list',
              title: 'Imagina que un compañero está preocupado. ¿Qué podrías hacer?',
              items: [
                'Escucharlo.',
                'Burlarme de él.',
                'Acompañarlo.',
                'Decirle que sus sentimientos no importan.',
                'Avisar a un adulto de confianza.',
                'Hablarle con cariño.'
              ]
            },
            {
              type: 'notebook',
              id: '1E1',
              title: 'Nos ayudamos entre todos',
              intro: 'En la lista de arriba hay cosas que ayudan y **dos que hacen daño**. Copia en tu cuaderno el título "Lo que sí ayuda" y escribe debajo solo las que de verdad ayudan. Las otras dos no las copies: señálalas y cuéntale a un adulto por qué crees que hacen daño.',
              ordered: false,
              items: [
                'Lo que sí ayuda: …',
                'Una frase que yo le diría: "…"'
              ],
              key: [
                'Lo que sí ayuda: escucharlo · acompañarlo · avisar a un adulto de confianza · hablarle con cariño.',
                'Las dos que hacen daño son burlarse de él y decirle que sus sentimientos no importan. Burlarse de alguien que se siente mal hace que se calle y se quede solo con lo que siente.',
                'La frase es tuya: no hay una correcta. Sirve cualquiera que él pudiera escuchar sin sentirse juzgado.'
              ],
              keyNote: 'Esto no es un examen. Es para conversarlo: pregúntele qué le gustaría que le dijeran a él si fuera el preocupado.'
            },
            {
              type: 'notebook',
              id: '1E2',
              title: 'Un lugar seguro',
              intro: 'Dibuja en tu cuaderno un lugar donde te sientas tranquilo, protegido y acompañado. Puede ser un lugar de verdad o uno inventado. Debajo del dibujo copia la frase y complétala.',
              ordered: false,
              items: ['"En este lugar me siento ______________ porque ______________."'],
              note: 'No es el mismo que tu rincón de la calma: ese es un lugar real de tu casa, este puede ser cualquiera, hasta uno que solo exista en tu cabeza.'
            },
            {
              type: 'notebook',
              id: '1E3',
              title: 'Mi mensaje de esperanza',
              intro: 'Copia estas tres frases en tu cuaderno y complétalas. Fíjate que van de lo más pequeño a lo más grande: primero tú, luego los que te quieren, luego todos.',
              items: [
                'Cuando algo me sale mal, yo puedo…',
                'Las personas que me quieren pueden…',
                'Juntos podemos…'
              ]
            },
            {
              type: 'notebook',
              id: '1E4',
              title: 'Para cerrar',
              intro: 'Termina la página en tu cuaderno con esta frase, y escribe la fecha al lado.',
              ordered: false,
              items: ['"Hoy quiero recordar que…"'],
              note: 'Guárdala. Sirve volver a leerla el día que estés bajoneado.'
            },
            {
              type: 'callout',
              title: 'Un mensaje para ti',
              paragraphs: [
                'Es normal sentir miedo, tristeza o rabia. Podemos hablar de lo que sentimos, buscar ayuda en un adulto de confianza, respirar, acompañarnos y recordar que **no estamos solos**.'
              ]
            },
            {
              type: 'adult',
              title: 'Para el adulto que acompaña',
              paragraphs: [
                'Esta sección no tiene calificación y ningún ítem se marca como correcto o incorrecto. La página no recoge nada de lo que el niño escriba: todo queda en su cuaderno.',
                'Solo dos actividades tienen clave —los dos círculos (**1.B.1**) y lo que sí ayuda (**1.E.1**)— y aparecen al final bajo el título "Para comparar en familia". No son correcciones: son excusas para conversar.',
                'La lección **1.E** va al final a propósito: el niño primero nombra lo suyo y solo después mira al compañero. Al revés no funciona a esta edad.'
              ],
              items: [
                'Revise el cuaderno con el niño sin corregir la ortografía primero.',
                'Si aparecen respuestas que preocupan, comuníquese con la profesora Ruby antes de hablarlas con el niño.',
                'No insista en las preguntas que deje en blanco: volver otro día es parte del proceso.',
                'En **1.E.1**, si el niño copia por error alguna de las dos que hacen daño, no lo corrija de una: pregúntele cómo se sentiría él si se lo hicieran.'
              ]
            }
          ]
        }
      ]
    }
  ]
});
