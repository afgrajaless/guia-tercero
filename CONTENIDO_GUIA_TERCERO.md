# Contenido para el sitio `guia-tercero`

**Destino:** https://afgrajaless.github.io/guia-tercero/
**Grado:** Tercero (7–8 años) · I.E. Pablo Sexto, sede Antonio José de Sucre · Grupo 3°B · Periodo III
**Docente:** Lina Marcela Ortiz Zúñiga
**Contexto:** modalidad virtual tras el sismo del 10 de agosto de 2026 (Directiva 009 de 2026, MinEducación).

---

## 0. INSTRUCCIONES PARA EL AGENTE

> **Nota posterior — cambio de enfoque.** Las secciones 1, 2 y 3 de este archivo (el contenido
> pedagógico) siguen vigentes tal cual. Lo que ya **no** aplica es el modelo de interacción que
> describe este apartado §0: la guía dejó de resolverse en pantalla.
>
> Hoy el sitio es un documento que se lee y se **transcribe al cuaderno**. No hay selección
> múltiple, ni campos de respuesta, ni arrastrar tarjetas, ni barra de progreso, ni "Prefiero no
> responder": cada actividad es una consigna que el estudiante copia y resuelve en su cuaderno, y
> las respuestas de todo el día se reúnen al final de cada página, en el solucionario
> **"Respuestas de hoy"**, para compararlas y pasarlas también al cuaderno.
>
> Los tipos de ítem que lista este apartado (`opcion_multiple`, `ordenar`, `emparejar`,
> `clasificar`, `checklist`…) se convirtieron todos en consignas escritas. Ver el README para el
> esquema de datos actual.

Este archivo contiene **todo el contenido** de tres guías. Hay que volcarlo en las tres páginas que ya existen:

| Página | Sección | Contenido de este archivo |
|---|---|---|
| `wellbeing.html` | Psicosocial | Sección 1 |
| `math.html` | Matemáticas | Sección 2 |
| `reading.html` | Comprensión lectora | Sección 3 |

### Reglas obligatorias

1. **Respetar el esquema de datos existente.** El sitio ya carga las lecciones desde JS/JSON. Mapear este contenido a ese esquema; **no** reescribir la arquitectura ni el CSS. Si el esquema no cubre algún tipo de ítem, extenderlo de forma mínima y retrocompatible.
2. **Mantener el flujo actual:** explicación corta → ejemplo → actividades con revisión inmediata → barra de progreso. No hay nota; se puede reintentar.
3. **La sección Psicosocial NO se autocorrige y NO suma puntaje.** Todos sus ítems son de respuesta abierta o de selección sin respuesta correcta. Si la barra de progreso es global, esta sección debe contar el ítem como completado al escribir cualquier cosa (o al marcar "listo"), nunca como acierto/error. Ver §1.0.
4. **Números de más de 4 cifras siempre con punto de miles** (`348.912`), nunca con coma. Comparar respuestas ignorando puntos y espacios.
5. **Accesibilidad:** el grupo incluye estudiantes que trabajan desde el celular de un adulto. Botones grandes, una pregunta por pantalla en móvil, nada que dependa de hover.
6. **Contenido sensible:** no agregar imágenes de escombros, rescates ni cifras de víctimas en ninguna sección. Si se usan ilustraciones, que sean neutras (placas tectónicas, mapas, íconos).

### Tipos de ítem sugeridos

- `abierta` — campo de texto, sin corrección. Muestra la clave solo si `mostrarClave: true`.
- `numerica` — respuesta exacta, normalizada quitando puntos/espacios.
- `numerica_doble` — para divisiones: dos campos, `cociente` y `residuo`.
- `opcion_multiple` — una correcta.
- `ordenar` — arrastrar o numerar en secuencia.
- `emparejar` — unir columna A con columna B.
- `verdadero_falso`
- `clasificar` — arrastrar tarjetas a dos o más contenedores.
- `checklist` — sin corrección, solo marcar (para hábitos/registro semanal).

---

# SECCIÓN 1 — PSICOSOCIAL (`wellbeing.html`)

**Título de la sección:** Hablemos de cómo nos sentimos
**Área institucional:** Ética y Valores / Orientación de grupo
**Aprendizaje:** Reconozco y nombro lo que siento después de una situación difícil, aplico estrategias sencillas para calmar mi cuerpo y sé a quién puedo pedir ayuda.

## 1.0 Comportamiento especial de esta sección

- Ningún ítem tiene respuesta correcta. **No mostrar ✓ ni ✗ nunca.**
- Al enviar una respuesta, mostrar un mensaje de acuse neutro y cálido, rotando entre: *"Gracias por contarlo."* / *"Anotado."* / *"Está bien sentir eso."* / *"Listo, sigamos."*
- Añadir en cada actividad un botón **"Prefiero no responder"** que marca el ítem como completado sin texto. Es una función pedagógica, no un atajo.
- Mostrar el bloque **Para la familia** (§1.1) como banner fijo al entrar a la sección, con opción de cerrarlo.
- Al final de la sección, mostrar siempre el bloque **Si necesitas ayuda** (§1.6).

## 1.1 Banner: PARA LA FAMILIA (leer antes de empezar)

> Esta guía no es una tarea que se califica con nota. Es un espacio para que su hijo o hija pueda contar cómo se ha sentido después de lo que vivimos el 10 de agosto.
>
> Acompáñelo mientras la desarrolla. No hace falta que sepa qué decir: basta con estar al lado, escuchar sin interrumpir y no apurar la conversación.
>
> Si el niño o la niña no quiere hablar de algo, no insista. Puede dejar el punto en blanco y volver a él otro día. Todo lo que escriba está bien.
>
> Evite dejarlo viendo noticias o videos del rescate. A esta edad, las imágenes repetidas aumentan el miedo en lugar de explicarlo.
>
> Si nota que hace más de un mes no duerme, no juega, no come o no quiere separarse de usted, comuníquese con la docente y llame a la Línea Amiga 106.

