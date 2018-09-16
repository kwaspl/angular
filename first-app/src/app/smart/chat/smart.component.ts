import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CommunicationService } from '../../services/communication.service'

@Component({
  selector: 'app-smart',
  templateUrl: './smart.component.html',
  styleUrls: ['./smart.component.css']
})
export class SmartComponent implements OnInit {

  smartAvailableUsers: Observable<string[]>;

  constructor(private communicationService:CommunicationService) {}

  ngOnInit() {
    this.smartAvailableUsers = this.communicationService.getUsers()
  }

  userSelected(selectedUser: string){
    this.communicationService.initKeyExchange(selectedUser); 
  }

}
