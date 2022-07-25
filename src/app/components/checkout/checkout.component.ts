import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { PartdataService } from '../../service/partdata.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  lis: Object[];
  static user: any;
  msg: String;
  total: Number;
  static instance: CheckoutComponent;

  constructor(
    private authservice: AuthService,
    private partdata: PartdataService,
    private router: Router
  ) { 
    CheckoutComponent.instance = this;
  }

  ngOnInit() {
    this.authservice.getProfile().subscribe(res =>{
      CheckoutComponent.user = res.user;
      this.msg = "User found";
      this.getParts();
    },err => {
      this.msg = "An error occured;"
      return false;
    });

    
  }

  public static deletePart(_id){
    let index = 0;
    let list = CheckoutComponent.instance.lis
    for (let i in list) {
      let id = list[i]['_id'];
      if(_id == id){
        index = Number(i)
      }
    }
    list.splice(index,1)
    let total = 0
    for(let i in list){
      total += Number(list[i]["price"]);
    }
    CheckoutComponent.instance.total = total;

    CheckoutComponent.instance.saveData()
  }



  getParts(){
    let total = 0
    let partlist = {partlist:CheckoutComponent.user.cart};
    this.partdata.searchByIdMult(partlist).subscribe(res => {
      this.lis = res.part;
      for(let i in this.lis){
        total += Number(this.lis[i]["price"]);
        this.total = total;
      }
      if (this.lis.length == 0){
        this.msg = "You didn't add any parts to your cart yet";
        return true
      }else{
        this.msg = "We found "+this.lis.length+" parts in your cart ";
        return true
      }
    });
    
    return true
  }

  checkout(){
    alert("Not Implemented")
  }

  cancelCheckout(){
    this.router.navigate(['/home']);
  }

  saveData(){
    let user = CheckoutComponent.user
    let cart = []
    for (let i in this.lis){
      cart.push(this.lis[i]['_id'])
    }
    user.cart = cart
    this.authservice.editUser(user).subscribe(res => {
      if(res.state){
        alert("item removed")
      }else{
        alert("An error occurred")
      }
    })
  }

  
}
