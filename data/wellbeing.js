/* ==========================================================================
   data/wellbeing.js — Martes 1 de septiembre · Psicosocial
   Ética y Valores / Orientación de grupo.

   REGLA DE ESTA SECCIÓN: no se califica y no hay respuestas malas.
   Todo se escribe en el cuaderno. Lo único que se hace en la página es la
   práctica de respiración cuadrada, que no pide respuesta ni deja registro.
   El bloque de cierre no se titula "Respuestas": se llama "Para comparar en
   familia" y solo trae la clave de la actividad de los dos círculos.
   ========================================================================== */

window.Guide.register('wellbeing', {
  title: 'Hablemos de cómo nos sentimos',
  short: 'Psicosocial',
  icon: 'heart',
  href: 'wellbeing.html',
  grades: false,
  day: { label: 'Martes 1 de septiembre', short: 'Martes 1', weekday: 'Martes' },
  subject: 'Ética y Valores · Orientación de grupo',
  description: 'Reconocer lo que siento después del temblor, aprender a calmar mi cuerpo y saber a quién puedo pedir ayuda. Aquí no hay nota ni respuestas malas: todo se escribe en el cuaderno.',
  learning: 'Reconozco y nombro lo que siento después de una situación difícil, aplico estrategias sencillas para calmar mi cuerpo y sé a quién puedo pedir ayuda.',

  banner: {
    title: 'Para la familia: léalo antes de empezar',
    dismissLabel: 'Ya lo leí',
    paragraphs: [
      'Esta guía no es una tarea que se califica con nota. Es un espacio para que su hijo o hija pueda contar cómo se ha sentido después de lo que vivimos el 10 de agosto.',
      'Todo se escribe en el cuaderno. La página solo explica y propone; no le pide al niño responder nada en el computador ni guarda lo que escriba.',
      'Acompáñelo mientras la desarrolla. No hace falta que sepa qué decir: basta con estar al lado, escuchar sin interrumpir y no apurar la conversación.',
      'Si el niño o la niña no quiere hablar de algo, no insista. Puede dejar el punto en blanco y volver a él otro día. Todo lo que escriba está bien.',
      'Evite dejarlo viendo noticias o videos del rescate. A esta edad, las imágenes repetidas aumentan el miedo en lugar de explicarlo.',
      'Si nota que hace más de un mes no duerme, no juega, no come o no quiere separarse de usted, comuníquese con la docente y llame a la **Línea Amiga 106**.'
    ]
  },

  help: {
    title: 'Si necesitas ayuda',
    lines: [
      '**Línea Amiga 106** — gratuita, confidencial, 24 horas, desde cualquier teléfono.',
      '**Risaralda: 606 333 9610** — Ruta de Atención en Salud Mental.',
      'También puedes escribirle a tu profe o contarle a un adulto de tu casa.'
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
              paragraphs: ['Hola. Soy tu profe y quiero contarte algo: el 10 de agosto todos vivimos un temblor muy fuerte. Muchos adultos también sentimos miedo ese día. Sentir miedo, rabia, tristeza o incluso no sentir nada especial: todo eso está bien. Aquí no hay respuestas malas.']
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
                'También es normal que después de un temblor uno sienta cosas que antes no sentía: querer dormir con los papás, sobresaltarse con un ruido fuerte, no tener ganas de jugar, tener pesadillas o dolor de barriga. No estás enfermo ni te estás portando mal. Tu cuerpo está aprendiendo a sentirse seguro otra vez.'
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
                'El día del temblor yo estaba en…',
                'Lo primero que pensé fue…',
                'Después del temblor me he sentido…',
                'Algo que me da miedo ahora es…',
                'Algo que me hace sentir seguro o segura es…',
                'Alguien que me ayudó ese día fue…',
                'Algo bonito que vi hacer a la gente fue…'
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
                'Hay cosas que están DENTRO de nuestro círculo: podemos decidirlas. Y hay cosas que están FUERA: nadie las puede decidir, ni los niños ni los adultos.',
                'Cuando pasamos mucho tiempo pensando en lo de afuera, la preocupación crece. Cuando dedicamos nuestra energía a lo de adentro, nos sentimos más tranquilos y más fuertes. Eso no significa que lo de afuera no importe: significa que no es nuestra responsabilidad.'
              ]
            },
            {
              type: 'callout',
              title: 'Un dato que ayuda',
              paragraphs: [
                'Nadie en el mundo, en ningún país, puede saber el día ni la hora en que va a temblar. Ni los científicos más estudiados. Por eso lo importante no es adivinar, sino estar preparados. Y eso sí lo podemos hacer.'
              ]
            },
            {
              type: 'notebook',
              id: '1B1',
              title: 'Mis dos círculos',
              intro: 'Dibuja en tu cuaderno dos círculos grandes, uno al lado del otro. Titula el primero **LO QUE SÍ PUEDO CONTROLAR** y el segundo **LO QUE NO PUEDO CONTROLAR**. Copia cada una de estas frases dentro del círculo que le corresponde.',
              ordered: false,
              items: [
                'Que vuelva a temblar',
                'Saber qué hacer si tiembla',
                'Cuánto duró el temblor',
                'Tener mi maleta lista',
                'Lo que dicen las noticias',
                'Ayudar a mi hermanito',
                'Cuándo arreglan mi colegio',
                'Avisarle a un adulto si tengo miedo',
                'Lo que hizo la tierra',
                'Cómo trato a mis compañeros'
              ],
              key: [
                'Lo que sí puedo controlar: saber qué hacer si tiembla · tener mi maleta lista · ayudar a mi hermanito · avisarle a un adulto si tengo miedo · cómo trato a mis compañeros.',
                'Lo que no puedo controlar: que vuelva a temblar · cuánto duró el temblor · lo que dicen las noticias · cuándo arreglan mi colegio · lo que hizo la tierra.'
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
                'Cuando nos asustamos, el cuerpo respira rápido y corto, como si tuviéramos que salir corriendo. Si le enseñamos al cuerpo a respirar despacio, el cerebro entiende el mensaje: "ya estamos a salvo". Es un truco real, no un cuento.'
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
              intro: 'Escribe en tu cuaderno una carta corta para un niño o una niña de otra ciudad que también vivió el temblor. Cuéntale algo que a ti te haya ayudado.',
              ordered: false,
              items: ['Querido amigo o amiga: …'],
              note: 'Si no quieres escribirla, déjalo para otro día. Está bien.'
            },
            {
              type: 'notebook',
              id: '1D3',
              title: 'Nuestro plan familiar',
              intro: 'Con un adulto de tu casa, copien y respondan en el cuaderno estas tres preguntas. El jueves vas a leer un texto que explica cómo hacerlo paso a paso.',
              items: [
                '¿Dónde nos encontramos si estamos separados?',
                '¿Qué llevamos en la maleta de emergencia?',
                '¿A quién llamamos?'
              ]
            },
            {
              type: 'links',
              title: 'Cuentos para leer en familia',
              items: [
                {
                  label: 'Cuando la tierra se movió',
                  href: 'http://www.buentrato.cl/pdf/Cuando_la_Tierra_se_Movio.pdf',
                  note: 'Josefina Martínez, Elena Sepúlveda y Rossana Culaciati · Pontificia Universidad Católica de Chile.'
                },
                {
                  label: 'Trinka y Juan: el día que la Tierra se movió',
                  href: 'https://piploproductions.com/nuestros-cuentos/trinka-y-juan-terremotos/',
                  note: 'Piplo Productions · descarga gratuita, incluye guía para adultos.'
                },
                {
                  label: 'El día que todo se movió',
                  href: 'https://aprendeencasa.sep.gob.mx/multimedia/RSC/Documento/202010/202010-RSC-vB6veFy91v-El_da_que_todo_se_movio.pdf',
                  note: 'Festival Pixelatl / SEP México · versión en blanco y negro, fácil de imprimir.'
                }
              ]
            },
            {
              type: 'adult',
              title: 'Para el adulto que acompaña',
              paragraphs: [
                'Esta sección no tiene calificación y ningún ítem se marca como correcto o incorrecto. La página no recoge nada de lo que el niño escriba: todo queda en su cuaderno.',
                'La única actividad con clave es la de los dos círculos (**1.B.1**), y aparece al final bajo el título "Para comparar en familia". No es una corrección: es una excusa para conversar sobre por qué una frase quedó en un círculo y no en el otro.'
              ],
              items: [
                'Revise el cuaderno con el niño sin corregir la ortografía primero.',
                'Si aparecen respuestas que preocupan, comuníquese con la docente antes de hablarlas con el niño.',
                'No insista en las preguntas que deje en blanco: volver otro día es parte del proceso.'
              ]
            }
          ]
        }
      ]
    }
  ]
});
