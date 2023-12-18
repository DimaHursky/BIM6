import { test, expect } from '@playwright/test';
import { Login } from './pageObjects/login-page';
import { Materials } from './pageObjects/materials-page';
import { TIMEOUT } from 'dns';

const email = 'borisbritva6996@gmail.com';
const password = '12345!Hur';
const namberVallue = '2510.12';
const materialName = 'New Mat Name';

test('Create valid material with filled all fields - 1', async ({ page }) => {
  const loginPage = new Login(page);
  const materialPage = new Materials(page);
  await loginPage.goTo();
  await loginPage.login(email, password);
  await materialPage.materialsTab.click({ waitForTimeout: 5000 });
  await page.waitForTimeout(3000);
  await materialPage.addNewMaterial.click({ waitForTimeout: 5000 });
  await materialPage.materialNameFld.fill(materialName + ' A1, A2, A3');
  await materialPage.materialCategoryDropDown.click();
  await materialPage.newMaterial2Option.click();
  await materialPage.factoryDropDown.click();
  await materialPage.facroryVallue.click();
  await materialPage.a1_a3CheckBox.check(); //A1-A3 Check Box
  
  expect(materialPage.A1_A3Fld).toBeVisible();
  await materialPage.a1A2A3CheckBox.check(); //A1, A2, A3 Check Box
  await materialPage.materialExtractionFld.fill(namberVallue);
  await materialPage.A2TransportToFactoryFld.fill(namberVallue);
  await materialPage.A3ManufacturingFld.fill(namberVallue);
  await materialPage.A4TransportToSiteFld.fill(namberVallue);
  await materialPage.A5ConstructionFld.fill(namberVallue);
  await materialPage.B1UseFld.fill(namberVallue);
  await materialPage.B2MaintenanceFld.fill(namberVallue);
  await materialPage.B3RepairFld.fill(namberVallue);
  await materialPage.B4ReplacementFld.fill(namberVallue);
  await materialPage.B5RefurbishmentFld.fill(namberVallue);
  await materialPage.B6OperationalEnergyUseFld.fill(namberVallue);
  await materialPage.B7OperationalWaterUseFld.fill(namberVallue);
  await materialPage.C1DeconstructionFld.fill(namberVallue);
  await materialPage.C2TransportFld.fill(namberVallue);
  await materialPage.C3WasteProcessingFld.fill(namberVallue);
  await materialPage.C4DisposalFld.fill(namberVallue);
  await materialPage.DReuseRecoveryRecyclingFld.fill(namberVallue);

  expect(await materialPage.saveBtn).toBeVisible();
  expect(await materialPage.canselBtn).toBeVisible();

  //Download the PDF fil
  const hendle = page.locator('input[type="file"]');
  await hendle.setInputFiles('D:/DevIT/BIM6/EmptyEstimation.pdf');

  //The delete button should be visible when the user uploads the file
  expect(await materialPage.deletePdfFile).toBeVisible();
  await materialPage.saveBtn.click();

  expect(await materialPage.matirialIsCrweatedPopup).toBeVisible();
  await page.waitForTimeout(3000);
});

