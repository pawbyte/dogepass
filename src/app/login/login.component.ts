import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
        transition('void => *', [
          style({ transform: 'translateY(-100%)', opacity: 0 }),
          animate('1s ease-out')
        ]),
        transition('* => void', [
          style({ transform: 'translateY(100%)', opacity: 1 }),
          animate('0.25s ease-in')
        ])
    ])
  ]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
