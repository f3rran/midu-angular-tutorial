import { Component, Input } from '@angular/core';
import { Product } from './../../models/product.model'
import { NgIf, NgOptimizedImage } from '@angular/common';

@Component({
  standalone: true,
  imports: [NgOptimizedImage, NgIf],
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input() product!: Product;

}
