import { Injectable } from '@angular/core';
import { UUID } from 'angular2-uuid';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  private userLogin: string;

  constructor() {
    this.userLogin = UUID.UUID();
  }

  public getUserLogin(): string{
    return this.userLogin;
  }

}
