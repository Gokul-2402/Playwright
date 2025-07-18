import {test, expect, Browser, BrowserContext,chromium, Page,Locator} from "playwright/test"

test("Browsercontext", async()=>{
    const browser:Browser = await chromium.launch({headless : false,channel : "chrome" });

    //browser contect 

    //user 1 credintials

    const Browsercontext:BrowserContext = await browser.newContext();
    const page1 : Page = await browser.newPage();
    await page1.goto("http://quiz-fe.hematitecorp.com/");

    const email:Locator = await page1.locator("#email");
    const password:Locator = await page1.locator("#password");
    const button :Locator = await page1.locator("[type = submit]");

    await email.fill('gokulakrishnan.v@changepond.com');
    await password.fill("Gokul@24");
    await button.click(); 

    const title:string =await page1.title();
    console.log("Home Page title",title);
    await page1.screenshot({path : 'vounchercode.png'});

    expect(title).toEqual("Quiz App");


    //user 2 credintials

    const Browsercontext1:BrowserContext = await browser.newContext();
    const page2 : Page = await browser.newPage();
    await page2.goto("http://quiz-fe.hematitecorp.com/");

    const email1:Locator = await page1.locator("#email");
    const password1:Locator = await page1.locator("#password");
    const button1 :Locator = await page1.locator("[type = submit]");

    await email1.fill('abinesh.ashokan@changepond.com');
    await password1.fill("Dreamabi@1714");
    await button1.click(); 

    const title1:string =await page1.title();
    console.log("Home Page title",title);
    await page1.screenshot({path : 'vounchercode.png'});

    expect(title).toEqual("Quiz App");




});