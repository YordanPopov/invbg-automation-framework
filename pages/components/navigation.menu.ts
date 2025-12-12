import { Page, Locator } from '@playwright/test';

export default class NavigationMenu {
    readonly HOME_LINK: Locator;
    readonly NEW_INVOICE_LINK: Locator;
    readonly INVOICE_LIST: Locator;
    readonly CUSTOMERS_LINK: Locator;
    readonly ITEMS_LINK: Locator;
    readonly DOCUMENTS_LINK: Locator;

    constructor(private page: Page) {
        this.HOME_LINK = page
            .locator('a[href="https://qa-st-2025.inv.bg/home"]')
            .filter({ hasText: 'Начало' });

        this.NEW_INVOICE_LINK = page.locator('a[href="https://qa-st-2025.inv.bg/invoices/new"]');
        this.INVOICE_LIST = page.locator('a[href="https://qa-st-2025.inv.bg/invoices"]');
        this.CUSTOMERS_LINK = page.locator('a[href="https://qa-st-2025.inv.bg/clients"]');
        this.ITEMS_LINK = page.locator('a[href="https://qa-st-2025.inv.bg/objects"]');
        this.DOCUMENTS_LINK = page.locator('a[href="https://qa-st-2025.inv.bg/documents"]');
    }
}
