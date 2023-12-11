import { test, expect } from '@playwright/test';
import { Login } from './pageObjects/login-page';
import { Registration } from './pageObjects/registration-page';

const email = 'borisbritva6996@gmail.com';
const password = '12345!Hur';
const invalidPassword = '12346!Hur';
const address = 'Ukaraine, Ternopil 11';
const factoryName = 'New Factory Name';
const numbersVallues = '263'

test('Register a user with existing email', async ({ page }) => {
    const loginPage = new Login(page);
    const registrPage = new Registration(page);
    const address = 'Ukaraine, Ternopil 11';
    await loginPage.goTo();
    
    //Contacts details page
    await loginPage.registrationTab.click();
    await registrPage.fullNameFld.fill(email);
    await registrPage.emailFld.fill(email);
    await registrPage.addressFld.fill(address)
    await registrPage.phoneNumberFld.fill(phoneNumber)
    await registrPage.passwordFld.fill(password);
    await registrPage.confirmPasswordFld.fill(password);
    await registrPage.nextStepBtn.click();
    
    expect (await page.locator('.steps__bg')).toBeTruthy();
    expect (await page).toHaveURL('https://dar-ui-supplier.dev-test.pro/auth/register');

    //Factories details page
    await registrPage.factoryNameFld.fill(factoryName);
    await registrPage.cityFld.fill(email);

    await registrPage.countryDropD.click();  //Drop down
    await registrPage.ukraineCountry.click(); // paramiter of dropdown
    
    await registrPage.latitudeFld.fill(email);
    await registrPage.longitudeFld.fill(email);
    await registrPage.annualEnergElectricFld.fill(numbersVallues);
  
    await registrPage.insertelEctrisityDropD.click();  //Drop down
    await registrPage.europe.click(); // paramiter of dropdown

    await registrPage.annualEnergGasFld.fill(numbersVallues);
    
    await registrPage.insertGasDropD.click(); //Drop down
    await registrPage.bioDisel.click(); // paramiter of dropdown

    await registrPage.averegeOutpTonnageFld.fill('23');
    await page.pause();
    await registrPage.renewableEnergyFld.fill('23');
    await page.getByRole('button', { name: 'Finish' }).click();

    expect (await registrPage.UserOreadyExistErrorAllert).toBeDefined();
    expect (await registrPage.userOlreadyExsErr).toBeDefined();
});
  
test('register when all fields is empty - 2', async ({ page }) => {
    const loginPage = new Login(page);
    const registrPage = new Registration(page);
    
    await loginPage.goTo();
    
    //Contacts details page
    await loginPage.registrationTab.click();
    await registrPage.nextStepBtn.click();
    
    expect (registrPage.fullNameErr).toBeDefined();
    expect (registrPage.emailErr).toBeDefined();
    expect (registrPage.addressReqErr).toBeDefined();
    expect (registrPage.phoneNumResErr).toBeDefined();
    expect (registrPage.passwordErrorFirst).toBeDefined();
    expect (registrPage.passwordErrorNth1).toBeDefined();
});

test('register when factory fields are empty (factories details) - 3', async ({ page }) => {
    const loginPage = new Login(page);
    const registrPage = new Registration(page);
    
    await loginPage.goTo();
    
    //Contacts details page
    await loginPage.registrationTab.click();
    await registrPage.fullNameFld.fill(email);
    await registrPage.emailFld.fill(email);
    await registrPage.addressFld.fill(address)
    await registrPage.phoneNumberFld.fill(phoneNumber)
    await registrPage.passwordFld.fill(password);
    await registrPage.confirmPasswordFld.fill(password);
    await registrPage.nextStepBtn.click();

    //Factories details page
    await registrPage.factoryNameFld.fill(email);

    expect (registrPage.countryIsReqErr).toBeTruthy();
    expect (registrPage.countryIsReqErr).toBeTruthy();
    expect (registrPage.latitudeIeReqErr).toBeTruthy();
    expect (registrPage.longitudeIsReqErr).toBeTruthy();
    expect (registrPage.annualEnergReqErrFirst).toBeTruthy();
    expect (registrPage.electricityLocIsReqErr).toBeTruthy();
    expect (registrPage.annualEnergReqErrNth1).toBeTruthy();
    expect (registrPage.gasTypeReqErr).toBeTruthy();
    expect (registrPage.avarageOutputTonageReqErr).toBeTruthy();
    expect (registrPage.renewableEnergyIsReqErr).toBeTruthy();
});

test('register when phone nomber contains invalid data (Contact details)- 4', async ({ page }) => {
    const loginPage = new Login(page);
    const registrPage = new Registration(page);
    
    await loginPage.goTo();
    
    //Contacts details page
    await loginPage.registrationTab.click();
    await registrPage.fullNameFld.fill(email);
    await registrPage.emailFld.fill(email);
    await registrPage.addressFld.fill(address);
    await registrPage.phoneNumberFld.fill(email); //String insted Int 
    await registrPage.passwordFld.fill(password);
    await registrPage.confirmPasswordFld.fill(password);
    await registrPage.nextStepBtn.click();
    
    expect (await registrPage.invalidNumberErr).toBeTruthy();
});

