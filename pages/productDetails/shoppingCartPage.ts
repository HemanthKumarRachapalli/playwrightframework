/*
Class Description: File contains all web elements and methods related to Shopping Cart page functionality.
*/

import { Page, Locator } from '@playwright/test';

export class ShoppingCartPage {
    readonly page: Page;
    readonly productName: Locator;
    readonly termsOfServicesCheckbox: Locator;
    readonly checkoutButton: Locator;

    constructor(page: Page) {
        this.page = page;

        this.productName = page.locator("//table[@class='cart']//a[@class='product-name']");
        this.termsOfServicesCheckbox = page.locator("//input[@id='termsofservice']");
        this.checkoutButton = page.locator("//button[@id='checkout']");
    }

    /**
     * Gets the product name from the shopping cart
     * @returns Product name as string
     */
    async getProductName(): Promise<string> {
        await this.productName.waitFor({ state: 'visible', timeout: 5000 });
        const productNameText = await this.productName.textContent();
        return productNameText?.trim() || '';
    }

    /**
     * Clicks on the Terms of Service checkbox
     */
    async clickOnTermsOfServicesCheckbox() {
        await this.termsOfServicesCheckbox.click();
    }

    /**
     * Clicks on the Checkout button
     */
    async clickOnCheckoutButton() {
        await this.checkoutButton.click();
    }
}
