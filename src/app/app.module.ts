import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AllUserComponent } from './all-user/all-user.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { UsersService } from './users.service';
import { CovidMeterComponent } from './covid-meter/covid-meter.component';
import {HttpClientModule} from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment.prod';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
  imports:      [ BrowserModule, FormsModule,ReactiveFormsModule,  AppRoutingModule,HttpClientModule,AngularFireModule.initializeApp(environment.firebase), AngularFirestoreModule ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, AddUserComponent, AllUserComponent, routingComponents, CovidMeterComponent],
  providers:[UsersService],
  bootstrap:    [ AppComponent ],

})
export class AppModule { }
