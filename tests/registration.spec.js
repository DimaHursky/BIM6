import { test, expect } from '@playwright/test';
import { Login } from './pageObjects/login-page';
import { Registration } from './pageObjects/registration-page';

const email = 'borisbritva6996+1@gmail.com';
const password = '12345!Hur';
const phoneNumber = '+380979531272';



test.only('Register a new valid user', async ({ page }) => {
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
    await registrPage.factoryNameFld.fill(email);
    await registrPage.cityFld.fill(email);

    //Drop down
    await registrPage.countryDropD.click(); 
    await registrPage.ukraineCountry.click(); // paramiter of dropdown
    
    await registrPage.latitudeFld.fill(email);
    await registrPage.longitudeFld.fill(email);
    //Drop down
    await registrPage.insertelEctrisityDropD.click(); 
    await registrPage.europe.click(); // paramiter of dropdown
    
    await registrPage.annualEnergElectricFld.fill(email);
    //Drop down
    await registrPage.insertGasDropD.click(); 
    await registrPage.bioDisel.click(); // paramiter of dropdown

    await registrPage.averegeOutpTonnageFld.fill('23');
    await registrPage.renewableEnergyFld.fill('23');
  });