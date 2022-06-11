import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask',
  pure : false
})
export class MaskPipe implements PipeTransform {  

  constructor(){
    console.log("Mak Pipe Object Created...!");
  }

  transform(value: string,maskingChar : string,noOfVisigbleChar : number): unknown {
    
    let newValue = "";

    for(let i=1;i<=value.length-noOfVisigbleChar;i++){
      newValue = newValue + maskingChar;
    }

    return newValue + value.substring(newValue.length);

  }

}
