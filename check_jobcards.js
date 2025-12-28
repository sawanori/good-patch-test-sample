const { chromium } = require('playwright');

async function checkJobCards() {
  const browser = await chromium.launch();

  // Production PC
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  try {
    console.log('Loading production...');
    await page.goto('https://careers.goodpatch.com/', { waitUntil: 'domcontentloaded', timeout: 60000 });
    await page.waitForTimeout(3000);

    // Find "We're Hiring For 38 Roles" section
    const hiringSection = await page.locator('text=We\'re Hiring For 38 Roles').first();
    if (await hiringSection.count() > 0) {
      await hiringSection.scrollIntoViewIfNeeded();
      await page.waitForTimeout(1000);
      await page.screenshot({ path: 'prod_jobcards_pc.png' });
      console.log('Screenshot: prod_jobcards_pc.png');

      // Get the job card Entry button HTML
      const entryButtonHtml = await page.evaluate(() => {
        const buttons = document.querySelectorAll('a[href*="hrmos"]');
        const results = [];
        buttons.forEach(btn => {
          if (btn.closest('.js-job-card') || btn.textContent.includes('Entry')) {
            const style = window.getComputedStyle(btn);
            results.push({
              html: btn.outerHTML,
              className: btn.className,
              backgroundColor: style.backgroundColor,
              color: style.color,
              borderRadius: style.borderRadius,
              padding: style.padding,
              height: style.height,
              minWidth: style.minWidth,
            });
          }
        });
        return results.slice(0, 5);
      });

      console.log('\n=== JOB CARD ENTRY BUTTONS ===\n');
      entryButtonHtml.forEach((btn, i) => {
        console.log(`${i + 1}. class: ${btn.className}`);
        console.log(`   bg: ${btn.backgroundColor}, color: ${btn.color}`);
        console.log(`   borderRadius: ${btn.borderRadius}, padding: ${btn.padding}`);
        console.log(`   height: ${btn.height}, minWidth: ${btn.minWidth}`);
        console.log(`   HTML: ${btn.html.substring(0, 300)}`);
        console.log('');
      });

      // Get full section HTML
      const sectionHtml = await page.evaluate(() => {
        const h2 = document.querySelector('h2');
        if (h2 && h2.textContent.includes('We\'re Hiring')) {
          let parent = h2.parentElement;
          for (let i = 0; i < 5; i++) {
            parent = parent?.parentElement;
          }
          return parent?.outerHTML?.substring(0, 5000) || 'Not found';
        }
        return 'Section not found';
      });

      console.log('\n=== SECTION HTML ===\n');
      console.log(sectionHtml);
    }

  } catch (e) {
    console.log(`Error: ${e.message}`);
  }

  // Local comparison
  const localContext = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const localPage = await localContext.newPage();

  try {
    console.log('\nLoading local...');
    await localPage.goto('http://localhost:3002/', { waitUntil: 'domcontentloaded', timeout: 30000 });
    await localPage.waitForTimeout(2000);

    const jobSection = await localPage.locator('text=We\'re Hiring For 38 Roles').first();
    if (await jobSection.count() > 0) {
      await jobSection.scrollIntoViewIfNeeded();
      await localPage.waitForTimeout(500);
      await localPage.screenshot({ path: 'local_jobcards_pc.png' });
      console.log('Screenshot: local_jobcards_pc.png');
    }

  } catch (e) {
    console.log(`Error: ${e.message}`);
  }

  await context.close();
  await localContext.close();
  await browser.close();
  console.log('\nDone!');
}

checkJobCards();