## 1.2 Introducción de la sección

> Hola. Soy tu profe y quiero contarte algo: el 10 de agosto todos vivimos un temblor muy fuerte. Muchos adultos también sentimos miedo ese día. Sentir miedo, rabia, tristeza o incluso no sentir nada especial: todo eso está bien. Aquí no hay respuestas malas.

---

## Lección 1.A — Mis emociones tienen nombre

### Explicación

Las emociones son señales. No son buenas ni malas: son avisos que nos manda el cuerpo para cuidarnos.

- **MIEDO:** nos avisa que algo puede ser peligroso, para protegernos.
- **TRISTEZA:** nos avisa que perdimos algo o a alguien importante, y que necesitamos consuelo.
- **RABIA:** nos avisa que algo nos parece injusto.
- **SORPRESA:** nos avisa que pasó algo que no esperábamos.
- **CALMA:** nos avisa que estamos a salvo.
- **ALEGRÍA:** nos avisa que estamos bien y con ganas de compartir.

**Algo importante:** las emociones vienen en olas. Suben, se quedan un rato y bajan. Ninguna se queda para siempre, aunque a veces parezca.

También es normal que después de un temblor uno sienta cosas que antes no sentía: querer dormir con los papás, sobresaltarse con un ruido fuerte, no tener ganas de jugar, tener pesadillas o dolor de barriga. No estás enfermo ni te estás portando mal. Tu cuerpo está aprendiendo a sentirse seguro otra vez.

### Actividades

**1.A.1 — Mi termómetro de hoy** · tipo: `opcion_multiple` sin respuesta correcta
Pregunta: ¿Cómo te sientes hoy?
Opciones: `1 · Muy tranquilo/a` / `2 · Tranquilo/a` / `3 · Más o menos` / `4 · Nervioso/a` / `5 · Muy nervioso/a`
Nota de implementación: guardar el valor por fecha; si el sitio lo permite, mostrar al estudiante su propio historial como una línea de colores ("así te has sentido esta semana"). No interpretarlo ni etiquetarlo.

**1.A.2 — Mi cuerpo también habla** · tipo: `emparejar`, sin corrección
Columna A → Columna B (varias uniones válidas, todas se aceptan):

| Emoción | Señales |
|---|---|
| MIEDO | el corazón late rápido · me tiemblan las manos · me dan ganas de esconderme |
| TRISTEZA | me pesa el pecho · me dan ganas de llorar · no quiero hablar |
| RABIA | me pongo caliente · aprieto los puños · hablo fuerte |
| CALMA | respiro despacio · los hombros están sueltos · me dan ganas de jugar |

**1.A.3 — Completo las frases** · tipo: `abierta`, un campo por frase

1. El día del temblor yo estaba en…
2. Lo primero que pensé fue…
3. Después del temblor me he sentido…
4. Algo que me da miedo ahora es…
5. Algo que me hace sentir seguro/a es…
6. Alguien que me ayudó ese día fue…
7. Algo bonito que vi hacer a la gente fue…

**1.A.4 — Mi diccionario de emociones** · tipo: `abierta`, tres pares
Formato: `Sentí ______ cuando ______` × 3.

---

## Lección 1.B — Lo que puedo controlar y lo que no

### Explicación

Hay cosas que están DENTRO de nuestro círculo: podemos decidirlas. Y hay cosas que están FUERA: nadie las puede decidir, ni los niños ni los adultos.

Cuando pasamos mucho tiempo pensando en lo de afuera, la preocupación crece. Cuando dedicamos nuestra energía a lo de adentro, nos sentimos más tranquilos y más fuertes. Eso no significa que lo de afuera no importe: significa que no es nuestra responsabilidad.

**Un dato que ayuda:** nadie en el mundo, en ningún país, puede saber el día ni la hora en que va a temblar. Ni los científicos más estudiados. Por eso lo importante no es adivinar, sino estar preparados. Y eso sí lo podemos hacer.

### Actividades

**1.B.1 — Dos círculos** · tipo: `clasificar` en dos contenedores
Contenedores: **LO QUE SÍ PUEDO CONTROLAR** (verde) / **LO QUE NO PUEDO CONTROLAR** (gris — *no rojo, evitar la lectura de "error"*)

Tarjetas y clasificación esperada:

| Tarjeta | Contenedor |
|---|---|
| que vuelva a temblar | NO |
| saber qué hacer si tiembla | SÍ |
| cuánto duró el temblor | NO |
| tener mi maleta lista | SÍ |
| lo que dicen las noticias | NO |
| ayudar a mi hermanito | SÍ |
| cuándo arreglan mi colegio | NO |
| avisarle a un adulto si tengo miedo | SÍ |
| lo que hizo la tierra | NO |
| cómo trato a mis compañeros | SÍ |

Corrección: **suave**. Si el estudiante ubica mal una tarjeta, no marcar error; mostrar el texto *"Piénsalo otra vez: ¿eso lo decides tú?"* y permitir moverla. Al terminar, mostrar el reparto correcto sin puntaje.

**1.B.2 — Mis tres acciones** · tipo: `abierta`, tres campos
Escribe tres cosas que tú sí puedes hacer esta semana para sentirte más tranquilo o tranquila.

---

## Lección 1.C — Mi rincón de la calma y la respiración cuadrada

### Explicación

Cuando nos asustamos, el cuerpo respira rápido y corto, como si tuviéramos que salir corriendo. Si le enseñamos al cuerpo a respirar despacio, el cerebro entiende el mensaje: "ya estamos a salvo". Es un truco real, no un cuento.

**LA RESPIRACIÓN CUADRADA** — dibuja un cuadrado en el aire con el dedo mientras cuentas:

1. Lado 1 — TOMO aire por la nariz mientras cuento 1, 2, 3, 4.
2. Lado 2 — GUARDO el aire mientras cuento 1, 2, 3, 4.
3. Lado 3 — SUELTO el aire por la boca mientras cuento 1, 2, 3, 4.
4. Lado 4 — ESPERO sin aire mientras cuento 1, 2, 3, 4.

