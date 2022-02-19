import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'welcome-app'; //instance variable
  name : string = "Keyursinh Thakor";
  constructor(){
    console.log("AppComponent Object Created...!");
  }
}
