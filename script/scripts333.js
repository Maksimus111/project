
const { connect } = require("puppeteer-real-browser");
const fs = require('fs');

const path = require('path');
const Tesseract = require('tesseract.js');
async function test() {
  const { browser, page } = await connect({
    headless: false,

    args: [],

    customConfig: {},

    turnstile: true,

    connectOption: {},

    disableXvfb: false,
    ignoreAllFlags: false,
    // proxy:{
    //     host:'<proxy-host>',
    //     port:'<proxy-port>',
    //     username:'<proxy-username>',
    //     password:'<proxy-password>'
    // }
  });
  await page.goto('https://javascript.ru/forum/register.php',{
    waitUntil: 'domcontentloaded', timeout:20000});
  //await page.waitForTimeout(20000);
  //await page.waitFor(20000);
  function delay(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
  await delay(50000);
  //await page.waitForXPath('input[name="username"]');
 // await page.pdf({ path: 'overview32.pdf', fullPage: true ,format: 'A3', scale: 1,printBackground: true });
  await page.type('input[name="username"]', 'Vahabitto111');
  await page.type('input[name="password"]', 'Hgyug66876Bygys');
  await page.type('input[name="passwordconfirm"]', 'Hgyug66876Bygys');
  await page.type('input[name="email"]', 'vasyavasiliiman@gmail.com');
  await page.type('input[name="emailconfirm"]', 'vasyavasiliiman@gmail.com');

 // Найди селектор капчи
  const captchaSelector = '#imagereg'; // ← Замени на нужный
  const captchaElement = await page.$(captchaSelector);
 // Сделай скриншот капчи
  const captchaPath = path.join(__dirname, 'captcha.png');
  await captchaElement.screenshot({ path: captchaPath });
  
   // Распознавание текста с помощью Tesseract
  const { data: { text } } = await Tesseract.recognize(captchaPath, 'eng', {
    logger: m => console.log(m) // Прогресс можно отключить
  });

  const cleanedText = text.replace(/\s/g, '').trim();
  console.log('📄 Распознанный текст:', cleanedText);

  // Ввод капчи в поле
  await page.type('#imagestamp', cleanedText); // ← Замени селектор
  
  
  await delay(25000);
    await page.click('input[value="Регистрация завершена"]');
   //const inputElements = await page.$$('input[name="username"]');
  //await page.type(inputElements, 'Gogishvilli111');
  //console.log(inputElements);
  
}

test();