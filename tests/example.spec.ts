import { test, expect } from '@playwright/test';

test ("add",async({page})=>{ 
  await page.goto('http://127.0.0.1:5500/calculator.html');
  await page.fill("#txt1", '5');
  await page.fill("#txt2", '3');
  await page.click("#addbtn" );

  const result = await page.textContent("#res");
  await expect(result?.trim()).toBe('8');


} )

test ("subraction",async({page})=>{ 
  await page.goto('http://127.0.0.1:5500/calculator.html');
  await page.fill("#txt1", '5');
  await page.fill("#txt2", '3');
  await page.click("#subbtn" );

  const result = await page.textContent("#res");
  await expect(result?.trim()).toBe('2');
});

test ("multiplication",async({page})=>{ 
  await page.goto('http://127.0.0.1:5500/calculator.html');
  await page.fill("#txt1", '10');
  await page.fill("#txt2", '2');
  await page.click("#mulbtn" );

  const result = await page.textContent("#res");
  await expect(result?.trim()).toBe('20');
});

test ("Division",async({page})=>{ 
  await page.goto('http://127.0.0.1:5500/calculator.html');
  await page.fill("#txt1", '10');
  await page.fill("#txt2", '2');
  await page.click("#divbtn" );

  const result = await page.textContent("#res");
  await expect(result?.trim()).toBe('5');
});

// test("check title", async ({page})=>{
//   await page.goto('https://guidehouse.com/');

//   await expect (page).toHaveTitle("Advisory, Technology & Managed Services | Guidehouse");
// });

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
