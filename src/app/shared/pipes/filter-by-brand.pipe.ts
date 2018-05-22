import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByBrand'
})
export class FilterByBrandPipe implements PipeTransform {

  transform(value: any, input: string) {
      console.log(value,input);
        if (input) {
            input = input.toLowerCase();
            return value.filter(function (element: any) {
                return element.categoría.toLowerCase().indexOf(input) > -1;
            })
        }
        return value;
    }

}
