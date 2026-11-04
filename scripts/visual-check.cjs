/* eslint-disable @typescript-eslint/no-require-imports -- Node.js CommonJS browser verification script. */
const { chromium } = require('playwright');
const assert = require('node:assert/strict');
(async () => {
  const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined, args: ['--no-sandbox'] });
  const page = await browser.newPage({ reducedMotion: 'reduce' });
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  let combinations = 0;
  for (const width of [320, 360, 375, 390, 430, 768, 1024, 1280, 1440, 1920]) {
    await page.setViewportSize({ width, height: width >= 1024 ? 900 : 844 });
    for (const route of ['/', '/sobre', '/cursos', '/cursos/operador-de-empilhadeira', '/treinamentos', '/galeria', '/contato']) {
      const response = await page.goto('http://localhost:3000' + route);
      assert.equal(response.status(), 200, route);
      assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `${width}: overflow ${route}`);
      combinations++;
    }
    await page.goto('http://localhost:3000');
    const geometry = await page.locator('.hero h1').evaluate(el => {
      const css = getComputedStyle(el), hero = document.querySelector('.hero').getBoundingClientRect(), header = document.querySelector('header').getBoundingClientRect();
      return { size: parseFloat(css.fontSize), lines: Math.round(el.getBoundingClientRect().height / parseFloat(css.lineHeight)), noHeaderOverlap: hero.top >= header.bottom - 1 };
    });
    assert(geometry.noHeaderOverlap, `${width}: header overlaps hero`);
    if (width >= 1024) {
      assert(geometry.size >= 48 && geometry.size <= 72, `${width}: hero font size`);
      assert(geometry.lines <= 4, `${width}: title exceeds 4 lines`);
      assert(await page.locator('.hero .button').evaluateAll(buttons => buttons.every(b => b.getBoundingClientRect().bottom < innerHeight)), `${width}: hero buttons below first fold`);
    }
    if (width === 1440 || width === 390) {
      for (let y = 0, max = await page.evaluate(() => document.body.scrollHeight); y < max; y += 650) {
        await page.evaluate(pos => window.scrollTo(0, pos), y);
        await page.waitForTimeout(80);
      }
      await page.locator('img').evaluateAll(imgs => Promise.all(imgs.map(img => img.decode())));
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.screenshot({ path: `/tmp/promove-redesign-${width}.png`, fullPage: true });
      await page.screenshot({ path: `/tmp/promove-hero-${width}.png` });
      for (const section of ['practice', 'conversion']) {
        await page.locator('.' + section).scrollIntoViewIfNeeded();
        await page.locator('.' + section + ' img').evaluate(img => img.decode());
        await page.locator('.' + section).screenshot({ path: `/tmp/promove-${section}-${width}.png` });
      }
      console.log(`${width}px: ${geometry.lines} hero title lines; screenshots saved.`);
    }
  }
  assert.equal(errors.length, 0, errors.join('\n'));
  await browser.close();
  console.log(`PASS: ${combinations} route/viewport combinations, first-fold buttons, title scale, no header overlap, decoded images, desktop/mobile captures.`);
})().catch(e => { console.error(e); process.exit(1); });
