import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Lookup } from '../user-registration/lookup.model';

@Component({
  selector: 'app-my-dropdown',
  templateUrl: './my-dropdown.component.html',
  styleUrls: ['./my-dropdown.component.css']
})
export class MyDropdownComponent implements OnInit {

  @Input() label : string = '';
  @Input("data-list") dataList : Lookup[] = [];
  @Input("selected-item") selectedItem : Lookup = new Lookup();

  @Output("get-selected-item") getSelectedItem = new EventEmitter<Lookup>();

  constructor() { }

  ngOnInit(): void {
  }

  returnItem() : void {
    //alert(this.selectedItem.name);
    this.getSelectedItem.emit(this.selectedItem);
  }

}
