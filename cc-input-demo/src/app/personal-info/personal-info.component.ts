import { Component, Input, OnInit } from '@angular/core';
import { Person } from './person.model';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {

  @Input() person : Person = new Person(1,"Keyur","7387029671","Male","keyurjava27@gmail.com");
  @Input("bg-color") bgColor : string = 'dark';
  @Input("color") color : string = 'white';


  constructor() { }

  ngOnInit(): void {
  }

}
