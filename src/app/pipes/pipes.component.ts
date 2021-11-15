import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent implements OnInit {
  amt: number = 1891.28;
  decimal: number = 20 / 7;
  text: string = 'I am vijay';
  percentage: number = 0.1227384;

  birth = new Date(1999, 3, 15);
  day = true;
  get format() {
    return this.day ? 'shortDate' : 'fullDate';
  }
  birthDay() {
    this.day = !this.day;
  }
  constructor() {}

  ngOnInit() {}
}
