import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './compenent/car/car.component';
import { CardetailComponent } from './compenent/cardetail/cardetail.component';

const routes: Routes = [{path:"", pathMatch:"full",component:CarComponent},
{path:"cars",component:CarComponent},
{path:"cars/color/:colorId",component:CarComponent},
{path:"cars/brand/:brandId",component:CarComponent},
{path:"car/cars/:carId",component:CardetailComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
