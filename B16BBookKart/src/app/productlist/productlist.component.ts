import { ProductService } from './../shared/service/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {
 
  productList = null as any;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productList = this.productService.all()
      .subscribe(productList => this.productList = productList);
  }

}