test('register when Email contains invalid data (Contact details)- 5', async ({ page }) => {
    const loginPage = new Login(page);
    const registrPage = new Registration(page);
    
    await loginPage.goTo();
    
    //Contacts details page
    await loginPage.registrationTab.click();
    await registrPage.fullNameFld.fill(email);
    await registrPage.emailFld.fill(address);//invalid email
    await registrPage.addressFld.fill(address);
    await registrPage.phoneNumberFld.fill(phoneNumber); 
    await registrPage.passwordFld.fill(password);
    await registrPage.confirmPasswordFld.fill(password);
    await registrPage.nextStepBtn.click();
    
    expect (await registrPage.emailErr).toBeTruthy();
});

test('register when passwords are not match (Contact details)- 6', async ({ page }) => {
    const loginPage = new Login(page);
    const registrPage = new Registration(page);
    
    await loginPage.goTo();
    
    //Contacts details page
    await loginPage.registrationTab.click();
    await registrPage.fullNameFld.fill(email);
    await registrPage.emailFld.fill(email);
    await registrPage.addressFld.fill(address);
    await registrPage.phoneNumberFld.fill(phoneNumber);  
    await registrPage.passwordFld.fill(password); //cprrect pasww
    await registrPage.confirmPasswordFld.fill(invalidPassword); //incorrect passw
    await registrPage.nextStepBtn.click();
    
    expect (await registrPage.passwDontmatchErr).toBeTruthy();
});

test('register when the fields filled with invalid data (Factories details)- 7', async ({ page }) => {
    const loginPage = new Login(page);
    const registrPage = new Registration(page);
    
    await loginPage.goTo();
    
    //Contacts details page
    await loginPage.registrationTab.click();
    await registrPage.fullNameFld.fill(email);
    await registrPage.emailFld.fill(email);
    await registrPage.addressFld.fill(address)
    await registrPage.phoneNumberFld.fill(phoneNumber)
    await registrPage.passwordFld.fill(password);
    await registrPage.confirmPasswordFld.fill(password);
    await registrPage.nextStepBtn.click();

    //Factories details page
    await registrPage.factoryNameFld.fill(factoryName);
    await registrPage.cityFld.fill(email);
    await registrPage.countryDropD.click();
    await registrPage.ukraineCountry.click();
    await registrPage.latitudeFld.fill(email);
    await registrPage.longitudeFld.fill(email);
    await registrPage.annualEnergElectricFld.fill(email); //string inted int
    await registrPage.insertelEctrisityDropD.click();  
    await registrPage.europe.click();
    await registrPage.annualEnergGasFld.fill(email); //string inted int
    await registrPage.insertGasDropD.click();
    await registrPage.bioDisel.click();
    await registrPage.averegeOutpTonnageFld.fill(email); //string inted int
    await registrPage.renewableEnergyFld.fill(email); //string inted int
    await registrPage.finishBtn.click();

    expect (await registrPage.expectedNumberErr.first()).toBeDefined();
    expect (await registrPage.expectedNumberErr.nth(1)).toBeDefined();
    expect (await registrPage.expectedNumberErr.nth(2)).toBeDefined();
    expect (await registrPage.expectedNumberErr.nth(3)).toBeDefined();
});

test('add a new extra factory when creating a new user (Factories details)- 8', async ({ page }) => {
    const loginPage = new Login(page);
    const registrPage = new Registration(page);
    
    await loginPage.goTo();
    
    //Contacts details page
    await loginPage.registrationTab.click();
    await registrPage.fullNameFld.fill(email);
    await registrPage.emailFld.fill(email);
    await registrPage.addressFld.fill(address)
    await registrPage.phoneNumberFld.fill(phoneNumber)
    await registrPage.passwordFld.fill(password);
    await registrPage.confirmPasswordFld.fill(password);
    await registrPage.nextStepBtn.click();

    //Factories details page
    await registrPage.addFactoryBtn.click();
    expect(await registrPage.deleteFactoryBtn).toBeDefined();
});

test('add a new extra factory and delete it (Factories details)- 9', async ({ page }) => {
    const loginPage = new Login(page);
    const registrPage = new Registration(page);
    
    await loginPage.goTo();
    
    //Contacts details page
    await loginPage.registrationTab.click();
    await registrPage.fullNameFld.fill(email);
    await registrPage.emailFld.fill(email);
    await registrPage.addressFld.fill(address)
    await registrPage.phoneNumberFld.fill(phoneNumber)
    await registrPage.passwordFld.fill(password);
    await registrPage.confirmPasswordFld.fill(password);
    await registrPage.nextStepBtn.click();

    //Factories details page
    await registrPage.addFactoryBtn.click();
    await registrPage.deleteFactoryBtn.click();

    expect (await registrPage.newFactoryFormBtn).toBeVisible();
    expect (await registrPage.deleteFactoryBtn).not.toBeVisible();
});
test('go to the factories page, and go to the prewious page (Factories details)- 10', async ({ page }) => {
    const loginPage = new Login(page);
    const registrPage = new Registration(page);
    
    await loginPage.goTo();
    
    //Contacts details page
    await loginPage.registrationTab.click();
    await registrPage.fullNameFld.fill(email);
    await registrPage.emailFld.fill(email);
    await registrPage.addressFld.fill(address)
    await registrPage.phoneNumberFld.fill(phoneNumber)
    await registrPage.passwordFld.fill(password);
    await registrPage.confirmPasswordFld.fill(password);
    await registrPage.nextStepBtn.click();

    //Factories details page
    await registrPage.previousBtn.click();

    expect (await registrPage.fullNameFld).toBeDefined();
});

//register with valid data
//register when valid user, deny permision from admin and try to login
