import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  name = 'KeYur';

  msg : string = "Hello Radhe Krishna...!";

  todaysDate : Date = new Date();

  salary = 11000;

  accountNo = "98981122221";

  mobileNo = "7387029971";

  person = {
    "name" : "denish",
    "city" : "surat",
    "mobileNo" : "9898012121"
  }

  seqNumbers = interval(1000);

  num = -1;

  ngOnInit(): void {
    // this.seqNumbers.subscribe(
    //   (data)=>{
    //     //console.log(data);
    //     this.num = data;
    //   }
    // )
  }

}
