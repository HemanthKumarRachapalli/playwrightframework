/*
Class Description: File contains all web elements and methods related to Registration Page.
*/

import { Page, Locator } from '@playwright/test';

export class RegisterPage {
    readonly page: Page;
    readonly genderMaleRadio: Locator;
    readonly genderFemaleRadio: Locator;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly confirmPasswordInput: Locator;
    readonly registrationSuccessMsg: Locator;
    readonly continueButton: Locator;
    readonly registerButton: Locator;

    constructor(page: Page) {
        this.page = page;

        this.genderMaleRadio = page.locator("//input[@id='gender-male']");
        this.genderFemaleRadio = page.locator("//input[@id='gender-female']");
        this.firstNameInput = page.locator("//input[@id='FirstName']");
        this.lastNameInput = page.locator("//input[@id='LastName']");
        this.emailInput = page.locator("//input[@id='Email']");
        this.passwordInput = page.locator("//input[@id='Password']");
        this.confirmPasswordInput = page.locator("//input[@id='ConfirmPassword']");
        this.registerButton = page.locator("//button[@id='register-button']");
        this.registrationSuccessMsg = page.locator("//div[@class='result']");
        this.continueButton = page.getByText('Continue');
    }

    /**
     * Selects gender option
     * @param gender - 'male' or 'female'
     */
    async selectGender(gender: 'male' | 'female') {
        if (gender === 'male') {
            await this.genderMaleRadio.check();
        } else {
            await this.genderFemaleRadio.check();
        }
    }

    /**
     * Enters first name in the input field
     * @param firstName - User's first name
     */
    async enterFirstName(firstName: string) {
        await this.firstNameInput.fill(firstName);
    }

    /**
     * Enters last name in the input field
     * @param lastName - User's last name
     */
    async enterLastName(lastName: string) {
        await this.lastNameInput.fill(lastName);
    }

    /**
     * Enters email in the input field
     * @param email - User's email address
     */
    async enterEmail(email: string) {
        await this.emailInput.fill(email);
    }

    /**
     * Enters password in the password field
     * @param password - User's password
     */
    async enterPassword(password: string) {
        await this.passwordInput.fill(password);
    }

    /**
     * Enters confirm password in the confirm password field
     * @param password - User's confirm password
     */
    async enterConfirmPassword(password: string) {
        await this.confirmPasswordInput.fill(password);
    }

    /**
     * Retrieves the registration success message text
     * @returns string - Success message text
     */
    async getTheRegistrationSuccessMsg(): Promise<string> {
        await this.registrationSuccessMsg.waitFor({ state: 'visible', timeout: 10000 });
        const successText = await this.registrationSuccessMsg.textContent();
        return successText?.trim() || '';
    }

    /**
     * Clicks on the Continue button
     */
    async clickOnContinueButton() {
        await this.continueButton.click();
    }

    /**
     * Clicks on the Register button
     */
    async clickOnRegisterButton() {
        await this.registerButton.click();
    }
}
