import { Component, OnInit } from '@angular/core';
import { Dept } from './dept.model';

@Component({
  selector: 'app-dept-list',
  templateUrl: './dept-list.component.html',
  styleUrls: ['./dept-list.component.css']
})
export class DeptListComponent implements OnInit {

  deptList : Dept[] = [];
  headerList : string[] = ["Dept #","Code","Name"];
  fieldList : string[] = ["id","deptCode","deptName"];


  constructor() { }

  ngOnInit(): void {
    let dept1 = new Dept(10,"IT","Information Technology");
    let dept2 = new Dept(20,"MKT","Marketing");
    let dept3 = new Dept(30,"ADMIN","Administration");
    this.deptList.push(dept1);
    this.deptList.push(dept2);
    this.deptList.push(dept3);
  }

}