test('Create material and Choose a type of filling A level: A1 - 2', async ({ page }) => {
const loginPage = new Login(page);
  const materialPage = new Materials(page);
  await loginPage.goTo();
  await loginPage.login(email, password);
  await materialPage.materialsTab.click({ waitForTimeout: 5000 });
  await page.waitForTimeout(3000);
  await materialPage.addNewMaterial.click({ waitForTimeout: 5000 });
  await materialPage.materialNameFld.fill(materialName + ' A1-A3');
  await materialPage.materialCategoryDropDown.click();
  await materialPage.newMaterial2Option.click();
  await materialPage.factoryDropDown.click();
  await materialPage.facroryVallue.click();
  await materialPage.a1_a3CheckBox.check(); //A1-A3 Check Box
  
  //Thous firlds shouldent be visible when user select "A1-A3" Check Box
  expect(materialPage.materialExtractionFld).not.toBeVisible();
  expect(materialPage.A2TransportToFactoryFld).not.toBeVisible();
  expect(materialPage.A3ManufacturingFld).not.toBeVisible();

  //This field appears when the user select //A1-A3 Check Box
  await materialPage.A1_A3Fld.fill(namberVallue);
  await materialPage.A4TransportToSiteFld.fill(namberVallue);
  await materialPage.A5ConstructionFld.fill(namberVallue);
  await materialPage.B1UseFld.fill(namberVallue);
  await materialPage.B2MaintenanceFld.fill(namberVallue);
  await materialPage.B3RepairFld.fill(namberVallue);
  await materialPage.B4ReplacementFld.fill(namberVallue);
  await materialPage.B5RefurbishmentFld.fill(namberVallue);
  await materialPage.B6OperationalEnergyUseFld.fill(namberVallue);
  await materialPage.B7OperationalWaterUseFld.fill(namberVallue);
  await materialPage.C1DeconstructionFld.fill(namberVallue);
  await materialPage.C2TransportFld.fill(namberVallue);
  await materialPage.C3WasteProcessingFld.fill(namberVallue);
  await materialPage.C4DisposalFld.fill(namberVallue);
  await materialPage.DReuseRecoveryRecyclingFld.fill(namberVallue);

  expect(await materialPage.saveBtn).toBeVisible();
  expect(await materialPage.canselBtn).toBeVisible();

  //Download the PDF file
  const hendle = page.locator('input[type="file"]');
  await hendle.setInputFiles('D:/DevIT/BIM6/EmptyEstimation.pdf');

  //The delete button should be visible when the user uploads the file
  expect(await materialPage.deletePdfFile).toBeVisible();
  await materialPage.saveBtn.click();

  expect(await materialPage.matirialIsCrweatedPopup).toBeVisible();
  await page.waitForTimeout(3000);
});

test('Input file with invalid extension - 3', async ({ page }) => {
  const loginPage = new Login(page);
  const materialPage = new Materials(page);
  await loginPage.goTo();
  await loginPage.login(email, password);
  await materialPage.materialsTab.click({ tomeout: 3000 });
  await page.waitForTimeout(3000);
  await materialPage.addNewMaterial.click({waitForTimeout: 3000});

  //Download the PDF file
  const hendle = page.locator('input[type="file"]');
  await hendle.setInputFiles('D:/DevIT/BIM6/EmptyEstimation.xlsx');

  expect(await materialPage.fileTypeMustBePdfErr).toBeVisible({timeout: 3000});

  await materialPage.saveBtn.click();
});

test('Create material when all fields are empty - 4', async ({ page }) => {
  const loginPage = new Login(page);
  const materialPage = new Materials(page);
  await loginPage.goTo();
  await loginPage.login(email, password);
  await materialPage.materialsTab.click({ tomeout: 3000 });
  await page.waitForTimeout(3000);
  await materialPage.addNewMaterial.click({ waitForTimeout: 3000 });
  await page.waitForTimeout(1000);
  await materialPage.saveBtn.click();  

  //Page Object (PO) all the elements in the materials-page.js
  await materialPage.checkIfTheErrorsIsVisible();
});

