import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { TxtStyleDirective } from './txt-style.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'directive-demo';
  fontSize : string = '45px';

  loopCounter : number = 7;

  @ViewChild(TxtStyleDirective)
  txtStyleDirective : TxtStyleDirective;

  ngAfterViewInit(): void {
    this.txtStyleDirective.elementRef.nativeElement.value = 'Good Morning...!';
    
  }
}
