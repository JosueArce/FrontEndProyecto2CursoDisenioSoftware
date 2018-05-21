import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterData'
})
export class FilterDataPipe implements PipeTransform {

    transform(value: any, input: string) {
        if (input) {
            input = input.toLowerCase();
            return value.filter(function (element: any) {
                return element.producto.toLowerCase().indexOf(input) > -1;
            })
        }
        return value;
    }

}
