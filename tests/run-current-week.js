const { execSync } = require('child_process');

const branch = process.env.GITHUB_HEAD_REF || process.env.GITHUB_REF_NAME || '';
const match = branch.match(/week[-_/]?(0?[1-9]|[1-9][0-9])/i);

if (!match) {
  console.log('ℹ️ No se detectó una semana en el nombre de la rama.');
  console.log('Usa ramas como feature/week-01, feature/week-02, etc.');
  process.exit(1);
}

const week = String(Number(match[1])).padStart(2, '0');
const script = `test:week${week}`;

console.log(`🧪 Ejecutando validación para Semana ${week}...\n`);

try {
  execSync(`npm run ${script}`, { stdio: 'inherit' });
} catch (error) {
  process.exit(error.status || 1);
}