test('Fill all fields and cancel creating the material for "A1, A2, A3" lvl.  - 5', async ({ page }) => {
  const loginPage = new Login(page);
  const materialPage = new Materials(page);
  await loginPage.goTo();
  await loginPage.login(email, password);
  await materialPage.materialsTab.click({ waitForTimeout: 5000 });
  await page.waitForTimeout(3000);
  await materialPage.addNewMaterial.click({ waitForTimeout: 5000 });
  await materialPage.materialNameFld.fill(materialName + ' A1, A2, A3');
  await materialPage.materialCategoryDropDown.click();
  await materialPage.newMaterial2Option.click();
  await materialPage.factoryDropDown.click();
  await materialPage.facroryVallue.click();
  await materialPage.a1_a3CheckBox.check(); //A1-A3 Check Box
  
  expect(materialPage.A1_A3Fld).toBeVisible();
  await materialPage.a1A2A3CheckBox.check(); //A1, A2, A3 Check Box
  await materialPage.materialExtractionFld.fill(namberVallue);
  await materialPage.A2TransportToFactoryFld.fill(namberVallue);
  await materialPage.A3ManufacturingFld.fill(namberVallue);
  await materialPage.A4TransportToSiteFld.fill(namberVallue);
  await materialPage.A5ConstructionFld.fill(namberVallue);
  await materialPage.B1UseFld.fill(namberVallue);
  await materialPage.B2MaintenanceFld.fill(namberVallue);
  await materialPage.B3RepairFld.fill(namberVallue);
  await materialPage.B4ReplacementFld.fill(namberVallue);
  await materialPage.B5RefurbishmentFld.fill(namberVallue);
  await materialPage.B6OperationalEnergyUseFld.fill(namberVallue);
  await materialPage.B7OperationalWaterUseFld.fill(namberVallue);
  await materialPage.C1DeconstructionFld.fill(namberVallue);
  await materialPage.C2TransportFld.fill(namberVallue);
  await materialPage.C3WasteProcessingFld.fill(namberVallue);
  await materialPage.C4DisposalFld.fill(namberVallue);
  await materialPage.DReuseRecoveryRecyclingFld.fill(namberVallue);

  expect(await materialPage.saveBtn).toBeVisible();
  expect(await materialPage.canselBtn).toBeVisible();

  //Download the PDF fil
  const hendle = page.locator('input[type="file"]');
  await hendle.setInputFiles('D:/DevIT/BIM6/EmptyEstimation.pdf');
  await materialPage.canselBtn.click();

  //When the user cansel crearing the material, user back to home page
  await page.waitForTimeout(1000);
  expect(await materialPage.addNewMaterial).toBeDefined();
});
test('Fill all fields and cancel creating the material for  "A1-A3" lvl - 6', async ({ page }) => {
  const loginPage = new Login(page);
  const materialPage = new Materials(page);
  await loginPage.goTo();
  await loginPage.login(email, password);
  await materialPage.materialsTab.click({ waitForTimeout: 5000 });
  await page.waitForTimeout(3000);
  await materialPage.addNewMaterial.click({ waitForTimeout: 5000 });
  await materialPage.materialNameFld.fill(materialName + ' A1-A3');
  await materialPage.materialCategoryDropDown.click();
  await materialPage.newMaterial2Option.click();
  await materialPage.factoryDropDown.click();
  await materialPage.facroryVallue.click();
  await materialPage.a1_a3CheckBox.check(); //A1-A3 Check Box
  
  await materialPage.A1_A3Fld.fill(namberVallue);
  await materialPage.A4TransportToSiteFld.fill(namberVallue);
  await materialPage.A5ConstructionFld.fill(namberVallue);
  await materialPage.B1UseFld.fill(namberVallue);
  await materialPage.B2MaintenanceFld.fill(namberVallue);
  await materialPage.B3RepairFld.fill(namberVallue);
  await materialPage.B4ReplacementFld.fill(namberVallue);
  await materialPage.B5RefurbishmentFld.fill(namberVallue);
  await materialPage.B6OperationalEnergyUseFld.fill(namberVallue);
  await materialPage.B7OperationalWaterUseFld.fill(namberVallue);
  await materialPage.C1DeconstructionFld.fill(namberVallue);
  await materialPage.C2TransportFld.fill(namberVallue);
  await materialPage.C3WasteProcessingFld.fill(namberVallue);
  await materialPage.C4DisposalFld.fill(namberVallue);
  await materialPage.DReuseRecoveryRecyclingFld.fill(namberVallue);

  expect(await materialPage.saveBtn).toBeVisible();
  expect(await materialPage.canselBtn).toBeVisible();

  //Download the PDF fil
  const hendle = page.locator('input[type="file"]');
  await hendle.setInputFiles('D:/DevIT/BIM6/EmptyEstimation.pdf');

  await materialPage.canselBtn.click();

  //When the user cansel crearing the material, user back to home page
  await page.waitForTimeout(1000);
  expect(await materialPage.addNewMaterial).toBeDefined();
});

