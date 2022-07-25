import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import {PartdataService} from "../../service/partdata.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;
  id: String;
  lis: Object[];
  msg: String;
  name : String;


  constructor(
    private authservice:AuthService,
    private partdata : PartdataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authservice.getProfile().subscribe(res =>{
      this.user = res.user;
      this.id = res.user._id;
      this.name = res.user.username;
      this.getParts();
    },err => {
      this.router.navigate(['/login']);
      return false;
    });


    document.getElementById("emaildiv").style.display = "none";
    document.getElementById("usernamediv").style.display = "none";

    document.getElementById("countrydiv").style.display = "none";
    document.getElementById("citydiv").style.display = "none";

    document.getElementById("imgdiv").style.display = "none";


  }

  showEmail(){
    document.getElementById("emaildiv").style.display = "block";
    (<HTMLInputElement>document.getElementById("myemail")).select();
  }

  editEmail() {
    document.getElementById("emaildiv").style.display = "none";
    this.user.email = (<HTMLInputElement>document.getElementById("myemail")).value;
    this.authservice.editUser(this.user).subscribe(res=>{
      if (res.state){
        alert("data updated");
      }else{
        console.log(res);
      }
    });
  }

  showUsername(){
    document.getElementById("usernamediv").style.display = "block";
    (<HTMLInputElement>document.getElementById("myusername")).select();
  }

  editUsername() {
    document.getElementById("usernamediv").style.display = "none";
    this.user.username = (<HTMLInputElement>document.getElementById("myusername")).value;
    this.authservice.editUser(this.user).subscribe(res=>{
      if (res.state){
        alert("data updated");
      }else{
        console.log(res);
      }
    });
  }



  showCountry(){
    document.getElementById("countrydiv").style.display = "block";
    (<HTMLInputElement>document.getElementById("mycountry")).select();
  }

  editCountry() {
    document.getElementById("countrydiv").style.display = "none";
    this.user.country = (<HTMLInputElement>document.getElementById("mycountry")).value;
    this.authservice.editUser(this.user).subscribe(res=>{
      if (res.state){
        alert("data updated");
      }else{
        console.log(res);
      }
    });
  }

  showCity(){
    document.getElementById("citydiv").style.display = "block";
    (<HTMLInputElement>document.getElementById("mycity")).select();
  }

  editCity() {
    document.getElementById("citydiv").style.display = "none";
    this.user.city = (<HTMLInputElement>document.getElementById("mycity")).value;
    this.authservice.editUser(this.user).subscribe(res=>{
      if (res.state){
        alert("data updated");
      }else{
        console.log(res);
      }
    });
  }

  showOccupation(){
    document.getElementById("occupationdiv").style.display = "block";
    (<HTMLInputElement>document.getElementById("myoccupation")).select();
  }

  editOccupation() {
    document.getElementById("occupationdiv").style.display = "none";
    this.user.occupation = (<HTMLInputElement>document.getElementById("myoccupation")).value;
    this.authservice.editUser(this.user).subscribe(res=>{
      if (res.state){
        alert("data updated");
      }else{
        console.log(res);
      }
    });
  }

  showImg(){
    document.getElementById("imgdiv").style.display = "block";
    (<HTMLInputElement>document.getElementById("myimg")).select();
  }

  editImg() {
    document.getElementById("imgdiv").style.display = "none";
    this.user.img = (<HTMLInputElement>document.getElementById("myimg")).value;
    this.authservice.editUser(this.user).subscribe(res=>{
      if (res.state){
        alert("data updated");
      }else{
        console.log(res);
      }
    });
  }


  updatefinal() {
    alert("Profile Updated successfully !");
    this.router.navigate(['/profile']);
  }

  goback() {
    this.router.navigate(['/home']);
  }

  getParts(){
    let author = {author:this.user._id};
    this.partdata.searchByAuthor(author).subscribe(res => {
      this.lis = res.part;
      if (this.lis.length == 0){
        this.msg = "You didn't add any part yet";
        return true
      }else{
        this.msg = "We found "+this.lis.length+" parts added by you ";
        return true
      }
    });
    return true
  }

  addPartNav() {
    this.router.navigate(['/addpart']);
  }




}
