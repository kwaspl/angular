import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-shell-presentation',
  templateUrl: './shell-presentation.component.html',
  styleUrls: ['./shell-presentation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShellPresentationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}