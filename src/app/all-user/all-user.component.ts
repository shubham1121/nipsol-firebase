import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent implements OnInit {
 userDetails=[];
  constructor(private userService:UsersService) { 
    this.userDetails=userService.getUserData();
  }
  
  ngOnInit(): void {
  }

}
