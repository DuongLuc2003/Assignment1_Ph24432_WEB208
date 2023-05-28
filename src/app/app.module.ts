import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './compronent/product-list/product-list.component';
import { ProductAddComponent } from './compronent/product-add/product-add.component';
import { ProductEditComponent } from './compronent/product-edit/product-edit.component';
import { ProductItemComponent } from './compronent/product-item/product-item.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotfoundPageComponent } from './pages/notfound-page/notfound-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductAddComponent,
    ProductEditComponent,
    ProductItemComponent,
    HomePageComponent,
    NotfoundPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
