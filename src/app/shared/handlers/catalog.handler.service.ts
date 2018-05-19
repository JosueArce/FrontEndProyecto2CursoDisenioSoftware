import { Injectable } from '@angular/core';

@Injectable()
export class CatalogHandlerService {

  constructor() { }

  public pushToLocalStorage(nombre : string, data : any){
  	localStorage.setItem(nombre,JSON.stringify(data));
  }

  public getFromLocalStorage(nombre : string){
  	return JSON.parse(localStorage.getItem(nombre));
  }

}