Repítelo cuatro veces. Practícalo cuando estés tranquilo, para que te salga fácil el día que lo necesites.

**EL JUEGO 5–4–3–2–1** (para cuando la cabeza va muy rápido): mira a tu alrededor y busca, en voz baja, 5 cosas que puedes VER, 4 que puedes TOCAR, 3 que puedes OÍR, 2 que puedes OLER y 1 que te guste de ti. Este juego trae la mente de vuelta al lugar donde estás ahora, que es un lugar seguro.

### Actividades

**1.C.1 — Guía de respiración animada** · tipo: `widget` (componente nuevo)
Especificación: un cuadrado SVG cuyo perímetro se recorre con un punto luminoso en ciclos de 16 s (4 s por lado). Texto grande sincronizado: **TOMA AIRE → GUARDA → SUELTA → ESPERA**, con contador 4-3-2-1. Botón **Empezar / Parar**. Cuatro ciclos por defecto, luego mensaje *"¿Cómo te sientes ahora?"* con el termómetro de 1.A.1.
Requisitos: sin sonido automático, sin cuenta regresiva agresiva, transiciones suaves, respeta `prefers-reduced-motion` (si está activo, usar solo texto y contador, sin animación).

**1.C.2 — Mi rincón de la calma** · tipo: `abierta`
Escoge un lugar de tu casa (una esquina, un cojín, debajo de la mesa) y pon allí tres cosas que te ayuden a calmarte. Escribe cuál lugar escogiste y qué pusiste.

**1.C.3 — Mi registro de la semana** · tipo: `checklist` persistente
Siete casillas: LUNES … DOMINGO. Marca el día que practicaste la respiración cuadrada. Se guarda en el dispositivo. Sin puntaje, sin racha, sin penalización por días vacíos.

---

## Lección 1.D — Mi red de apoyo: pedir ayuda es de valientes

### Explicación

Nadie sale solo de las cosas difíciles. Los adultos también pedimos ayuda: los bomberos piden ayuda a otros bomberos, los médicos a otros médicos. Pedir ayuda no es ser débil ni ser cansón: es ser inteligente.

**Una regla útil:** si algo te preocupa tanto que no te deja dormir, jugar o comer, eso ya es motivo suficiente para contárselo a un adulto de confianza. No tienes que esperar a que sea "grave".

### Actividades

**1.D.1 — La mano de la ayuda** · tipo: `abierta`, cinco campos cortos
Escribe el nombre de cinco personas a las que puedes acudir cuando te sientas mal. Pueden ser de tu casa, del colegio o del barrio.
Implementación sugerida: una mano SVG con cinco dedos; al escribir en cada campo, el dedo correspondiente se colorea.

**1.D.2 — Una carta que abraza** · tipo: `abierta`, área de texto larga
Escribe una carta corta para un niño o una niña de otra ciudad que también vivió el temblor. Cuéntale algo que a ti te haya ayudado.

**1.D.3 — Nuestro plan familiar** · tipo: `abierta`, tres campos
Con un adulto de tu casa, respondan: ¿dónde nos encontramos si estamos separados? ¿Qué llevamos en la maleta de emergencia? ¿A quién llamamos?
*(Enlaza con el Texto 2 de la sección de lectura.)*

---

## 1.5 Lecturas complementarias (enlaces, NO copiar el contenido)

Estos tres materiales son gratuitos y están hechos justamente para esto. **Enlazar, no incrustar ni copiar**: tienen condiciones de uso propias (Piplo Productions pide expresamente compartir el enlace y no el PDF).

- **Cuando la tierra se movió** — Josefina Martínez, Elena Sepúlveda y Rossana Culaciati; Escuela de Psicología, Pontificia Universidad Católica de Chile / Centro de Estudios y Promoción del Buen Trato.
  http://www.buentrato.cl/pdf/Cuando_la_Tierra_se_Movio.pdf
- **Trinka y Juan: el día que la Tierra se movió** — Piplo Productions (español, descarga gratuita, incluye guía para adultos).
  https://piploproductions.com/nuestros-cuentos/trinka-y-juan-terremotos/
- **El día que todo se movió** — Festival Pixelatl / SEP México (versión en blanco y negro, fácil de imprimir).
  https://aprendeencasa.sep.gob.mx/multimedia/RSC/Documento/202010/202010-RSC-vB6veFy91v-El_da_que_todo_se_movio.pdf

## 1.6 Bloque fijo: SI NECESITAS AYUDA

Mostrar al pie de la sección psicosocial, siempre visible:

> **Línea Amiga 106** — gratuita, confidencial, 24 horas, desde cualquier teléfono.
> **Risaralda:** 606 333 9610 · Ruta de Atención en Salud Mental.
> También puedes escribirle a tu profe o contarle a un adulto de tu casa.

---

# SECCIÓN 2 — MATEMÁTICAS (`math.html`)

**Título:** Analizo, calculo, reparto
**DBA 2** · Competencia: Razonamiento y resolución de problemas · Componente: Numérico–variacional
**Aprendizaje:** Uso las cuatro operaciones y las propiedades de los números naturales hasta seis cifras para resolver situaciones de mi entorno.

## 2.0 Notas de implementación

- Todos los ítems de esta sección **sí** se autocorrigen.
- Normalizar la respuesta antes de comparar: quitar puntos, espacios y comas.
- En las divisiones, pedir **dos campos**: cociente y residuo. Ambos deben coincidir.
- Los ítems de "escribe con letras" (2.A.1) requieren comparación de texto: usar `opcion_multiple` en su lugar, o aceptar respuesta libre y mostrar la clave. **No** intentar comparar cadenas literalmente.
- Botón **"Ver el procedimiento"** en cada operación larga, que despliega los pasos. Que no cuente como error usarlo.
- Recordatorio visible en la sección: *"Desarrolla las operaciones también en el cuaderno, bien alineadas por columnas. Aquí solo escribes el resultado."*

