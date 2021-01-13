import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{AddproductComponent} from './addproduct/addproduct.component';
import {ProductlistComponent} from './productlist/productlist.component';
import{ProductdetailComponent} from './productdetail/productdetail.component';
const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProductlistComponent },
  { path: 'products/:id', component: ProductdetailComponent },
  { path: 'add', component: AddproductComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
