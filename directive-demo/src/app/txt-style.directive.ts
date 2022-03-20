import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTxtStyle]'
})
export class TxtStyleDirective implements AfterViewInit{

  constructor(public elementRef : ElementRef) { 
    console.log("TxtStyle Directive Object Created...!");
  }

  ngAfterViewInit(): void {
    this.elementRef.nativeElement.style.background = 'yellow';
  }

}
