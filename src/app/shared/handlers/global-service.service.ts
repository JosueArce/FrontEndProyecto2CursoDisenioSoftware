import { Injectable } from '@angular/core';
import { ActivatedRoute, UrlSegment,Router } from '@angular/router';

@Injectable()
export class GlobalService {

  constructor(private route: Router) { }

  public pushToLocalStorage(nombre : string, data : any) : void{
  	localStorage.setItem(nombre,JSON.stringify(data));
  }

  public getFromLocalStorage(nombre : string) : void {
  	return JSON.parse(localStorage.getItem(nombre));
  }

  public getCurrentRoute() : string{
  	return this.route.url;
  }

}
