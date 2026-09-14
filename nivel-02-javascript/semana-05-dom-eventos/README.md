# Semana 5 — Arrays, objetos, DOM y eventos

## Contexto

Esta semana conectarás la lógica de JavaScript con una interfaz real utilizando arrays, objetos, DOM y eventos del usuario.

## Objetivos

Al finalizar la semana deberías poder:

- Crear y recorrer arrays.
- Leer y modificar propiedades de objetos.
- Utilizar `map`, `filter` y `find` de forma introductoria.
- Seleccionar y modificar elementos del DOM.
- Escuchar eventos con `addEventListener`.
- Separar datos, lógica y actualización visual.
- Depurar errores básicos de interacción.

## Starter

Utiliza el starter de la semana. Completa los `TODO` relacionados con estado, eventos y renderizado.

## Homework

Crea:

```text
nivel-02-javascript/semana-05-dom-eventos/solution/index.html
nivel-02-javascript/semana-05-dom-eventos/solution/app.js
```

Construye una lista de tareas interactiva.

### Requisitos obligatorios

- Mantener un array de tareas.
- Cada tarea debe tener `id`, `titulo` y `completada`.
- Crear `agregarTarea(titulo)`.
- Crear `obtenerPendientes(tareas)`.
- Crear `buscarTareaPorId(tareas, id)`.
- Renderizar las tareas en el DOM.
- Permitir agregar una tarea mediante formulario o botón.
- Permitir marcar una tarea como completada.
- Mostrar cuántas tareas están pendientes.

## ⭐ Challenge

Permite eliminar tareas.

## 🔥 Challenge avanzado

Agrega filtros: todas, pendientes y completadas.

## Tests locales

```bash
npm run test:week05
```

## Entrega

1. Sube tu solución a tu propio repositorio de GitHub.
2. Mantén commits descriptivos.
3. Envía el enlace al instructor.

## Criterios de evaluación

Se evaluará organización, claridad y que puedas explicar cómo viajan los datos desde el array hasta la interfaz y qué ocurre cuando se dispara un evento.
