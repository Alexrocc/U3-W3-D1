import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Product, ProductRes } from '../models/product';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  url = environment.apiURL;
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<{ data: ProductRes }>(this.url);
  }
}
