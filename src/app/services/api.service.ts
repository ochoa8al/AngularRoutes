import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProducts } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseURL:string = 'https://fakestoreapi.com/products';


  constructor(private _httpClient: HttpClient) { }

  public getAllProducts():Observable<IProducts[]>{
    return this._httpClient.get<IProducts[]>(this.baseURL);
  }

  public getProductByID(id : number):Observable<IProducts>{
    return this._httpClient.get<IProducts>(`${this.baseURL}/${id}`);
  } 

}