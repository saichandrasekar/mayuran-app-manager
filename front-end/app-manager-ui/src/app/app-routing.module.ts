import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './products/products.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProcessdetailsComponent } from './processdetails/processdetails.component';
import { ProcessComponent } from './process/process.component';
import { LandingComponent } from './landing/landing.component';


const routes: Routes = [
  { path: 'products', component: ProductdetailsComponent},
  { path: 'processdetail', component: ProcessdetailsComponent},  
  { path: 'processsummary', component: ProcessComponent},  
  { path: '**', component: LandingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
