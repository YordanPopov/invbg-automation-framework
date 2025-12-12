import { test as setup } from '../steps/steps.factory';

setup('Create logged in user session', async ({ sharedSteps, loginPageSteps, page }) => {
    await sharedSteps.navigateToLoginPage();

    await loginPageSteps.login(process.env.EMAIL, process.env.PASSWORD);

    await page.context().storageState({ path: '.auth/userSession.json' });
});
