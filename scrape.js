import puppeteer from 'puppeteer';

const scraper = async() =>{
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const url = 'https://books.toscrape.com';

    await page.goto(url);



    console.log(books);
    
    await browser.close();
};

scraper();