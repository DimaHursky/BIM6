const { expect } = require('@playwright/test');

exports.Materials = class Mterials {

    constructor(page) {
        this.page = page;
        this.materialsTab = page.getByRole('tab', { name: 'Materials' });
        this.addNewMaterial = page.getByRole('button', { name: 'Add new' });

        this.materialNameFld = page.getByPlaceholder('Material name');
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
        this.deletePdfFile = page.getByText('Delete');

        this.canselBtn = page.getByText('Cancel');
        this.closelXBtn = page.getByLabel('close');
        this.saveBtn = page.getByText('Save');

        this.statusAllButton = page.getByRole('button', { name: 'Status: All' });
        this.approvedButton = page.locator('button').filter({ hasText: 'Approved' });
        this.statusApprovedButton = page.getByRole('button', { name: 'Status: Approved' });
        this.waitingButton = page.locator('button').filter({ hasText: 'Waiting' });
        this.statusWaitingButton = page.getByRole('button', { name: 'Status: Waiting' });
        this.rejectedButton = page.locator('button').filter({ hasText: 'Rejected' });
        this.statusRejectedButton = page.getByRole('button', { name: 'Status: Rejected' });


        this.searchFld = page.getByPlaceholder('Search...');
        this.searchFld.press('Enter');
        this.materialCategoryLabel = page.getByLabel('Material Category has been');

        // this.editButtonForRowWithText = page.locator('tr').filter({ hasText: '657868a70fe6fa08e029a173New' }).getByRole('button').nth(1);
        // this.editButton = page.locator('button').filter({ hasText: 'Edit' });
        // this.seeAllButton = page.locator('button').filter({ hasText: 'See all' });
        // this.allParameterPopup = page.getByText('All parameters');

        this.editButtonForRowWithText = page.locator('tr').filter({ hasText: '657868a70fe6fa08e029a173New' }).getByRole('button').nth(1);
        this.editButton = page.locator('button').filter({ hasText: 'Edit' });
        this.seeAllButton = page.locator('button').filter({ hasText: 'See all' });
        this.allParameterPopup = page.getByText('All parameters');
        
        //Errors
        this.matirialIsCrweatedPopup = page.getByText('Material has been created');
        this.fileTypeMustBePdfErr = page.getByText('File type must be application/pdf,.pdf');

        this.materialNameError = page.getByText('Material name is required');
        this.materialCategoryError = page.getByText('Material category is required');
        this.factoryError = page.getByText('Factory is required');
        this.a1ExtractionError = page.getByText('A1: Material Extraction (kgCO2e) is required');
        this.a2TransportToFactoryError = page.getByText('A2: Transport to Factory (kgCO2e) is required');
        this.a3ManufacturingError = page.getByText('A3: Manufacturing (kgCO2e) is required');
        this.a4TransportToSiteError = page.getByText('A4: Transport to Site (kgCO2e) is required');
        this.a5ConstructionError = page.getByText('A5: Construction (kgCO2e) is required');
        this.b1UseError1 = page.getByText('B1: Use (kgCO2e) is required').first();
        this.b1UseError2 = page.getByText('B1: Use (kgCO2e) is required').nth(1);
        this.b3RepairError = page.getByText('B3: Repair (kgCO2e) is required');
        this.b4ReplacementError = page.getByText('B4: Replacement (kgCO2e) is required');
        this.b5RefurbishmentError = page.getByText('B5: Refurbishment (kgCO2e) is required');
        this.b6OperationalEnergyError = page.getByText('B6: Operational Energy Use (kgCO2e) is required');
        this.b7OperationalWaterError = page.getByText('B7: Operational Water Use (kgCO2e) is required');
        this.c1DeconstructionError = page.getByText('C1: Deconstruction (kgCO2e) is required');
        this.c2TransportError = page.getByText('C2: Transport (kgCO2e) is required');
        this.c3WasteProcessingError = page.getByText('C3: Waste Processing (kgCO2e) is required');
        this.c4DisposalError = page.getByText('C4: Disposal (kgCO2e) is required');
        this.dReuseRecyclingError = page.getByText('D : Reuse, Recovery, Recycling (kgCO2e) is required');
        this.epdError = page.getByText('EPD is required');

    }

    async checkIfTheErrorsIsVisible() {

        expect(await this.materialNameError).toBeTruthy();
        expect(await this.materialCategoryError).toBeTruthy();
        expect(await this.factoryError).toBeTruthy();
        expect(await this.a1ExtractionError).toBeTruthy();
        expect(await this.a2TransportToFactoryError).toBeTruthy();
        expect(await this.a3ManufacturingError).toBeTruthy();
        expect(await this.a4TransportToSiteError).toBeTruthy();
        expect(await this.a5ConstructionError).toBeTruthy();
        expect(await this.b1UseError1).toBeTruthy();
        expect(await this.b1UseError2).toBeTruthy();
        expect(await this.b3RepairError).toBeTruthy();
        expect(await this.b4ReplacementError).toBeTruthy();
        expect(await this.b5RefurbishmentError).toBeTruthy();
        expect(await this.b6OperationalEnergyError).toBeTruthy();
        expect(await this.b7OperationalWaterError).toBeTruthy();
        expect(await this.c1DeconstructionError).toBeTruthy();
        expect(await this.c2TransportError).toBeTruthy();
        expect(await this.c3WasteProcessingError).toBeTruthy();
        expect(await this.c4DisposalError).toBeTruthy();
        expect(await this.dReuseRecyclingError).toBeTruthy();
        expect(await this.epdError).toBeTruthy();
    }
}

