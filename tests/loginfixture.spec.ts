import {test} from './loginfixture';
import{expect} from '@playwright/test'
 
test("Sause Test",async({soucedemo})=>{
    await expect(soucedemo).toContain("Products");
   
})