import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, OnChanges, DoCheck, AfterContentChecked, AfterViewChecked} from '@angular/core';
import { PeriodicElement } from '../../../smart/mutable-smart/datamodel/PeriodicElement'

@Component({
  selector: 'app-mutable-table',
  templateUrl: './mutable-table.component.html',
  styleUrls: ['./mutable-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MutableTableComponent implements AfterViewChecked {

  @Input()  
  elements: Array<PeriodicElement>;

  ngAfterViewChecked(){
    console.log("mu.table.pr - changes");
  }

  trackByFn(index, item) {
    return item.position; // or item.id
  }

}