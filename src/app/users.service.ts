import { Injectable } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  myapiurl="https://api.covid19api.com/country/india";
  constructor(private http:HttpClient, private db:AngularFirestore)
  {}
  getCountryNames()
  {
    let url="https://api.covid19api.com/countries";
    return this.http.get(url);
  }
  getCovidCount()
  { let url="https://api.covid19api.com/world/total";
     return this.http.get(url);
  }
  getCovidData()
  {
    return this.http.get(this.myapiurl);
  }

  getUrl(temp:string)
  { 
    this.myapiurl='https://api.covid19api.com/country/'+temp;
  }
public userData:any[]=[];
collectData(userDetails:FormGroup)
{
  this.userData.push(userDetails);
}
getUserData()
{
  return this.userData;
}
public Records:{};
createUser()
{ this.userData.forEach(Records=>{
  this.db.collection('users').add({
    name:Records.userName,
    email:Records.userEmail,
    phone:Records.userPhone,
    address:Records.userAddress,
  });
});
}
getDatabaseData()
{
  return this.db.collection('users').snapshotChanges();
}
deleteRecord(recId)
{
  this.db.doc('users/'+recId).delete();
}
}
