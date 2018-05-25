import { Injectable } from '@angular/core';
import { Http_Requests } from '../http_request.service';
import { sellerRequest } from '../models/sellerRequest.model';
import { ProductModel } from '../models/product.model';
import { ProductHandlerService } from './product.handler.service';
import { GlobalService } from './global-service.service';
import { AuthService, SocialUser } from "angularx-social-login";


@Injectable()
export class SellersHandlerService {

  public sellerProducts : Array<ProductModel>;	

  constructor(private http_request : Http_Requests, private productHandler : ProductHandlerService,private globalHandler : GlobalService) { 	
    this.sellerProducts = new Array<ProductModel>();
    
  }
  
  public sendSellerRequest(request : sellerRequest){
  	this.http_request.postService(request,'insertarSolicitud')
  	.then(response => {//funcionó!!
  	})
  	.catch(error =>{
  		console.log("Error: ",error)
  	})
  }


  public deleteProduct(parameterName:any){
    console.log(parameterName);
    this.http_request.deleteService({ 'idProducto' : parameterName}, "eliminarProducto")
        .then(response => 
          {
            //ya sirve
            this.productHandler.getProducts();
          }
        )
        .catch(error => console.log("Error: ",error))
  }

  public  editProduct(newProduct : any){
    this.http_request.putService(newProduct,'editarProducto')
      .then(response=>{
        console.log(response);
      })
      .catch(error=> console.log("Error:",error))
  }

}
