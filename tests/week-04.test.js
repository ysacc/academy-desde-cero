const fs = require('fs');
const path = require('path');
const vm = require('vm');

const filePath = path.join(process.cwd(), 'nivel-02-javascript', 'semana-04-fundamentos-js', 'solution', 'index.js');

function fail(message) {
  console.error(`❌ ${message}`);
  process.exitCode = 1;
}

function pass(message) {
  console.log(`✅ ${message}`);
}

if (!fs.existsSync(filePath)) {
  console.error(`❌ No se encontró: ${filePath}`);
  process.exit(1);
}

const code = fs.readFileSync(filePath, 'utf8');
const sandbox = { module: { exports: {} }, exports: {}, console };
vm.createContext(sandbox);

try {
  vm.runInContext(code, sandbox);
} catch (error) {
  console.error('❌ El archivo tiene un error al ejecutarse:');
  console.error(error.message);
  process.exit(1);
}

const exported = sandbox.module.exports;
const required = ['sumar', 'esPar', 'calcularDescuento', 'calcularPromedio', 'clasificarEdad'];

for (const name of required) {
  if (typeof exported[name] === 'function') pass(`Exporta ${name}()`);
  else fail(`Debes exportar la función ${name}() usando module.exports.`);
}

if (typeof exported.sumar === 'function') {
  exported.sumar(2, 3) === 5 ? pass('sumar(2, 3) devuelve 5') : fail('sumar(2, 3) debe devolver 5');
  exported.sumar(-2, 5) === 3 ? pass('sumar() funciona con negativos') : fail('sumar() debe funcionar con negativos');
}

if (typeof exported.esPar === 'function') {
  exported.esPar(4) === true ? pass('esPar(4) devuelve true') : fail('esPar(4) debe devolver true');
  exported.esPar(7) === false ? pass('esPar(7) devuelve false') : fail('esPar(7) debe devolver false');
}

if (typeof exported.calcularDescuento === 'function') {
  exported.calcularDescuento(100, 20) === 80 ? pass('calcularDescuento(100, 20) devuelve 80') : fail('calcularDescuento(100, 20) debe devolver 80');
}

if (typeof exported.calcularPromedio === 'function') {
  exported.calcularPromedio([10, 20, 30]) === 20 ? pass('calcularPromedio() calcula correctamente') : fail('calcularPromedio([10,20,30]) debe devolver 20');
}

if (typeof exported.clasificarEdad === 'function') {
  const menor = exported.clasificarEdad(10);
  const adulto = exported.clasificarEdad(25);
  typeof menor === 'string' && menor.length > 0 ? pass('clasificarEdad() devuelve texto para menor') : fail('clasificarEdad() debe devolver una clasificación en texto');
  typeof adulto === 'string' && adulto.length > 0 && adulto !== menor ? pass('clasificarEdad() distingue edades') : fail('clasificarEdad() debe distinguir categorías de edad');
}

if (!process.exitCode) console.log('\n🎉 Semana 4 aprobada localmente. Ya puedes subir tu solución a tu repositorio.');
