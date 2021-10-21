import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StateService } from 'src/app/services/state.service';
import { MatSnackBar } from '@angular/material/snack-bar';
export type loginAction = 'register' | 'signIn' | 'forgotPassword' | 'changePassword' | 'changeEmail' | 'delete' | 'signOut';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  public loginForm: FormGroup = new FormGroup({});
  public hide = true;

  constructor(
    public authService: AuthService,
    private afStore: AngularFirestore,
    private fb: FormBuilder,
    private ref: MatDialogRef<SigninComponent>,
    @Inject(MAT_DIALOG_DATA) private action: loginAction,
    public stateService: StateService,
    public formBuilder: FormBuilder,
    public router: Router,
    public snackBar: MatSnackBar
  ) { }

  public onLoginFormSubmit(values:Object):void {
    if (this.loginForm.valid) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      password: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
      rememberMe: false
    });
  }

  signInAnonymously() {
    this.authService.signInAnonymously().then(result => {
      this.doClaimsNavigation(result);
    });
  }

  signInWithGoogle() {
    this.authService.signInWithGoogle().then((result: any) => {
      this.doClaimsNavigation(result);
    });
  }

  togglePhoneSignIn() {
    this.router.navigate(['/login-mobile']);
  }

  doClaimsNavigation(result: any) {
    console.log(result);
    console.log('\nWaiting for claims navigation...');
    this.setUserData(result.user);
    this.ref.close(result.user);
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

}
