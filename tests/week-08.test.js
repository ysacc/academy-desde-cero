const fs = require('fs');
const path = require('path');

const projectDir = path.join(process.cwd(), 'nivel-03-proyecto', 'semana-08-review-deploy', 'solution');
const results = [];
const check = (name, condition, help) => results.push({ name, passed: Boolean(condition), help });

if (!fs.existsSync(projectDir)) {
  console.error(`❌ No se encontró la carpeta final: ${projectDir}`);
  process.exit(1);
}

const files = fs.readdirSync(projectDir, { recursive: true });
const readFile = (name) => {
  const full = path.join(projectDir, name);
  return fs.existsSync(full) ? fs.readFileSync(full, 'utf8') : '';
};

const readmeFile = files.find((file) => /(^|\/)README\.md$/i.test(String(file)));
const readme = readmeFile ? readFile(String(readmeFile)) : '';

check('Existe README.md', Boolean(readmeFile), 'Agrega README.md al proyecto final.');
check('README incluye descripción', /(descrip|acerca|about)/i.test(readme), 'Incluye una descripción clara del proyecto.');
check('README menciona tecnologías', /(tecnolog|stack|html|css|javascript)/i.test(readme), 'Documenta las tecnologías utilizadas.');
check('README explica cómo ejecutar', /(ejecut|instal|run|abrir|uso)/i.test(readme), 'Explica cómo ejecutar o abrir el proyecto.');
check('README menciona la API', /(api|endpoint)/i.test(readme), 'Indica qué API utiliza el proyecto.');
check('README incluye enlace de deploy', /https?:\/\/[^\s)]+/i.test(readme) && /(deploy|demo|sitio|live|producci[oó]n)/i.test(readme), 'Incluye el enlace público del proyecto desplegado.');

console.log('\n🧪 Academy Desde Cero — Semana 8\n');
for (const result of results) {
  console.log(`${result.passed ? '✅' : '❌'} ${result.name}`);
  if (!result.passed) console.log(`   ↳ ${result.help}`);
}
const failed = results.filter((r) => !r.passed).length;
console.log(`\nResultado: ${results.length - failed}/${results.length} tests aprobados.`);
if (failed) process.exit(1);
console.log('🎉 Documentación final validada localmente. Realiza ahora la revisión manual del deploy antes de enviar los enlaces.');
