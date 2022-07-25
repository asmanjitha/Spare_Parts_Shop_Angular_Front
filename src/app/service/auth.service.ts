import { Injectable } from '@angular/core';
// import {Http, Headers} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { NavbaruserComponent } from '../components/navbaruser/navbaruser.component';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  user: any;
  authtoken: any;
  st:any;


  constructor(
    private http: HttpClient
  ) { }

  registerUser(user) {
    const headers =  new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/user/register', user, {headers: headers}).map((res: any) => res);
  }

  fetchToken(){
    this.authtoken = localStorage.getItem("tokenId");

  }

  fetchUser(){
    let user = localStorage.getItem("user")
  }

  loginUser(user) {
    const headers =  new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/user/login', user, {headers: headers}).map((res: any) => res);
  }

  loginAdmin(user) {
    const headers =  new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/admin/login', user, {headers: headers}).map((res: any) => res);
  }

  saveData(token, userdata){
    this.authtoken = token;
    this.user = userdata;
    localStorage.setItem("tokenId",token);
    localStorage.setItem('user', JSON.stringify(userdata));
  }

  editUser(user){
    const headers =  new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/user/update', user, {headers: headers}).map((res: any) => res);
  }


  getAdminProfile(){

    this.fetchToken();
    return this.http.post('http://localhost:3000/admin/getprofile', {user:"asm"},{headers:{'Authorization':this.authtoken}})
      .map((res:any) => res);
  }

  getProfile(){
    //this.fetchToken();
    /*const headers =  new HttpHeaders();
    const data = {user: 'asm'};
    this.fetchToken();
    headers.append('Authorization', 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YWE5MDMyMzY1ODQ4MDNjM2MwNDBkZDkiLCJ1c2VybmFtZSI6ImFzbSIsIm5hbWUiOiJBa2hpdGhhIiwiZW1haWwiOiJhc21hbmppdGhhQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJhJDEwJDRVTDBWdE15TWpQZUJNWXhVLi5RNk9RRHFoUlkuVmRYUVJoeUpraUUuNHE5Nk1yU2c5clRTIiwiX192IjowLCJpYXQiOjE1MjMxNTYzMTUsImV4cCI6MTUyMzc2MTExNX0.kBnzu3ajquhqx_5-6YwDqsZNqRbdHo2Tpz7waQPyFeU');
    return this.http.post('http://localhost:3000/user/profile', data, {headers: headers}).map((res: any) => res);*/
    let httpOptions = {
      headers: new HttpHeaders({
        //'Content-Type':  'application/json',
        //'Authorization': '123'
      })
    };
    //let headers = new HttpHeaders();
    this.fetchToken();
    //headers.append('Authorization', '123456');
    //headers.append('Content-Type', 'application/json');
    //this.httpOptions.headers.Authorization =  this.authtoken.toString();
    //httpOptions.headers.set('Authorization':this.authtoken);
    return this.http.post('http://localhost:3000/user/profile', {user:"asm"},{headers:{'Authorization':this.authtoken}})
      .map((res:any) => res);
  }

}
