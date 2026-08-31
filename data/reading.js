/* ==========================================================================
   data/reading.js — Sección 3 · Comprensión lectora
   Lenguaje · Componente semántico

   Un solo texto, original, escrito para esta guía: explica por qué
   necesitamos dormir. Toda la sección trabaja sobre él —comprensión literal,
   inferencial, vocabulario, orden de las ideas, resumen y producción escrita—
   en vez de comparar dos textos, como se hacía antes.

   Todo se resuelve en el cuaderno: no hay preguntas de selección ni nada que
   marcar en la página, y las respuestas ya no se muestran al estudiante. El
   campo "key" de cada consigna alimenta RESPUESTAS_GUIA_TERCERO.md, que es
   solo para la profesora.
   ========================================================================== */

window.Guide.register('reading', {
  title: 'Leo y entiendo un texto informativo',
  short: 'Comprensión lectora',
  icon: 'book',
  href: 'reading.html',
  section: { number: 3, label: 'Sección 3', short: 'Sección 3' },
  subject: 'Lenguaje · Componente semántico',
  description: 'Un texto que explica por qué necesitamos dormir. Vas a leerlo, buscar lo que dice, entender lo que no dice y resumirlo con tus palabras. Todo en tu cuaderno.',
  learning: 'Comprendo un texto informativo: encuentro la información que da, deduzco lo que no dice de forma directa y lo resumo con mis propias palabras.',

  teacherNote: [
    'Esta sección trabajaba antes con dos textos y el objetivo de comparar textos de diferente formato y finalidad. Al quedarse con un solo texto ese objetivo ya no aplica: aquí se trabaja comprensión literal (3.A.1), inferencial (3.A.2), vocabulario en contexto (3.A.3), jerarquía de ideas (3.B.1 y 3.B.2), resumen (3.B.3) y producción escrita (3.B.4). Conviene asociar el DBA que corresponda en la planeación.',
    'El texto es original y está calibrado para 7 a 9 años: frases cortas, una idea por párrafo y vocabulario cotidiano. La cifra de sueño —de nueve a doce horas para niños de seis a doce años— corresponde a la recomendación que manejan los especialistas en sueño infantil.',
    'Las actividades 3.B.5 y 3.B.7 conectan la lectura con la vida del estudiante y suelen mostrar quién no está durmiendo bien en la casa. Vale la pena leerlas con atención.'
  ],

  notice: {
    title: 'Antes de leer',
    dismissLabel: 'Entendido',
    paragraphs: [
      'Todo lo de esta sección se escribe **en el cuaderno**: la pregunta y luego tu respuesta, con frases completas. En la página no hay nada que marcar ni que oprimir.',
      'Lee el texto **dos veces** antes de responder. La primera para enterarte de qué se trata; la segunda, despacio, buscando los datos.',
      'El botón **Ver el texto** te deja tenerlo a la mano mientras escribes. No tienes que memorizar nada: puedes volver a él todas las veces que quieras.',
      'Las respuestas las tiene la profesora Ruby. Cuando termines, revisen juntos tu cuaderno.'
    ]
  },

  units: [
    {
      id: 'u1',
      title: 'Leo el texto',
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
                'Área: Comprensión lectora — Leo y entiendo un texto informativo'
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
              note: 'Esta la escribes con tus palabras: no tiene respuesta correcta.'
            },
            {
              type: 'text',
              paragraphs: [
                'El **TEXTO INFORMATIVO** sirve para explicar algo real. No inventa personajes ni historias: cuenta hechos, da datos y responde preguntas como qué, cuándo, cómo y por qué. Suele tener un título, párrafos organizados por temas y a veces cifras.'
              ]
            },
            {
              type: 'reading',
              title: 'Texto · ¿Por qué necesitamos dormir?',
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
              title: 'Lo que dice el texto',
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
              keyNote: 'Preguntas literales: la respuesta está escrita en el texto, tal cual. Si el niño no la encuentra, suele ser porque no está releyendo el párrafo, no porque no entienda.'
            },
            {
              type: 'notebook',
              id: '3A2',
              title: 'Lo que el texto no dice, pero se entiende',
              intro: 'Estas respuestas no están escritas tal cual: hay que deducirlas. Copia cada pregunta en el cuaderno y responde con tus palabras, en frases completas.',
              items: [
                '¿Por qué crees que a una persona enferma lo primero que le dicen es que duerma?',
                'Si un niño estudia mucho pero duerme muy poco, ¿qué crees que le pasa al otro día en el colegio?',
                '¿Por qué el texto dice que el cuerpo tiene "un reloj propio"? ¿En qué se parece a un reloj?',
                'El texto empieza diciendo que dormir "parece una pérdida de tiempo". ¿Por qué lo parece, si no lo es?',
                'Según lo que leíste, ¿qué le recomendarías a alguien que se queda viendo televisión hasta muy tarde?'
              ],
              key: [
                'Porque mientras duerme el cuerpo repara lo dañado y las defensas se hacen más fuertes, que es justo lo que necesita para mejorarse.',
                'Se le olvida más de lo que estudió, porque el cerebro no alcanzó a guardar lo aprendido.',
                'Porque mide el tiempo por su cuenta y se acostumbra a los horarios: aprende a qué hora toca dormir.',
                'Porque uno no se da cuenta de nada mientras duerme, pero el cuerpo está haciendo tres tareas importantes.',
                'Que la apague un buen rato antes de acostarse, porque su luz le dice al cerebro que todavía es de día y retrasa el sueño.'
              ],
              keyNote: 'No hay una sola manera de decirlo. Si el niño escribió la misma idea con otras palabras, está bien. Lo que se mira es que la deducción se apoye en el texto.'
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
              ],
              keyNote: 'Se acepta cualquier definición equivalente. Lo importante es que la saque del uso en el texto, no de memoria.'
            }
          ]
        }
      ]
    },

    {
      id: 'u2',
      title: 'Trabajo el texto',
      summary: 'Ordenar las ideas, resumirlas y explicárselas a alguien más.',
      lessons: [
        {
          id: 'l2',
          code: '3.B',
          title: 'De las ideas al resumen',
          goal: 'ordenar las ideas del texto, resumirlo y explicarlo con tus palabras.',
          blocks: [
            {
              type: 'text',
              paragraphs: [
                'Un texto informativo no pone las ideas en cualquier orden: las acomoda para que se entiendan una tras otra. Reconocer ese orden ayuda a entender el texto y, sobre todo, a resumirlo.'
              ]
            },
            {
              type: 'notebook',
              id: '3B1',
              title: 'Ordeno las ideas del texto',
              intro: 'Estas seis ideas están **en desorden**. Cópialas en tu cuaderno numeradas del 1 al 6, en el mismo orden en que el texto las va contando.',
              ordered: false,
              items: [
                'Acostarse siempre a la misma hora ayuda a que el sueño llegue solo',
                'Mientras duermes, tu cuerpo está trabajando',
                'El cuerpo repara los músculos y hace más fuertes las defensas',
                'El cerebro guarda lo importante de lo que aprendiste',
                'La luz de las pantallas retrasa la orden de dormir',
                'El cuerpo crece, porque produce la hormona del crecimiento'
              ],
              key: [
                'Mientras duermes, tu cuerpo está trabajando',
                'El cerebro guarda lo importante de lo que aprendiste',
                'El cuerpo crece, porque produce la hormona del crecimiento',
                'El cuerpo repara los músculos y hace más fuertes las defensas',
                'La luz de las pantallas retrasa la orden de dormir',
                'Acostarse siempre a la misma hora ayuda a que el sueño llegue solo'
              ],
              keyNote: 'El texto marca el orden con "lo primero", "lo segundo" y "lo tercero". Si el niño se pierde, conviene mostrarle esas tres palabras: son la pista.'
            },
            {
              type: 'notebook',
              id: '3B2',
              title: 'La idea principal de cada párrafo',
              intro: 'El texto tiene **siete párrafos**. Copia en tu cuaderno los números del 1 al 7 y escribe al frente de cada uno, en una sola frase corta, de qué habla ese párrafo.',
              ordered: false,
              items: ['Párrafo 1: … · Párrafo 2: … · y así hasta el 7'],
              key: [
                'Párrafo 1: dormir parece perder el tiempo, pero el cuerpo trabaja.',
                'Párrafo 2: los niños de seis a doce años necesitan de nueve a doce horas.',
                'Párrafo 3: el cerebro ordena y guarda lo que aprendiste.',
                'Párrafo 4: el cuerpo crece mientras duermes.',
                'Párrafo 5: el cuerpo repara los músculos y las defensas.',
                'Párrafo 6: las pantallas dificultan el sueño.',
                'Párrafo 7: acostarse a la misma hora ayuda.'
              ],
              keyNote: 'Este ejercicio es el andamio del resumen: quien logra estas siete frases ya lo tiene medio hecho.'
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
              id: '3B3',
              title: 'El resumen',
              intro: 'Ya tienes las siete ideas principales de la actividad anterior. Únelas con tus palabras y escribe en tu cuaderno un resumen del texto, de máximo **cinco renglones**.',
              ordered: false,
              items: ['Resumen del texto (máximo 5 renglones)'],
              key: [
                'Un resumen posible: dormir parece perder el tiempo, pero mientras tanto el cuerpo trabaja. Los niños de seis a doce años necesitan entre nueve y doce horas. Mientras duermen, el cerebro guarda lo aprendido, el cuerpo crece y repara los músculos y las defensas. Las pantallas dificultan el sueño, y acostarse siempre a la misma hora ayuda.'
              ],
              keyNote: 'No tiene que decir exactamente esto. Lo que se mira: que recoja la idea de cada párrafo, que esté con sus palabras y que no copie frases enteras del texto.'
            },
            {
              type: 'notebook',
              id: '3B4',
              title: 'Le explico a mi familia',
              intro: 'Escribe en tu cuaderno un párrafo corto para alguien de tu casa, explicándole por qué es importante dormir bien. Usa por lo menos **dos datos** del texto y escríbelo como si se lo estuvieras contando.',
              ordered: false,
              items: ['"Te quiero contar que dormir sirve para…"'],
              note: 'Si quieres, léeselo en voz alta después.',
              key: [
                'Se espera un párrafo con al menos dos datos del texto: las nueve a doce horas, que el cerebro guarda lo aprendido, que el cuerpo crece, que repara músculos y defensas, que las pantallas retrasan el sueño o que ayuda acostarse a la misma hora.'
              ],
              keyNote: 'Es producción escrita, no comprensión: se corrige que use datos del texto y que se entienda, no la ortografía en la primera pasada.'
            },
            {
              type: 'notebook',
              id: '3B5',
              title: 'Preguntas para opinar',
              intro: 'Aquí no hay una sola respuesta correcta. Lo importante es que expliques tu razón. Copia cada pregunta en el cuaderno y responde.',
              items: [
                '¿Cuántas horas duermes tú normalmente? ¿Está dentro de lo que recomienda el texto?',
                '¿Qué es lo que más te cuesta para dormirte temprano?',
                '¿Qué le dirías a un compañero que se acuesta muy tarde todas las noches?',
                'Si tuvieras que ponerle otro título al texto, ¿cuál le pondrías?'
              ],
              note: 'Si alguna no quieres responderla, déjala en blanco y sigue. Está bien.'
            },
            {
              type: 'notebook',
              id: '3B6',
              title: 'Vuelvo al principio',
              intro: 'Busca en tu cuaderno lo que escribiste al comienzo sobre cuántas horas necesita dormir un niño. Léelo otra vez y escribe debajo tu respuesta.',
              ordered: false,
              items: ['¿Cambió mi idea? ¿En qué cambió?'],
              note: 'Esta la escribes con tus palabras: no tiene respuesta correcta.'
            },
            {
              type: 'notebook',
              id: '3B7',
              title: 'Mi compromiso',
              intro: 'Escoge **una sola** cosa del texto para cumplir esta semana: apagar las pantallas antes de acostarte, o acostarte siempre a la misma hora. Una sola, la que creas que sí puedes sostener. Cópiala en tu cuaderno y escribe al lado los días que lo lograste.',
              ordered: false,
              items: ['Esta semana me comprometo a…', 'Lo logré los días: …'],
              note: 'Cambiar una costumbre cuesta. Si un día no se pudo, no pasa nada: se sigue al otro.'
            },
            {
              type: 'links',
              title: 'Para seguir aprendiendo',
              items: [
                {
                  label: 'Cómo hacer un resumen (video)',
                  href: 'https://www.youtube.com/watch?v=vuuagyKU55Y',
                  note: 'Los mismos cuatro pasos de arriba, explicados en video. Sirve para la actividad 3.B.3.'
                }
              ]
            }
          ]
        }
      ]
    }
  ]
});
