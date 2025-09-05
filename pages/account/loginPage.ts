/*
Class Description: File contains all web elements and methods related to Login Page for authentication.
*/

import { Page, Locator } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly emailTextBox: Locator;
    readonly passwordTextBox: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;

        this.emailTextBox = page.locator("//input[@id='Email']");
        this.passwordTextBox = page.locator("//input[@id='Password']");
        this.loginButton = page.locator("//button[text()='Log in']");
    }

    /**
     * Enters the email ID into the Email textbox
     * @param emailID - Email address of the user
     */
    async enterEmail(emailID: string) {
        await this.emailTextBox.fill(emailID);
    }

    /**
     * Enters the password into the Password textbox
     * @param password - Password of the user
     */
    async enterPassword(password: string) {
        await this.passwordTextBox.fill(password);
    }

    /**
     * Clicks on the Login button to attempt authentication
     */
    async clickOnLoginButton(){
        await this.loginButton.click();
    }
}