---

## Lección 2.A — Números naturales hasta 6 cifras

### Explicación

Un número de 6 cifras llega hasta las CENTENAS DE MIL. Para leerlo:

1. Ubico el punto que separa los miles, contando tres cifras desde la derecha.
2. Digo la cantidad que está a la izquierda del punto y agrego la palabra MIL.
3. Digo la cantidad que está a la derecha del punto.

**Ejemplo:** 348.912 se lee TRESCIENTOS CUARENTA Y OCHO MIL NOVECIENTOS DOCE.

**Tabla posicional:**

| CM | DM | UM | C | D | U |
|---|---|---|---|---|---|
| Centena de mil | Decena de mil | Unidad de mil | Centena | Decena | Unidad |
| 100.000 | 10.000 | 1.000 | 100 | 10 | 1 |
| **3** | **4** | **8** | **9** | **1** | **2** |

### Actividades

**2.A.1 — Escribo con letras** · tipo: `abierta` con clave visible, o `opcion_multiple`

| Número | Respuesta |
|---|---|
| 190.408 | ciento noventa mil cuatrocientos ocho |
| 862.500 | ochocientos sesenta y dos mil quinientos |
| 999.999 | novecientos noventa y nueve mil novecientos noventa y nueve |
| 604.007 | seiscientos cuatro mil siete |
| 250.190 | doscientos cincuenta mil ciento noventa |
| 483.026 | cuatrocientos ochenta y tres mil veintiséis |
| 570.004 | quinientos setenta mil cuatro |
| 316.280 | trescientos dieciséis mil doscientos ochenta |

**2.A.2 — Escribo con cifras** · tipo: `numerica`

| Enunciado | Respuesta |
|---|---|
| Cuatrocientos doce mil quinientos ocho | 412.508 |
| Ochocientos mil setenta | 800.070 |
| Seiscientos treinta y cinco mil doscientos catorce | 635.214 |
| Novecientos nueve mil novecientos | 909.900 |
| Doscientos siete mil tres | 207.003 |
| Setecientos cincuenta mil cuatrocientos sesenta y uno | 750.461 |

**2.A.3 — Descompongo** · tipo: `abierta` con clave
Ejemplo: `526.407 = 500.000 + 20.000 + 6.000 + 400 + 0 + 7`

| Número | Respuesta |
|---|---|
| 347.205 | 300.000 + 40.000 + 7.000 + 200 + 0 + 5 |
| 810.064 | 800.000 + 10.000 + 0 + 0 + 60 + 4 |
| 209.730 | 200.000 + 0 + 9.000 + 700 + 30 + 0 |

**2.A.4 — Comparo** · tipo: `opcion_multiple` (`<`, `>`, `=`)

| Comparación | Respuesta |
|---|---|
| 348.912 __ 348.921 | `<` |
| 700.000 __ 699.999 | `>` |
| 205.064 __ 205.064 | `=` |
| 530.800 __ 53.800 | `>` |
| 999.099 __ 990.999 | `>` |

---

## Lección 2.B — Adición y sustracción con 6 cifras

### Explicación

En la **suma**, los términos se llaman SUMANDOS y el resultado, SUMA o TOTAL. Se organizan las cifras por columnas (unidades bajo unidades) y se empieza por la derecha. Si una columna pasa de 9, se lleva una unidad a la columna siguiente.

En la **resta**, el número de arriba es el MINUENDO, el de abajo el SUSTRAENDO y el resultado la DIFERENCIA. Cuando una cifra de arriba es menor que la de abajo, se pide prestado a la columna de la izquierda.

**PRUEBA DE LA RESTA:** diferencia + sustraendo = minuendo. Si no da, hay un error.

### Actividades

**2.B.1 — Adiciones** · tipo: `numerica`

| # | Operación | Respuesta |
|---|---|---|
| 1 | 234.567 + 189.435 | 424.002 |
| 2 | 405.812 + 97.649 | 503.461 |
| 3 | 318.204 + 258.796 | 577.000 |
| 4 | 560.039 + 249.961 | 810.000 |
| 5 | 127.450 + 63.280 + 209.315 | 400.045 |
| 6 | 400.008 + 99.992 + 150.000 | 650.000 |

**2.B.2 — Sustracciones** · tipo: `numerica`
Pedir además la comprobación con la prueba de la resta (campo opcional, sin corrección).

| # | Operación | Respuesta |
|---|---|---|
| 1 | 700.000 − 348.912 | 351.088 |
| 2 | 512.340 − 279.865 | 232.475 |
| 3 | 903.006 − 456.789 | 446.217 |
| 4 | 850.200 − 99.999 | 750.201 |
| 5 | 604.010 − 385.427 | 218.583 |
| 6 | 999.999 − 456.123 | 543.876 |

---

## Lección 2.C — Multiplicación por 2 y 3 cifras

### Explicación

Los términos de la multiplicación son los FACTORES y el resultado es el PRODUCTO.

Para multiplicar **por 2 cifras**: multiplico primero por las unidades del segundo factor y escribo el resultado. Luego multiplico por las decenas y escribo el resultado corrido UN lugar hacia la izquierda. Al final sumo los dos resultados.

Para multiplicar **por 3 cifras** hago lo mismo, pero agrego un tercer renglón corrido DOS lugares hacia la izquierda (el de las centenas).

**OJO CON EL CERO:** si el segundo factor tiene un cero (por ejemplo 208), ese renglón da cero. Puedes escribirlo o saltarlo, pero no olvides correr el renglón siguiente dos lugares.

### Actividades

**2.C.1 — Por 2 cifras** · tipo: `numerica`

