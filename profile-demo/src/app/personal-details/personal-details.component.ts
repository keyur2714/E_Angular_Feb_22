import { Component, OnInit } from '@angular/core';
import { Person } from './person.model';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {

  // firstName : string = '';
  // lastName : string = '';
  // city : string = '';
  // mobileNo : string = '';
  // age : number = -1;
  // dateOfBirth : Date = new Date();
  // email : string = '';
  person : Person = new Person();

  constructor() { }

  ngOnInit(): void {
    // this.firstName = 'Keyur';
    // this.lastName = 'Thakor';
    // this.city = 'surat';
    // this.mobileNo = '7387029671';
    // this.age = 35;
    // this.dateOfBirth = new Date("1987-12-27");
    // this.email = 'keyurjava27@gmail.com';
    this.person.firstName = 'Keyur';
    this.person.lastName = 'Thakor';
    this.person.city = 'surat';
    this.person.mobileNo = '7387029671';
    this.person.age = 35;
    this.person.dateOfBirth = new Date("1987-12-27");
    this.person.email = 'keyurjava27@gmail.com';
  }

}
