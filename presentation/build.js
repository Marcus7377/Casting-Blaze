/* Headless Chrome → PDF builder for the Casting Blaze deck. */
const { spawn } = require('node:child_process');
const path = require('node:path');
const fs = require('node:fs');

const dir = __dirname;
const htmlPath = path.join(dir, 'index.html');
const pdfPath = path.join(dir, 'Casting-Blaze-Spin-Gaming-Blaze.pdf');

if (!fs.existsSync(htmlPath)) {
  console.error('index.html not found');
  process.exit(1);
}

const userDataDir = path.join(dir, '.chrome-data');
fs.rmSync(userDataDir, { recursive: true, force: true });
fs.mkdirSync(userDataDir, { recursive: true });

const args = [
  '--headless=new',
  '--no-sandbox',
  '--disable-gpu',
  '--disable-dev-shm-usage',
  '--disable-extensions',
  '--disable-background-networking',
  '--disable-sync',
  '--no-first-run',
  '--no-default-browser-check',
  '--hide-scrollbars',
  `--user-data-dir=${userDataDir}`,
  '--virtual-time-budget=4000',
  `--print-to-pdf=${pdfPath}`,
  '--print-to-pdf-no-header',
  '--default-background-color=00000000',
  `file://${htmlPath}`,
];

console.log('Running Chrome:', 'google-chrome', args.join(' '));

const proc = spawn('google-chrome', args, { stdio: 'inherit' });
proc.on('exit', (code) => {
  if (code !== 0) {
    console.error('Chrome exited with code', code);
    process.exit(code || 1);
  }
  const stat = fs.statSync(pdfPath);
  console.log(`OK — wrote ${pdfPath} (${(stat.size / 1024).toFixed(1)} KB)`);
});
