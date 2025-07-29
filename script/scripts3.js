
const { connect } = require("puppeteer-real-browser");

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

  await delay(15000);
  document.getElementById('captchaInput').addEventListener('change', async function (e) {
      const file = e.target.files[0];
      if (!file) return;

      const imageUrl = URL.createObjectURL(file);
      const resultElement = document.getElementById('result');
      resultElement.textContent = 'Распознается...';

      const worker = await Tesseract.createWorker({
        logger: m => console.log(m)
      });

      await worker.load();
      await worker.loadLanguage('eng');
      await worker.initialize('eng');

      const { data: { text } } = await worker.recognize(imageUrl);
      resultElement.textContent = 'Результат: ' + text.trim();

      await worker.terminate();
    });
  
  
  
    await page.click('input[value="Регистрация завершена"]');
   //const inputElements = await page.$$('input[name="username"]');
  //await page.type(inputElements, 'Gogishvilli111');
  //console.log(inputElements);
  
}

test();