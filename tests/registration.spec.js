import { test, expect } from '@playwright/test';
import { Login } from './pageObjects/login-page';
import { Registration } from './pageObjects/registration-page';

const email = 'borisbritva6996@gmail.com';
const password = '12345!Hur';
const phoneNumber = '+380979531272';
const factoryName = 'New Factory Name';
const numbersVallues = '263'

test.only('Register a user with existing email', async ({ page }) => {
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
  

//register with valid data
//register with alreafy exsisted email
//register with when all fields is empty
//register with when factory fields are empty
//register when the firlds fill with invalid data String / Int...
//register when filling only required fields
//register when valid user, deny permision from admin and try to login
