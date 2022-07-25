import { Component, OnInit } from '@angular/core';
import { PartdataService } from '../../service/partdata.service';
import {AuthService} from "../../service/auth.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-addpart',
  templateUrl: './addpart.component.html',
  styleUrls: ['./addpart.component.css']
})
export class AddpartComponent implements OnInit {

  name: String;
  brands: String[];
  brand: String;
  description: String;
  // conditions: String[];
  condition: String;
  // vehicle_types: String[];
  vehicle_type: String;
  part: Object;
  price: String;
  img: String;
  author:String;
  date:String;
  user:any;
  comments:Object;
  username:String;

  constructor(
    private partdata: PartdataService,
    private authservice: AuthService,
    private router: Router
  ) {
    // this.brands = [];
    // this.conditions = [];
    // this.vehicle_types = [];

  }

  ngOnInit() {
    this.authservice.getProfile().subscribe(res =>{
      this.user = res.user;
      this.username = res.user.username;
    },err => {
      this.router.navigate(['/home']);
      return false;
    });
    this.date = this.getDate();

  }

  getDate(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    return (dd + '.' + mm + '.' + yyyy);
  }

  savePart(){
    this.part = {
      name:this.name,
      brand:this.brand,
      img:this.img,
      description:this.description,
      price:this.price,
      condition:this.condition,
      vehicle_type:this.vehicle_type,
      rating:0.0,
      count:0,
      author:this.user._id,
      date: this.date,
      comments:this.comments,
    };
    this.partdata.savePart(this.part).subscribe(res=>{
      if (res.state){
        alert("data saved");
        this.router.navigate(['/profile'])
      }else{
        console.log(res);
      }
    });
  }

  cancelAdding(){
    this.router.navigate(['/profile'])
  }

}
