const { expect } = require('@playwright/test');
const { todo } = require('node:test');

exports.Registration = class Registration {

  // /**
  //  * @param {import('@playwright/test').Page} page
  //  */
  constructor(page) {
    this.page = page;
    // this. = page.goto('https://dar-ui-supplier.dev-test.pro/');
    // this. = page.goto('https://dar-ui-supplier.dev-test.pro/auth/login');

    //Register page cjntacts details
    this.fullNameFld = page.getByPlaceholder('Full name');
    this.emailFld = page.getByPlaceholder('E-mail');
    this.addressFld = page.getByPlaceholder('Address');
    this.phoneNumberFld = page.getByPlaceholder('Phone number');
    this.passwordFld = page.getByPlaceholder('Password', { exact: true });
    this.confirmPasswordFld = page.getByPlaceholder('Confirm password');
    this.nextStepBtn = page.getByRole('button', { name: 'Next step' });

    //Register page factories details
    this.factoryNameFld = page.getByPlaceholder('Factory name');
    this.cityFld = page.getByPlaceholder('City', { exact: true });
    this.latitudeFld = page.getByPlaceholder('Latitude');
    this.longitudeFld = page.getByPlaceholder('Longitude');
    todo //add the dropdowns
    this.countryDropD = page.locator('#react-select-2-placeholder');
    this.ukraineCountry = page.getByText('Ukraine', { exact: true });

    this.annualEnergElectricFld = page.getByPlaceholder('Annual Energy Consumption - Electricity (kW.h)')
    todo //add the dropdowns
    this.insertelEctrisityDropD = page.locator('#react-select-3-placeholder');
    this.europe = page.getByText('Europe', { exact: true });

    this.annualEnergGasFld = page.getByPlaceholder('Annual Energy Consumption - Gas (kW.h)');
    todo //add the dropdowns
    this.insertGasDropD = page.locator('#react-select-4-placeholder');
    this.bioDisel = page.getByText('Biodiesel, bioethanol etc', { exact: true });

    this.averegeOutpTonnageFld = page.getByPlaceholder('Average output tonnage of all');
    this.renewableEnergyFld = page.getByPlaceholder('Renewable Energy (kW.h)')

    //Errod messages
    this.fullNameErr = page.getByText('Full name is required');
    this.emailErr = page.getByText('E-mail is invalid');
    this.adressReqErr = page.getByText('Address is required');
    this.phoneNumResErr = page.getByText('Phone number is required');
    this.passwordErrorFirst = page.getByText('Password is too weak').first();
    this.passwordErrorNth1 = page.getByText('Password is too weak').nth(1);
  }


}