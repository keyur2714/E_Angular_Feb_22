import { Component, OnInit } from '@angular/core';
import { Lookup } from './lookup.model';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  countryList : Lookup[] = [];
  statesList : Lookup[] = [];

  selectedCountry : Lookup = new Lookup();
  selectedState : Lookup = new Lookup();

  username : string = '';
  password : string = '';
  constructor() { }

  ngOnInit(): void {
    let country1 = new Lookup(1,"IND","India");
    let country2 = new Lookup(2,"USA","United States of America");
    let country3 = new Lookup(3,"UK","United Kingdom");
    this.countryList = [country1,country2,country3];

    this.selectedCountry = country1;

    let state1 = new Lookup(11,"GUJ","Gujarat");
    let state2 = new Lookup(12,"MH","Maharashtra");
    let state3 = new Lookup(13,"BST","Boston");
    let state4 = new Lookup(14,"LN","Lundon");
    this.statesList.push(state1);
    this.statesList.push(state2);
    this.statesList.push(state3);
    this.statesList.push(state4);
    this.selectedState = state1;
  }

  save() : void {
    console.log(this.username+" "+this.password+" "+this.selectedCountry.name +" "+this.selectedState.name);
  }

  getSelectedState(state : Lookup) : void {
     this.selectedState = state; 
  }

  getSelectedCountry(country : Lookup) : void {
    this.selectedCountry = country;
  }
}
