import { Component, OnInit } from '@angular/core';
import { IProducts } from '../models/product.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
 
  productList: IProducts[] = [];

  constructor(private _api: ApiService){}
  
  ngOnInit(): void {

    this._api.getAllProducts().subscribe( (data:IProducts[]) => 
      this.productList = data
    )
    
  }

}
