/*
Class Description: File contains test cases for add to cart and account management functionality including new user creation.
*/

import { test, expect } from '@playwright/test';
import { NopCommercePages } from '../pages/nopCommercePages';
import testdata from '../testData/testdata.json';
require("dotenv").config();
const configFile = require(`../configs/${process.env.ENV}-env.json`);
test.describe('Verify Add to cart functionality', async()=>{
    let nopCommerce: NopCommercePages;

    test.beforeEach(async ({ page }) =>{
        nopCommerce = new NopCommercePages(page);
        await nopCommerce.homePage().NavigateToURL(configFile.url);
    })

    test('Verify_AddToCart_FromProductListingPage', async()=>{
        test.step('Click on register button', async()=>{
            await nopCommerce.homePage().clickRegister();
        });

        test.step('Enter personal details', async()=>{
            await nopCommerce.registerPage().selectGender('male');
            await nopCommerce.registerPage().enterFirstName(testdata.firstName);
            await nopCommerce.registerPage().enterLastName(testdata.lastName);
            await nopCommerce.registerPage().enterEmail(testdata.emailID);
        });
        
        test.step('Enter password', async()=>{
            await nopCommerce.registerPage().enterPassword(testdata.password);
            await nopCommerce.registerPage().enterConfirmPassword(testdata.password);
            await nopCommerce.registerPage().clickOnRegisterButton();
            await nopCommerce.registerPage().clickOnContinueButton();
            const text =await nopCommerce.registerPage().getTheRegistrationSuccessMsg();
            expect(text).toBe(testdata.registrationSuccessMessage);
        });        

        test.step('Click on Books', async()=>{
            await nopCommerce.homePage().clickOnBooksLink();
        });

        test.step('Click on add to cart on PLP', async()=>{
            await nopCommerce.homePage().clickOnAddToCart(testdata.bookItem);
        });
    });
});