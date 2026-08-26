# Guía de Tercero

Guía de trabajo para grado **3°B** de la I.E. Pablo Sexto, sede Antonio José de Sucre.
**Semana del 1 al 4 de septiembre de 2026**, en modalidad virtual tras el sismo del 10 de agosto
(Directiva 009 de 2026, MinEducación). Docente: Lina Marcela Ortiz Zúñiga.

Sitio estático (HTML, CSS y JavaScript sin dependencias) publicado en GitHub Pages:
**https://afgrajaless.github.io/guia-tercero/**

## La semana

| Día | Área | Página |
|---|---|---|
| Martes 1 | Psicosocial — *Hablemos de cómo nos sentimos* | `wellbeing.html` |
| Miércoles 2 | Matemáticas — *Analizo, calculo, reparto* | `math.html` |
| Jueves 3 | Comprensión lectora — *Comparo textos* | `reading.html` |
| Viernes 4 | Aún por definir | tarjeta reservada en la portada |

## Dos reglas que rigen todo el sitio

1. **Las respuestas abiertas se escriben en el cuaderno**, no en el sitio. El sitio explica,
   propone la consigna y deja marcar "Ya lo escribí". La docente revisa el cuaderno físico.
   Solo se autocorrige lo que tiene una respuesta única: operaciones, preguntas literales,
   ordenar, unir y clasificar.
2. **La sección psicosocial no califica.** Ningún ítem muestra ✓ ni ✗ ni suma puntaje. Todos
   sus bloques ofrecen "Prefiero no responder", que completa el ítem sin escribir nada.
   Esto se declara con `grades: false` en `data/wellbeing.js` y el validador lo hace cumplir.

## Estructura

```
index.html            Agenda de la semana con el avance de cada día
wellbeing.html        Martes · Psicosocial
math.html             Miércoles · Matemáticas
reading.html          Jueves · Comprensión lectora

assets/css/
  tokens.css          Colores, tipografía y espaciados
  base.css            Reset, tipografía base y utilidades de layout
  components.css      Cabecera, tarjetas, actividades, progreso
  blocks.css          Bloques de contenido y panel del texto de lectura

assets/js/
  core.js             Registro de contenido, iconos y utilidades
  progress.js         Avance y datos guardados en localStorage
  activities.js       Motor de actividades (10 tipos)
  figures.js          Diagramas SVG generados por parámetros
  blocks.js           Renderizado de los bloques de contenido
  area.js             Arma la página de un día
  home.js             Arma la agenda de la portada

data/
  wellbeing.js        Contenido del martes
  math.js             Contenido del miércoles
  reading.js          Contenido del jueves

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
  day: { label: 'Miércoles 2 de septiembre', short: 'Miércoles 2' },
  description: '...',
  learning: '...',              // el aprendizaje del DBA
  notice: { title, paragraphs },// aviso que se puede cerrar
  banner: { title, paragraphs },// banner para la familia
  help:   { title, lines },     // bloque fijo al pie
  units: [ { id, title, summary, lessons: [ { id, code, title, goal, blocks: [] } ] } ]
});
```

Los `id` de unidad, lección, actividad y bloque deben ser únicos dentro del área: con ellos se
guarda el avance. Si cambias un `id`, el estudiante pierde el avance de ese ítem.

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
| `adult` | `title`, `paragraphs[]`, `items[]` | Nota para el docente o acudiente, colapsada. |
| `notebook` | `id`, `title`, `intro`, `items[]`, `key[]`, `optOut` | **Consigna para el cuaderno.** `key` se revela al marcar. |
| `checklist` | `id`, `title`, `items[]` | Casillas persistentes, sin puntaje. |
| `breathing` | `id`, `cycles`, `closing` | Guía animada de respiración cuadrada. |
| `activity` | `activity: {}` | Actividad interactiva. |

### Tipos de actividad

```js
{ kind: 'choice',      question, options[], answer: 1, hint, explain }
{ kind: 'truefalse',   question, answer: true, explain }
{ kind: 'fill',        question, text: 'El sol {{sale|aparece}} temprano.' }
{ kind: 'match',       question, leftLabel, rightLabel, pairs: [{left, right}] }
{ kind: 'order',       question, items: [] }          // en el orden CORRECTO; se baraja solo
{ kind: 'numeric',     question, layout: 'stacked',
                       items: [{ text, answer, unit }, { text, options: ['<','>','='], answer: '<' }] }
{ kind: 'numericPair', question, operations: [{ text: '9.135 ÷ 35', quotient: 261, remainder: 0 }] }
{ kind: 'mood',        question, options: [] }        // sin respuesta correcta, guarda historial
{ kind: 'classify',    question, soft: true, groups: [{id, title, tone}], cards: [{text, group}] }
{ kind: 'practice',    question, generator: 'times', count: 5, options: { table: 7 } }
```

- `soft: true` en `classify` invita a repensar la tarjeta mal ubicada, sin marcarla como error.
  Sin `soft`, cualquier ubicación se acepta.
- Los números se comparan ignorando los puntos de miles: `424.002` y `424002` valen igual.
- El texto se compara sin distinguir mayúsculas, tildes ni espacios sobrantes.

## Desarrollo local

Necesitas Node.js. Desde la raíz del proyecto:

```bash
node _local/serve.js 4321      # abre http://localhost:4321
```

También funciona abriendo `index.html` con doble clic: el contenido son archivos `.js`, no `fetch`.

### Verificaciones antes de publicar

```bash
node _local/validate-content.js   # estructura, ids repetidos y RECALCULA toda la aritmética
node _local/build-pages.js        # regenera las tres páginas desde la plantilla común
```

Con el servidor levantado:

- `/_local/test.html` — 98 pruebas del motor de actividades, bloques y progreso.
- `/_local/overflow-check.html` — las 4 páginas a 360, 390, 768 y 1280 px sin desbordamiento horizontal.
- `/_local/find-overflow.html` — diagnostica qué elemento desborda, si alguno lo hace.

> **Nota sobre desbordamientos.** Es el error que más ha aparecido en este proyecto. La causa
> siempre es la misma: un hijo de `flex` o `grid` con `min-width: auto` que no puede encogerse
> (rieles, tablas, campos `input`), o un `flex-wrap: wrap` combinado con `flex-direction: column`,
> que envuelve creando columnas nuevas hacia el lado. Ante cualquier cambio de layout, corre
> `overflow-check` antes de publicar.

## Publicar

```bash
git add -A && git commit -m "..." && git push
```

GitHub Pages reconstruye solo en aproximadamente un minuto.

## Criterios de contenido que no se cambian sin consultar a la docente

- No se usan cifras de personas fallecidas, heridas ni de edificios colapsados en ningún
  enunciado. Los contextos de ayuda y reconstrucción sí se conservan.
- No se incluyen imágenes de escombros ni de rescates.
- Los cuentos de apoyo se **enlazan**, no se copian: tienen condiciones de uso propias.
- El bloque de Línea Amiga 106 permanece siempre visible al pie de la sección psicosocial.
