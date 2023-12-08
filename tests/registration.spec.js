import { test, expect } from '@playwright/test';
import { Login } from './pageObjects/login-page';
import { Registration } from './pageObjects/registration-page';

const email = 'borisbritva6996@gmail.com';
const password = '12345!Hur';
const phoneNumber = '+380979531272';
const address = 'Ukaraine, Ternopil 11';
const factoryName = 'New Factory Name';
const numbersVallues = '263';

test('Register a user with existing email - 1', async ({ page }) => {
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
    await registrPage.renewableEnergyFld.fill('23');
    await registrPage.finishBtn.click();

    expect (await registrPage.UserOreadyExistErrorAllert).toBeDefined();
    expect (await registrPage.userOlreadyExsErr).toBeDefined();
});
  
test('register with when all fields is empty - 2', async ({ page }) => {
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

test.only('register with when factory fields are empty (factories details) - 3', async ({ page }) => {
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

    await registrPage.factoryNameFld.fill(email);
    
    //Factories details page
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
//register with valid data
//register with when factory fields are empty
//register when the firlds fill with invalid data String / Int...
//register when filling only required fields
//register when valid user, deny permision from admin and try to login
