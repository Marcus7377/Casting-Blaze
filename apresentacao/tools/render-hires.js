const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
    executablePath: '/usr/local/bin/google-chrome'
  });
  const page = await browser.newPage();
  // 2x device pixel ratio = 2560x1600 per slide (crisp on any TV)
  await page.setViewport({ width: 1280, height: 800, deviceScaleFactor: 2 });

  const file = 'file://' + path.resolve('/workspace/apresentacao/index.html');
  await page.goto(file, { waitUntil: 'networkidle0', timeout: 60000 });
  await page.evaluateHandle('document.fonts.ready');
  await new Promise(r => setTimeout(r, 1500));

  const outDir = '/workspace/apresentacao/pptx-source';
  fs.mkdirSync(outDir, { recursive: true });

  for (let i = 1; i <= 12; i++) {
    const id = `s${String(i).padStart(2, '0')}`;
    const el = await page.$(`#${id}`);
    if (!el) { console.warn('missing', id); continue; }
    await el.screenshot({
      path: `${outDir}/${id}.png`,
      type: 'png',
      omitBackground: false
    });
    console.log('rendered', id);
  }
  await browser.close();
})().catch(err => { console.error(err); process.exit(1); });
