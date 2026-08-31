# Guía de Tercero

Guía de trabajo para grado **3°A** de la I.E. Pablo Sexto, sede Antonio José de Sucre.
Tres secciones para trabajar en casa, sin fechas ni calendario. Docente: profesora Ruby.

Sitio estático (HTML, CSS y JavaScript sin dependencias) publicado en GitHub Pages:
**https://afgrajaless.github.io/guia-tercero/**

## Las tres secciones

| # | Área | Página |
|---|---|---|
| 1 | Emociones — *Hablemos de cómo nos sentimos* | `wellbeing.html` |
| 2 | Matemáticas — *Analizo, calculo, reparto* | `math.html` |
| 3 | Comprensión lectora — *Comparo textos* | `reading.html` |

El contenido habla de emociones cotidianas, autocontrol y hábitos. **No se apoya en ningún
suceso concreto ni en ninguna fecha**, y está calibrado para 7 a 9 años.

## Tres reglas que rigen todo el sitio

1. **Todo se resuelve en el cuaderno.** El sitio explica, muestra el ejemplo y deja la consigna;
   el estudiante copia el enunciado y lo resuelve en su cuaderno. **No hay nada que responder en
   la página:** ni selección múltiple, ni campos de texto, ni tarjetas que arrastrar, ni casillas
   que marcar. Tampoco hay avance guardado, porcentajes ni puntaje. La profesora Ruby revisa el cuaderno
   físico.
2. **Las respuestas van al final de la sección.** Cada página cierra con el solucionario
   **"Respuestas de esta sección"**, con una entrada por actividad. El estudiante resuelve primero, luego
   compara y pasa también la respuesta al cuaderno. Cada entrada enlaza de vuelta a su consigna.
3. **La sección psicosocial no califica.** Ninguna de sus actividades tiene respuesta correcta.
   Su bloque de cierre no se llama "Respuestas" sino **"Para comparar en familia"**, y solo trae
   la clave de dos actividades —los dos círculos y lo que sí ayuda—, como excusa para conversarlas
   con un adulto.
   Esto se declara con `grades: false` en `data/wellbeing.js`.

La única parte que se usa en pantalla es la **respiración cuadrada** de la Sección 1: una animación
que marca el ritmo de la respiración. No pide respuestas ni guarda nada.

## Estructura

```
index.html            Portada con las tres secciones
wellbeing.html        Sección 1 · Emociones
math.html             Sección 2 · Matemáticas
reading.html          Sección 3 · Comprensión lectora

assets/css/
  tokens.css          Colores, tipografía y espaciados
  base.css            Reset, tipografía base y utilidades de layout
  components.css      Cabecera, tarjetas, lecciones, índice, solucionario
  blocks.css          Bloques de contenido y panel de los textos de lectura
  print.css           Versión imprimible (media="print")

assets/js/
  core.js             Registro de contenido, iconos y utilidades
  figures.js          Diagramas SVG generados por parámetros
  blocks.js           Renderizado de los bloques de contenido
  area.js             Arma la página de una sección, con su índice y su solucionario
  home.js             Arma la agenda de la portada

data/
  wellbeing.js        Contenido de la Sección 1
  math.js             Contenido de la Sección 2
  reading.js          Contenido de la Sección 3

CONTENIDO_GUIA_TERCERO.md   Documento fuente del contenido
_local/                     Scripts de desarrollo y pruebas (no se sube a origin)
```

## Cómo editar el contenido

Todo vive en `data/`. **No hace falta tocar HTML ni CSS.**

```js
window.Guide.register('math', {
  title: 'Analizo, calculo, reparto',
  short: 'Matemáticas',
  icon: 'numbers',              // book | numbers | heart | compass
  href: 'math.html',
  grades: false,                // opcional: la sección no califica
  section: { number: 2, label: 'Sección 2', short: 'Sección 2' },
  description: '...',
  learning: '...',              // el aprendizaje del DBA
  notice: { title, paragraphs },// aviso que se puede cerrar
  banner: { title, paragraphs },// banner para la familia
  help:   { title, lines },     // bloque fijo al pie
  units: [ { id, title, summary, lessons: [ { id, code, title, goal, blocks: [] } ] } ]
});
```

Los `id` de unidad, lección y consigna deben ser únicos dentro del área: con el id de la consigna
se arma el ancla que la enlaza con su respuesta en el solucionario.

### Bloques de contenido

| Tipo | Campos | Para qué sirve |
|---|---|---|
| `text` | `paragraphs[]` | Explicación. Admite `**negrita**`. |
| `list` | `title`, `items[]`, `ordered` | Lista de ideas o de pasos numerados. |
| `callout` | `title`, `paragraphs[]` | Recuadro destacado. |
| `reading` | `title`, `lead`, `paragraphs[]`, `source` | Texto de lectura. Se pone también en el panel flotante. |
| `example` | `title`, `lines[]` | Ejemplo resuelto. |
| `table` | `title`, `headers[]`, `rows[][]`, `note` | Tabla (posicional, comparativa). |
| `steps` | `title`, `lines[]`, `note` | "Ver el procedimiento", desplegable. |
| `links` | `title`, `items[{label, href, note}]` | Enlaces externos, abren en pestaña nueva. |
| `figure` | `figure`, `alt`, + parámetros | Diagrama SVG: `numberLine`, `fraction`, `shape`, `pictogram`. |
| `adult` | `title`, `paragraphs[]`, `items[]` | Nota para la profesora o el acudiente, colapsada. |
| `notebook` | ver abajo | **La actividad.** Consigna que se copia al cuaderno. |
| `breathing` | `id`, `cycles`, `closing` | Guía animada de respiración cuadrada. |

