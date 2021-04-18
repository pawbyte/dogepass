import { Component, OnInit, PLATFORM_ID } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { trace } from '@angular/fire/performance';
import { Inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { isPlatformServer } from '@angular/common';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private readonly userDisposable: Subscription|undefined;
  public isAuthed = false;

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

}
