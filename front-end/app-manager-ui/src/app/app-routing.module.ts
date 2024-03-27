import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './products/products.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProcessdetailsComponent } from './processdetails/processdetails.component';
import { ProcessComponent } from './process/process.component';
import { LandingComponent } from './landing/landing.component';
import { ChangeRequestComponent } from './changerequest/changerequest.component';
import { ChangeRequestdetailsComponent } from './changerequestdetails/changerequestdetails.component';


const routes: Routes = [
  { path: 'products', component: ProductdetailsComponent},
  { path: 'processdetail', component: ProcessdetailsComponent},  
  { path: 'processsummary', component: ProcessComponent},  
  { path: 'changerequestsummary', component: ChangeRequestComponent},    
  { path: 'changerequestdetail', component: ChangeRequestdetailsComponent},    
  { path: '**', component: LandingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
