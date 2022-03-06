import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cc-output-demo';
  revMsg : string = '';

  getChildMsg(msg) : void{
    console.log("Inside Parent component...!"+msg);
    this.revMsg = msg;
  }
}
