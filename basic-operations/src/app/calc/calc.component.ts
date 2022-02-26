import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  result : number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  add(no1 : string,no2 : string) : void {
    let n1 = parseInt(no1);
    let n2 = parseInt(no2);
    this.result = n1 + n2;
  }

  sub(no1 : string,no2 : string) : void {
    this.result = parseInt(no1) - parseInt(no2);
  }

  mul(no1 : string,no2 : string) : void {
    this.result = parseInt(no1) * parseInt(no2);    
  }

  div(no1 : string,no2 : string) : void {
    let n2 = parseInt(no2);
    if(n2 === 0){
      this.result = 0;
    }else{
      this.result = parseInt(no1) / parseInt(no2);    
    }    
  }

}
