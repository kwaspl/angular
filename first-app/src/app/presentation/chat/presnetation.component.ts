import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Component({

  selector: 'app-presnetation',
  templateUrl: './presnetation.component.html',
  styleUrls: ['./presnetation.component.css']
})
export class PresnetationComponent implements OnInit {

  @Input() availableUsers: Observable<string[]>;
  @Output() userChosenEvent: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onChatPartnerSelected(chosenUser: string): void{
    this.userChosenEvent.emit(chosenUser);
  }
}
