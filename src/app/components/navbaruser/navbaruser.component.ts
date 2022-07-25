import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-navbaruser',
  templateUrl: './navbaruser.component.html',
  styleUrls: ['./navbaruser.component.css']
})
export class NavbaruserComponent implements OnInit {
  static instance:NavbaruserComponent;
  static user:any;
  name:String;
  address:String;
  constructor(
    private router: Router,
    private authservice:AuthService,

  ) { 
    NavbaruserComponent.instance = this;
    
  }

  ngOnInit() {
    this.authservice.getProfile().subscribe(res =>{
      NavbaruserComponent.user = res.user;
      this.update()
    },err => {
      console.log(err);
      NavbaruserComponent.user = null;
      this.update()
    });


  }

  update(){
    if(NavbaruserComponent.user == undefined || NavbaruserComponent.user == null){
      
      this.name = 'Login / Sign Up';
      this.address = '/login';
      document.getElementById("login").style.display = "none";
      document.getElementById("checkout").style.display = "none";
      
    }else{
      this.name = "My Profile".toString();
      this.address = '/profile';
      document.getElementById("login").style.display = "block";
      document.getElementById("checkout").style.display = "block";
      if(NavbaruserComponent.user.isadmin){
        document.getElementById("profile").style.display = "block";
      }
    }
  }

  logout(){
    localStorage.clear();
    alert("You are logged out");
    NavbaruserComponent.user = null;
    this.router.navigate(['/home']);
    this.update();
  }

  checkout(){
    this.router.navigate(['/checkout']);
  }
}
