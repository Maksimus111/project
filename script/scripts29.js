const puppeteer = require('puppeteer-extra');

const StealthPlugin = require('puppeteer-extra-plugin-stealth');

 

// Подключаем Stealth-плагин

puppeteer.use(StealthPlugin());

 

(async () => {

    const browser = await puppeteer.launch({ headless: true });

    const page = await browser.newPage();

 

    // Переходим на сайт для теста

    await page.goto('https://javascript.ru/forum/register.php');

    await page.screenshot({ path: 'result22.png' });

 

    console.log('Проверка завершена. Снимок экрана сохранен.');

    await browser.close();

})();