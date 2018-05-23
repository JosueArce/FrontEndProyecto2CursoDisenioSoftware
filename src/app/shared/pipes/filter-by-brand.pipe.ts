import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByBrand'
})
export class FilterByBrandPipe implements PipeTransform {

    public transform(value: any, input: string) {
        if (input) {
            input = input.toLowerCase();
            return value.filter(function (element: any) {
                return element.marca.toLowerCase().indexOf(input) > -1;
            })
        }
        return value;
    }

}
