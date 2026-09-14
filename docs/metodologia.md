# Metodología de clases — Academy Desde Cero

## Estructura del programa

- Duración: 8 semanas.
- Horas en vivo: 32.
- Frecuencia: 2 clases por semana.
- Duración por clase: 120 minutos.
- Carga en vivo semanal: 4 horas.

## Estructura recomendada de cada semana

### Clase A — Fundamentos y práctica guiada (120 min)

- 0–15 min: repaso, preguntas y conexión con la semana anterior.
- 15–40 min: concepto principal con ejemplos.
- 40–70 min: live coding del instructor.
- 70–100 min: ejercicio guiado con participación de alumnos.
- 100–115 min: preguntas, debugging y variaciones.
- 115–120 min: checkpoint y mini tarea entre sesiones.

### Clase B — Aplicación, code pairing y consolidación (120 min)

- 0–15 min: revisión de la mini tarea y dudas.
- 15–35 min: segundo bloque conceptual o ampliación del tema.
- 35–65 min: desarrollo aplicado sobre el proyecto de la semana.
- 65–95 min: code pairing.
- 95–110 min: ejecución local de tests, debugging y Code Review grupal.
- 110–120 min: explicación del homework, criterios de entrega y cierre.

## Code pairing

El code pairing debe tener dos roles:

- **Driver:** escribe el código y verbaliza lo que está haciendo.
- **Navigator:** revisa, pregunta, anticipa errores y propone el siguiente paso.

Cambiar roles cada 10–15 minutos.

El instructor puede formar parejas entre alumnos, hacer pairing con un alumno mientras el resto observa, proyectar una solución incompleta o introducir un bug deliberado para practicar debugging.

## Uso de IA

La IA se utiliza como herramienta profesional para investigar, depurar, generar tests, documentar y refactorizar, pero el alumno debe poder explicar, detectar errores, modificar la solución y defender sus decisiones.

## Tests

Los tests son una herramienta local de autoevaluación. No se ejecutan automáticamente en GitHub.

Flujo esperado:

1. El alumno desarrolla la tarea en su equipo.
2. Ejecuta el comando de tests de la semana en local.
3. Corrige hasta que todos los requisitos obligatorios pasen.
4. Sube su solución a su propio repositorio de GitHub.
5. Envía al instructor el enlace del repositorio para revisión.

Esto evita ruido de CI y hace que ejecutar, leer y corregir los tests sea responsabilidad del alumno.

## Homework

El homework debe extender lo trabajado en vivo, no introducir por primera vez un concepto central que no haya sido explicado.

Cada homework debe incluir objetivo, requisitos obligatorios, challenge opcional, tests locales, criterios de evaluación y forma de entrega.

## Entrega del alumno

El alumno debe mantener un repositorio propio para el programa o uno por proyecto, según indique el instructor. Debe usar commits descriptivos y, cuando corresponda, branches para practicar flujo profesional.

Antes de enviar el enlace:

- los tests locales deben pasar;
- el repositorio debe estar actualizado;
- el README debe explicar cómo ejecutar la solución cuando aplique;
- el alumno debe poder explicar el código durante el Code Review.

## Aprobación

Los tests validan requisitos objetivos. El instructor valida además comprensión, calidad del código, organización, capacidad de explicar decisiones, buen uso de Git y corrección de observaciones de Code Review.
