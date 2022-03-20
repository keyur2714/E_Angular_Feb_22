import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyLoop]'
})
export class MyLoopDirective {

  constructor(private templateref : TemplateRef<any>,private viewContainerRef : ViewContainerRef) { }

  @Input("appMyLoop") set loop(length : number){
    for(let i=1;i<=length;i++){
      this.viewContainerRef.createEmbeddedView(this.templateref);  
    }
  }

}
