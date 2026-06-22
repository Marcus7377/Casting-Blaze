const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
    executablePath: '/usr/local/bin/google-chrome'
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800, deviceScaleFactor: 2 });

  const file = 'file://' + path.resolve('/workspace/apresentacao/index.html');
  await page.goto(file, { waitUntil: 'networkidle0', timeout: 60000 });
  // Wait for fonts/images
  await page.evaluateHandle('document.fonts.ready');
  await new Promise(r => setTimeout(r, 1500));

  await page.pdf({
    path: '/workspace/apresentacao/casting-blaze-proposta.pdf',
    width: '1280px',
    height: '800px',
    printBackground: true,
    preferCSSPageSize: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 }
  });

  await browser.close();
  console.log('PDF generated OK');
})().catch(err => {
  console.error('PDF error:', err);
  process.exit(1);
});
