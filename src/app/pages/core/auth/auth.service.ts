import { take } from 'rxjs/operators';
import { FirebaseApiService } from '../firebase-api.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import firebase from "firebase/app"
import { AngularFirestore, DocumentSnapshot } from '@angular/fire/firestore';
import { StateService } from 'src/app/services/state.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public afAuth: AngularFireAuth,
    // public afStore: AngularFirestore,
    public firebaseApiService: FirebaseApiService,
    public stateService: StateService
  ) { }

  signInWithGoogle() {
    return this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
  }

  signInAnonymously() {
    return this.afAuth.signInAnonymously();
  }

  logout(): Promise<void> {
    this.resetState();
    console.log('User just signed out.');
    return this.afAuth.signOut();
  }

  resetState() {
    this.stateService.resetState();
  }

}
