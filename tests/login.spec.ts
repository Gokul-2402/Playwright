import {test,expect, Browser, chromium, Page, Locator} from "@playwright/test";
test("Login test", async ()=>{

    const Browser:Browser = await chromium.launch({headless : false});
    const page: Page = await Browser.newPage();
    await page.goto("http://quiz-fe.hematitecorp.com/");

    const email:Locator = await page.locator("#email");
    const password:Locator = await page.locator("#password");
    const button :Locator = await page.locator("[type = submit]")


    await email.fill("gokulakrishnan.v@changepond.com");
    await password.fill("Gokul@24");
    await button.click();

    const title:string =await page.title();
    console.log("Home Page title",title);
    await page.screenshot({path : 'vounchercode.png'});

    expect(title).toEqual("Quiz App");
    //Browser.close();




    


});