import { Component, OnInit, PLATFORM_ID } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { trace } from '@angular/fire/performance';
import { Inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { isPlatformServer } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'dogepass-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {

  private readonly userDisposable: Subscription|undefined;
  public isAuthed = false;
  public showState = 1;

  constructor(public readonly auth: AngularFireAuth,  @Inject(PLATFORM_ID) platformId: object) {
      if (!isPlatformServer(platformId)) {
      this.userDisposable = this.auth.authState.pipe(
        trace('auth'),
        map(u => !!u)
      ).subscribe(isLoggedIn => {
        this.isAuthed = isLoggedIn;
      });
    }
  }

  ngOnInit(): void {
  }

  async googleLogin() {
    const user = await this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  
  async facebookLogin() {
    const user = await this.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

  logout(): void {
    this.auth.signOut();
  }

}
