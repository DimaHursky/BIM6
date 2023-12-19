import { test, expect } from '@playwright/test';
import { Login } from './pageObjects/login-page';
import { Components } from './pageObjects/components-page';

const email = 'borisbritva6996@gmail.com';
const password = '12345!Hur';
const productName = 'New Product';
const numbersVallue = '131.56';
const persantegeVallue = '96';

test('Create valid material with filled all fields - 1 ', async ({ page }) => {
  const loginPage = new Login(page);
  const compPage = new Components(page);

  await loginPage.goTo();
  await loginPage.login(email, password);
  await page.waitForTimeout(1000);

  //Page object 
  await compPage.CreateVlidComponent();

  expect(await compPage.componentCreatedAlert).toBeVisible();
  await page.waitForTimeout(1000);
});

test('Create Component only with the required field - 2', async ({ page }) => {
  const loginPage = new Login(page);
  const compPage = new Components(page);

  await loginPage.goTo();
  await loginPage.login(email, password);
  await page.waitForTimeout(1000);

  await compPage.addNewButton.click();

  // 1 General chapter
  await compPage.productCategoryDropDown.click();
  await compPage.newCategoryVallue.click();
  await compPage.productNameFld.fill(productName);
  await compPage.capacitySizeFld.fill(numbersVallue);
  await compPage.unitsDivDropDown.click();
  await compPage.kgVallue.click();
  await compPage.serviceLifeFld.fill(numbersVallue);
  await compPage.weightFld.fill(numbersVallue);
  await compPage.nextStepButton.click();

  // 2 Basic chapter
  await compPage.categoryDropDown.click();
  await compPage.newMaterialVallue.click();

  await compPage.materialFld.click();
  await compPage.materiallVallue.click();
  await compPage.persentageFld.fill(persantegeVallue);

  await compPage.refrigerantTypeDropDown.click();
  await compPage.amoniaR17Vallue.click();
  await compPage.refrigerantChargeKgFld.fill(numbersVallue);
  await compPage.refrigerantLeakageScenarioDropDown.click();
  await compPage.noRefrigerantLeakageVallue.click();

  await compPage.categoryDropDown2.click();
  await compPage.newMaterial2Vallue.click();
  await compPage.materialFld2.click();
  await compPage.newMatNameVallue.click();
  await compPage.persentageFld2.fill(persantegeVallue);
  await compPage.nextStepButton.click();

  // 3 Middle chapter
  await compPage.nextStepButton.click();

  //Additional chapter
  await compPage.nextStepButton.click();
  
  expect(compPage.componentCreatedAlert).toBeVisible();
  await page.waitForTimeout(1000);
});

test('Create Component when all General fields are empty - 3', async ({ page }) => {
  const loginPage = new Login(page);
  const compPage = new Components(page);

  await loginPage.goTo();
  await loginPage.login(email, password);
  await page.waitForTimeout(1000);

  await compPage.addNewButton.click();

  // 1 General chapter
  await compPage.nextStepButton.click();

  expect(await compPage.productCategoryIsRequiredErr).toBeVisible();
  expect(await compPage.productNameIsRequiredErr).toBeVisible();
  expect(await compPage.capacitySizeOfEquipmentRequiredErr).toBeVisible();
  expect(await compPage.unitsIsRequiredErr).toBeVisible();
  expect(await compPage.capacitySizeOfEquipmentRequiredErr).toBeVisible();
  // Nead to fix the bug and add the expects to the 
  // Product Service Life(years)
  // Product Weight (kg)

  await page.waitForTimeout(1000);
});

test('Create Component when all Basic fields are empty - 4', async ({ page }) => {
  const loginPage = new Login(page);
  const compPage = new Components(page);

  await loginPage.goTo();
  await loginPage.login(email, password);
  await page.waitForTimeout(1000);

  await compPage.addNewButton.click();

  // 1 General chapter
  await compPage.productCategoryDropDown.click();
  await compPage.newCategoryVallue.click();
  await compPage.productNameFld.fill(productName);
  await compPage.capacitySizeFld.fill(numbersVallue);
  await compPage.unitsDivDropDown.click();
  await compPage.kgVallue.click();
  await compPage.serviceLifeFld.fill(numbersVallue);
  await compPage.weightFld.fill(numbersVallue);
  await compPage.nextStepButton.click();

  // 2 Basic chapter
  await compPage.nextStepButton.click();

  expect(await compPage.categoryRequiredErr).toBeVisible();
  expect(await compPage.materialIsRequiredErr).toBeVisible();
  expect(await compPage.rercentageIsPequiredErr).toBeVisible();
  expect(await compPage.refrigerantTypeIsRequiredErr).toBeVisible();
  expect(await compPage.refrigerantLeakageScenarioIsRequiredErr).toBeVisible();
  expect(await compPage.categoryIsRequiredErr).toBeVisible();
  expect(await compPage.materialIsRequiredErr2).toBeVisible();
  expect(await compPage.percentageIsRequiredErr).toBeVisible();
  await page.waitForTimeout(1000);
});

