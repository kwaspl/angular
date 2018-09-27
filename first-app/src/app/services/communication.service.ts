import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { WebSocketSubject, webSocket } from 'rxjs/websocket';
import { Observable, Subject, from } from 'rxjs';
import { map, take, filter } from 'rxjs/operators';
import { environment } from '../../environments/environment'
import { Message } from '../datamodel/message.datamodel'
import { UserInfoService } from './user-info.service'
import { KeyExchangeService } from './key-exchange.service'

@Injectable()
export class CommunicationService {

  private socket$: WebSocketSubject<Message>;

  constructor(private userInfo: UserInfoService, private keyExchange:KeyExchangeService ) {
    this.socket$ = webSocket(environment.chatServerAddress
                          +"?login="+this.userInfo.getUserLogin());

    this.onKeyInitailization();
    this.onKeyInitailizationResponsce();
  }

  public getUsers() : Observable<string[]>{
    return this.socket$
      .asObservable()
      .pipe(filter((message) => { return message.Type == 'AllActiveChatMembers';}))
      .pipe(map((message)=> { return message.Payload; } ))
  }

  public chatMessageObserver() : Observable<Message>{
    return this.socket$
      .asObservable()
      .pipe(filter((message) => { return message.Type == 'Message';}))
  }

  public sendMessage(message : Message): void{
    this.socket$.next(message);
  }

  public initKeyExchange(selectedUser: string) : void {
    const message:Message = this.keyExchange.initMessage(selectedUser);
    this.socket$.next(message);
  }

  onKeyInitailization(){
    this.socket$
      .asObservable()
      .pipe(filter((message) => { return message.Type == 'keyExchange-Alis-Initialization';}))
      .subscribe(message => {
        this.socket$.next(this.keyExchange.prepareBobsMessage(message));
      });
  }

  onKeyInitailizationResponsce(){
    this.socket$
      .asObservable()
      .pipe(filter((message) => { return message.Type == 'keyExchange-Bob-Initialization';}))
      .subscribe((message) => {
        this.keyExchange.reciveMessageFromBob(message);
      });
  }
}
