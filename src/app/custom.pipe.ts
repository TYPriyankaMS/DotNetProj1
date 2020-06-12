import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value) {
    console.log(value);
    let firstchar=value.charAt(0);
    console.log(firstchar);
    let upperCase=firstchar.toUpperCase();
    console.log(upperCase);
    let slicedValue=value.slice(1);
    console.log(slicedValue);
    let output =upperCase+slicedValue;
    console.log(output);
    return output;



  }

}
