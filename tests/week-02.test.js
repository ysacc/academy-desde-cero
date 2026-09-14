const fs = require('fs');
const path = require('path');

const base = path.join(process.cwd(), 'nivel-01-fundamentos', 'semana-02-css', 'solution');
const htmlPath = path.join(base, 'index.html');
const cssPath = path.join(base, 'styles.css');
const results = [];

function check(name, condition, help) {
  results.push({ name, passed: Boolean(condition), help });
}

if (!fs.existsSync(htmlPath) || !fs.existsSync(cssPath)) {
  console.error('\n❌ Faltan archivos de la Semana 2.');
  console.error(`Debes crear: ${htmlPath}`);
  console.error(`Debes crear: ${cssPath}\n`);
  process.exit(1);
}

const html = fs.readFileSync(htmlPath, 'utf8');
const css = fs.readFileSync(cssPath, 'utf8');

check('HTML enlaza styles.css', /<link\b(?=[^>]*rel=["']stylesheet["'])(?=[^>]*href=["'][^"']*styles\.css["'])[^>]*>/i.test(html), 'Agrega <link rel="stylesheet" href="styles.css"> dentro de <head>.');
check('Se aplican estilos al body', /body\s*\{[\s\S]*?\}/i.test(css), 'Agrega una regla CSS para body.');
check('Se define una familia tipográfica', /font-family\s*:/i.test(css), 'Usa font-family en al menos una regla.');
const classes = new Set([...css.matchAll(/\.([a-zA-Z_-][\w-]*)\s*[,{]/g)].map(m => m[1]));
check('Existen al menos 3 clases CSS', classes.size >= 3, `Se encontraron ${classes.size}. Crea al menos 3 clases distintas.`);
check('Se usa margin o padding', /(margin|padding)(-[a-z]+)?\s*:/i.test(css), 'Aplica margin o padding.');
check('Se usa borde, radio o sombra', /(border(?:-[a-z]+)?|border-radius|box-shadow)\s*:/i.test(css), 'Aplica border, border-radius o box-shadow.');
check('Los enlaces tienen estilos', /a(?:\s*[:,{]|\.[\w-]+\s*\{)[\s\S]*?\}/i.test(css), 'Agrega una regla para enlaces.');
check('El botón tiene estilos', /(button|input\s*\[?[^\{]*type[^\{]*submit)[^\{]*\{[\s\S]*?\}/i.test(css), 'Agrega una regla CSS para el botón de envío.');
const inlineStyles = [...html.matchAll(/\sstyle=["'][^"']+["']/gi)].length;
check('No depende de estilos inline', inlineStyles <= 1, `Se encontraron ${inlineStyles} estilos inline. Mueve los estilos al archivo CSS.`);

console.log('\n🧪 Academy Desde Cero — Semana 2\n');
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
console.log('🎉 Semana 2 aprobada técnicamente. Ya puedes abrir tu Pull Request.\n');
