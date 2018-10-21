import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy, AfterViewChecked} from '@angular/core';

@Component({
  selector: 'app-menu-presentation',
  templateUrl: './menu-presentation.component.html',
  styleUrls: ['./menu-presentation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuPresentationComponent implements OnInit, AfterViewChecked {

  public name:string = 'App'

  @Output() navigateToContact:EventEmitter<void> = new EventEmitter();
  @Output() navigateToAbout:EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  ngAfterViewChecked(){
    console.log("menu.pr - changes");
  }

  private about():void{
    this.navigateToAbout.emit();
  }

  private contact():void{
    this.navigateToContact.emit();
  }

}