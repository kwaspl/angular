import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router'
@Component({
  template: `<app-login-presentation
              [loginForm]="loginForm"
              (navigate)="navigate($event)"
              >
             </app-login-presentation>`,
            changeDetection: ChangeDetectionStrategy.OnPush
}
)
export class LoginSmartComponent implements OnInit {

 loginForm:FormGroup  = new FormGroup({
    'username': new FormControl(''),
    'chatroomname' : new FormControl('')
  });

  constructor(private router:Router) { }

  ngOnInit() {}

  login(): void {}

  navigate(event:any) : void {this.router.navigate(['/ui']);}
}