import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  msg : string = ''; //instance variable

  constructor() { 
    console.log("Message Component Object Created...!");
  }

  ngOnInit(): void {
    console.log("Message Component Object Initialized...!");
    this.msg = 'Good Morning...!';
  }

}
