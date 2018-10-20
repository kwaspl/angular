import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-menu-presentation',
  templateUrl: './menu-presentation.component.html',
  styleUrls: ['./menu-presentation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuPresentationComponent implements OnInit {

  public name:string = 'App'

  @Output() navigateToContact:EventEmitter<void> = new EventEmitter();
  @Output() navigateToAbout:EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  private about():void{
    this.navigateToAbout.emit();
  }

  private contact():void{
    this.navigateToContact.emit();
  }

}