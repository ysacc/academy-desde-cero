const fs = require('fs');
const path = require('path');

const projectDir = path.join(process.cwd(), 'nivel-03-proyecto', 'semana-07-proyecto-final', 'solution');
const results = [];
const check = (name, condition, help) => results.push({ name, passed: Boolean(condition), help });

if (!fs.existsSync(projectDir)) {
  console.error(`❌ No se encontró la carpeta del proyecto: ${projectDir}`);
  process.exit(1);
}

const files = fs.readdirSync(projectDir, { recursive: true });
const has = (pattern) => files.some((file) => pattern.test(String(file)));

check('Existe index.html', has(/(^|\/)index\.html$/i), 'Crea un index.html para la aplicación.');
check('Existe al menos un archivo CSS', has(/\.css$/i), 'Agrega una hoja de estilos CSS.');
check('Existe al menos un archivo JavaScript', has(/\.js$/i), 'Agrega JavaScript para la lógica de la aplicación.');
check('Existe README.md', has(/(^|\/)README\.md$/i), 'Documenta el proyecto con un README.md.');

let combined = '';
for (const file of files) {
  const full = path.join(projectDir, String(file));
  if (fs.existsSync(full) && fs.statSync(full).isFile() && /\.(html|css|js|md)$/i.test(String(file))) {
    combined += '\n' + fs.readFileSync(full, 'utf8');
  }
}

check('El proyecto consume una API con fetch()', /\bfetch\s*\(/.test(combined), 'El proyecto final debe consumir una API pública.');
check('Existe manejo asincrónico', /\basync\b/.test(combined) && /\bawait\b/.test(combined), 'Usa async/await para el consumo de datos.');
check('Existe manejo de errores', /try\s*\{[\s\S]*?catch\s*\(/.test(combined), 'Maneja errores de red o respuesta.');
check('Existe responsive design', /@media\b/.test(combined), 'Agrega al menos una media query.');
check('Existe alguna interacción', /addEventListener\s*\(/.test(combined), 'Agrega al menos una interacción del usuario.');

console.log('\n🧪 Academy Desde Cero — Semana 7\n');
for (const result of results) {
  console.log(`${result.passed ? '✅' : '❌'} ${result.name}`);
  if (!result.passed) console.log(`   ↳ ${result.help}`);
}
const failed = results.filter((r) => !r.passed).length;
console.log(`\nResultado: ${results.length - failed}/${results.length} tests aprobados.`);
if (failed) process.exit(1);
console.log('🎉 Semana 7 aprobada localmente. El proyecto queda listo para Code Review humano.');
