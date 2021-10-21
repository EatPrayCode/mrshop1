import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AppAuthService } from 'src/app/services/app.auth.service';
import { MatDialogRef } from '@angular/material/dialog';
import { DataService } from '../../../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { StateService } from 'src/app/services/state.service';
import { appSettingsState } from 'src/app/mock-data/app.models';

@Component({
  selector: 'app-choose-app-settings-modal',
  templateUrl: './choose-app-settings-modal.component.html',
  styleUrls: ['./choose-app-settings-modal.component.scss']
})
export class ChooseAppSettingsModalComponent implements OnInit {

  createAccountForm: FormGroup = new FormGroup({});
  countries: any = {};
  states: any = {};
  cities: any = {};

  customerProfiles: any = {};
  customerTypes: any = {};
  customerPackSizes: any = {};

  currentCountries = [{
    country_name: 'country_name',
    id: '1'
  }];

  currentStates = [{
    state_name: 'state_name',
    id: '1'
  }];

  currentCities = [{
    city_name: 'city_name',
    id: '1'
  }];

  currentCustomerTypes = [{
    customer_type_name: 'customer_type_name',
    id: '1'
  }];

  currentCustomerProfiles = [{
    customer_profile_name: 'customer_profile_name',
    id: '1'
  }];

  currentPackSizes = [{
    pack_size_name: 'customer_pack_size_name',
    id: '1'
  }];

  initFn() {

    of(this.currentCountries).subscribe(
      data => this.countries = data
    );

    of(this.currentCustomerProfiles).subscribe(
      data => this.customerProfiles = data
    );

    of(this.currentCustomerTypes).subscribe(
      data => this.customerTypes = data
    );

    of(this.currentPackSizes).subscribe(
      data => this.customerPackSizes = data
    );
    this.createAccountForm = new FormGroup({
      country: new FormControl(''),
      state: new FormControl(''),
      city: new FormControl(''),
      customerProfile: new FormControl(''),
      customerType: new FormControl(''),
      customerPackSize: new FormControl(''),
    });

  }

  onChangeCountry(countryId: any) {
    if (countryId) {
      of(this.currentStates).subscribe(
        data => {
          this.states = data;
          this.cities = null;
        }
      );
    } else {
      this.states = null;
      this.cities = null;
    }
  }

  onChangeState(stateId: any) {
    if (stateId) {
      of(this.currentCities).subscribe(
        data => this.cities = data
      );
    } else {
      this.cities = null;
    }
  }

  userSettingsForm: FormGroup = new FormGroup({});

  public lat: any = '';
  public lng: any = '';

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private ref: MatDialogRef<ChooseAppSettingsModalComponent>,
    public appService: AppAuthService,
    public stateService: StateService
  ) { }

  ngOnInit() {
    this.initFn();
    this.userSettingsForm = this.formBuilder.group({
      country: [''],
      pinCode: [''],
      countries: [''],
      customerType: ['']
    });
    this.dataService.loadCountries({}).subscribe(res => {
      this.userSettingsForm.controls.countries.setValue(res);
    });
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: any) => {
        if (position) {
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          this.getZipCode({
            latitude: this.lat,
            longitude: this.lng
          });
        }
      },
        (error: any) => console.log(error));
    }
    else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  getZipCode(payload: any) {
    this.dataService.getZipCode(payload).subscribe(res => { });
  }

  explore() { }

  selectedSettings(payload: any) {
    const userLocationData = {
      country: 'INDIA',
      pinCode: payload,
      settingsId: this.stateService.appSettingsSubject.value.userLocationData ? this.stateService.appSettingsSubject.value.userLocationData?.settingsId : ''
    }
    const obj: appSettingsState = {
      ...this.stateService.appSettingsSubject.value,
      isLocationSaved: true,
      userLocationData
    };
    this.locationSavehelper(obj);
  }

  selectedCard: any = false;
  public currencies = ['B2C', 'B2B'];
  public currency: any;

  public changeCurrency(currency: any) {
    this.currency = currency;
  }

  onSelectCard(i: any) {
    this.selectedCard = i;
  }

  unSelectedSettings() {
    const userLocationData = {
      country: 'INDIA',
      pinCode: 'DEFAULT',
      settingsId: this.stateService.appSettingsSubject.value.userLocationData ? this.stateService.appSettingsSubject.value.userLocationData?.settingsId : ''
    }
    const obj: appSettingsState = {
      ...this.stateService.appSettingsSubject.value,
      isLocationSaved: true,
      userLocationData
    };
    this.locationSavehelper(obj);
  }

  locationSavehelper(obj: any) {
    this.stateService.saveLocationSettings(obj).pipe(tap(res => {

      this.stateService.appSettingsSubject.next(obj);
    })).subscribe((res: any) => {
      this.stateService.saveToLocalStorage(obj);
      this.ref.close(obj);
    });
  }

  continue() { }

}
