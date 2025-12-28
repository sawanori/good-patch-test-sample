const { chromium } = require('playwright');

async function checkProdDetail() {
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  try {
    console.log('Loading production...');
    await page.goto('https://careers.goodpatch.com/', { waitUntil: 'domcontentloaded', timeout: 60000 });
    await page.waitForTimeout(5000);

    // Full page screenshot
    await page.screenshot({ path: 'prod_full_detail.png', fullPage: true });
    console.log('Full page screenshot saved');

    // Get all h2 headings
    const headings = await page.evaluate(() => {
      const h2s = document.querySelectorAll('h2');
      return Array.from(h2s).map(h => h.textContent?.trim().substring(0, 50));
    });
    console.log('\n=== H2 HEADINGS ===');
    headings.forEach((h, i) => console.log(`${i + 1}. ${h}`));

    // Scroll down and take screenshots at different points
    for (let i = 0; i < 5; i++) {
      await page.evaluate((scrollY) => window.scrollTo(0, scrollY), i * 800);
      await page.waitForTimeout(500);
      await page.screenshot({ path: `prod_scroll_${i}.png` });
      console.log(`Screenshot: prod_scroll_${i}.png`);
    }

    // Get job cards section if exists
    const jobCardsHtml = await page.evaluate(() => {
      // Look for job-related content
      const elements = document.querySelectorAll('[class*="job"], [class*="Job"]');
      const results = [];
      elements.forEach(el => {
        if (el.className.includes('card') || el.className.includes('Card')) {
          results.push({
            tag: el.tagName,
            class: el.className.substring(0, 100),
            html: el.outerHTML.substring(0, 500),
          });
        }
      });
      return results.slice(0, 3);
    });

    console.log('\n=== JOB CARDS ===');
    jobCardsHtml.forEach((el, i) => {
      console.log(`${i + 1}. <${el.tag} class="${el.class}">`);
      console.log(`   HTML: ${el.html}`);
    });

  } catch (e) {
    console.log(`Error: ${e.message}`);
  }

  await context.close();
  await browser.close();
}

checkProdDetail();
