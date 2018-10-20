import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-presentation',
  templateUrl: './login-presentation.component.html',
  styleUrls: ['./login-presentation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPresentationComponent implements OnInit {

  @Input() loginForm:FormGroup
  @Output() navigate:EventEmitter<any> = new EventEmitter();;

  constructor() { }

  login(){
    this.navigate.emit({chatRoomId: this.loginForm.value.chatroomname,userId: this.loginForm.value.username})
  }

  ngOnInit() {
    
  }

}