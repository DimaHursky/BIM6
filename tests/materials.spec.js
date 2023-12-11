import { test, expect } from '@playwright/test';
import { Login } from './pageObjects/login-page';
import { Materials } from './pageObjects/materials-page';
import { TIMEOUT } from 'dns';

const email = 'borisbritva6996@gmail.com';
const password = '12345!Hur';
const namberVallue = '2510.12';

test('Create valid material with filled all fields - 1', async ({ page }) => {
  const loginPage = new Login(page);
  const materialPage = new Materials(page);
  await loginPage.goTo();
  await loginPage.login(email, password);
  await materialPage.materialsTab.click({ waitForTimeout: 5000 });
  await materialPage.addNewMaterial.click({ waitForTimeout: 5000 });
  await materialPage.materialMameFld.fill('New Mat Name');
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
  const hendle = page.locator('input[type="file"]');
  await hendle.setInputFiles('D:/DevIT/BIM6/EmptyEstimation.pdf');
  // await materialPage.canselBtn.click();
  await materialPage.saveBtn.click();

  expect(await materialPage.matirialIsCrweatedPopup).toBeVisible();
  await page.waitForTimeout(3000);
});

test('Input file with invalid extension - 2', async ({ page }) => {
  const loginPage = new Login(page);
  const materialPage = new Materials(page);
  await loginPage.goTo();
  await loginPage.login(email, password);
  await materialPage.materialsTab.click({ tomeout: 3000 });
  await page.waitForTimeout(3000);
  await materialPage.addNewMaterial.click({waitForTimeout: 3000});

  const hendle = page.locator('input[type="file"]');
  await hendle.setInputFiles('D:/DevIT/BIM6/EmptyEstimation.xlsx');

  expect(await materialPage.fileTypeMustBePdfErr).toBeVisible({timeout: 3000});

  await materialPage.saveBtn.click();
});

test.only('Create material when all fields are empty - 3', async ({ page }) => {
  const loginPage = new Login(page);
  const materialPage = new Materials(page);
  await loginPage.goTo();
  await loginPage.login(email, password);
  await materialPage.materialsTab.click({ tomeout: 3000 });
  await page.waitForTimeout(3000);
  await materialPage.addNewMaterial.click({ waitForTimeout: 3000 });
  
  await page.pause();
  await materialPage.saveBtn.click();  
});
//Create valid material with filled all fields
//Input file with invalid extension
//Create material when all fields are empty
//Create matirial and Choose type of filling A level: A1
//Create matirial and Choose type of filling A level: A2
//Create matirial and Choose type of filling A level: A3
//Create material and add hte PDF file
//Fill all firlds and cansel creating the material on "CAnsel" btn
//Fill all firlds and cansel creating the material on "X" button
//Cansel creating the material with empty fields "CAnsel" btn
//Cansel creating the material with empty fields "X" button
//Groul materil by "All" status
//Groul materil by "Approwed" status
//Groul materil by "Waiting" status
//Groul materil by "Rejected" status
//Open created matirial
//Open created matirial and click "See all" button
//Edit material and save changes
//Edit material and cansel changes
//add coment to the material
//use search to find material by the fuul name
//use search to find material by the first part of the name