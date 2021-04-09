import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AllUserComponent } from './all-user/all-user.component';
import {CovidMeterComponent} from './covid-meter/covid-meter.component';

const routes: Routes=[
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'add-user',
    component: AddUserComponent,
  },
  {
    path: 'all-user',
    component: AllUserComponent,
  },
  {
    path:'covid-meter',
    component:CovidMeterComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent,AddUserComponent,AllUserComponent,CovidMeterComponent];
