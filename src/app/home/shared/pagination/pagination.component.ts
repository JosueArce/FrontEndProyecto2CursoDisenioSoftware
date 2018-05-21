import { Component, OnInit,Input,Output } from '@angular/core';
import { ProductModel } from '../../../shared/models/product.model';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input()
  private page : number = 1;

  @Input()
  private totalPages : number = 0;

  @Output()
  private filteredList : Array<ProductModel>;

  constructor() { }


  public onNext(){
  	if(this.page !== this.totalPages)
  		this.page++;
  }

  public onPrevious(){
  	if(this.page !== 1){
  		this.page--;
  	}
  }

  public getTotalPages(){
  	return this.totalPages;
  }

  public getCurrentPage(){
  	return this.page;
  }

  public setPage(element){
  	if(element !== this.page){
  		this.page = element;
  	}
  }

  ngOnInit() {
  }

}
