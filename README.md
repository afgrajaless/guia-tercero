# Guía de Tercero

Guía interactiva para grado tercero con tres áreas: **comprensión lectora**, **matemáticas** y **psicosocial**.
Es un sitio estático (HTML, CSS y JavaScript sin dependencias) pensado para publicarse en GitHub Pages.

- Explicaciones cortas con ejemplos.
- Actividades que se revisan solas: opción múltiple, verdadero/falso, completar, unir parejas y ordenar.
- Progreso por área guardado en el navegador del estudiante (`localStorage`).
- Modo claro y oscuro, diseño responsive y navegación por teclado.

## Estructura

```
index.html            Portada con las tres áreas y el avance general
reading.html          Comprensión lectora
math.html             Matemáticas
wellbeing.html        Psicosocial

assets/css/
  tokens.css          Colores, tipografía y espaciados (design tokens)
  base.css            Reset, tipografía base y utilidades de layout
  components.css      Tarjetas, actividades, barras de progreso, etc.

assets/js/
  core.js             Registro de contenido, iconos y utilidades
  progress.js         Avance del estudiante en localStorage
  activities.js       Motor de actividades interactivas
  area.js             Arma la página de un área
  home.js             Arma la portada

data/
  reading.js          Contenido de comprensión lectora
  math.js             Contenido de matemáticas
  wellbeing.js        Contenido psicosocial

_local/               Scripts de desarrollo y pruebas (no se sube a origin)
```

## Cómo editar el contenido

Todo el contenido vive en `data/`. **No hace falta tocar HTML ni CSS para agregar lecciones.**

Cada archivo registra un área con sus unidades y lecciones:

```js
window.Guide.register('reading', {
  title: 'Comprensión lectora',
  kicker: 'Área 1',
  icon: 'book',            // book | numbers | heart
  href: 'reading.html',
  description: 'Texto que aparece en la tarjeta de la portada.',
  units: [
    {
      id: 'u1',
      title: 'Antes de leer',
      summary: 'Frase corta que describe la unidad.',
      lessons: [
        {
          id: 'l1',
          title: 'Título de la lección',
          goal: 'lo que el estudiante va a aprender.',
          blocks: [ /* ver abajo */ ]
        }
      ]
    }
  ]
});
```

Los `id` de unidad, lección y actividad deben ser únicos dentro de su área: con ellos se guarda el avance.
Si cambias un `id`, el estudiante pierde el avance de esa actividad.

### Bloques de contenido

| Tipo | Campos | Para qué sirve |
|---|---|---|
| `text` | `paragraphs: []` | Explicación en párrafos. Admite `**negrita**`. |
| `list` | `title`, `items: []` | Lista de pasos o ideas. |
| `callout` | `title`, `paragraphs: []` | Recuadro destacado ("Truco del lector", "Recuerda"). |
| `reading` | `title`, `paragraphs: []`, `source` | Texto de lectura con tipografía más grande. |
| `example` | `title`, `lines: []` | Ejemplo resuelto paso a paso. |
| `activity` | `activity: {}` | Actividad interactiva. |

### Tipos de actividad

```js
// Opción múltiple — answer es el índice de la opción correcta
{ id: 'a1', kind: 'choice', question: '¿...?',
  options: ['A', 'B', 'C'], answer: 1, hint: '...', explain: '...' }

// Verdadero o falso
{ id: 'a2', kind: 'truefalse', question: '...', answer: true, explain: '...' }

// Completar — cada {{respuesta}} es un espacio; usa | para alternativas
{ id: 'a3', kind: 'fill', question: 'Completa.',
  text: 'El sol {{sale|aparece}} por el {{oriente}}.', explain: '...' }

// Unir parejas — la columna derecha se baraja sola
{ id: 'a4', kind: 'match', question: 'Une cada palabra con su significado.',
  leftLabel: 'Palabra', rightLabel: 'Significado',
  pairs: [{ left: 'Veloz', right: 'Que va muy rápido' }] }

// Ordenar — items va en el orden CORRECTO; se baraja al mostrarse
{ id: 'a5', kind: 'order', question: 'Ordena los hechos.',
  items: ['Primero', 'Después', 'Al final'] }
```

`hint` se muestra cuando la respuesta es incorrecta y `explain` cuando es correcta. Ambos son opcionales.

Las respuestas de `fill` se comparan sin distinguir mayúsculas, tildes ni espacios sobrantes
(`BOGOTA` se acepta para `bogotá`). La `ñ` también se compara como `n`.

## Desarrollo local

Necesitas Node.js instalado. Desde la raíz del proyecto:

```bash
node _local/serve.js 4321      # abre http://localhost:4321
```

También puedes abrir `index.html` directamente con doble clic: el contenido se carga
como archivos `.js`, no por `fetch`, así que funciona sin servidor.

### Verificaciones

```bash
node _local/validate-content.js   # revisa la estructura de data/ (ids repetidos, respuestas fuera de rango, etc.)
node _local/build-pages.js        # regenera reading.html, math.html y wellbeing.html desde la plantilla común
```

En el navegador, con el servidor levantado:

- `http://localhost:4321/_local/test.html` — pruebas del motor de actividades y del progreso.
- `http://localhost:4321/_local/overflow-check.html` — revisa que ninguna página se desborde horizontalmente.

## Publicar en GitHub Pages

1. Sube el repositorio a GitHub.
2. En **Settings → Pages**, elige *Deploy from a branch*, rama `main` y carpeta `/ (root)`.
3. El archivo `.nojekyll` ya está incluido para que GitHub sirva los archivos tal cual.

La guía queda disponible en `https://<usuario>.github.io/<repositorio>/`.