test('Fill all fields and cancel creating the material on "X" button - 7', async ({ page }) => {
  const loginPage = new Login(page);
  const materialPage = new Materials(page);
  await loginPage.goTo();
  await loginPage.login(email, password);
  await materialPage.materialsTab.click({ waitForTimeout: 5000 });
  await page.waitForTimeout(3000);
  await materialPage.addNewMaterial.click({ waitForTimeout: 5000 });
  await materialPage.materialNameFld.fill(materialName + ' A1, A2, A3');
  await materialPage.materialCategoryDropDown.click();
  await materialPage.newMaterial2Option.click();
  await materialPage.factoryDropDown.click();
  await materialPage.facroryVallue.click();
  await materialPage.a1_a3CheckBox.check(); //A1-A3 Check Box
  
  expect(materialPage.A1_A3Fld).toBeVisible();
  await materialPage.a1A2A3CheckBox.check(); //A1, A2, A3 Check Box
  await materialPage.materialExtractionFld.fill(namberVallue);
  await materialPage.A2TransportToFactoryFld.fill(namberVallue);
  await materialPage.A3ManufacturingFld.fill(namberVallue);
  await materialPage.A4TransportToSiteFld.fill(namberVallue);
  await materialPage.A5ConstructionFld.fill(namberVallue);
  await materialPage.B1UseFld.fill(namberVallue);
  await materialPage.B2MaintenanceFld.fill(namberVallue);
  await materialPage.B3RepairFld.fill(namberVallue);
  await materialPage.B4ReplacementFld.fill(namberVallue);
  await materialPage.B5RefurbishmentFld.fill(namberVallue);
  await materialPage.B6OperationalEnergyUseFld.fill(namberVallue);
  await materialPage.B7OperationalWaterUseFld.fill(namberVallue);
  await materialPage.C1DeconstructionFld.fill(namberVallue);
  await materialPage.C2TransportFld.fill(namberVallue);
  await materialPage.C3WasteProcessingFld.fill(namberVallue);
  await materialPage.C4DisposalFld.fill(namberVallue);
  await materialPage.DReuseRecoveryRecyclingFld.fill(namberVallue);

  expect(await materialPage.saveBtn).toBeVisible();
  expect(await materialPage.canselBtn).toBeVisible();

  //Download the PDF fil
  const hendle = page.locator('input[type="file"]');
  await hendle.setInputFiles('D:/DevIT/BIM6/EmptyEstimation.pdf');

  await materialPage.closelXBtn.click();
});

test('Cansel creating the material with empty fields "X" button - 8', async ({ page }) => {
  const loginPage = new Login(page);
  const materialPage = new Materials(page);
  await loginPage.goTo();
  await loginPage.login(email, password);
  await materialPage.materialsTab.click({ waitForTimeout: 5000 });
  await page.waitForTimeout(3000);
  await materialPage.addNewMaterial.click({ waitForTimeout: 5000 });
  await page.waitForTimeout(1000);
  await materialPage.closelXBtn.click();
});

test('Group materil by "All" status - 9', async ({ page }) => {
  const loginPage = new Login(page);
  const materialPage = new Materials(page);
  await loginPage.goTo();
  await loginPage.login(email, password);
  await materialPage.materialsTab.click();
  await page.waitForTimeout(2000);
  expect (await materialPage.statusAllButton).toBeDefined();
});

test('Group materil by "Approved" status - 10', async ({ page }) => {
  test.setTimeout(70000);
  const loginPage = new Login(page);
  const materialPage = new Materials(page);
  await loginPage.goTo();
  await loginPage.login(email, password);
  await materialPage.materialsTab.click();
  await page.waitForTimeout(2000);
  await materialPage.statusAllButton.click();
  await materialPage.approvedButton.click();
  await page.waitForTimeout(500);
  expect (await materialPage.statusApprovedButton).toBeDefined();
});

test('Group materil by "Waiting" status - 11', async ({ page }) => {
  const loginPage = new Login(page);
  const materialPage = new Materials(page);
  await loginPage.goTo();
  await loginPage.login(email, password);
  await materialPage.materialsTab.click();
  await page.waitForTimeout(2000);
  await materialPage.statusAllButton.click();
  await materialPage.waitingButton.click();
  await page.waitForTimeout(500);
  expect (await materialPage.statusWaitingButton).toBeDefined();
});

test('Group materil by "Rejected" status - 12', async ({ page }) => {
  const loginPage = new Login(page);
  const materialPage = new Materials(page);
  await loginPage.goTo();
  await loginPage.login(email, password);
  await materialPage.materialsTab.click();
  await page.waitForTimeout(2000);
  await materialPage.statusAllButton.click();
  await materialPage.rejectedButton.click();
  await page.waitForTimeout(500);
  expect (await materialPage.statusRejectedButton).toBeDefined();
});

