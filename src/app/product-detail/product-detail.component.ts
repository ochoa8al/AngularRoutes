import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Productos,productList } from '../products/products.mock';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit{
  
  constructor(private _route: ActivatedRoute){}

  productList:Productos[] = productList;
  producto?:Productos;

  ngOnInit(): void {
    this._route.params.subscribe(param => {
      this.producto = productList.find(item => item.id==param['productId']);
    })
  }

}
