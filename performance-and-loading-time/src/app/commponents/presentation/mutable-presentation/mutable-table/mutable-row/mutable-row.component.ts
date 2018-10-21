import { Component, OnInit, ChangeDetectionStrategy, Input, AfterViewChecked} from '@angular/core';
import { PeriodicElement } from 'src/app/commponents/smart/mutable-smart/datamodel/PeriodicElement';

@Component({
  selector: '[app-row-table]',
  templateUrl: './mutable-row.component.html',
  styleUrls: ['../mutable-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MutableRowComponent implements AfterViewChecked {

  @Input()  
  element: PeriodicElement;

  ngAfterViewChecked(){
    console.log("mu.row.pr - changes");
  }
}