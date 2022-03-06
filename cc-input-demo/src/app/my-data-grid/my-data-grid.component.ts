import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-data-grid',
  templateUrl: './my-data-grid.component.html',
  styleUrls: ['./my-data-grid.component.css']
})
export class MyDataGridComponent implements OnInit {

  @Input("data-list") dataList : any[] = [];
  @Input("header-list") headerList : string[] = [];
  @Input("field-list") fieldList : string[] = [];

  @Input("table-header") tableHeader : string = '';
  @Input("bg-color") bgColor : string = 'dark';
  @Input("text-color") textColor : string = 'white';

  constructor() { }

  ngOnInit(): void {
  }

}
