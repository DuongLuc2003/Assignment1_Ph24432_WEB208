import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/services.service';
import { FormBuilder , FormGroup , FormControl, Validator } from '@angular/forms';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent {
constructor(private formBuilder:FormBuilder,private productService: ProductService){

}
productForm = this.formBuilder.group({
  name:[''],
  price: [0],
  img: ['']
})

onHandleSubmit(){
  if(this.productForm.valid){
    const product: IProduct = {
      name: this.productForm.value.name || "",
      price: this.productForm.value.price || 0,
    }
    this.productService.addProduct(product).subscribe(data => {
      console.log(data)
    })
  }
}
}
