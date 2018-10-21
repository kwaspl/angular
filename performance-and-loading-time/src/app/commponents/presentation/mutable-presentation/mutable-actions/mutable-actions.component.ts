import { Component, ChangeDetectionStrategy, Output, EventEmitter, AfterViewChecked} from '@angular/core';
@Component({
  selector: 'app-mutable-actions',
  templateUrl: './mutable-actions.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MutableActionsComponent implements AfterViewChecked {
  @Output()  
  removeLast_: EventEmitter<void> = new EventEmitter();

  @Output()  
  recreate: EventEmitter<void> = new EventEmitter();

  @Output()  
  newElement: EventEmitter<string> = new EventEmitter();

  ngAfterViewChecked(){
    console.log("mu.actions.pr - changes");
  }

  constructor() {}
s
}