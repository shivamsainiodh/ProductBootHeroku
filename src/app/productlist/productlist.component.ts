import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  products: any;
  currentproduct = null;
  currentIndex = -1;
  name = '';



  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.retrieveProducts();
  }

  retrieveProducts(): void {
    this.productService.getAll()
      .subscribe(
        data => {
          this.products = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }



  refreshList(): void {
    this.retrieveProducts();
    this.currentproduct = null;
    this.currentIndex = -1;
  }

  setActiveproduct(product: null, index: number): void {
    this.currentproduct = product;
    this.currentIndex = index;
  }


}

