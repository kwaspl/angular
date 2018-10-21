import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, OnChanges, DoCheck} from '@angular/core';
import { PeriodicElement } from '../../smart/mutable-smart/datamodel/PeriodicElement'

@Component({
  selector: 'app-mutable-presentation',
  templateUrl: './mutable-presentation.component.html',
  styleUrls: ['./mutable-presentation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MutablePresentationComponent implements OnInit, DoCheck {

  @Input()  
  elements: Array<PeriodicElement>;

  @Output()  
  removeLast_: EventEmitter<void> = new EventEmitter();

  @Output()  
  recreate: EventEmitter<void> = new EventEmitter();

  @Output()  
  newElement: EventEmitter<string> = new EventEmitter();

  ngDoCheck(){
    console.log("mu.pr - changes");
  }

  trackByFn(index, item) {
    return item.position; // or item.id
  }

  constructor() {}

  ngOnInit() {}

}