test('Fill invalid data into General fields - 5 ', async ({ page }) => {
  const loginPage = new Login(page);
  const compPage = new Components(page);
  const stringVallue = 'New Product';
  const numbersVallue = '131.56';

  await loginPage.goTo();
  await loginPage.login(email, password);
  await page.waitForTimeout(1000);

  await compPage.addNewButton.click();

  //Page object 
  
  // 1 General chapter
  await compPage.productCategoryDropDown.click();
  await compPage.newCategoryVallue.click();
  await compPage.productNameFld.fill(productName);
  await compPage.capacitySizeFld.fill(stringVallue);
  await compPage.unitsDivDropDown.click();
  await compPage.kgVallue.click();
  await compPage.serviceLifeFld.fill(stringVallue);
  await compPage.weightFld.fill(stringVallue);
  await compPage.nextStepButton.click();
  await page.waitForTimeout(1000);

  expect(await compPage.expectedNumberErr1).toBeVisible();
  expect(await compPage.expectedNumberErr2).toBeVisible();
  expect(await compPage.expectedNumberErr3).toBeVisible();
  await page.waitForTimeout(1000);
});

test('Fill invalid data into Basic fields - 6', async ({ page }) => {
  const loginPage = new Login(page);
  const compPage = new Components(page);
  const stringVallue = 'New Product';
  const numbersVallue = '131.56';

  await loginPage.goTo();
  await loginPage.login(email, password);
  await page.waitForTimeout(1000);

  await compPage.addNewButton.click();

  // 1 General chapter
  await compPage.productCategoryDropDown.click();
  await compPage.newCategoryVallue.click();
  await compPage.productNameFld.fill(productName);
  await compPage.capacitySizeFld.fill(numbersVallue);
  await compPage.unitsDivDropDown.click();
  await compPage.kgVallue.click();
  await compPage.serviceLifeFld.fill(numbersVallue);
  await compPage.weightFld.fill(numbersVallue);
  await compPage.nextStepButton.click();
  await page.waitForTimeout(1000);

   // 2 Basic chapter
  await compPage.persentageFld.fill(stringVallue);

  await compPage.refrigerantChargeKgFld.fill(stringVallue);

  await compPage.persentageFld2.fill(stringVallue);
  await compPage.nextStepButton.click();

  expect(await compPage.expectedNumberErr1).toBeVisible();
  expect(await compPage.expectedNumberErr2).toBeVisible();
  expect(await compPage.expectedNumberErr3).toBeVisible();
  await page.waitForTimeout(1000);
});



test('Fill invalid data into Middle fields - 7', async ({ page }) => {
  const loginPage = new Login(page);
  const compPage = new Components(page);
  const stringVallue = 'New Product';
  const numbersVallue = '131.56';

  await loginPage.goTo();
  await loginPage.login(email, password);
  await page.waitForTimeout(1000);

  //Page Onject fro 1 - 3
  await compPage.FillMiddleFields();

  // 4 Additional chapter
  await compPage.annualFactoryWasteOutputFld.fill(stringVallue);
  await compPage.annualAnnualFactoryWaterFld.fill(stringVallue);
  await compPage.percentageOpProductReusedFld.fill(stringVallue);
  await compPage.percentageOpProductRecoveredAtEndOfLifedFld.fill(stringVallue);
  await compPage.warrantyYearsFld.fill(stringVallue);
  await compPage.costAverageSalesPriceFld.fill(stringVallue);
  await compPage.currensyDropDown.click()
  await compPage.usdVallue.click();
  await compPage.ownershipModelFld.fill(stringVallue);
  await compPage.maintenanceRecommendationsFld.fill(stringVallue);

  await compPage.nextStepButton.click();

  expect(compPage.expectedNumberAddotionalErr1).toBeVisible();
  expect(compPage.expectedNumberAddotionalErr2).toBeVisible();
  expect(compPage.expectedNumberAddotionalErr3).toBeVisible();
  expect(compPage.expectedNumberAddotionalErr4).toBeVisible();
  expect(compPage.expectedNumberAddotionalErr5).toBeVisible();
  expect(compPage.expectedNumberAddotionalErr6).toBeVisible();
});

// Create valid material with filled all fields - 1
// Create Component only with the required field - 2'
// Create Component when all General fields are empty - 3
// Create Component when all Basic fields are empty - 4
// Fill invalid data into General fields - 5
// Fill invalid data into Basic fields - 6
// Fill invalid data into Middle fields - 7
// Create Component and chouse "Units" Kg fror Capacity/Size of Equipment		
// Create Component and chouse "Units" m3 Capacity/Size of Equipment		
// Add into Component one more "Material Breakdown" click "Add new" - 
// Add into Component one more "Material Breakdown" click "Add new" and delete the componenent		
// Into "Material Breakdown" fill the "Category" dropdown and delete vallue		
// Into "Material Breakdown" fill the "Category" dropdown and change vallue		
// Into "Material Breakdown" chouse the "Material" dropdown and delete vallue		
// Into "Material Breakdown" chouse the "Material" dropdown and change vallue		