| # | Operación | Respuesta |
|---|---|---|
| 1 | 1.243 × 26 | 32.318 |
| 2 | 3.508 × 47 | 164.876 |
| 3 | 2.076 × 35 | 72.660 |
| 4 | 4.890 × 62 | 303.180 |
| 5 | 1.509 × 84 | 126.756 |
| 6 | 6.207 × 39 | 242.073 |

**2.C.2 — Por 3 cifras** · tipo: `numerica`

| # | Operación | Respuesta |
|---|---|---|
| 1 | 2.164 × 315 | 681.660 |
| 2 | 4.027 × 208 | 837.616 |
| 3 | 1.856 × 134 | 248.704 |
| 4 | 3.405 × 260 | 885.300 |
| 5 | 1.078 × 523 | 563.794 |
| 6 | 2.930 × 407 | 1.192.510 |

---

## Lección 2.D — División por 2 y 3 cifras

### Explicación

Los términos de la división son: **DIVIDENDO** (lo que se reparte), **DIVISOR** (entre cuántos se reparte), **COCIENTE** (lo que le toca a cada uno) y **RESIDUO** (lo que sobra).

**Pasos para dividir por 2 o 3 cifras:**

1. Tomo del dividendo tantas cifras como tenga el divisor. Si el número que formé es menor que el divisor, tomo una cifra más.
2. Busco cuántas veces cabe el divisor en ese número. Escribo esa cifra en el cociente.
3. Multiplico esa cifra por el divisor y resto el resultado.
4. Bajo la siguiente cifra del dividendo y repito desde el paso 2.
5. Cuando ya no quedan cifras por bajar, lo que queda es el RESIDUO. El residuo siempre debe ser menor que el divisor.

**EJEMPLO RESUELTO: 7.488 ÷ 24**

1. Tomo 74. El 24 cabe 3 veces (24 × 3 = 72). Escribo 3. Resto: 74 − 72 = 2.
2. Bajo el 8: queda 28. El 24 cabe 1 vez. Escribo 1. Resto: 28 − 24 = 4.
3. Bajo el 8: queda 48. El 24 cabe 2 veces. Escribo 2. Resto: 48 − 48 = 0.
4. Cociente: **312**. Residuo: **0**.

**PRUEBA DE LA DIVISIÓN:** (cociente × divisor) + residuo = dividendo.
Comprobamos: (312 × 24) + 0 = 7.488 ✔

*Implementación sugerida: animar el ejemplo paso a paso, revelando un renglón por clic.*

### Actividades

**2.D.1 — Por 2 cifras** · tipo: `numerica_doble`

| # | Operación | Cociente | Residuo |
|---|---|---|---|
| 1 | 9.135 ÷ 35 | 261 | 0 |
| 2 | 15.876 ÷ 42 | 378 | 0 |
| 3 | 8.052 ÷ 61 | 132 | 0 |
| 4 | 23.940 ÷ 28 | 855 | 0 |
| 5 | 47.736 ÷ 56 | 852 | 24 |
| 6 | 61.245 ÷ 73 | 838 | 71 |

**2.D.2 — Por 3 cifras** · tipo: `numerica_doble`

| # | Operación | Cociente | Residuo |
|---|---|---|---|
| 1 | 68.352 ÷ 356 | 192 | 0 |
| 2 | 91.500 ÷ 250 | 366 | 0 |
| 3 | 45.780 ÷ 120 | 381 | 60 |
| 4 | 137.592 ÷ 408 | 337 | 96 |
| 5 | 258.750 ÷ 375 | 690 | 0 |
| 6 | 504.432 ÷ 624 | 808 | 240 |

---

## Lección 2.E — Resuelvo problemas

### Explicación

Antes de calcular, siempre hago tres preguntas: ¿qué me están preguntando?, ¿qué datos tengo?, ¿qué operación necesito?

Palabras que dan pistas: "en total", "juntos" → suma. "Quedaron", "cuánto más", "diferencia" → resta. "Cada uno tiene", "veces" → multiplicación. "Repartir en partes iguales", "a cada uno le toca" → división.

*Ojo: las pistas ayudan, pero lo que manda es entender la situación. Léela dos veces.*

### Actividades

**2.E.1 — Problemas** · tipo: `numerica` (más un campo `abierta` opcional para la operación usada)

| # | Problema | Operación | Respuesta |
|---|---|---|---|
| 1 | La biblioteca del municipio tenía 234.780 libros y recibió una donación de 45.620 libros más. ¿Cuántos libros tiene ahora? | 234.780 + 45.620 | 280.400 libros |
| 2 | Una empresa de agua embotelló 128.500 litros y los repartió en canecas iguales de 250 litros. ¿Cuántas canecas llenó? | 128.500 ÷ 250 | 514 canecas |
| 3 | Un colegio recibió 3.456 cuadernos y los repartió por partes iguales entre sus 24 salones. ¿Cuántos cuadernos recibió cada salón? | 3.456 ÷ 24 | 144 cuadernos |
| 4 | En una bodega hay 315 cajas y cada caja trae 148 lápices. ¿Cuántos lápices hay en total? | 315 × 148 | 46.620 lápices |
| 5 | Una fundación tenía 520.000 pesos para materiales escolares y gastó 348.750 pesos. ¿Cuánto dinero le quedó? | 520.000 − 348.750 | 171.250 pesos |
| 6 | Un grupo de voluntarios armó 1.248 kits de aseo. Si en cada caja caben 24 kits, ¿cuántas cajas necesitan? | 1.248 ÷ 24 | 52 cajas |
| 7 | La placa de Nazca se mueve 60 milímetros cada año. ¿Cuántos milímetros se mueve en 100 años? ¿A cuántos metros equivale? (1.000 mm = 1 m) | 60 × 100 | 6.000 mm = 6 metros |
| 8 | Un camión recorrió 1.256 kilómetros en un viaje. Si hizo 8 viajes iguales, ¿cuántos kilómetros recorrió en total? | 1.256 × 8 | 10.048 km |
| 9 | Tres escuelas reunieron útiles: la primera 12.480, la segunda 9.755 y la tercera 15.302. ¿Cuántos reunieron entre las tres? ¿Cuántos más reunió la tercera que la segunda? | suma y resta | 37.537 útiles · diferencia 5.547 |
| 10 | En un acueducto se almacenan 604.800 litros de agua y se reparten en 144 tanques iguales. ¿Cuántos litros quedan en cada tanque? | 604.800 ÷ 144 | 4.200 litros |

