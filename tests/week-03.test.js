const fs = require('fs');
const path = require('path');

const base = path.join(process.cwd(), 'nivel-01-fundamentos', 'semana-03-responsive', 'solution');
const htmlPath = path.join(base, 'index.html');
const cssPath = path.join(base, 'styles.css');
const results = [];

function check(name, condition, help) {
  results.push({ name, passed: Boolean(condition), help });
}

if (!fs.existsSync(htmlPath) || !fs.existsSync(cssPath)) {
  console.error('\n❌ Faltan archivos de la Semana 3.');
  console.error(`Debes crear: ${htmlPath}`);
  console.error(`Debes crear: ${cssPath}\n`);
  process.exit(1);
}

const html = fs.readFileSync(htmlPath, 'utf8');
const css = fs.readFileSync(cssPath, 'utf8');

check('Existe meta viewport', /<meta\b[^>]*name=["']viewport["'][^>]*content=["'][^"']*width=device-width[^"']*["'][^>]*>/i.test(html), 'Configura correctamente <meta name="viewport" ...>.');
check('Existe al menos una media query', /@media\s*\([^\)]+\)\s*\{/i.test(css), 'Agrega al menos una regla @media.');
check('Se usa una unidad relativa', /:\s*[-\d.]+(?:%|rem|em|vw|vh)|clamp\s*\(/i.test(css), 'Usa %, rem, em, vw, vh o clamp().');
check('Se utiliza Flexbox o Grid', /display\s*:\s*(flex|grid)\s*;/i.test(css), 'Usa display: flex o display: grid.');
check('Las imágenes son responsivas', /img[^\{]*\{[\s\S]*?(max-width\s*:\s*100%|width\s*:\s*100%)[\s\S]*?\}/i.test(css), 'Agrega una regla para img con max-width: 100% o width: 100%.');
check('Hay un cambio dentro de una media query', /@media[\s\S]*?\{[\s\S]*?(flex-direction|grid-template-columns|display|gap|padding|margin|font-size|width)\s*:/i.test(css), 'Cambia layout, espaciado o tipografía dentro de @media.');
check('Se previene overflow horizontal en imágenes o contenedores', /(max-width\s*:\s*100%|box-sizing\s*:\s*border-box|overflow-x\s*:\s*(hidden|auto))/i.test(css), 'Usa max-width, box-sizing o control de overflow para evitar desbordes.');

console.log('\n🧪 Academy Desde Cero — Semana 3\n');
for (const result of results) {
  console.log(`${result.passed ? '✅' : '❌'} ${result.name}`);
  if (!result.passed) console.log(`   ↳ ${result.help}`);
}
const passed = results.filter(r => r.passed).length;
const failed = results.length - passed;
console.log(`\nResultado: ${passed}/${results.length} tests aprobados.`);
if (failed > 0) {
  console.error(`❌ Faltan ${failed} requisito(s) obligatorio(s).\n`);
  process.exit(1);
}
console.log('🎉 Semana 3 aprobada técnicamente. Nivel 1 listo para revisión.\n');
