const { expect } = require('@playwright/test');

exports.Login = class Login {

  constructor(page) {
    this.page = page;
    this.registrationTab = page.getByRole('tab', { name: 'Register' });
    this.emailPlaceholder = page.getByPlaceholder('E-mail');
    this.passwordPlaceholder = page.getByPlaceholder('Password');
    this.logInBtn = page.getByRole('button', { name: 'Log In' });

    //Errors
    this.emailIsInvalidMessage = page.getByText('Email is invalid');
    this.passwordIsRequiredMessage = page.getByText('Password is required');
  }

  async goTo() {

    await this.page.goto('https://dar-ui-supplier.dev-test.pro/'); 
  }

  async login(email, password) {
    await this.page.goto('https://dar-ui-supplier.dev-test.pro/');
    await this.emailPlaceholder.fill(email);
    await this.passwordPlaceholder.fill(password);
    await this.logInBtn.click();
  }
};