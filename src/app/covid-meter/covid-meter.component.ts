import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';
@Component({
  selector: 'app-covid-meter',
  templateUrl: './covid-meter.component.html',
  styleUrls: ['./covid-meter.component.css']
})
export class CovidMeterComponent implements OnInit {
 countryName:any;
 covidCount:any;
 covidCountryData:any;
  constructor(private countryData:UsersService) {
   
   }
   updateCountryData()
   {
     this.countryData.getCovidData().subscribe((data:[])=>this.covidCountryData=data.slice(data.length-10,data.length));
   }
   getSlug(event)
   { 
     this.countryData.getUrl(event.target.value);
     this.updateCountryData();
   }
   
 
  ngOnInit() {
     this.countryData.getCountryNames().subscribe((data)=>this.countryName=data);
    this.countryData.getCovidCount().subscribe((data)=>this.covidCount=data);
    
  }

}