import { FirebaseApiService } from '../core/firebase-api.service';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiURL = 'sampleurl';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private firebaseApiService: FirebaseApiService
  ) { }

  saveUserSettingsToFirebase(payload: any) {
    return this.firebaseApiService.saveUserSettingsToFirebase(payload);
  }

  getUserDataFirebase(payload: any) {
    return this.firebaseApiService.getUserDataFirebase(payload);
  }

  getClaimsData(authUser: any) {
    authUser.getIdTokenResult()
      .then((idTokenResult: any) => {
        const claims = idTokenResult.claims;
      });
  }

  loadUserSettingsFromFirebase(payload: any) {
    return this.firebaseApiService.loadUserSettingsFromFirebase(payload);
  }

  loadCountries(payload: any) {
    return this.firebaseApiService.getCountries();
  }

  getZipCode(payload: any) {
    return this.firebaseApiService.getZipCode(payload);
  }

  loadFirebasePacks(payload: any): Observable<any> {
    const request = {
      countryId: '',
      pinId: '',
      categoryType: ''
    };
    const obs1$ = this.firebaseApiService.loadFirebasePacks(request);
    return obs1$
      .pipe(
        delay(1000),
        map(data => {
          return this.responseHandlerFn(payload, data);
        })
      );
  }

  getPack(payload: any): Observable<any> {
    const obs1$ = this.firebaseApiService.getFirebasePack(payload);
    // const response = {
    //   pack: productsList[0],
    //   categoryType: 'home',
    //   isPackTypeValid: true,
    //   isPinCodeRequired: true,
    //   isAgeVerifictationRequired: true,
    //   isLoginRequired: true,
    //   isKYCRequired: true,
    //   isPacksAvailable: false,
    //   isB2CAvailable: true,
    //   isB2BAvailable: false
    // };
    return obs1$
      .pipe(
        delay(1000),
        map(data => {
          return this.responseHandlerFn(payload, data);
        })
      );
  }

  responseHandlerFn(payload: any, data: any) {
    return data;
  }

  handleError(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    }
    else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

}
