//import puppeteer from 'puppeteer';
const puppeteer = require('puppeteer');
    
    async function getPageContent(url) {
      const browser = await puppeteer.launch();
	 //let browser = await puppeteer.launch({
	/* const browser = await puppeteer.launch({
    executablePath: `C:/Program Files/Google/Chrome/Application`,
    
});*/
      const page = await browser.newPage();
	 //await page.emulate(puppeteer.devices['iPhone 6']);
     // await page.goto(url, {timeout: 0});
	  //await page.setViewport({ width: 1920, height: 1080 });
      await page.goto(url,{
    waitUntil: 'domcontentloaded'});
	await page.waitForTimeout(3000);
	 const inputSelector = 'input#analysis.text-t1'; // Замените на селектор вашего input
  await page.type(inputSelector, 'code.mu');
  //await page.type(inputSelector, 'https://receptika.ua/');
await page.click('a#afs.button-blue');


 
  await page.waitForTimeout(4000);
	
  await page.pdf({ path: 'overview14.pdf', fullPage: true ,format: 'A3', scale: 1,printBackground: true });
 
      //const content = await page.content(); // Получаем HTML после выполнения JavaScript
	  //console.log(content);
      await browser.close();
      //return content;
	  
    }
    
    getPageContent('https://www.cy-pr.com/');
    
   // getPageContent('https://code.mu/ru/php/book/parsing/practice/autoposting/');
     // .then(content => console.log(content));