import { LocalStorageService } from './localstorage.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { DataService } from './data.service';
import { switchMap, take, tap, map } from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { appSettingsState } from 'src/app/mock-data/app.models';
import { appSettingsStateNull } from 'src/app/mock-data/constants';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  appSettingsSubject: BehaviorSubject<appSettingsState> = new BehaviorSubject<appSettingsState>(appSettingsStateNull);

  constructor(
    private dataService: DataService,
    public afAuth: AngularFireAuth,
    public afStore: AngularFirestore,
    public localStorageService: LocalStorageService
  ) { }

  init() {
    // this.initAppSetting().subscribe();
  }

  authenticate() {
    return this.getAppUser();
  }

  getLoggedInUser(authUser: any): Observable<appSettingsState> {
    console.log("User logged In.");
    return this.dataService.getUserDataFirebase(authUser).pipe(
      tap(res => {
        res = res.data();
        if (!res) {
          console.log("User data not set.");
        }
        else {
          console.log("User data set.");
        }
      }),
      map((res: any) => {
        if (!res) {
          const data = res.data();
          const obj: appSettingsState = {
            ...this.appSettingsSubject.value,
            isLoggedIn: true,
            userData: data,
            uid: authUser.uid,
            isUserDataSaved: true
          };
          this.appSettingsSubject.next(obj);
          return obj;
        }
        else {
          const obj: appSettingsState = {
            ...this.appSettingsSubject.value,
            isLoggedIn: true,
            uid: authUser.uid,
            isUserDataSaved: false,
            isAnonymous: authUser.isAnonymous
          };
          this.appSettingsSubject.next(obj);
          return obj;
        }
      }),
    );
  }

  getNonLoggedUser(): Observable<appSettingsState> {
    console.log("User Not logged In");
    const obj: appSettingsState = {
      ...appSettingsStateNull,
      isLoggedIn: false,
      isLocationSaved: false
    };
    this.appSettingsSubject.next(obj);
    return this.appSettingsSubject;
  }

  getAppUser(): Observable<appSettingsState> {
    console.log("Get App User");
    if (this.appSettingsSubject.value.isLoggedIn) {
      return this.appSettingsSubject;
    }
    else {
      return this.afAuth.authState
        .pipe(
          switchMap(authUser => {
            if (authUser) {
              return this.getLoggedInUser(authUser)
            }
            else {
              return this.getNonLoggedUser()
            }
          })
        );
    }
  }

  saveLocationSettings(payload: any): Observable<appSettingsState> {
    if (payload.uid) {
      return this.saveUserSettingsToFirebase(payload);
    }
    else {
      return of(payload);
    }
  }

  saveUserSettingsToFirebase(payload: any): Observable<appSettingsState> {
    return this.dataService.saveUserSettingsToFirebase(payload);
  }

  getUserFirebaseSettings(user: any): Observable<appSettingsState> {
    const obs1$ = this.dataService.loadUserSettingsFromFirebase(user).pipe(
      tap(res => {
        if (res) {
          const userLocationData: any = { ...res };
          const obj: appSettingsState = {
            ...this.appSettingsSubject.value,
            userLocationData,
            isLocationSaved: false
          };
          this.appSettingsSubject.next(obj);
        }
        else {
          console.log("AppState Not found");
          const obj: appSettingsState = {
            ...this.appSettingsSubject.value,
            isLocationSaved: false
          };
          this.appSettingsSubject.next(obj);
        }
      }),
      map(res => {
        return this.appSettingsSubject.value;
      })
    );
    return obs1$;
  }

  getDefaultAppSettings(): Observable<appSettingsState> {
    if (this.localStorageService.doesExists()) {
      const data = this.localStorageService.retrieve();
      this.appSettingsSubject.next(data);
      console.log("Location Data in localstorage found");
      return of(this.appSettingsSubject.value);
    }
    else {
      console.log("Location Data in localstorage Not found");
      return of(this.appSettingsSubject.value);
    }
  }

  initAppSetting(): Observable<appSettingsState> {
    console.log("Init App Settings");
    const auth$ = this.getAppUser();
    return auth$.pipe(
      take(1),
      switchMap((user: appSettingsState) => {
        if (user && user.isLoggedIn) {
          return this.getUserFirebaseSettings(user);
        }
        else {
          return this.getDefaultAppSettings();
        }
      })
    );
  }

  getAppSettings(): Observable<appSettingsState> {
    return this.initAppSetting();
  }

  saveToLocalStorage(payload: appSettingsState) {
    this.localStorageService.store(payload);
  }

  retrieveFromLocalStorage(): appSettingsState {
    return this.localStorageService.retrieve();
  }

  clearFromLocalStorage() {
    this.localStorageService.clearSettingsHelper();
  }

  resetState() {
    this.clearFromLocalStorage();
    this.appSettingsSubject.next(appSettingsStateNull);
  }

}
