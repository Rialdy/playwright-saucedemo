import { Page } from '@playwright/test';
import { BasePage } from './basePage';
import { inventoryLocators } from '../locators/inventoryLocator';

export class InventoryPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async addBackpackToCart(): Promise<void> {
        await this.click(inventoryLocators.backpackAddtoCart);
    }

    async addBikeLightToCart(): Promise<void> {
        await this.click(inventoryLocators.bikeLightAddtoCart);
    }

    async addShirtToCart(): Promise<void> {
        await this.click(inventoryLocators.shirtAddtoCart);
    }
    
    async goToShoppingCart(): Promise<void> {
        await this.click(inventoryLocators.shoppingCart);
    }
}