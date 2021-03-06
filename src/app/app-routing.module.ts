import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcarComponent } from './components/form_car/form_car.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { CarsComponent } from './components/cars/cars.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'cars',
    component: CarsComponent
  },
  {
    path: 'addcar',
    component: AddcarComponent
  },
  {
    path: 'car/:id',
    component: CarDetailsComponent
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '**',
    redirectTo: ''
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
