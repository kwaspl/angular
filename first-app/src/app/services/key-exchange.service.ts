import { Injectable } from '@angular/core';
import { Message } from '../datamodel/message.datamodel'
import { UserInfoService } from './user-info.service'
import * as crypto from "crypto-js";

@Injectable({
  providedIn: 'root'
})
export class KeyExchangeService {

  a:number = 0;
  p:number = 23;
  g:number = 11;
  secret:any;
  constructor(private userInfo: UserInfoService) { }

  public initMessage(selectedUser: string): Message {
    this.a = Math.floor(Math.random() * 10);
    const A = Math.pow(this.g, this.a) % this.p;
    return new Message(this.userInfo.getUserLogin(), selectedUser, { myA: A}, 'keyExchange-Alis-Initialization', false)
  }

  public prepareBobsMessage(initMessageFromAlice: Message) : Message {

      const b = Math.floor(Math.random() * 10);
      const B = Math.pow(this.g, b) % this.p;
      const AliceA = initMessageFromAlice.Payload.myA;
      const secretNumner:number = Math.pow(AliceA, b) % this.p
      this.secret = crypto.SHA256(secretNumner.toString()).toString();

      console.log('got secret from alice:' + this.secret);
      return new Message(this.userInfo.getUserLogin(), initMessageFromAlice.Sender, { myB: B}, 'keyExchange-Bob-Initialization', false)
  }

  public reciveMessageFromBob(initMessageFromBob: Message): void {
    const BobsB = initMessageFromBob.Payload.myB;
    const secretNumber:number = Math.pow(BobsB, this.a) % this.p
    this.secret = crypto.SHA256(secretNumber.toString()).toString();
    console.log('got secret from bob:' + this.secret);
  }
}