> **Nota editorial — no modificar sin consultar a la docente.**
> Los contextos de los problemas se escogieron a propósito: bibliotecas, acueductos, útiles escolares, voluntarios y datos científicos. **No se usan cifras de personas fallecidas, heridas ni de edificios colapsados.** Convertir la tragedia en un enunciado matemático obliga al niño a manipular numéricamente aquello que todavía le duele, y a esta edad eso reactiva la angustia en lugar de elaborarla. Los contextos de ayuda y reconstrucción sí se conservan porque refuerzan que la comunidad está respondiendo. Si se agregan problemas nuevos, mantener este criterio.

### Videos de refuerzo (enlazar en la sección)

- Valor posicional — https://www.youtube.com/watch?v=CpBVPMBXvt4
- Multiplicación por 2 y 3 cifras — https://www.youtube.com/watch?v=huLO63dpPok
- División por 2 cifras — https://www.youtube.com/watch?v=Jxjhfqo7wRQ
- División por 3 cifras — https://www.youtube.com/watch?v=KrJ2aZfMPOU

---

# SECCIÓN 3 — COMPRENSIÓN LECTORA (`reading.html`)

**Título:** Comparo textos: informativo e instructivo
**DBA 6** · Competencia: Lectora · Componente: Semántico
**Aprendizaje:** Comparo textos de diferente formato y finalidad para dar cuenta de sus relaciones de contenido.

## 3.0 Notas de implementación

- **Los dos textos son originales**, escritos para esta guía. Se pueden publicar, imprimir y reutilizar sin problemas de derechos. Los datos del Texto 1 provienen del Servicio Geológico Colombiano.
- El texto debe quedar **siempre visible o accesible** mientras se responden las preguntas (panel lateral en escritorio, botón "Ver el texto" flotante en móvil). A esta edad, obligar a memorizar convierte el ejercicio de comprensión en uno de memoria.
- Las preguntas **literales** se autocorrigen. Las **inferenciales** y **críticas** no tienen respuesta única: son `abierta` con clave orientadora que se muestra después de responder ("una respuesta posible sería…"). Nunca marcar ✗ en ellas.
- Secuencia sugerida en tres días: Lección 3.A el primer día, 3.B el segundo, 3.C el tercero. No liberar las tres a la vez.
- Aviso antes de leer (mostrar una vez): *"Si alguna parte te hace sentir incómodo o triste, puedes parar, respirar y contarle a un adulto de tu casa. Leer sobre lo que pasó ayuda a entenderlo, pero no hay que hacerlo de afán."*

---

## Lección 3.A — Leo un texto informativo

### Saberes previos

**3.A.0** · tipo: `abierta`, se guarda para reutilizar al final
¿Qué crees tú que hace que la tierra tiemble? Escribe tu idea, aunque no estés seguro. Al final de la guía vas a volver a leerla.

### Explicación

El **TEXTO INFORMATIVO** sirve para explicar algo real. No inventa personajes ni historias: cuenta hechos, da datos y responde preguntas como qué, cuándo, dónde y por qué. Suele tener un título, párrafos organizados por temas y a veces cifras o fechas.

### TEXTO 1 — ¿POR QUÉ SE MUEVE LA TIERRA?

El suelo que pisamos parece firme y quieto, pero no lo es. La capa exterior de la Tierra está partida en pedazos enormes, como si fuera un rompecabezas gigante. Esos pedazos se llaman placas y se mueven todo el tiempo, muy despacio.

Colombia está justo encima del borde de dos de esas piezas. En el occidente del país, una placa que está bajo el océano Pacífico, llamada placa de Nazca, se mete poco a poco por debajo de la placa donde está América del Sur. Avanza unos sesenta milímetros cada año, más o menos lo que crecen tus uñas. Es tan lento que nadie lo siente.

El problema es que las placas no se deslizan suavemente: se traban. Durante muchos años se van apretando la una contra la otra y acumulan fuerza, como cuando doblamos una regla plástica sin soltarla. Un día la regla se libera de golpe y suelta toda esa fuerza de una sola vez. Eso es un sismo.

El lunes 10 de agosto de 2026, a las 7:34 de la mañana, ocurrió uno de esos movimientos. El Servicio Geológico Colombiano, que es la entidad encargada de estudiar el suelo del país, midió su tamaño en 7,4 y encontró que había empezado cerca del municipio de San José del Palmar, en el departamento del Chocó. El punto donde nació estaba muy profundo: a más de cien kilómetros bajo la superficie.

Aunque nació en el Chocó, se sintió lejísimos. En Pereira, en Cali, en Manizales, en Armenia, en Quibdó y hasta en Bogotá la gente sintió cómo se movía el piso. Eso pasa porque la energía viaja por dentro de la tierra en forma de ondas, parecidas a las que se forman cuando tiramos una piedra a un charco.

Después de un sismo grande siempre vienen otros más pequeños. Se llaman réplicas y son la manera en que la tierra termina de acomodarse. Pueden durar días o semanas. Son normales, aunque asusten.

Hay algo que los científicos repiten siempre: nadie en el mundo puede saber el día ni la hora exacta en que va a temblar. Ni en Colombia, ni en Japón, ni en Chile. Lo que sí podemos hacer es aprender qué hacer cuando ocurre. Por eso existen los simulacros, los planes familiares y las normas para construir casas más resistentes. Prepararse no evita los sismos, pero sí ayuda a que hagan mucho menos daño.

### Actividades

**3.A.1 — Preguntas literales** · tipo: `opcion_multiple` o `numerica`, se autocorrigen

