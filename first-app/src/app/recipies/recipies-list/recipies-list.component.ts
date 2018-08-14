import { Component, OnInit } from '@angular/core';
import { Recipie } from '../recipe.model';

@Component({
  selector: 'app-recipies-list',
  templateUrl: './recipies-list.component.html',
  styleUrls: ['./recipies-list.component.css']
})
export class RecipiesListComponent implements OnInit {
  recipies: Recipie[] = [
    new Recipie('cake', 'it is delicous', 'nil')
  ];
  constructor() { }

  ngOnInit() {
  }

}
