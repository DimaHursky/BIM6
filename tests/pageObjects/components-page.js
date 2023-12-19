const { expect } = require('@playwright/test');

exports.Components = class Components {

    constructor(page) {
        this.page = page;

        // 1 General chapter
        this.addNewButton = page.getByRole('button', { name: 'Add new' });
        this.productCategoryDropDown = page.locator('div').filter({ hasText: /^Product category$/ }).nth(1);
        this.newCategoryVallue = page.getByText('New Category 1', { exact: true }); //Vallue of the Product category
        this.productNameFld = page.getByPlaceholder('Product name');
        this.capacitySizeFld = page.getByPlaceholder('Capacity/Size of Equipment');
        this.unitsDivDropDown = page.locator('div').filter({ hasText: /^Units$/ }).nth(2);
        this.kgVallue = page.getByText('kg', { exact: true }); //vallue od Units
        this.serviceLifeFld = page.getByPlaceholder('Product Service Life (years)');
        this.weightFld = page.getByPlaceholder('Product Weight (kg)');
        this.nextStepButton = page.getByText('Next Step');

        // 2 Basics chapter
        this.categoryDropDown = page.locator('#react-select-8-placeholder');
        this.newMaterialVallue = page.getByText('New Material 2', { exact: true });;

        this.materialFld = page.locator('#react-select-10-placeholder');
        this.materiallVallue =  page.getByText('New Mat Name A1, A2, A3', { exact: true });
        this.persentageFld = page.locator('input[name="materialBreakdown\\.0\\.percentage"]');

        this.refrigerantTypeDropDown = page.locator('div').filter({ hasText: /^Refrigerant type$/ }).nth(2);
        this.amoniaR17Vallue = page.getByText('Ammonia (R717)', { exact: true }); //Vallue of Refrigerant type
        this.refrigerantChargeKgFld = page.getByPlaceholder('Refrigerant charge (kg)');
        this.refrigerantLeakageScenarioDropDown = page.locator('div').filter({ hasText: /^Refrigerant Leakage Scenario$/ }).nth(2);
        //vallue of refrigerantLeakageScenarioDropDown
        this.noRefrigerantLeakageVallue = page.getByText('No refrigerant leakage scenario', { exact: true });

        this.categoryDropDown2 = page.locator('div').filter({ hasText: /^Category$/ }).nth(2);
        this.newMaterial2Vallue = page.locator('#react-select-6-option-0');

        this.materialFld2 = page.locator('div').filter({ hasText: /^Material$/ }).nth(2);
        this.newMatNameVallue = page.locator('#react-select-7-option-0');
        this.persentageFld2 = page.locator('input[name="materialReplacement\\.0\\.percentage"]');

        // 3 Middle chapter
        this.factoryNameDropDown = page.locator('div').filter({ hasText: /^Factory name$/ }).nth(2);
        this.devItCompany = page.getByText('dev IT', { exact: true });
        this.componentNameFld = page.getByPlaceholder('Component Name');
        this.kgFld = page.getByPlaceholder('kg');
        this.avarageOutputTonegeFld = page.getByPlaceholder('Average output tonnage of');

        // 4 Additional chapter
        this.annualFactoryWasteOutputFld = page.getByPlaceholder('Annual Factory Waste Output');
        this.annualAnnualFactoryWaterFld = page.getByPlaceholder('Annual Factory Water');
        this.percentageOpProductReusedFld = page.getByPlaceholder('Percentage of product reused');
        this.percentageOpProductRecoveredAtEndOfLifedFld = page.getByPlaceholder('Percentage of product recovered at end of life (%)');
        this.warrantyYearsFld = page.getByPlaceholder('Warranty (years)');
        this.costAverageSalesPriceFld = page.getByPlaceholder('Cost (Average Sales Price)');
        this.currensyDropDown = page.getByText('$');
        this.usdVallue = page.getByText('USD', { exact: true });
        this.ownershipModelFld = page.getByPlaceholder('Ownership Model');
        this.maintenanceRecommendationsFld = page.getByPlaceholder('Maintenance Recommendations');

        this.componentCreatedAlert = page.getByText('Component has been created');
        // this.componentCreatedAlert = page.getByRole('alert');

        //Errors
        // 1 General chapter
        this.productCategoryIsRequiredErr = page.getByText('Product category is required');
        this.productNameIsRequiredErr = page.getByText('Product name is required');
        this.capacitySizeOfEquipmentRequiredErr = page.getByText('Capacity/Size of Equipment is').first();
        this.unitsIsRequiredErr = page.getByText('Units is required');
        this.capacitySizeOfEquipmentRequiredErr = page.getByText('Capacity/Size of Equipment is').nth(1);

        // 2 basic chapter
        this.categoryRequiredErr = page.getByText('Category is required').first();
        this.materialIsRequiredErr = page.getByText('Material is required').first();
        this.rercentageIsPequiredErr = page.getByText('Percentage is required').first();
        this.refrigerantTypeIsRequiredErr = page.getByText('Refrigerant type is required');
        this.refrigerantChargeIsRequiredErr = page.getByText('Refrigerant charge is required');
        this.refrigerantLeakageScenarioIsRequiredErr = page.getByText('Refrigerant Leakage Scenario is required');
        this.categoryIsRequiredErr = page.getByText('Category is required').nth(1);
        this.materialIsRequiredErr2 = page.getByText('Material is required').nth(1);
        this.percentageIsRequiredErr = page.getByText('Percentage is required').nth(1);
        this.expectedNumberErr1 = page.getByText('Expected number').first();
        this.expectedNumberErr2 = page.getByText('Expected number').nth(1);
        this.expectedNumberErr3 = page.getByText('Expected number').nth(2);
      
      // 4 Additional chapter
        this.expectedNumberAddotionalErr1 = page.locator('.MuiFormHelperText-root').first();
        this.expectedNumberAddotionalErr2 = page.locator('div:nth-child(2) > .MuiStack-root > .MuiFormHelperText-root');
        this.expectedNumberAddotionalErr3 = page.locator('div:nth-child(3) > .MuiStack-root > .MuiFormHelperText-root');
        this.expectedNumberAddotionalErr4 = page.locator('div:nth-child(4) > .MuiStack-root > .MuiFormHelperText-root');
        this.expectedNumberAddotionalErr5 = page.locator('div:nth-child(5) > .MuiStack-root > .MuiFormHelperText-root');
        this.expectedNumberAddotionalErr6 = page.locator('.additional__cost > .MuiStack-root > .MuiFormHelperText-root');

    }

      async CreateVlidComponent() {

        const productName = 'New Product';
        const numbersVallue = '131.56';
        const persantegeVallue = '96';
        const avarageOutputTonege = '10';

        await this.addNewButton.click();

        // 1 General chapter
        await this.productCategoryDropDown.click();
        await this.newCategoryVallue.click();
        await this.productNameFld.fill(productName);
        await this.capacitySizeFld.fill(numbersVallue);
        await this.unitsDivDropDown.click();
        await this.kgVallue.click();
        await this.serviceLifeFld.fill(numbersVallue);
        await this.weightFld.fill(numbersVallue);
        await this.nextStepButton.click();

        // 2 Basic chapter
        await this.categoryDropDown.click();
        await this.newMaterialVallue.click();

        await this.materialFld.click();
        await this.materiallVallue.click();
        await this.persentageFld.fill(persantegeVallue);

        await this.refrigerantTypeDropDown.click();
        await this.amoniaR17Vallue.click();
        await this.refrigerantChargeKgFld.fill(numbersVallue);
        await this.refrigerantLeakageScenarioDropDown.click();
        await this.noRefrigerantLeakageVallue.click();

        await this.categoryDropDown2.click();
        await this.newMaterial2Vallue.click();
        await this.materialFld2.click();
        await this.newMatNameVallue.click();
        await this.persentageFld2.fill(persantegeVallue);
        await this.nextStepButton.click();

        // 3 Middle chapter
        await this.factoryNameDropDown.click();
        await this.devItCompany.click();
        await this.componentNameFld.fill(numbersVallue);
        await this.kgFld.fill(numbersVallue);
        await this.avarageOutputTonegeFld.fill(avarageOutputTonege); 
        await this.nextStepButton.click();

        // 4 Additional chapter
        await this.annualFactoryWasteOutputFld.fill(numbersVallue);
        await this.annualAnnualFactoryWaterFld.fill(numbersVallue);
        await this.percentageOpProductReusedFld.fill(numbersVallue);
        await this.percentageOpProductRecoveredAtEndOfLifedFld.fill(numbersVallue);
        await this.warrantyYearsFld.fill(numbersVallue);
        await this.costAverageSalesPriceFld.fill(numbersVallue);
        await this.currensyDropDown.click()
        await this.usdVallue.click();
        await this.ownershipModelFld.fill(numbersVallue);
        await this.maintenanceRecommendationsFld.fill(numbersVallue);

        await this.nextStepButton.click();
    }

    
      async FillMiddleFields() {

        const productName = 'New Product';
        const numbersVallue = '131.56';
        const persantegeVallue = '96';
        const avarageOutputTonege = '10';

        await this.addNewButton.click();

        // 1 General chapter
        await this.productCategoryDropDown.click();
        await this.newCategoryVallue.click();
        await this.productNameFld.fill(productName);
        await this.capacitySizeFld.fill(numbersVallue);
        await this.unitsDivDropDown.click();
        await this.kgVallue.click();
        await this.serviceLifeFld.fill(numbersVallue);
        await this.weightFld.fill(numbersVallue);
        await this.nextStepButton.click();

        // 2 Basic chapter
        await this.categoryDropDown.click();
        await this.newMaterialVallue.click();

        await this.materialFld.click();
        await this.materiallVallue.click();
        await this.persentageFld.fill(persantegeVallue);

        await this.refrigerantTypeDropDown.click();
        await this.amoniaR17Vallue.click();
        await this.refrigerantChargeKgFld.fill(numbersVallue);
        await this.refrigerantLeakageScenarioDropDown.click();
        await this.noRefrigerantLeakageVallue.click();

        await this.categoryDropDown2.click();
        await this.newMaterial2Vallue.click();
        await this.materialFld2.click();
        await this.newMatNameVallue.click();
        await this.persentageFld2.fill(persantegeVallue);
        await this.nextStepButton.click();

        // 3 Middle chapter
        await this.factoryNameDropDown.click();
        await this.devItCompany.click();
        await this.componentNameFld.fill(numbersVallue);
        await this.kgFld.fill(numbersVallue);
        await this.avarageOutputTonegeFld.fill(avarageOutputTonege); 
        await this.nextStepButton.click();

    }
};