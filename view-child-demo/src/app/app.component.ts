import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UtilComponent } from './util/util.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'view-child-demo';

  @ViewChild("h",{static : true})
  heading : ElementRef;

  @ViewChild("s")
  strTxt : ElementRef;

  @ViewChild(UtilComponent)
  utilComponent : UtilComponent;

  ngOnInit(): void {
    console.log(this.heading);
    console.log(this.heading.nativeElement.innerHTML);
    this.heading.nativeElement.innerHTML = 'Hello Radhe Krishna...!';
    this.heading.nativeElement.style.color = 'red';
    this.heading.nativeElement.style.fontSize = '20px';
  }

  reverse() : void{
    console.log(this.strTxt.nativeElement.value);
    this.strTxt.nativeElement.style.background = 'yellow';
    let str = this.strTxt.nativeElement.value;
    //alert(this.utilComponent.reverseString(str));
    this.strTxt.nativeElement.value = this.utilComponent.reverseString(str);
  }
}
