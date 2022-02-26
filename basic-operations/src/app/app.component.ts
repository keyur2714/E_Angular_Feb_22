import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basic-operations';

  sayHello(str : string) : void {
    alert("Hello Radhe Krishna...!" + str);   
  }
}
