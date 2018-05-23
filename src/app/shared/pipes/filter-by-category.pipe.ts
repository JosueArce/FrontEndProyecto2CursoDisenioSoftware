import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByCategory'
})
export class FilterByCategoryPipe implements PipeTransform {

    public transform(value: any, input: string) {
        if (input) {
            input = input.toLowerCase();
            return value.filter(function (element: any) {
                return element.categoria.toLowerCase().indexOf(input) > -1;
            })
        }
        return value;
    }

}
