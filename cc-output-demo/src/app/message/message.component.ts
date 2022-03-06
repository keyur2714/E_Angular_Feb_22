import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input("message") msg : string = 'Hello Radhe Krishna...!';
  @Input("message-type") msgType = "info";

  @Output("reverse") reverseMsg = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.msg.split("").reverse().join(""));
    let revStr = this.msg.split("").reverse().join("");
    this.reverseMsg.emit(revStr); 
  }

}
