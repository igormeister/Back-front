import { RegistrationComponent } from './Common/registration/registration.component';
import { LoginPageComponent } from './admin/login-page/login-page.component';
import { ProductPageComponent } from './admin/product-page/product-page.component';
import { MainPageComponent } from './Common/main-page/main-page.component';
import { MainLayoutComponent } from './Common/shared/main-layout/main-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPageComponent } from './admin/dashboard-page/dashboard-page.component';
import { FormControl, FormGroup, Validators, Validator } from '@angular/forms';

import { ClientsComponent } from './clients/clients.component';
import { AddUserComponent } from './clients/add-user/add-user.component';
import { GetUserComponent } from './clients/get-user/get-user.component';

import { AuctionsComponent } from './auctions/auctions.component';
import { AddAuctionComponent } from './auctions/add-auction/add-auction.component';
import { ShowAuctionComponent } from './auctions/show-auction/show-auction.component';
import { EditAuctionComponent } from './auctions/edit-auction/edit-auction.component';

import { LotsComponent } from './lots/lots.component';
import { AddLotComponent } from './lots/add-lot/add-lot.component';
import { ShowLotComponent } from './lots/show-lot/show-lot.component';
import { EditLotComponent } from './lots/edit-lot/edit-lot.component';

import { BasketsComponent } from './baskets/baskets.component';
import { AddBasketComponent } from './baskets/add-basket/add-basket.component';
import { GetBasketComponent } from './baskets/get-basket/get-basket.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: MainPageComponent },
      { path: 'product/:id', component: ProductPageComponent },
      { path: 'dashboard', component: DashboardPageComponent },
      { path: 'login', component: LoginPageComponent },
      { path: 'registration', component: RegistrationComponent },
    ],
  },

  {
    path: 'admin',
    loadChildren: () => import('./admin/user.module').then((m) => m.UserModule),
  },

  {
    path: 'users',
    component: ClientsComponent,
    data: { title: 'List of Users' },
  },

  {
    path: 'get-user/:id',
    component: GetUserComponent,
    data: { title: 'Show User' },
  },

  {
    path: 'add-user',
    component: AddUserComponent,
    data: { title: 'Add User' },
  },

  {
    path: 'auctions',
    component: AuctionsComponent,
    data: { title: 'List of Auctions' },
  },

  {
    path: 'get-auction/:id',
    component: ShowAuctionComponent,
    data: { title: 'Show Auction' },
  },

  {
    path: 'add-auction',
    component: AddAuctionComponent,
    data: { title: 'Add Auction' },
  },

  {
    path: 'edit-auction/:id',
    component: EditAuctionComponent,
    data: { title: 'Edit Auction' },
  },

  {
    path: 'lots',
    component: LotsComponent,
    data: { title: 'List of Lots' },
  },

  {
    path: 'get-lot/:id',
    component: ShowLotComponent,
    data: { title: 'Show Lot' },
  },

  {
    path: 'add-lot',
    component: AddLotComponent,
    data: { title: 'Add Lot' },
  },

  {
    path: 'edit-lot/:id',
    component: EditLotComponent,
    data: { title: 'Edit Lot' },
  },

  {
    path: 'baskets',
    component: BasketsComponent,
  },

  {
    path: 'add-basket',
    component: AddBasketComponent,
    data: { title: 'Add Basket' },
  },

  {
    path: 'basket/:id',
    component: GetBasketComponent,
    data: { title: 'Show Basket' },
  },

  { path: '', redirectTo: '/auctions', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
