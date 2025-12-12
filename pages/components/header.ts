import { Page, Locator } from '@playwright/test';

export default class Header {
    readonly SETTINGS_BUTTON: Locator;
    readonly PLAN_BUTTON: Locator;
    readonly USER_PANEL: Locator;
    readonly LOGOUT_BUTTON: Locator;
    readonly SEARCH_FIELD: Locator;

    constructor(private page: Page) {
        this.SETTINGS_BUTTON = page.locator('a[href="https://qa-st-2025.inv.bg/settings"]');
        this.PLAN_BUTTON = page.locator('a[href="https://qa-st-2025.inv.bg/settings/plan"]');
        this.USER_PANEL = page.locator('.userpanel-header');
        this.LOGOUT_BUTTON = page.locator('.selenium-button-logout');
        this.SEARCH_FIELD = page.locator('#universalSearchInput');
    }
}
