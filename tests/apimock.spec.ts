import { test, expect } from '@playwright/test';

test("Apitesting", async ({ page }) => {
    await page.route("api/users", (route) => {
        route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify([
                { id: 1, name: 'Gokul' },
                { id: 2, name: 'Madhu' }])
        });

    });
    await page.goto("http://127.0.0.1:5500/mockapi.html");
    const userlist = await page.locator(".user").allTextContents();
    await expect(userlist).toContain('Gokul')
});


