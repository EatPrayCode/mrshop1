import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
  ],
  imports: [
   AngularFireModule.initializeApp(environment.firebase),
   AngularFireAuthModule
  ],
  exports: [
    AngularFireModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
  ]
})
export class FirebaseModule { }
