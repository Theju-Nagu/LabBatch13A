import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddtowishlistComponent } from './addtowishlist/addtowishlist.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CartComponent } from './components/shopping-cart/cart/cart.component';
//import { CartItemComponent } from './components/shopping-cart/cart-item/cart-item.component';
import { FiltersComponent } from './components/shopping-cart/filters/filters.component';
import { ProductListComponent } from './components/shopping-cart/product-list/product-list.component';
import { ProductItemComponent } from './components/shopping-cart/product-list/product-item/product-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AddtowishlistComponent,
    FooterComponent,
    HeaderComponent,
    NavBarComponent,
    ShoppingCartComponent,
    CartComponent,
    //CartItemComponent,
    FiltersComponent,
    ProductListComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,MatMenuModule,MatToolbarModule,MatCardModule,
    MatDividerModule,MatListModule,    HttpClientModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
