const fs = require('fs');
const path = require('path');

const filePath = path.join(
  process.cwd(),
  'nivel-01-fundamentos',
  'semana-01-html',
  'solution',
  'index.html'
);

const results = [];

function check(name, condition, help) {
  results.push({ name, passed: Boolean(condition), help });
}

function countMatches(content, regex) {
  return [...content.matchAll(regex)].length;
}

if (!fs.existsSync(filePath)) {
  console.error('\n❌ No se encontró la solución de la Semana 1.');
  console.error(`Crea el archivo: ${filePath}\n`);
  process.exit(1);
}

const html = fs.readFileSync(filePath, 'utf8');

check(
  'Existe <!doctype html>',
  /<!doctype\s+html>/i.test(html),
  'Agrega <!doctype html> al inicio del documento.'
);

check(
  'La etiqueta <html> tiene atributo lang',
  /<html\b[^>]*\blang=["'][^"']+["'][^>]*>/i.test(html),
  'Ejemplo: <html lang="es">.'
);

check(
  'Existe <meta charset>',
  /<meta\b[^>]*charset=["']?utf-8["']?[^>]*>/i.test(html),
  'Agrega <meta charset="UTF-8"> dentro de <head>.'
);

check(
  'Existe meta viewport',
  /<meta\b[^>]*name=["']viewport["'][^>]*>/i.test(html),
  'Agrega <meta name="viewport" content="width=device-width, initial-scale=1.0">.'
);

check(
  'Existe un <h1> con contenido',
  /<h1\b[^>]*>\s*[^<\s][\s\S]*?<\/h1>/i.test(html),
  'Usa un <h1> para mostrar tu nombre.'
);

check(
  'Existe una descripción personal',
  /<p\b[^>]*>\s*[^<\s][\s\S]*?<\/p>/i.test(html),
  'Agrega al menos un párrafo describiéndote.'
);

check(
  'Existe una imagen con atributo alt',
  /<img\b(?=[^>]*\bsrc=["'][^"']+["'])(?=[^>]*\balt=["'][^"']+["'])[^>]*>/i.test(html),
  'Toda imagen debe tener src y un alt descriptivo.'
);

const listItems = countMatches(html, /<li\b[^>]*>[\s\S]*?<\/li>/gi);
check(
  'La lista de intereses tiene al menos 3 elementos',
  listItems >= 3,
  `Se encontraron ${listItems}. Agrega al menos 3 elementos <li>.`
);

const links = countMatches(html, /<a\b[^>]*href=["'][^"']+["'][^>]*>/gi);
check(
  'Existen al menos 2 enlaces',
  links >= 2,
  `Se encontraron ${links}. Agrega al menos 2 enlaces con href.`
);

check(
  'Existe un formulario',
  /<form\b[^>]*>[\s\S]*?<\/form>/i.test(html),
  'Agrega un elemento <form>.'
);

check(
  'El formulario tiene campo de nombre',
  /<input\b(?=[^>]*\bname=["'](?:name|nombre)["'])[^>]*>/i.test(html),
  'Agrega un input con name="nombre" o name="name".'
);

check(
  'El formulario tiene campo de correo',
  /<input\b(?=[^>]*\btype=["']email["'])(?=[^>]*\bname=["'][^"']+["'])[^>]*>/i.test(html),
  'Agrega un input type="email" con atributo name.'
);

check(
  'El formulario tiene textarea',
  /<textarea\b[^>]*>[\s\S]*?<\/textarea>/i.test(html),
  'Agrega un <textarea> para el mensaje.'
);

check(
  'El formulario tiene botón de envío',
  /<(button\b[^>]*type=["']submit["'][^>]*>|input\b[^>]*type=["']submit["'][^>]*>)/i.test(html),
  'Agrega un botón con type="submit".'
);

console.log('\n🧪 Academy Desde Cero — Semana 1\n');

for (const result of results) {
  console.log(`${result.passed ? '✅' : '❌'} ${result.name}`);
  if (!result.passed) {
    console.log(`   ↳ ${result.help}`);
  }
}

const passed = results.filter((result) => result.passed).length;
const failed = results.length - passed;

console.log(`\nResultado: ${passed}/${results.length} tests aprobados.`);

if (failed > 0) {
  console.error(`❌ Faltan ${failed} requisito(s) obligatorio(s).\n`);
  process.exit(1);
}

console.log('🎉 Semana 1 aprobada técnicamente. Ya puedes abrir tu Pull Request.\n');
