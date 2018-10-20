import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PeriodicElement } from '../about-smart/datamodel/PeriodicElement';

@Component({
  template: `<app-contact-presentation
  [elements]="elements" 
  (removeLastUser)="removeLastUser($event)"
  (recreate)="recreateWithNewItem($event)"
    ></app-contact-presentation>
    <button mat-raised-button color="primary" (click)="removeLastUser($event)">Delete From Smart</button>
    `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactSmartComponent implements OnInit {

  constructor() { }

  elements: Array<PeriodicElement>;

  removeLastUser(event: any): void {
    this.elements.pop();
  }


  recreateWithNewItem(event:any):void {
    this.elements = Array.of( 
      {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
      {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
      {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
      {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
      {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
      {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
      {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
      {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
      {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'}
      );
  }

  ngOnInit() {
    this.elements = Array.of(
      { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
      { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
      { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
      { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
      { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
      { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
      { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
      { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
      { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' }
    );
  }

}