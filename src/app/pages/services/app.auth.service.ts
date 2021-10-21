import { Router } from '@angular/router';
import { AppResolver } from './app.resolver';
import { StateService } from 'src/app/services/state.service';
import { AuthService } from '../core/auth/auth.service';
import { Injectable } from "@angular/core";
import { AuthGuard } from '../core/auth/guards/auth.guard';

@Injectable({
  providedIn: 'root'
})
export class AppAuthService {

  constructor(
    private authService: AuthService,
    public authGuard: AuthGuard,
    public appResolver: AppResolver,
    public stateService: StateService,
    private router: Router
  ) { }

  logout() {
    this.authService.logout().finally(()=>{
      this.router.navigate(['/']);
    });
  }

  login() {
    this.authGuard.prompt().then(res => {
      this.stateService.getAppSettings().subscribe(res => {
        console.log("Done");
      });
    });
  }

  changeLocationSettings() {
    this.appResolver.promptAppSettings().subscribe();
  }

}
