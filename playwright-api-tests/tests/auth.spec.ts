import { test, expect } from '@playwright/test';

test('API Health check', async ({ request }) => {
    const response = await request.get('https://api.inv.bg/v3/docs');
    expect(response.status()).toBe(200);
});
