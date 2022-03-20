import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appMyStyle]'
})
export class MyStyleDirective implements AfterViewInit{

  @Input("color") color : string = 'red';
  @Input("font-size") fontSize : string = '30px';

  constructor(private elementRef : ElementRef) { 
    console.log("MyStyle Directive Object Created...!");
  }

  ngAfterViewInit(): void {
    console.log(this.elementRef);
    this.elementRef.nativeElement.style.color = this.color;
    this.elementRef.nativeElement.style.fontSize = this.fontSize;
    this.elementRef.nativeElement.style.border = "1px solid green";
  }
}
