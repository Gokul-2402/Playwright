import { test, expect } from '@playwright/test';
import { Loginpage } from './pages/Loginpage';
import { users } from './pages/Credintials';



    for (let user of users) {
        test(`${user.usermsg}`, async ({ page }) => {
        const objlogin = new Loginpage(page);
        await objlogin.goto();
        await objlogin.login("standard_user", "secret_sauce");

    
})
}