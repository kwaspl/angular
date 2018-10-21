import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, OnChanges} from '@angular/core';
import { PeriodicElement } from '../../smart/mutable-smart/datamodel/PeriodicElement'

@Component({
  selector: 'app-mutable-presentation',
  templateUrl: './mutable-presentation.component.html',
  styleUrls: ['./mutable-presentation.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class MutablePresentationComponent implements OnInit, OnChanges {

  @Input()  
  elements: Array<PeriodicElement>;

  @Output()  
  removeLast_: EventEmitter<void> = new EventEmitter();

  @Output()  
  recreate: EventEmitter<void> = new EventEmitter();

  @Output()  
  newElement: EventEmitter<string> = new EventEmitter();

  ngOnChanges(){
    console.log("mu.pr - check")
  }

  recreateWithNewItem():void{
    this.recreate.emit();
  }

  removeLast():void{
    this.removeLast_.emit();
  }

  trackByFn(index, item) {
    return item.position; // or item.id
  }

  constructor() { }

  ngOnInit() {
  }

}