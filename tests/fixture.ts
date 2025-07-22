import { test as raja } from '@playwright/test'
 
type Myfixture = {
    hello:string,
    greatday:string
 
}
 
export const test = raja.extend<Myfixture>({
    hello: async ({}, use: any) => {
        // console.log("Hi All GOOD MRNG")
        const myword=("Hi All GOOD MRNG")
        await use(myword)
    },
 
    greatday:async({},use:any)=>{
        const myday="Have a Great Day"
        await use(myday)
    }
})