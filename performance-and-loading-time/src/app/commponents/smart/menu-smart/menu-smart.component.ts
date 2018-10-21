import { Component, OnInit, ChangeDetectionStrategy,AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-menu-smart',
  template: `<app-menu-presentation
  ><app-menu-presentation>`,
changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuSmartComponent implements OnInit, AfterViewChecked {

  constructor() { }

  ngOnInit() {}

  ngAfterViewChecked(){
    console.log("menu.smart - changes");
  }
}