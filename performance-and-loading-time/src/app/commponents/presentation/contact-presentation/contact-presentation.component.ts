import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { PeriodicElement } from '../../smart/about-smart/datamodel/PeriodicElement';
import { List } from 'immutable';

@Component({
  selector: 'app-contact-presentation',
  templateUrl: './contact-presentation.component.html',
  styleUrls: ['./contact-presentation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactPresentationComponent implements OnInit {

  @Input()  
  elements: List<PeriodicElement>;

  @Output()  
  removeLastUser: EventEmitter<void> = new EventEmitter();

  @Output()  
  recreate: EventEmitter<void> = new EventEmitter();
  
  recreateWithNewItem(){
    this.recreate.emit();
  }

  removeLast(){
    this.removeLastUser.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}