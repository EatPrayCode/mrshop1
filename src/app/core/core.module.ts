import { FirebaseModule } from './firebase/firebase.module';
import { NgModule } from '@angular/core';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [],
  imports: [
    AuthModule,
    FirebaseModule
  ],
  exports: []
})
export class CoreModule { }
