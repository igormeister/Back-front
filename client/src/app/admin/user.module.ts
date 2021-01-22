import { CartPageComponent } from './cart-page/cart-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AdminLayoutComponent } from './shared/admin-layout/admin-layout.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { OrdersPageComponent } from './orders-page/orders-page.component';
import {FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { AddComponent } from './add/add.component';

@NgModule({
    
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            {
                path: '', component: AdminLayoutComponent, children: [
                    {path: '', redirectTo: '/admin/dashboard', pathMatch: 'full'},
                    {path: 'login', component: LoginPageComponent},
                    {path: 'dashboard', component: DashboardPageComponent},
                    {path: 'orders', component: OrdersPageComponent},
                    {path: 'cart', component: CartPageComponent},
                    {path: 'add', component: AddComponent}
                ]
            }
        ])
    ],

    declarations: [
        AdminLayoutComponent,
        DashboardPageComponent,
        OrdersPageComponent,
        LoginPageComponent,
        AddComponent
    ],

    exports: [RouterModule]

})

export class UserModule{

}