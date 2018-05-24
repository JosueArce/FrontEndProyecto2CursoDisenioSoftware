import { Component, OnInit,Input,Output } from '@angular/core';
import { PaginationService } from '../../../shared/handlers/pagination.handler.service';
import { ProductHandlerService } from '../../../shared/handlers/product.handler.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input()
  public source : Array<any>;

  public backUpSource : Array<any>;
  private pager : any = {};

  constructor(private paginationHandler : PaginationService,private productHandler : ProductHandlerService) { 
    this.source = new Array<any>();
    this.backUpSource = new Array<any>();
  }

  ngOnInit() {
    this.backUpSource = this.source.slice(0);
    this.setPage(1);
  }

  setPage(page : number)
  {
    this.pager = this.paginationHandler.getPager(this.backUpSource.length,page);
    this.productHandler.productRecords = this.backUpSource.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
}
