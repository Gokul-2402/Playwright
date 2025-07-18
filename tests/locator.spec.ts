import { test, expect, Browser, chromium, Page, Locator } from "@playwright/test";
test("Locator test", async () => {
    const Browser: Browser = await chromium.launch({ headless: false, channel: "chrome" });
    const page: Page = await Browser.newPage();
    await page.goto("http://127.0.0.1:5501/form.html");

    const fname: Locator = await page.locator("#txt1");
    const pass: Locator = await page.locator("#txt2");
    const maill: Locator = await page.locator("#txt3");
    const logo: Locator = await page.locator("#samosa");
    await fname.fill("Gokul");
    await pass.fill("Gokul123");
    await maill.fill("admin@123");

    const logoexist = await logo.isEnabled();

    console.log(logoexist);


    // finding element using text 
    const heading: Locator = await page.locator("text=Registration Form");
    const heading1 = await heading.isEnabled();
    console.log(heading1);


    //finding element using class

    const contact: Locator = await page.locator(".txt_contact");
    await contact.fill("809767575675");

    //use of css property

    const address:Locator = await page.locator("css=input.txt_address");
    await address.fill("sipcot siruseri");

    const pincode:Locator = await page.locator("css=input.txt_pincode");
    await pincode.fill("600043");



    //await Browser.close();





})