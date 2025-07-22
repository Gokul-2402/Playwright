import { test as souce } from '@playwright/test'
 
type myFixture = {
    soucedemo: string;
}
 
export const test = souce.extend<myFixture>({
 
    soucedemo: async ({page}, use: any) => {
        await page.goto('https://www.saucedemo.com/v1/');
        await page.fill('#user-name', 'standard_user');
        await page.fill('#password', 'secret_sauce');
        await page.click('#login-button');
        const text = await page.textContent('.product_label');
 
        await use(text || '');
 
    }
})