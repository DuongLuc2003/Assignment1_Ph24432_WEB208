import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductEditComponent } from './compronent/product-edit/product-edit.component';
import { ProductListComponent } from './compronent/product-list/product-list.component';
import { ProductAddComponent } from './compronent/product-add/product-add.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {path: '',component: HomePageComponent},
  {path: 'product',component: ProductListComponent},
  {path: 'product/add',component: ProductAddComponent},
  {path: 'product/:id/edit',component:ProductEditComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
