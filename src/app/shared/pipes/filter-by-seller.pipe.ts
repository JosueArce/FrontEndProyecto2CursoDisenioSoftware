import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterBySeller'
})
export class FilterBySellerPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
