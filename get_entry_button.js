const { chromium } = require('playwright');

async function getEntryButton() {
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  try {
    console.log('Loading production...');
    await page.goto('https://careers.goodpatch.com/', { waitUntil: 'domcontentloaded', timeout: 60000 });
    await page.waitForTimeout(5000);

    // Scroll to job cards
    await page.evaluate(() => window.scrollTo(0, 800));
    await page.waitForTimeout(1000);

    // Get Entry button in job cards
    const entryButtons = await page.evaluate(() => {
      const results = [];
      const buttons = document.querySelectorAll('a[class*="button"]');
      buttons.forEach(btn => {
        if (btn.textContent.trim().startsWith('Entry') && !btn.textContent.includes('38職種')) {
          const style = window.getComputedStyle(btn);
          results.push({
            html: btn.outerHTML,
            class: btn.className,
            backgroundColor: style.backgroundColor,
            color: style.color,
            borderRadius: style.borderRadius,
            padding: style.padding,
            height: style.height,
            width: style.width,
            minWidth: style.minWidth,
            fontSize: style.fontSize,
            fontWeight: style.fontWeight,
            display: style.display,
            alignItems: style.alignItems,
            justifyContent: style.justifyContent,
          });
        }
      });
      return results.slice(0, 3);
    });

    console.log('\n=== ENTRY BUTTONS IN JOB CARDS ===\n');
    entryButtons.forEach((btn, i) => {
      console.log(`${i + 1}. class: ${btn.class}`);
      console.log(`   bg: ${btn.backgroundColor}`);
      console.log(`   color: ${btn.color}`);
      console.log(`   borderRadius: ${btn.borderRadius}`);
      console.log(`   padding: ${btn.padding}`);
      console.log(`   height: ${btn.height}, width: ${btn.width}, minWidth: ${btn.minWidth}`);
      console.log(`   fontSize: ${btn.fontSize}, fontWeight: ${btn.fontWeight}`);
      console.log(`   display: ${btn.display}, alignItems: ${btn.alignItems}, justifyContent: ${btn.justifyContent}`);
      console.log(`   HTML: ${btn.html}`);
      console.log('');
    });

    // Take close-up screenshot of a card
    await page.screenshot({ path: 'entry_button_closeup.png' });

  } catch (e) {
    console.log(`Error: ${e.message}`);
  }

  await context.close();
  await browser.close();
}

getEntryButton();
