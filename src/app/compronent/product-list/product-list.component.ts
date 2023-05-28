import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/services.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  status: boolean = false;
  productName = "";
  products: IProduct[] = []
  product!: IProduct

  constructor(private productService: ProductService) {
    this.productService.getallProduct().subscribe(data => {
      this.products = data
    }
    )
  }

  removeProduct(id: any) {
  this.productService.deleteProduct(id).subscribe(() => {
    this.products = this.products.filter(item => item.id !==id)
  })
  }
}