### La consigna de cuaderno

Es el único tipo de actividad que existe. Todo lo que antes se respondía en pantalla —selección
múltiple, unir, ordenar, clasificar, operaciones— hoy es una consigna de estas.

```js
{
  type: 'notebook',
  id: '2B1',                    // único en el área; con él se arma el ancla
  title: 'Adiciones',
  intro: 'Copia cada adición en tu cuaderno...',
  items: ['234.567 + 189.435', '405.812 + 97.649'],
  ordered: false,               // opcional: lista con viñeta en vez de numerada
  note: 'Si algo no quieres responderlo, déjalo en blanco.',   // opcional, en cursiva
  key: ['234.567 + 189.435 = 424.002', '405.812 + 97.649 = 503.461'],
  keyNote: 'Revisa lo que llevabas en cada columna.'           // opcional
}
```

- **`key` no se dibuja junto a la consigna.** `area.js` recoge todas las `key` del día y las pinta
  al final, en el solucionario. La consigna solo muestra un enlace hacia allá.
- Si la consigna va numerada (`ordered` distinto de `false`) y tiene más de un punto, **`items` y
  `key` deben tener el mismo largo**: así la respuesta 3 corresponde al ejercicio 3. El validador
  lo hace cumplir.
- Sin `key`, la consigna es abierta y no aparece en el solucionario. Es lo correcto para las
  preguntas de opinión y para todo lo personal.
- Formato de las respuestas que el validador sabe recalcular:
  - `234.567 + 189.435 = 424.002` (suma, resta, multiplicación, división)
  - `347.205 = 300.000 + 40.000 + 7.000 + 200 + 0 + 5` (descomposición)
  - `348.912 < 348.921` (comparación)
  - `9.135 ÷ 35 → cociente 261, residuo 0` (división con residuo)

## Desarrollo local

Necesitas Node.js. Desde la raíz del proyecto:

```bash
node _local/serve.js 4321      # abre http://localhost:4321
```

También funciona abriendo `index.html` con doble clic: el contenido son archivos `.js`, no `fetch`.

### Verificaciones antes de publicar

```bash
node _local/validate-content.js   # estructura, ids repetidos y RECALCULA toda la aritmética
node _local/run-tests.js          # corre las pruebas de test.html sin abrir el navegador
node _local/build-pages.js        # regenera las tres páginas desde la plantilla común
```

`run-tests.js` necesita `jsdom`, que se instala una sola vez con `cd _local && npm install jsdom`.
La carpeta `_local/` está en `.gitignore`, así que no se sube.

Con el servidor levantado:

- `/_local/test.html` — las mismas pruebas, en el navegador de verdad.
- `/_local/overflow-check.html` — las 4 páginas a 360, 390, 768 y 1280 px sin desbordamiento horizontal.
- `/_local/find-overflow.html` — diagnostica qué elemento desborda, si alguno lo hace.

> **Nota sobre desbordamientos.** Fue el error que más apareció en este proyecto, y su causa era
> siempre la misma: un hijo de `flex` o `grid` con `min-width: auto` que no podía encogerse —casi
> siempre un `input`—. Al quitar las actividades interactivas desaparecieron todos los campos de
> formulario del sitio, así que el riesgo bajó mucho. Aun así, ante cualquier cambio de layout,
> corre `overflow-check` antes de publicar.

## Imprimir

`print.css` se carga con `media="print"` y prepara una versión en papel: quita la navegación, el
índice y el panel de los textos, abre los desplegables para que el procedimiento quede visible,
imprime cada unidad y el solucionario en su propia hoja, y evita que una consigna se parta entre
dos páginas. Sirve para quien no tiene conexión estable en casa.

## Publicar

```bash
git add -A && git commit -m "..." && git push
```

GitHub Pages reconstruye solo en aproximadamente un minuto.

## Criterios de contenido que no se cambian sin consultar a la profesora Ruby

- Los enunciados y los textos hablan de situaciones cotidianas. **Ninguno se apoya en sucesos
  difíciles, fechas concretas ni contextos que puedan angustiar a un niño de 7 a 9 años.**
- Los cuentos de apoyo se **enlazan**, no se copian: tienen condiciones de uso propias. Solo se
  enlazan fuentes institucionales o del propio editor, nunca copias sueltas de libros con derechos.
  Cada enlace se verifica antes de publicar.
- El bloque de Línea Amiga 106 permanece siempre visible al pie de la sección psicosocial.
- En la sección psicosocial no se agregan consignas con `key` que impliquen respuesta correcta.
  La única que la tiene es la de los dos círculos, y su clave está redactada para conversar,
  no para corregir.
