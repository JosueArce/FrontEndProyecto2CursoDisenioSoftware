import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterData'
})
export class FilterDataPipe implements PipeTransform {

    transform(value: any, input: string) {
        if (input) {
            input = input.toLowerCase();
            return value.filter(function (el: any) {
                return (el.producto.toLowerCase().indexOf(input) || el.vendedor.toLowerCase().indexOf(input)) > -1;
            })
        }
        return value;
    }

}
