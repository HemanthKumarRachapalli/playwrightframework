/*
Class Description: Intializing all page objects.
*/

import {type Page} from '@playwright/test'
import { HomePage } from './home/homePage';
import { RegisterPage } from './account/registerPage';
import { ShoppingCartPage } from './productDetails/shoppingCartPage';
import { LoginPage } from './account/loginPage';

export class NopCommercePages {
    public page: Page;

    constructor(page: Page){
        this.page = page
    }

    public loginPage(): LoginPage {
        return new LoginPage(this.page);
    } 

    public homePage(): HomePage {
        return new HomePage(this.page);
    }

    public registerPage(): RegisterPage {
        return new RegisterPage(this.page);
    }

    public shoppinCartPage(): ShoppingCartPage {
        return new ShoppingCartPage(this.page);
    }
}