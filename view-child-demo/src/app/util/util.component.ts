import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-util',
  templateUrl: './util.component.html',
  styleUrls: ['./util.component.css']
})
export class UtilComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  reverseString(str : string) : string {
    return str.split("").reverse().join("");
  }

}
