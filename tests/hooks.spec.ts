import { test, expect } from '@playwright/test';

test.beforeEach("Hooks", async ({ page }) => {
     await page.goto("https://www.saucedemo.com/v1/");
     // await page.pause();
     await page.locator('[data-test="username"]').click();
     await page.locator('[data-test="username"]').fill('standard_user');
     await page.locator('[data-test="password"]').click();
     await page.locator('[data-test="password"]').fill('secret_sauce');
     await page.getByRole('button', { name: 'LOGIN' }).click();

})

test("Home page", async ({ page }) => {

     // await page.goto("https://www.saucedemo.com/v1/");
     // await page.pause(); 
     // await page.locator('[data-test="username"]').click();
     // await page.locator('[data-test="username"]').fill('standard_user');
     // await page.locator('[data-test="password"]').click();
     // await page.locator('[data-test="password"]').fill('secret_sauce');
     // await page.getByRole('button', { name: 'LOGIN' }).click();
     await page.locator('div').filter({ hasText: /^\$29\.99ADD TO CART$/ }).getByRole('button').click();
     await page.locator('div').filter({ hasText: /^\$9\.99ADD TO CART$/ }).getByRole('button').click();
     await page.getByRole('link', { name: 'Sauce Labs Bolt T-Shirt' }).click();
     await page.getByRole('button', { name: 'ADD TO CART' }).click();
     await page.getByRole('button', { name: '<- Back' }).click();
     await page.getByRole('link', { name: 'Sauce Labs Fleece Jacket' }).click();
     await page.getByRole('button', { name: '<- Back' }).click();
     //await page.pause();
});

test("logout test ", async ({ page }) => {
     await page.getByRole('button', { name: 'Open Menu' }).click();
     await page.getByRole('link', { name: 'Logout' }).click();
     await page.pause()
})





















































// test("Hooks1", async()=>{
//     console.log("Gokul");
// })
// test("Hooks2", async()=>{
//     console.log("sankar");
// })
// test("Hooks3", async()=>{
//     console.log("madhu");
// })
// test("Hooks4", async()=>{
//     console.log("Rohith");
// })
// test.afterEach("Hooks5", async()=>{
//     console.log("Take a Breakfast");
// })




