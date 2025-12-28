const { chromium } = require('playwright');

async function verifyJobCards() {
  const browser = await chromium.launch();

  // Production
  const prodContext = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const prodPage = await prodContext.newPage();
  await prodPage.goto('https://careers.goodpatch.com/', { waitUntil: 'domcontentloaded', timeout: 60000 });
  await prodPage.waitForTimeout(3000);
  await prodPage.evaluate(() => window.scrollTo(0, 700));
  await prodPage.waitForTimeout(500);
  await prodPage.screenshot({ path: 'verify_prod_jobcards.png' });
  console.log('Production: verify_prod_jobcards.png');

  // Local
  const localContext = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const localPage = await localContext.newPage();
  await localPage.goto('http://localhost:3002/', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await localPage.waitForTimeout(2000);

  const jobSection = await localPage.locator('#job').first();
  if (await jobSection.count() > 0) {
    await jobSection.scrollIntoViewIfNeeded();
    await localPage.waitForTimeout(500);
  }
  await localPage.screenshot({ path: 'verify_local_jobcards.png' });
  console.log('Local: verify_local_jobcards.png');

  await prodContext.close();
  await localContext.close();
  await browser.close();
  console.log('Done!');
}

verifyJobCards();