| # | Pregunta | Respuesta |
|---|---|---|
| 1 | ¿Cómo se llama la placa que está debajo del océano Pacífico? | Placa de Nazca |
| 2 | ¿Qué día y a qué hora ocurrió el sismo del que habla el texto? | Lunes 10 de agosto de 2026, a las 7:34 de la mañana |
| 3 | ¿Cerca de qué municipio y en qué departamento empezó? | San José del Palmar, Chocó |
| 4 | ¿Cómo se llama la entidad que estudia el suelo de Colombia? | Servicio Geológico Colombiano |
| 5 | ¿Cómo se llaman los sismos pequeños que vienen después de uno grande? | Réplicas |
| 6 | Menciona tres ciudades donde se sintió el movimiento. | Pereira, Cali, Manizales, Armenia, Quibdó, Bogotá (cualquiera tres) |

*Distractores sugeridos para la #1: placa de Cocos · placa del Caribe · placa Suramericana.*

**3.A.2 — Preguntas inferenciales** · tipo: `abierta` con clave orientadora

| # | Pregunta | Una respuesta posible |
|---|---|---|
| 1 | ¿Por qué el texto compara las placas con un rompecabezas? ¿Qué se parece entre las dos cosas? | Porque son piezas grandes que encajan unas con otras y forman una superficie completa. |
| 2 | El texto dice que las placas avanzan "más o menos lo que crecen tus uñas". ¿Para qué crees que el autor usa esa comparación? | Para que entendamos con algo cotidiano qué tan lento es ese movimiento. |
| 3 | Si nadie puede saber cuándo va a temblar, ¿por qué entonces se hacen simulacros? | Porque no podemos controlar cuándo ocurre, pero sí podemos aprender qué hacer y hacerlo rápido y sin miedo. |
| 4 | ¿Por qué el sismo empezó en el Chocó pero también se sintió en Bogotá? | Porque la energía viaja por dentro de la tierra en forma de ondas que llegan muy lejos. |
| 5 | Según el texto, ¿las réplicas son peligrosas o son normales? Explica cómo lo supiste. | El texto dice que son normales y que asustan; lo supe porque explica que la tierra se está acomodando. |

**3.A.3 — Vocabulario en contexto** · tipo: `emparejar` o `abierta` con clave

| Palabra | Significado |
|---|---|
| placa | Pedazo grande de la capa exterior de la Tierra |
| acumular | Ir juntando algo poco a poco |
| superficie | La parte de afuera, lo que se ve por encima |
| ondas | Movimientos que viajan y se van repitiendo, como en el agua |
| réplica | Sismo más pequeño que ocurre después de uno grande |
| resistente | Que aguanta sin romperse |

---

## Lección 3.B — Leo un texto instructivo

### Saberes previos

**3.B.0** · tipo: `abierta`
Piensa en una receta de cocina o en las instrucciones de un juego. ¿En qué se parecen? ¿Qué pasaría si hicieras los pasos en desorden?

### Explicación

El **TEXTO INSTRUCTIVO** sirve para enseñar a hacer algo. Se reconoce porque tiene pasos numerados o con viñetas, usa verbos que ordenan (busca, escribe, guarda, avisa) y sigue un orden que no se puede cambiar. Ejemplos: una receta, el manual de un juguete, un plan de emergencia.

### TEXTO 2 — NUESTRO PLAN FAMILIAR EN TRES PASOS

*Cada familia necesita un plan. No es para tener miedo: es para tener claro qué hacer y no perder tiempo. Reúne a tu familia una tarde y sigan estos pasos.*

**PASO 1. Escojan el punto de encuentro.**

1. Salgan juntos a la calle y busquen un lugar abierto y cercano: un parque, una cancha, una esquina amplia.
2. Revisen que no tenga postes de luz, muros altos ni vidrios encima.
3. Escriban la dirección de ese lugar en un papel y péguenlo en la nevera.
4. Repitan en voz alta el nombre del lugar hasta que todos lo recuerden.

**PASO 2. Preparen la maleta de emergencia.**

1. Consigan un morral que no pese mucho y déjenlo cerca de la puerta.
2. Guarden dentro: agua, una linterna, pilas, una cobija, comida que no se dañe, papeles importantes en una bolsa plástica y los medicamentos que alguien de la casa necesite.
3. Agreguen algo tuyo que te dé tranquilidad: un juguete pequeño, un cuaderno, unos colores.
4. Revisen la maleta cada tres meses y cambien lo que ya esté vencido.

**PASO 3. Aprendan qué hacer durante el movimiento.**

1. Si estás adentro, quédate adentro. La mayoría de los golpes ocurren cuando la gente corre.
2. Agáchate, cúbrete la cabeza con los brazos y sostente de algo firme, debajo de una mesa o al lado de un muro interno.
3. Aléjate de ventanas, espejos y de todo lo que pueda caerse.
4. Cuando el movimiento pare, salgan con calma hacia el punto de encuentro que escogieron.
5. No usen el ascensor y no vuelvan a entrar a la casa hasta que un adulto revise que es seguro.

*Practiquen el plan una vez al mes. Al principio parecerá un juego; con el tiempo, el cuerpo lo aprende solo.*

### Actividades

**3.B.1 — Cazo verbos** · tipo: `seleccionar_en_texto` o `abierta`
Subraya en el Texto 2 los verbos que dan una orden y escribe cinco.
Clave (cualquiera de estos): salgan, busquen, revisen, escriban, repitan, consigan, guarden, agreguen, cambien, quédate, agáchate, cúbrete, sostente, aléjate, practiquen.

**3.B.2 — Ordeno los pasos** · tipo: `ordenar`, se autocorrige
Numera del 1 al 5 lo que debe hacerse durante un movimiento.

| Orden correcto | Paso |
|---|---|
| 1 | Agacharse y cubrirse la cabeza |
| 2 | Sostenerse de algo firme |
| 3 | Alejarse de las ventanas |
| 4 | Esperar a que el movimiento pare |
| 5 | Salir con calma hacia el punto de encuentro |

