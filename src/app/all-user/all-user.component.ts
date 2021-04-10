import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent implements OnInit {
  userDetails = [];
  constructor(private userService: UsersService) {

  }

  ngOnInit(): void {
    this.userService.getDatabaseData().subscribe(data => {
      this.userDetails = data.map(e => {
        return {
          id: e.payload.doc.id,
          name: e.payload.doc.data()['name'],
          email: e.payload.doc.data()['email'],
          phone: e.payload.doc.data()['phone'],
          address: e.payload.doc.data()['address'],
        };
      })
      // console.log(this.userDetails);
    }
    );
    
  }
  deleteRec(rec_id)
    {
      this.userService.deleteRecord(rec_id);
    }

}
