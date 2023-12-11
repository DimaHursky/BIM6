const { expect } = require('@playwright/test');

exports.Materials = class Mterials {

    constructor(page) {
        this.page = page;
        this.materialsTab = page.getByRole('tab', { name: 'Materials' });
        this.addNewMaterial = page.getByRole('button', { name: 'Add new' });

        this.materialMameFld = page.getByPlaceholder('Material name');
        this.materialCategoryDropDown = page.locator('div').filter({ hasText: /^Material category$/ }).nth(1);
        this.newMaterial2Option = page.getByText('New Material 2', { exact: true }); //wallue of material category
        this.factoryDropDown = page.locator('div').filter({ hasText: /^Factory$/ }).nth(1);
        this.facroryVallue = page.getByText('dev IT', { exact: true }); //vallue of the factory
        this.a1_a3CheckBox = page.getByLabel('A1-A3');
        this.a1A2A3CheckBox = page.getByLabel('A1, A2, A3');
        this.materialExtractionFld = page.getByPlaceholder('A1: Material Extraction (kgCO2e)');
        this.A2TransportToFactoryFld = page.getByPlaceholder('A2: Transport to Factory (kgCO2e)');
        this.A3ManufacturingFld = page.getByPlaceholder('A3: Manufacturing (kgCO2e)');
        this.A4TransportToSiteFld = page.getByPlaceholder('A4: Transport to Site (kgCO2e)');
        this.A5ConstructionFld = page.locator('input[name="a5Construction"]');
        this.B1UseFld = page.locator('input[name="b1Use"]');
        this.B2MaintenanceFld  = page.getByPlaceholder('B2: Maintenance (kgCO2e)');
        this.B3RepairFld = page.getByPlaceholder('B3: Repair (kgCO2e)');
        this.B4ReplacementFld= page.getByPlaceholder('B4: Replacement (kgCO2e)');
        this.B5RefurbishmentFld = page.getByPlaceholder('B5: Refurbishment (kgCO2e)');
        this.B6OperationalEnergyUseFld = page.getByPlaceholder('B6: Operational Energy Use (kgCO2e)');
        this.B7OperationalWaterUseFld = page.getByPlaceholder('B7: Operational Water Use (kgCO2e)');
        this.C1DeconstructionFld = page.getByPlaceholder('C1: Deconstruction (kgCO2e)');
        this.C2TransportFld = page.getByPlaceholder('C2: Transport (kgCO2e)');
        this.C3WasteProcessingFld = page.getByPlaceholder('C3: Waste Processing (kgCO2e)');
        this.C4DisposalFld = page.getByPlaceholder('C4: Disposal (kgCO2e)');
        this.DReuseRecoveryRecyclingFld = page.getByPlaceholder('D : Reuse, Recovery,');
        this.A1_A3Fld = page.getByPlaceholder('A1-A3');

        this.canselBtn = page.getByText('Cancel');
        this.saveBtn = page.getByText('Save');



        //Errors
        this.matirialIsCrweatedPopup = page.getByText('Material has been created');
        this.fileTypeMustBePdfErr = page.getByText('File type must be application/pdf,.pdf');

//           await page.getByText('Save').click();
//   await page.getByText('Material name is required').click();
//   await page.getByText('Material category is required').click();
//   await page.getByText('Factory is required').click();
//   await page.getByText('A1: Material Extraction (kgCO2e) is required').click();
//   await page.getByText('A2: Transport to Factory (kgCO2e) is required').click();
//   await page.getByText('A3: Manufacturing (kgCO2e) is').click();
//   await page.getByText('A4: Transport to Site (kgCO2e) is required').click();
//   await page.getByText('A5: Construction (kgCO2e) is').click();
//   await page.getByText('B1: Use (kgCO2e) is required').first().click();
//   await page.getByText('B1: Use (kgCO2e) is required').nth(1).click();
//   await page.getByText('B3: Repair (kgCO2e) is').click();
//   await page.getByText('B4: Replacement (kgCO2e) is').click();
//   await page.getByText('B5: Refurbishment (kgCO2e) is').click();
//   await page.getByText('B6: Operational Energy Use (kgCO2e) is required').click();
//   await page.getByText('B7: Operational Water Use (kgCO2e) is required').click();
//   await page.getByText('C1: Deconstruction (kgCO2e) is required').click();
//   await page.getByText('C2: Transport (kgCO2e) is').click();
//   await page.getByText('C3: Waste Processing (kgCO2e) is required').click();
//   await page.getByText('C4: Disposal (kgCO2e) is').click();
//   await page.getByText('D : Reuse, Recovery, Recycling (kgCO2e) is required').click();
//   await page.getByText('EPD is required').click();

    }

    async goTo() {

        await this.page.goto('https://dar-ui-supplier.dev-test.pro/');
    }
}

