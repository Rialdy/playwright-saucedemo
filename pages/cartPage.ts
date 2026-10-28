import { Page } from '@playwright/test';
import { BasePage } from './basePage';
import { cartLocators } from '../locators/cartLocator';

export class CartPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async isBackpackInCart(): Promise<boolean> {
        return await this.isElementVisible(cartLocators.backpackItem);
    }

    async isBikeLightInCart(): Promise<boolean> {
        return await this.isElementVisible(cartLocators.bikeLightItem);
    }

    async isShirtInCart(): Promise<boolean> {
        return await this.isElementVisible(cartLocators.tshirtItem);
    }

    async proceedToCheckout(): Promise<void> {
        await this.click(cartLocators.checkOutButton);
    }
}