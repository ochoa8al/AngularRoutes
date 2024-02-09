import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProducts } from '../models/product.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit{
  
  constructor(
    private _route: ActivatedRoute,
    private _api_Services: ApiService
    ){}

  producto?: IProducts;
  loading:boolean = true;
  varColor?:string;

  ngOnInit(): void {    
    
      this._route.params.subscribe(param => {
        console.log(this._route)
        //this.producto = productList.find(item => item.id==param['productId']);
        this._api_Services.getProductByID(Number(param['productId'])).subscribe((data:IProducts) => {
          this.producto = data;
          this.varColor = this.producto?.price as number < 0 ? 'red': ''
          this.loading = false
        })
        
        
      })

  }

}
