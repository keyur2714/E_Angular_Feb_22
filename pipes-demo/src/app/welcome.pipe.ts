import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'welcome'
})
export class WelcomePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let newName = "Welcome "+value;
    return newName;
  }

}
