import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friend-book',
  templateUrl: './friend-book.component.html',
  styleUrls: ['./friend-book.component.css']
})
export class FriendBookComponent implements OnInit {

  friendName : string = "Sachin";

  friends : string[] = ["Keyur","Denish","Vinit"];

  constructor() { }

  ngOnInit(): void {
  }

  addFriend() : void {
    //alert(this.friendName);
    let fn = this.friendName;
    let idx = this.friends.indexOf(fn);
    if(fn === ''){
      alert("Please Enter Valid Friend Name.");
    } else if(idx !== -1) {
      alert("Friend Name "+fn+" Already Exists...!");
    }else{
      this.friends.push(this.friendName);
    }    
  }

  delete(idx : number) : void {
    //alert(idx);
    this.friends.splice(idx,1);
  }
}
