const fs = require('fs');
const path = require('path');

const base = path.join(process.cwd(), 'nivel-02-javascript', 'semana-05-dom-eventos', 'solution');
const htmlPath = path.join(base, 'index.html');
const jsPath = path.join(base, 'app.js');

const results = [];
const check = (name, condition, help) => results.push({ name, passed: Boolean(condition), help });

if (!fs.existsSync(htmlPath) || !fs.existsSync(jsPath)) {
  console.error('❌ Debes crear solution/index.html y solution/app.js');
  process.exit(1);
}

const html = fs.readFileSync(htmlPath, 'utf8');
const js = fs.readFileSync(jsPath, 'utf8');

check('Existe un formulario o control para agregar tareas', /<form\b|<button\b/i.test(html), 'Agrega un formulario o botón para crear tareas.');
check('Existe un contenedor para renderizar tareas', /(id|class)=["'][^"']*(task|tarea|list|lista)[^"']*["']/i.test(html), 'Crea un contenedor identificable para la lista.');
check('Existe un contador o zona para pendientes', /(pendient|contador|count)/i.test(html + js), 'Agrega una zona para mostrar tareas pendientes.');
check('Existe un array de tareas', /(?:const|let)\s+\w*tareas?\w*\s*=\s*\[/i.test(js), 'Mantén las tareas en un array.');
check('Existe agregarTarea()', /function\s+agregarTarea\s*\(|const\s+agregarTarea\s*=|let\s+agregarTarea\s*=/i.test(js), 'Implementa agregarTarea(titulo).');
check('Existe obtenerPendientes()', /function\s+obtenerPendientes\s*\(|const\s+obtenerPendientes\s*=|let\s+obtenerPendientes\s*=/i.test(js), 'Implementa obtenerPendientes(tareas).');
check('Existe buscarTareaPorId()', /function\s+buscarTareaPorId\s*\(|const\s+buscarTareaPorId\s*=|let\s+buscarTareaPorId\s*=/i.test(js), 'Implementa buscarTareaPorId(tareas, id).');
check('Se seleccionan elementos del DOM', /document\.(querySelector|getElementById|querySelectorAll)/.test(js), 'Usa una API del DOM para seleccionar elementos.');
check('Se registran eventos', /addEventListener\s*\(/.test(js), 'Usa addEventListener para interacciones.');
check('Se renderiza contenido dinámicamente', /(innerHTML|textContent|createElement|appendChild|append)\b/.test(js), 'Renderiza las tareas desde JavaScript.');
check('Se contempla completar tareas', /(completad|completed|toggle)/i.test(js), 'Implementa la acción de marcar una tarea como completada.');

console.log('\n🧪 Academy Desde Cero — Semana 5\n');
for (const result of results) {
  console.log(`${result.passed ? '✅' : '❌'} ${result.name}`);
  if (!result.passed) console.log(`   ↳ ${result.help}`);
}

const failed = results.filter((r) => !r.passed).length;
console.log(`\nResultado: ${results.length - failed}/${results.length} tests aprobados.`);
if (failed) process.exit(1);
console.log('🎉 Semana 5 aprobada localmente. Revisa el comportamiento manualmente antes de subir tu repositorio.');
