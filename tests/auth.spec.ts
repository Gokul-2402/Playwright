import {test,Expect, Browser, chromium, BrowserContext, Page,Locator } from "@playwright/test";

test("Authenticaton test ",async()=>{
    const browser :Browser = await chromium.launch ({headless:false, channel :"chrome"})
    const browsercontext :BrowserContext = await browser.newContext();
    const page3 :Page = await browsercontext.newPage();


    const email:Locator = await page3.locator("#email");
    const password:Locator = await page3.locator("#password");

    const userid :any = ("gokulakrishnan.v@changepond.com");
    const userpassword :any =("Gokul@24");

   

    const convert : any = "Basic " + btoa(userid + ":" +userpassword);
    page3.setExtraHTTPHeaders({Authorization:convert});
    console.log(convert);
 
    await page3.goto("http://quiz-fe.hematitecorp.com/");
    await email.fill('gokulakrishnan.v@changepond.com');
    await password.fill("Gokul@24");

    // browsercontext.close();
    // browser.close();

   
})