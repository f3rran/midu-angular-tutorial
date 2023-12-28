import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgFor, NgOptimizedImage } from '@angular/common';
import { ProductComponent } from './../../components/product/product.component'
import { Product } from 'src/app/models/product.model';

@Component({
  standalone: true,
  imports: [ ProductComponent, NgFor ],
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  title = 'midu-angular-tutorial';
  http = inject(HttpClient);

  products: Product[] = [];

  changeTitle() {
    this.title = "changed";
  }

  ngOnInit() {
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
    .subscribe((data) => {
      this.products = data;
    })
  }
}
