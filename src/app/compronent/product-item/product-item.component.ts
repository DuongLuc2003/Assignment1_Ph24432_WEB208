import { Component , EventEmitter ,Input,Output } from '@angular/core';
import { ProductService } from 'src/app/services/services.service';
import { IProduct } from 'src/app/interfaces/product';
@Component({
  selector: 'tr[app-product-item]',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {
  @Input() product:any;
  @Input() index: any;
  @Output() onRemove: EventEmitter<any> = new EventEmitter();
  constructor(private services:ProductService){

  }
  removeItem(id:any){
    this.onRemove.emit(id)
  }
 
}
