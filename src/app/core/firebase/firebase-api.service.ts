import { map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { HttpClient } from "@angular/common/http";
import {  appSettingsStateDefault } from 'src/app/mock-data/constants';
import { appSettingsState } from 'src/app/mock-data/app.models';

@Injectable({
  providedIn: 'root'
})
export class FirebaseApiService {

  constructor(
    private afStore: AngularFirestore,
    private afAuth: AngularFireAuth,
    private httpClient: HttpClient,
  ) { }

  // apiServer = 'http://localhost:3000/api/orders';
  // initialiseuserUrl = 'http://localhost:3000/api/initialiseuser';
  // addressesUrl = 'http://localhost:3000/api/addresses';
  // ordersUrl = 'http://localhost:3000/api/orders';
  // pincodePacksUrl = 'http://localhost:3000/api/pincodepacks';
  // pincodeUrl = 'http://localhost:3000/api/pincodes';
  // countryUrl = 'http://localhost:3000/api/countries';
  // accessClaimsUrl = 'http://localhost:3000/api/accessclaims';
  // userDataUrl = 'http://localhost:3000/api/userdata';
  // appStateUrl = 'http://localhost:3000/api/appstate';
  // packsUrl = 'http://localhost:3000/api/packs';

  apiServer = 'https://api.overthemoon.io/api/orders';
  initialiseuserUrl = 'https://api.overthemoon.io/api/initialiseuser';
  addressesUrl = 'https://api.overthemoon.io/api/addresses';
  ordersUrl = 'https://api.overthemoon.io/api/orders';
  pincodePacksUrl = 'https://api.overthemoon.io/api/pincodepacks';
  pincodeUrl = 'https://api.overthemoon.io/api/pincodes';
  countryUrl = 'https://api.overthemoon.io/api/countries';
  accessClaimsUrl = 'https://api.overthemoon.io/api/accessclaims';
  userDataUrl = 'https://api.overthemoon.io/api/userdata';
  appStateUrl = 'https://api.overthemoon.io/api/appstate';
  packsUrl = 'https://api.overthemoon.io/api/packs';

  loadFirebasePacks(payload: any): Observable<any> {
    const queryArray = [{ name: 'countryId' }, { name: 'pinId' }, { name: 'categoryType' }];
    var queryString = '?';
    queryArray.forEach(ele => {
      const name = ele.name;
      const value = payload[name];
      if (payload[name]) {
        queryString = queryString + name + '=' + value;
      }
    });
    const url = `${this.packsUrl}${queryString}`;
    return this.httpClient.get(url);
  }

  getFirebasePack(payload: any): Observable<any> {
    let { pinCode, packId } = payload;
    packId = 'IqSKuNrWtu6uJtc9556V';
    pinCode = {
      id: 'E0KTgYuOYNgpxFjlglRd'
    };
    const url = `${this.packsUrl}?pinCodeId=${pinCode.id}&packId=${packId}`;
    return this.httpClient.get(url);
  }

  loadUserSettingsFromFirebase(payload: appSettingsState): Observable<any> {
    const { uid } = payload;
    const url = `${this.appStateUrl}?uid=${uid}`;
    return this.httpClient.get<any>(url);
  }

  setUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afStore.doc(`users/${user.uid}`);
    const userData: any = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    };
    return userRef.set(userData, {
      merge: true
    });
  }

  getUserDataFirebase(authUser: any) {
    return this.afStore.doc<any>(`users/${authUser.uid}`).get().pipe();
  }

  saveUserSettingsToFirebase(payload: appSettingsState): Observable<any> {
    const { userLocationData } = payload;
    const { uid } = payload;
    const url = `${this.appStateUrl}?uid=${uid}`;
    if (uid) {
      if (userLocationData?.settingsId) {
        return this.httpClient.put<appSettingsState>(url, userLocationData);
      }
      else {
        return this.httpClient.post<appSettingsState>(url, userLocationData);
      }
    }
    else {
      return of(appSettingsStateDefault);
    }
  }

  getCountries(): Observable<any> {
    const url = `${this.countryUrl}`;
    return this.httpClient.get(url);
  }

  getZipCode(payload: any): Observable<any> {
    const { latitude, longitude } = payload;
    const url = `http://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&sensor=true`;
    return this.httpClient.get(url);
  }

}
