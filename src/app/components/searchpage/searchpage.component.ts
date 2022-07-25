import { Component, OnInit } from '@angular/core';
import { PartdataService } from '../../service/partdata.service';
import {getType} from "@angular/core/src/errors";
import {Time} from "@angular/common";
import { AuthService } from '../../service/auth.service';


@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.css']
})
export class SearchpageComponent implements OnInit {

  searchcategory: String;
  keyword: String;
  msg: String;
  lis: Object[];
  user: any;
  public instance: SearchpageComponent ;

  constructor(
    private partdata: PartdataService,
    private authservice:AuthService,
  ) { 
     
  }

  ngOnInit() {
    
    this.authservice.getProfile().subscribe(res =>{
      this.user = res.user;
      this.msg = "";
      console.log(this.msg)
    },err => {
      this.msg = "An error occured;"
      console.log(err)
    });

    this.instance = this;

  }

  updateCart(partid){
    let cart = this.user["cart"];
    cart.push(partid);
    this.user.cart = cart;
    console.log(this.user.cart)

    this.authservice.editUser(this.user).subscribe(res=>{
      if (res.state){
        alert("data updated");
      }else{
        console.log(res);
      }
    });

  }

  partSearch(){
    var t = performance.now();
    const part = {
      searchcategory: this.searchcategory,
      keyword: this.keyword
    };
    var data: Object;
    switch(this.searchcategory) {
      case "Brand": {
        data = {brand:[part.keyword]};
        this.partdata.searchByBrand(data).subscribe(res => {
          this.lis = res.part;
          if (this.lis.length == 0){
            this.msg = "No Available parts for your search";
          }else{
            this.msg = "We found "+this.lis.length+" parts of brand "+part.keyword;
          }
        });
        break;
      }
      case "Vehicle Type": {
        data = {vehicle_type:[part.keyword]};
        this.partdata.searchByVehicle_type(data).subscribe(res => {
          this.lis = res.part;
          if (this.lis.length == 0){
            this.msg = "No Available parts for your search";
          }else{
            this.msg = "We found "+this.lis.length+" parts for "+part.keyword;
          }
        });
        break;
      }
      case "Condition": {
        data = {condition:[part.keyword]};
        this.partdata.searchByCondition(data).subscribe(res => {
          this.lis = res.part;
          if (this.lis.length == 0){
            this.msg = "No Available parts for your search";
          }else{
            this.msg = "We found "+this.lis.length+" in "+part.keyword + "condition";
          }
        });
        break;
      }
      default: {
        // data = {brand:[part.keyword]};
        this.partdata.searchAllPart().subscribe(res => {
          this.lis = res.part;
          if (this.lis.length == 0){
            this.msg = "No Available parts for your search";
          }else{
            this.msg = "We found "+this.lis.length+" parts";
          }
          console.log(this.msg);
        });
        break;
      }
    }
    console.log(performance.now()-t);
  }


}
