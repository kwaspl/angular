import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-menu-smart',
  template: `<app-menu-presentation
  ><app-menu-presentation>`,
changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuSmartComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}