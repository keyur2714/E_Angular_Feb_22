import { Component, OnInit } from '@angular/core';
import { Customer } from './customer.model';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit {

  customer : Customer = new Customer(-1,"","","");

  customerList : Customer[] = [];

  constructor() { }

  ngOnInit(): void {
    let customer1 = new Customer(11,"Vinit","9879534778","vinit2cute@gmail.com");
    let customer2 = new Customer(12,"Denish","9879534778","denish2cute@gmail.com");
    let customer3 = new Customer(13,"Ravi","9879534778","ravi2cute@gmail.com");
    this.customerList.push(customer1);
    this.customerList.push(customer2);
    this.customerList.push(customer3);
  }

  save() : void {
    let newCustomer : Customer = new Customer(this.customer.id,this.customer.name,this.customer.mobileNo,this.customer.email);    
    if(newCustomer.id === undefined || newCustomer.id === -1){
      alert("Please Enter Valid Customer Id.");
    }else if(newCustomer.name === undefined  || newCustomer.name === ''){
      alert("Please Enter Valid Customer Name.");
    }else{
      let cId = newCustomer.id;      
      let isExists = false;
      for(let c of this.customerList){
        //console.log(c.id+" "+cId);
        if(c.id == cId){
          isExists = true;
          break;
        }        
      }  
      //alert(isExists);          
      if(isExists){
        alert("Customer Already Exists with id : "+cId);
      }else{
        this.customerList.push(newCustomer);
        alert("Customer Saved Successfully.");
        this.customer = new Customer(-1,"","","");
      }      
    }
  }  

  edit(idx : number) : void {
    //alert(idx);
    this.customer = this.customerList[idx];
  }
}
