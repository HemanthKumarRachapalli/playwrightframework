/*
Class Description: File contains all web elements and methods related to Home Page for handling
common page functionalities.
*/

import { Page, Locator, expect } from '@playwright/test';
import { Library } from '../../utilities/library';

export class HomePage {
    readonly page: Page;
    readonly library: Library;
    readonly registerLink: Locator;
    readonly loginLink: Locator;
    readonly wishlistLink: Locator;
    readonly cartLink: Locator;
    readonly booksLink: Locator;
    readonly closeButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.library = new Library(page);
        this.registerLink = page.locator("//a[text()='Register']");
        this.loginLink = page.locator("//a[text()='Log in']");
        this.wishlistLink = page.locator("//a[@class='ico-wishlist']");
        this.cartLink = page.locator("//a[@class='ico-cart']");
        this.booksLink = page.locator("//a[contains(text(),'Books')]");
        this.closeButton = page.locator("//div[@id='bar-notification']//span");
    }

    /**
     * Navigates to the given application URL
     * @param url - Application base URL
     */
    async NavigateToURL(url: string) {
        await this.library.NavigateToURL(url);
    }

    /**
     * Clicks on the Register link in the header
     */
    async clickRegister() {
        await this.page.waitForTimeout(4000);
        await this.registerLink.waitFor({ state: 'visible', timeout: 5000 });
        await this.registerLink.click();
    }

    /**
     * Clicks on the Login link in the header
     */
    async clickLogin() {
        await this.loginLink.click();
    }

    /**
     * Clicks on the Wishlist link in the header
     */
    async clickWishlist() {
        await this.wishlistLink.click();
    }

    /**
     * Clicks on the Shopping Cart link in the header
     */
    async clickCart() {
        await this.cartLink.click();
    }

    /**
     * Verifies Register, Login, Wishlist, and Cart links are visible
     */
    async verifyLinksVisible() {
        await expect(this.registerLink).toBeVisible();
        await expect(this.loginLink).toBeVisible();
        await expect(this.wishlistLink).toBeVisible();
        await expect(this.cartLink).toBeVisible();
    }

    /**
     * Clicks on the Books link in the navigation menu
     */
    async clickOnBooksLink() {
        await this.booksLink.first().click();
    }

    /**
     * Clicks on the "Add to cart" button for a given product
     * @param productName - Name of the product to add
     */
    async clickOnAddToCart(productName: string) {
        const addTocart = this.page.locator(
            `//a[text()='${productName}']/ancestor::div[@class='details']//button[text()='Add to cart']`
        );
        await addTocart.waitFor({ state: 'visible', timeout: 5000 });
        await addTocart.scrollIntoViewIfNeeded();
        await addTocart.click();
    }

    /**
     * Clicks on the Close (notification) button
     */
    async clickOnCloseButton() {
        await this.closeButton.click();
    }
}
