import { Component, VERSION } from '@angular/core';
import { Router } from '@angular/router';
import {UsersService} from './users.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  visibleUser=1;
  constructor(public router:Router) {
    
  }
}