test('Open the created material and edit it - 13', async ({ page }) => {
  const loginPage = new Login(page);
  const materialPage = new Materials(page);
  await loginPage.goTo();
  await loginPage.login(email, password);
  await page.waitForTimeout(1000);
  await materialPage.materialsTab.click();
  await page.waitForTimeout(1000);

  await materialPage.searchFld.fill('New Mat Name');
  await page.waitForTimeout(2000);
  await materialPage.materialCategoryLabel.click();

  //TODO add the ID locator for this element
  await materialPage.editButtonForRowWithText.click();
  await materialPage.editButton.click();
  await materialPage.materialNameFld.dblclick();
  await materialPage.materialNameFld.fill('');
  await materialPage.materialNameFld.fill(materialName +' (Edited)');
  await materialPage.saveBtn.click();

  await page.waitForTimeout(500);
  await materialPage.searchFld.fill('Edited');
  await page.waitForTimeout(500);

  //Check if the edited text is displayed
  expect(await page.getByText(materialName +'(Edited)')).toBeTruthy();
});

test('Cansel editing of exsisting material - 14', async ({ page }) => {
  const loginPage = new Login(page);
  const materialPage = new Materials(page);
  await loginPage.goTo();
  await loginPage.login(email, password);
  await page.waitForTimeout(1000);
  await materialPage.materialsTab.click();
  await page.waitForTimeout(1000);

  await materialPage.searchFld.fill(materialName);
  await page.waitForTimeout(2000);
  await materialPage.materialCategoryLabel.click();

  //TODO add the ID locator for this element
  await materialPage.editButtonForRowWithText.click();
  await materialPage.editButton.click();
  await materialPage.materialNameFld.dblclick();
  await materialPage.materialNameFld.fill('');
  await materialPage.materialNameFld.fill(materialName +' (Edited)');
  await materialPage.canselBtn.click();

  //Check if the modal is closed and the "new material" btn is displayed
  expect(await materialPage.addNewMaterial).toBeDefined();
});

test('Open the created material and "See all" it - 15', async ({ page }) => {
  const loginPage = new Login(page);
  const materialPage = new Materials(page);
  await loginPage.goTo();
  await loginPage.login(email, password);
  await page.waitForTimeout(1000);
  await materialPage.materialsTab.click();
  await page.waitForTimeout(1000);

  await materialPage.searchFld.fill(materialName);
  await page.waitForTimeout(2000);
  await materialPage.materialCategoryLabel.click();

  //TODO add the ID locator for this element
  await materialPage.editButtonForRowWithText.click();
  await materialPage.seeAllButton.click();

  await page.waitForTimeout(500);

  //Check if the the popup text is displayeds
  expect(await materialPage.allParameterPopup).toBeTruthy();
});

// test.only('Add coment to the exsisting material - 16', async ({ page }) => {
//   const loginPage = new Login(page);
//   const materialPage = new Materials(page);
//   await loginPage.goTo();
//   await loginPage.login(email, password);
//   await page.waitForTimeout(1000);
//   await materialPage.materialsTab.click();
//   await page.waitForTimeout(1000);

//   await materialPage.searchFld.fill(materialName);
//   await page.waitForTimeout(2000);
//   await materialPage.materialCategoryLabel.click();

//   //TODO add the ID locator for this element
//   await materialPage.editButtonForRowWithText.click();
//   await page.pause();
//   await materialPage.seeAllButton.click();

//   await page.waitForTimeout(500);

//   //Check if the the popup text is displayeds
//   expect(materialPage.allParameterPopup).toBeTruthy();
// });

// test('Use search to find material by the fuul name - 17', async ({ page }) => {
//   const loginPage = new Login(page);
//   const materialPage = new Materials(page);

//   await loginPage.goTo();
//   await loginPage.login(email, password);
//   await page.waitForTimeout(1000);
//   await materialPage.materialsTab.click();
//   await page.waitForTimeout(1000);

//   await materialPage.searchFld.fill(materialName);
//   await page.waitForTimeout(2000);

//   //Check if the the popup text is displayeds
//   expect(await page.getByText(materialName)).toBeTruthy();
// });

// test.only('Use search to find material by the Last part of the name - 18', async ({ page }) => {
//   const loginPage = new Login(page);
//   const materialPage = new Materials(page);
//   const lastPart = 'Name';

//   await loginPage.goTo();
//   await loginPage.login(email, password);
//   await page.waitForTimeout(1000);
//   await materialPage.materialsTab.click();
//   await page.waitForTimeout(1000);

//   //Find the material by the firls pdrt of the name
//   await materialPage.searchFld.fill(lastPart);
//   await page.waitForTimeout(2000);

//   //Check if the the popup text is displayeds
//   expect(await page.getByText(lastPart)).toBeTruthy();
// });