**3.B.3 — Escribo mi propio texto instructivo** · tipo: `abierta`, área larga
Escribe un texto instructivo de cuatro pasos titulado: **"Cómo calmarme cuando me pongo nervioso"**. Recuerda usar verbos que ordenen y numerar los pasos.
*Enlaza con la Lección 1.C de la sección Psicosocial.*

---

## Lección 3.C — Comparo los dos textos

### Saberes previos

**3.C.0** · tipo: `abierta`
Los dos textos hablan de sismos. Pero si tuvieras que escoger uno para un examen de ciencias y otro para pegar en la pared de tu casa, ¿cuál escogerías para cada cosa? ¿Por qué?

### Explicación

Dos textos pueden tratar el mismo tema y aun así ser distintos. Para compararlos nos fijamos en cuatro cosas: cuál es su **FINALIDAD** (para qué fue escrito), cuál es su **FORMATO** (cómo está organizado), qué **TIPO DE PALABRAS** usa y **A QUIÉN** va dirigido.

### Actividades

**3.C.1 — Cuadro comparativo** · tipo: `abierta` por celda, con clave al final

| | Texto 1: ¿Por qué se mueve la tierra? | Texto 2: Nuestro plan familiar en tres pasos |
|---|---|---|
| ¿Qué tipo de texto es? | Informativo | Instructivo |
| ¿Para qué fue escrito? | Para explicar por qué ocurren los sismos | Para enseñar qué hacer y cómo prepararse |
| ¿Cómo está organizado? | En párrafos, uno por idea | En pasos numerados, en orden |
| ¿Da datos o da órdenes? | Datos, fechas y cifras | Órdenes: verbos de acción |
| ¿Qué aprendí con él? | *(respuesta personal)* | *(respuesta personal)* |

**3.C.2 — Preguntas críticas** · tipo: `abierta`, sin corrección
Mostrar el mensaje: *"Aquí no hay una sola respuesta correcta. Lo importante es que expliques tu razón."*

1. El Texto 1 dice que prepararse "no evita los sismos, pero sí ayuda a que hagan mucho menos daño". ¿Estás de acuerdo? Explica por qué.
2. ¿Cuál de los dos textos te pareció más útil a ti y a tu familia en este momento? Justifica tu respuesta.
3. Si tuvieras que agregarle un paso más al Texto 2, ¿cuál agregarías y por qué?
4. ¿Qué le dirías a un niño más pequeño que te pregunta si va a volver a temblar? Escribe tu respuesta como si se la estuvieras diciendo.

> **Nota para la docente:** la pregunta 4 suele ser la más reveladora del estado emocional del grupo. Vale la pena leerla con atención en todas las entregas. Si es posible, marcar esa respuesta en el panel de la docente para revisión manual.

**3.C.3 — El resumen** · tipo: `abierta`, máximo 5 renglones
Recuerda los pasos: lee todo el texto, divídelo por párrafos, subraya la idea principal de cada uno y únelas con tus propias palabras. Escribe un resumen del Texto 1.

**3.C.4 — Vuelvo al principio** · tipo: `abierta`, mostrando arriba la respuesta guardada en 3.A.0
Lee lo que escribiste al comienzo sobre por qué tiembla la tierra. ¿Cambió tu idea? ¿En qué?
*Implementación: recuperar el valor de `3.A.0` y mostrarlo en una tarjeta con el rótulo "Esto escribiste antes de leer".*

### Enlaces

- Servicio Geológico Colombiano — https://www.sgc.gov.co
- El resumen (video) — https://www.youtube.com/watch?v=vuuagyKU55Y

---

# ANEXO — Esquema de datos sugerido

Solo si el sitio **no** tiene ya un esquema propio. Si lo tiene, adaptarse a él.

```json
{
  "seccion": "wellbeing",
  "titulo": "Hablemos de cómo nos sentimos",
  "autocorrige": false,
  "lecciones": [
    {
      "id": "1A",
      "titulo": "Mis emociones tienen nombre",
      "explicacion": ["párrafo 1", "párrafo 2"],
      "actividades": [
        {
          "id": "1A1",
          "tipo": "opcion_multiple",
          "enunciado": "¿Cómo te sientes hoy?",
          "opciones": ["Muy tranquilo/a", "Tranquilo/a", "Más o menos", "Nervioso/a", "Muy nervioso/a"],
          "respuesta": null,
          "permiteOmitir": true
        }
      ]
    }
  ]
}
```

Para matemáticas y lectura, los ítems corregibles llevan `respuesta` (string o `{cociente, residuo}`) y `pista` opcional.

---

# CHECKLIST DE ENTREGA

- [ ] Las tres páginas cargan su contenido y la barra de progreso avanza.
- [ ] La sección Psicosocial **nunca** muestra ✓ ni ✗ ni puntaje.
- [ ] Botón "Prefiero no responder" presente en todos los ítems psicosociales.
- [ ] Bloque de Línea Amiga 106 / 606 333 9610 visible al pie de la sección Psicosocial.
- [ ] Banner "Para la familia" al entrar a Psicosocial.
- [ ] Divisiones con dos campos (cociente y residuo) y comparación de ambos.
- [ ] Comparación numérica normaliza puntos de miles.
- [ ] El texto de lectura permanece accesible mientras se responden las preguntas, también en móvil.
- [ ] Preguntas inferenciales y críticas sin marca de error.
- [ ] `3.C.4` recupera y muestra la respuesta guardada en `3.A.0`.
- [ ] El widget de respiración respeta `prefers-reduced-motion` y no reproduce sonido automático.
- [ ] Sin imágenes de escombros, rescates ni cifras de víctimas en todo el sitio.
- [ ] Enlaces externos abren en pestaña nueva y funcionan.
- [ ] Probado en pantalla de celular (≤ 380 px de ancho).
