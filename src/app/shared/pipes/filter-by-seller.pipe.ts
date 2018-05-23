import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBySeller'
})
export class FilterBySellerPipe implements PipeTransform {

  public transform(value: any, input: string) {
        if (input) {
            input = input.toLowerCase();
            return value.filter(function (element: any) {
                return element.vendedor.toLowerCase().indexOf(input) > -1;
            })
        }
        return value;
    }

}
