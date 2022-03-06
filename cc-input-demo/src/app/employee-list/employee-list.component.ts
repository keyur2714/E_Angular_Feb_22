import { Component, OnInit } from '@angular/core';
import { Employee } from './employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  empList : Employee[] = [];
  headerList : string[] = ["Employee #","Name","Designation","Salary"];
  fieldList : string[] = ["id","name","designation","salary"];

  constructor() { }

  ngOnInit(): void {
    let emp1 = new Employee(1,"Keyur","Software Engineer",11111,10);
    let emp2 = new Employee(2,"Denish","Software Engineer",11112,10);
    let emp3 = new Employee(3,"Vinit","Marketing",12111,20);
    let emp4 = new Employee(4,"Ami","Admin",13111,30);
    this.empList.push(emp1);
    this.empList.push(emp2);
    this.empList.push(emp3);
    this.empList.push(emp4);
  }

}
