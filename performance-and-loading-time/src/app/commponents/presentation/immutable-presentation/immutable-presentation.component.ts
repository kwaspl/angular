import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { PeriodicElement } from '../../smart/mutable-smart/datamodel/PeriodicElement';
import { List } from 'immutable';

@Component({
  selector: 'app-immutable-presentation',
  templateUrl: './immutable-presentation.component.html',
  styleUrls: ['./immutable-presentation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImmutablePresentationComponent implements OnInit,OnChanges {

  @Input()  
  elements: List<PeriodicElement>;

  @Output()  
  removeLastUser: EventEmitter<void> = new EventEmitter();

  @Output()  
  recreate: EventEmitter<void> = new EventEmitter();
  
  ngOnChanges(){
    console.log("im.pr - check")
  }

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