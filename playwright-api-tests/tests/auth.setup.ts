import { test as setup, expect } from '../fixtures/test-options';

import { LoginTokenSchema } from '../fixtures/schemas';
import { LoginTokenResponse } from '../fixtures/types-guards';

setup('auth user', async ({ apiRequest }) => {
    const { status, body } = await apiRequest<LoginTokenResponse>({
        method: 'POST',
        url: 'login/token',
        baseUrl: process.env.API_URL!,
        body: {
            email: process.env.EMAIL,
            password: process.env.PASSWORD,
            domain: process.env.DOMAIN,
        },
    });

    expect(status).toBe(200);
    expect(LoginTokenSchema.parse(body)).toBeTruthy();

    process.env['TOKEN'] = body.token;
});
