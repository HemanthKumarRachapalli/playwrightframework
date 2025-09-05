/*
Class Description: File contains utility methods for browser navigation.
*/

import {Page} from '@playwright/test';

export class Library {
    readonly page: Page;

    constructor(page: Page){
        this.page = page;
    }

    /**
     * Navigates the browser to a given URL
     * @param url The URL to navigate to
     */
    async NavigateToURL(url: string) {
       await this.page.goto(url, {
            waitUntil: 'load',
            timeout: 60000
       });
    }
}