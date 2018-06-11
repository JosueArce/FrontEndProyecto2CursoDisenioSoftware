import { Component, OnInit } from '@angular/core';
import { PaginationService } from '../../../shared/handlers/pagination.handler.service';
import { AdministrateHandlerService } from '../../../shared/handlers/administrate.handler.service';
import { GlobalService } from '../../../shared/handlers/global-service.service';

@Component({
  selector: 'app-pagination-admin-sellers',
  templateUrl: './pagination-admin-sellers.component.html',
  styleUrls: ['./pagination-admin-sellers.component.css']
})
export class PaginationAdminSellersComponent implements OnInit {

  private allItems: any[];
  private pager : any = {};
  constructor(private globalHandler : GlobalService,private paginationHandler : PaginationService,private adminHandler : AdministrateHandlerService) { }

  ngOnInit() {
    //this.backUpSource = this.source.slice(0);
    this.adminHandler.sellerListEmitter.subscribe({
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
    this.adminHandler.sellerList = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

}
