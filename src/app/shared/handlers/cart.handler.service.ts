import { Injectable,EventEmitter } from '@angular/core';
import { Http_Requests } from '../http_request.service';
import { ProductModel } from '../models/product.model';
import { Observable } from 'rxjs';

@Injectable()
export class ProductHandlerService {


  constructor(public http_request : Http_Requests) {
  	
  }

}