import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter} from '@angular/core';
import { PeriodicElement } from '../../smart/about-smart/datamodel/PeriodicElement'

@Component({
  selector: 'app-about-presentation',
  templateUrl: './about-presentation.component.html',
  styleUrls: ['./about-presentation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutPresentationComponent implements OnInit {

  @Input()  
  elements: Array<PeriodicElement>;

  @Output()  
  removeLast_: EventEmitter<void> = new EventEmitter();

  @Output()  
  recreate: EventEmitter<void> = new EventEmitter();

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