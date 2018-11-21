import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router'
import { Store } from '@ngrx/store';
import { UserInfo } from 'src/app/reducers';
import { LoginEvent } from './datamodel/loginEvent';
import { Login } from 'src/app/auth/auth.actions';

@Component({
  template: `<app-login-presentation
              [loginForm]="loginForm"
              (navigate)="navigate($event)"
              >
             </app-login-presentation>`,
            changeDetection: ChangeDetectionStrategy.OnPush
}
)
export class LoginSmartComponent {

 loginForm:FormGroup  = new FormGroup({
    'username': new FormControl(''),
    'chatroomname' : new FormControl('')
  });

  constructor(private router:Router, private store: Store<UserInfo>) {}

  navigate(event:LoginEvent) : void {
    this.store.dispatch(new Login(event));
    this.router.navigate(['/ui']);
  }
}