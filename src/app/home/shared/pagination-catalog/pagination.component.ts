import { Component, OnInit,Input,Output } from '@angular/core';
import { PaginationService } from '../../../shared/handlers/pagination.handler.service';
import { ProductHandlerService } from '../../../shared/handlers/product.handler.service';
import { GlobalService } from '../../../shared/handlers/global-service.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  private allItems: any[];
  private pager : any = {};

  constructor(private globalHandler : GlobalService,private paginationHandler : PaginationService,private productHandler : ProductHandlerService) { 
  }

  ngOnInit() {
    this.productHandler.recordsEmiter.subscribe({
      next:(data)=>{
        this.allItems = data;
        this.setPage(1);
      }
    });
  }


  previousPage(){
    if(this.pager.index<1)
      this.pager.index--;
  }

  nextPage(){
    this.pager.index++;
  }

  setPage(page : number)
  {
    this.pager = this.paginationHandler.getPager(this.allItems.length,page);
    this.productHandler.productRecords = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
}
