import { MatDialog } from '@angular/material/dialog';
import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";
import { delay, map, switchMap, take, tap } from "rxjs/operators";
import { StateService } from "./state.service";
import { ChooseAppSettingsModalComponent } from '../core/auth/components/choose-app-settings-modal/choose-app-settings-modal.component';
import { appSettingsState } from '../../mock-data/app.models';

@Injectable({
  providedIn: 'root'
})
export class AppResolver implements Resolve<any> {

  constructor(
    public stateService: StateService,
    private dialog: MatDialog,
  ) { }

  public promptAppSettings(): Observable<any> {
    return this.dialog.open<ChooseAppSettingsModalComponent, {}, {}>(ChooseAppSettingsModalComponent, {})
      .afterClosed();
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<appSettingsState> {
    return this.stateService.getAppSettings().pipe(
      tap(res => {
        console.log(res);
      }),
      // switchMap((appSettings: appSettingsState) => (!appSettings.isLocationSaved) ? this.promptAppSettings() : this.promptAppSettings())
      switchMap((appSettings: appSettingsState) => (!appSettings.isLocationSaved) ? this.promptAppSettings() : of(appSettings))
    );
  }
}
