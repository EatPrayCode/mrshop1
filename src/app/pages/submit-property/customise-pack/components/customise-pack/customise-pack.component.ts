import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { mockMonthlyHomeEssentialsProduct2 } from 'src/app/mock-data/mockJsonPacks';
@Component({
  selector: 'app-customise-pack',
  templateUrl: './customise-pack.component.html',
  styleUrls: ['./customise-pack.component.scss']
})
export class CustomisePackComponent implements OnChanges {

  @Input() inputData: any = mockMonthlyHomeEssentialsProduct2;
  @Output() packChange = new EventEmitter();
  form: FormGroup = new FormGroup({});
  packLoaded: any = false;

  tiles: any[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  ngOnChanges(changeRecord: SimpleChanges) {
    const record = changeRecord.inputData;
    const inputData = record.currentValue || '';
    if (this.inputData && this.inputData.packId ) {
      this.inputData = inputData;
      this.packLoaded = true;
      this.initialisePage(mockMonthlyHomeEssentialsProduct2);
    }
  }

  doSomething(event: any) {

  }

  initialisePage(inputData: any) {
    this.initPackSize(inputData, 0);
    this.runOverArray();
  }

  constructor(private fb: FormBuilder) {
    if (this.inputData && this.inputData.packId) {
      this.initialisePage(this.inputData);
      this.packLoaded = true;
    }
  }

  initPackSize(inputData: any, templateIndex: any) {
    const packSizes: any = (inputData && inputData.packSizes) ? inputData.packSizes : [];
    const packSize: any = (packSizes) ? packSizes[0] : {};
    const packTemplates: any = (inputData && inputData.packTemplates) ? inputData.packTemplates : [];
    const template: any = (packTemplates) ? packTemplates[templateIndex] : {};
    const packName = inputData.packName || '';
    const items: any = template ? template.value.items : [];
    this.form = this.fb.group({
      packName: [packName],
      packTemplate: [template],
      packTemplates: [packTemplates],
      packSize: [packSize],
      packSizes: [packSizes],
      items: this.initItemsListFormArray(items, this.fb),
      packTotal: [0]
    });
  }

  initItemsListFormArray(list: any, fb: any) {
    const itemsFormArray: FormArray = fb.array([]);

    list.forEach((item: any) => {
      const quantityIndex = item.quantity ? item.quantityList.findIndex((x: any) => x.key === item.quantity.key) : 0;
      const brandIndex = item.brand ? item.brandsList.findIndex((x: any) => x.key === item.brand.key) : 0;
      const brand = item.brandsList[brandIndex];
      const variantsList = brand.variantsList;
      const variantIndex = item.variant ? variantsList.findIndex((x: any) => x.key === item.variant.key) : 0;
      const variant = variantsList[variantIndex];

      const pricePerItem = variant.price;
      const quantity = item.quantity || item.quantityList[quantityIndex];
      const totalPricePerItem = (pricePerItem * quantity.value || 0);

      itemsFormArray.push(
        fb.group({
          isChecked: (item.isChecked),
          isBrandless: (item.isBrandless),
          name: (item.name),
          pricePerItem: (pricePerItem),
          totalPricePerItem: (totalPricePerItem),
          brand: (brand),
          variant: (variant),
          quantity: new FormControl(quantity),
          brandsList: ([item.brandsList]),
          quantityList: ([item.quantityList]),
        })
      );
    });

    return itemsFormArray;
  }

  runOverArray() {
    const itemsFormArray = (<FormArray>this.form.get("items")) as FormArray;
    const disableEnableOptions = { emitEvent: false };
    itemsFormArray.controls.forEach((element, index) => {
      const isChecked = element.get("isChecked")?.value;
      if (isChecked) {
        element.get("quantity")?.enable();
        element.get("variant")?.enable();
        element.get("brand")?.enable();
        element.get("pricePerItem")?.enable();
        element.get("totalPricePerItem")?.enable();
        const item = element.value;
        const pricePerItem = item.variant.price;
        const quantity = item.quantity;
        const totalPricePerItem = (pricePerItem * quantity.value);
        element.patchValue({
          totalPricePerItem: totalPricePerItem,
          pricePerItem: pricePerItem
        }, disableEnableOptions);
      }
      else {
        element.get("quantity")?.disable();
        element.get("variant")?.disable();
        element.get("brand")?.disable();
        element.get("pricePerItem")?.disable();
        element.get("totalPricePerItem")?.disable();
        element.get("name")?.disable();
      }
    });

    let items = itemsFormArray.value;
    items = items.filter((ele: any) => {
      return ele.isChecked
    });
    const packTotal = items.reduce((a: any, b: any) => a + +b.totalPricePerItem, 0);
    this.form.patchValue({
      packTotal: packTotal
    });
  }

  changeBrand(e: any, index: any) {
    const myForm = (<FormArray>this.form.get("items")).at(index);
    const item = myForm.value;
    myForm.patchValue({
      variant: item.brand.variantsList[0]
    });
    this.runOverArray();
  }

  changeQuantity(e: any, index: any) {
    this.runOverArray();
  }

  changeVariant(e: any, index: any) {
    this.runOverArray();
  }

  changeCheckbox(e: any, index: any) {
    this.runOverArray();
  }

  toggleBrandless(e: any, index: any) {
    this.runOverArray();
  }

  changePackSize(e: any) {
    const packSize = e;
    const itemsFormArray = this.form.controls.items as FormArray;
    itemsFormArray.controls.forEach((element, index) => {
      const quantityList = element.get("quantityList")?.value;
      const quantityIndex = quantityList.findIndex((x: any) => x.key === packSize.key);
      element.patchValue({
        quantity: (quantityList[quantityIndex])
      });
    });
    this.runOverArray();
  }

  changePackTemplate(e: any) {
    const packTemplates = this.inputData.packTemplates;
    const templateIndex = packTemplates.findIndex((x: any) => x.key === e.key);
    this.initPackSize(this.inputData, templateIndex);
    this.runOverArray();
  }

  trackFn(index: any) {
    return index;
  }

  readonly languages = [{
    viewValue: 'en'
  }, {
    viewValue: 'ru'
  }];

}
