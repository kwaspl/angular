import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LoginEvent } from '../../smart/login-smart/datamodel/loginEvent';

@Component({
  selector: 'app-login-presentation',
  templateUrl: './login-presentation.component.html',
  styleUrls: ['./login-presentation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPresentationComponent {

  @Input() loginForm:FormGroup;
  @Output() navigate:EventEmitter<LoginEvent> = new EventEmitter();

  constructor() {}

  login(){
    this.navigate.emit({chatRoomId: this.loginForm.value.chatroomname, userId: this.loginForm.value.username})
  }
}