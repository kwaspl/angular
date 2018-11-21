import { Action } from '@ngrx/store';
import { LoginEvent } from '../commponents/smart/login-smart/datamodel/loginEvent';

export enum AuthActionTypes {
  LoginAction = '[Login] Action',
  LogoutAction = '[Login] Action'
}

export class Login implements Action {
  public readonly type = AuthActionTypes.LoginAction;
  constructor(public event:LoginEvent){}
}
