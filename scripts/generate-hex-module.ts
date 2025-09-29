import { execSync } from 'child_process';
import * as fs from 'fs';

function detectPackageManager(): 'npm' | 'yarn' | 'pnpm' {
  if (fs.existsSync('yarn.lock')) return 'yarn';
  if (fs.existsSync('pnpm-lock.yaml')) return 'pnpm';
  return 'npm';
}

const packageManager = detectPackageManager();

const inputPath = process.argv?.[2]?.trim();
if (!inputPath) {
  console.error(
    `❌ You must provide a module name or path. Example:\n` +
      `   ${packageManager} run g:hex-module <moduleNameOrPath>`,
  );
  process.exit(1);
}

const toKebabCase = (str: string): string =>
  str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();

const moduleNameKebab = toKebabCase(inputPath);

const commands = [
  `nest g module ${moduleNameKebab}`,
  `nest g service ${moduleNameKebab}/application/${moduleNameKebab}`,
  `nest g controller ${moduleNameKebab}/presentation/${moduleNameKebab}`,
  `mkdir -p src/${moduleNameKebab}/domain/dtos`,
  `mkdir -p src/${moduleNameKebab}/domain/ports`,
  `mkdir -p src/${moduleNameKebab}/infrastructure/adapters`,
  `mkdir -p src/${moduleNameKebab}/infrastructure/entities`,
];

commands.forEach((cmd) => {
  console.log(`Executing: ${cmd}`);
  execSync(cmd, { stdio: 'inherit' });
});

console.log(`Hexagonal module "${moduleNameKebab}" generated successfully.`);
