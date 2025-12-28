const { chromium } = require('playwright');

async function verifyLocal() {
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  try {
    console.log('Loading local...');
    await page.goto('http://localhost:3002/', { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForTimeout(3000);

    // Full page screenshot
    await page.screenshot({ path: 'local_full.png', fullPage: true });
    console.log('Full page: local_full.png');

    // Scroll to specific sections
    for (let i = 0; i < 8; i++) {
      await page.evaluate((y) => window.scrollTo(0, y), i * 800);
      await page.waitForTimeout(500);
      await page.screenshot({ path: `local_scroll_${i}.png` });
      console.log(`Scroll ${i}: local_scroll_${i}.png`);
    }

  } catch (e) {
    console.log(`Error: ${e.message}`);
  }

  await context.close();
  await browser.close();
}

verifyLocal();
