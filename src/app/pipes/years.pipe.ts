import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'years'
})
export class YearsPipe implements PipeTransform {

  transform(value: string, ): string {
    if(!value)return "0"

    var hoy= new Date(new Date().getTime())
    var meli= new Date(value)
    return ( hoy.getFullYear() - meli.getFullYear()).toString() + " Años"
  }

}
