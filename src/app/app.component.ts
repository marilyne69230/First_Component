import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>{{number1}} + {{number2}} = {{result}} </h1>`
})
export class AppComponent implements OnInit {
  title: string = 'exercice';
  number1: number = Math.floor(Math.random()*10);
  number2: number = Math.floor(Math.random()*10);
  result: number = this.number1 + this.number2;

  ngOnInit(): void {
    console.log("Je viens de charger");
  }
}
