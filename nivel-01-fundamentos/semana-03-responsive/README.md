# Semana 3 — Responsive, Flexbox y Grid

## Contexto

Tu interfaz ya tiene estilos, pero ahora debe adaptarse correctamente a distintos tamaños de pantalla. Esta semana trabajarás con unidades relativas, Flexbox, Grid y media queries.

## Objetivos

Al finalizar la semana deberías poder:

- Explicar qué significa responsive design.
- Comprender el propósito de `meta viewport`.
- Utilizar unidades relativas.
- Construir layouts con Flexbox y Grid.
- Aplicar media queries.
- Hacer imágenes fluidas.
- Detectar y corregir overflow horizontal.
- Probar distintos tamaños con DevTools.

## Starter

Utiliza el starter como base. No está terminado: debes completar el comportamiento responsive y justificar tus decisiones de layout.

## Homework

Crea:

```text
nivel-01-fundamentos/semana-03-responsive/solution/index.html
nivel-01-fundamentos/semana-03-responsive/solution/styles.css
```

### Requisitos obligatorios

- Mantener `meta viewport` correctamente configurado.
- Usar al menos una media query con `@media`.
- Usar al menos una unidad relativa como `%`, `rem`, `em`, `vw` o `clamp()`.
- Utilizar Flexbox o Grid.
- Hacer imágenes responsivas.
- Definir al menos un cambio de layout o espaciado para pantallas pequeñas.
- Evitar overflow horizontal provocado por el diseño.

## ⭐ Challenge

Implementar una navegación que cambie de distribución entre escritorio y móvil.

## 🔥 Challenge avanzado

- Usar `clamp()` para tipografía o espaciado fluido.
- Agregar una segunda media query.
- Utilizar tanto Flexbox como Grid donde tenga sentido.

## Tests locales

Prueba visualmente varios tamaños y luego ejecuta:

```bash
npm run test:week03
```

## Entrega

1. Sube tu solución a tu propio repositorio de GitHub.
2. Incluye commits descriptivos.
3. Envía al instructor el enlace del repositorio.

## Criterios de evaluación

- Tests obligatorios en verde.
- Diseño usable en móvil y escritorio.
- Sin hacks evidentes para ocultar errores.
- Puedes explicar tu breakpoint y decisiones de layout.
