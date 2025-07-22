import {test,Expect, expect} from '@playwright/test';
test ("",async({page})=>{
    await page.goto(" http://127.0.0.1:5500/assertion.html");
    await page.pause();

    //ex1 it will check number is greater than 10 

    const textvalue :any = await page.locator("#d1").textContent();
    const value:any = parseInt(textvalue || '0');

    await expect(value >10).toBeTruthy();

    // ex 2 check character is greater than 5 or not 

    // const msg:any = await page.locator("#d2").textContent();
    // await expect(msg.length).toBeGreaterThan(5);

    const message =await page.locator("#d2");
    await asertmincharlength(message,5);
});

const asertmincharlength = async (locator:any, minLength:number)=>{

    const text = await locator.textContent();
    await expect(text || ' '.length).toBeGreaterThan(minLength);

}
