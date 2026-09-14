# Semana 6 — Asincronía, fetch, JSON y APIs

## Contexto

Esta semana aprenderás a obtener información externa mediante una API pública y a representar estados de carga, éxito y error en la interfaz.

## Objetivos

Al finalizar la semana deberías poder:

- Explicar de forma básica qué es una API.
- Comprender petición, respuesta, endpoint y JSON.
- Utilizar `fetch`.
- Trabajar con `async` y `await`.
- Manejar errores con `try/catch`.
- Transformar una respuesta JSON.
- Mostrar estados de carga, éxito y error.
- Renderizar datos remotos en el DOM.

## Starter

Utiliza el starter de la semana. Debes completar el flujo de petición, validación, conversión a JSON y renderizado.

## Homework

Crea:

```text
nivel-02-javascript/semana-06-apis/solution/index.html
nivel-02-javascript/semana-06-apis/solution/app.js
```

Construye una aplicación que consuma una API pública.

### Requisitos obligatorios

- Utilizar `fetch`.
- Utilizar `async/await`.
- Crear una función `obtenerDatos(url)` que devuelva el JSON de una respuesta válida.
- Verificar `response.ok`.
- Manejar errores con `try/catch`.
- Mostrar un estado de carga.
- Mostrar un mensaje visible si ocurre un error.
- Renderizar al menos 5 resultados cuando existan suficientes datos.
- Mostrar información útil, no el JSON completo.

## ⭐ Challenge

Agrega búsqueda o filtrado de resultados.

## 🔥 Challenge avanzado

Implementa un estado vacío y evita peticiones innecesarias durante una búsqueda.

## Tests locales

```bash
npm run test:week06
```

## Entrega

1. Sube la solución a tu propio repositorio de GitHub.
2. Agrega un README breve indicando qué API utilizaste y cómo ejecutar el proyecto.
3. Envía el enlace del repositorio al instructor.

## Criterios de evaluación

Debes poder explicar qué ocurre desde que disparas la petición hasta que la información aparece en pantalla, incluyendo qué pasa si la petición falla.
