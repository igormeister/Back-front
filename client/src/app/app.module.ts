import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './Common/shared/main-layout/main-layout.component';
import { MainPageComponent } from './Common/main-page/main-page.component';
import { ProductPageComponent } from './admin/product-page/product-page.component';
import { CartPageComponent } from './admin/cart-page/cart-page.component';
import { RegistrationComponent } from './Common/registration/registration.component';

import { ClientsComponent } from './clients/clients.component'
import { AddUserComponent } from './clients/add-user/add-user.component'
import { GetUserComponent } from './clients/get-user/get-user.component'

import { AuctionsComponent } from './auctions/auctions.component'
import { AddAuctionComponent } from './auctions/add-auction/add-auction.component'
import { ShowAuctionComponent } from './auctions/show-auction/show-auction.component'
import { EditAuctionComponent } from './auctions/edit-auction/edit-auction.component'

import { LotsComponent } from './lots/lots.component'
import { AddLotComponent } from './lots/add-lot/add-lot.component'
import { ShowLotComponent } from './lots/show-lot/show-lot.component'
import { EditLotComponent } from './lots/edit-lot/edit-lot.component'

import { BasketsComponent } from './baskets/baskets.component'
import { AddBasketComponent } from './baskets/add-basket/add-basket.component'
import { GetBasketComponent } from './baskets/get-basket/get-basket.component'

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    MainPageComponent,
    ProductPageComponent,
    CartPageComponent,
    RegistrationComponent,
    ClientsComponent,
    AddUserComponent,
    GetUserComponent,
    LotsComponent,
    AddLotComponent,
    ShowLotComponent,
    EditLotComponent,
    BasketsComponent,
    AddBasketComponent,
    GetBasketComponent,
    AuctionsComponent,
    AddAuctionComponent,
    ShowAuctionComponent,
    EditAuctionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
