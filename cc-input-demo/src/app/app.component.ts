import { Component, OnInit } from '@angular/core';
import { Person } from './personal-info/person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'cc-input-demo';
  msg : string = "Good Morning";

  msgList : string[] = [
    "Hi",
    "How are you?",
    "Good Morning",
    "Good Afternoon",
    "Good Evening"
  ];

  
  selectedPerson : Person = new Person(0,'-:Select Person:-');


  personList : Person[] = [];

  ngOnInit(): void {
    let person1 = new Person(2,"Denish","9825052521","Male","denishjava26@gmail.com");  
    let person2 = new Person(3,"Vinit","9825052432","Male","vinit@gmail.com");  
    let person3 = new Person(4,"Ami","9825052123","FeMale","ami@gmail.com");  
    let person4 = new Person(5,"Sachin","9898011221","sachin@gmail.com","8600711221");
    this.personList.push(person1);
    this.personList.push(person2);
    this.personList.push(person3);
    this.personList.push(person4);
    //this.selectedPerson = this.personList[1];
  }
}
