const fs = require('fs');
const path = require('path');

const base = path.join(process.cwd(), 'nivel-02-javascript', 'semana-06-apis', 'solution');
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

check('Existe una función obtenerDatos()', /(?:async\s+function\s+obtenerDatos\s*\(|(?:const|let)\s+obtenerDatos\s*=\s*async)/i.test(js), 'Crea una función async obtenerDatos(url).');
check('Se utiliza fetch()', /\bfetch\s*\(/.test(js), 'Usa fetch para consultar la API.');
check('Se utiliza async/await', /\basync\b/.test(js) && /\bawait\b/.test(js), 'Usa async y await en el flujo asincrónico.');
check('Se verifica response.ok', /\.ok\b/.test(js), 'Valida response.ok antes de procesar una respuesta.');
check('Se procesa JSON', /\.json\s*\(/.test(js), 'Convierte la respuesta usando response.json().');
check('Existe manejo de errores', /try\s*\{[\s\S]*?catch\s*\(/.test(js), 'Usa try/catch en el flujo de consumo.');
check('Existe estado de carga', /(cargando|loading)/i.test(html + js), 'Muestra un estado de carga al usuario.');
check('Existe estado de error visible', /(error|fall[oó]|no se pudo)/i.test(html + js), 'Muestra un mensaje de error visible.');
check('Se renderizan datos en el DOM', /(innerHTML|textContent|createElement|appendChild|append)\b/.test(js), 'Renderiza resultados desde JavaScript.');
check('Existe un contenedor de resultados', /(id|class)=["'][^"']*(result|resultado|list|lista|card|cards)[^"']*["']/i.test(html), 'Crea un contenedor identificable para los resultados.');

console.log('\n🧪 Academy Desde Cero — Semana 6\n');
for (const result of results) {
  console.log(`${result.passed ? '✅' : '❌'} ${result.name}`);
  if (!result.passed) console.log(`   ↳ ${result.help}`);
}

const failed = results.filter((r) => !r.passed).length;
console.log(`\nResultado: ${results.length - failed}/${results.length} tests aprobados.`);
if (failed) process.exit(1);
console.log('🎉 Semana 6 aprobada localmente. Prueba también manualmente estados de carga, éxito y error antes de subir tu repositorio.');
