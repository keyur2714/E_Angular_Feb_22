import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'profile-demo';

  friends : string[] = ["Keyur","Denish","Vinit","Hiren","Ravi"];
}
