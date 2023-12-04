import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';
import { Product, ProductRes } from 'src/app/models/product';
import { map } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  sub!: Subscription;
  productList: any;
  productArr: Product[] | undefined;

  constructor(private productSrv: ProductsService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.sub = this.productSrv.getProducts().subscribe((risultato) => {
      this.productList = risultato;
      console.log(this.productList);
      // this.productArr = risultato.data;
      console.log(this.productArr);

      // this.productSrv.products = this.products;
    });
  }
}
