import { test, expect } from '@playwright/test';
import { describe } from 'node:test';

describe("Hematite test", () => {
    test.beforeEach("hematite login", async ({ page }) => {
        await page.goto("http://quiz.hematitecorp.com/");

        await page.getByRole('textbox', { name: 'Email Address' }).click();
        await page.getByRole('textbox', { name: 'Email Address' }).fill('gokulakrishnan.v@changepond.com');
        await page.getByRole('textbox', { name: 'Password' }).click();
        await page.getByRole('textbox', { name: 'Password' }).fill('Gokul@24');
        await page.getByRole('button', { name: 'Sign In' }).click();



    });

    test("Coupon", async ({ page }) => {
        await page.getByRole('textbox', { name: 'Enter Voucher code' }).click();
        await page.getByRole('textbox', { name: 'Enter Voucher code' }).fill('FIFA#');
        await page.getByRole('button', { name: 'submit' }).click();
        

    });

    test("Logout", async ({ page }) => {
        await page.getByRole('button', { name: 'Logout' }).click();
        await page.getByRole('button', { name: 'Logout' }).click();


    });
});
