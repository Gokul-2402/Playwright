import {test, expect} from '@playwright/test';
 
test("File Handling",async({page})=>{
   await page.goto("http://127.0.0.1:5500/assertion.html");
   await page.pause();

   //alert

   page.once('dialog',async(dialog)=>{
    console.log(dialog.message);
    await dialog.accept();

    await page.click('button[onclick ="jsAlert()"]');
});

    //confirm
    page.once('dialog',async(dialog)=>{
        expect (dialog.message).toContain("confirm");
        await dialog.accept();
});
await page.click('button[onclick ="jsConfirm()"]');

//prompt

page.once("dialog",async (dialog)=>{
    await dialog.accept("Hello friends");


});
await page.click('button[onclick ="jsprompt()"]');

 });
 
 