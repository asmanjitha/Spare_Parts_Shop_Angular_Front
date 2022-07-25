import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { PartdataService } from '../../service/partdata.service';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editpart',
  templateUrl: './editpart.component.html',
  styleUrls: ['./editpart.component.css']
})
export class EditpartComponent implements OnInit {

  part:any;
  id:String;
  user:any;

  constructor(
    private partdata: PartdataService,
    private acrouter: ActivatedRoute,
    private authservice:AuthService,
    private router: Router
  ) { 
    // this.id = acrouter.snapshot.params['_id'];
    this.id = acrouter.snapshot.url[1].path;
    // console.log(acrouter.snapshot.url[1].path);
    partdata.searchById({_id:this.id}).subscribe(res=> {
      
      this.part = res.part;
    } );
  }

  ngOnInit() {
    this.authservice.getProfile().subscribe(res => {
      this.user = res.user;
      this.id = res.user._id;
    }, err => {
      this.router.navigate(['/login']);
      return false;
    });

    document.getElementById("imgdiv").style.display = "none";
    document.getElementById("namediv").style.display = "none";
    document.getElementById("descriptiondiv").style.display = "none";
    document.getElementById("typediv").style.display = "none";
    document.getElementById("conditiondiv").style.display = "none";
    document.getElementById("branddiv").style.display = "none";
    document.getElementById("pricediv").style.display = "none";
  }
  
  showImg(){
    document.getElementById("imgdiv").style.display = "block";
    (<HTMLInputElement>document.getElementById("myimg")).select();
  }

  editImg() {
    document.getElementById("imgdiv").style.display = "none";
    this.part.img = (<HTMLInputElement>document.getElementById("myimg")).value;
    this.partdata.editPart(this.part).subscribe(res=>{
      if (res.state){
        alert("data updated");
      }else{
        console.log(res);
      }
    });
  }

  showName(){
    document.getElementById("namediv").style.display = "block";
    (<HTMLInputElement>document.getElementById("myname")).select();
  }

  editName() {
    document.getElementById("namediv").style.display = "none";
    this.part.name = (<HTMLInputElement>document.getElementById("myname")).value;
    this.partdata.editPart(this.part).subscribe(res=>{
      if (res.state){
        alert("data updated");
      }else{
        console.log(res);
      }
    });
  }

  showDescription(){
    document.getElementById("descriptiondiv").style.display = "block";
    (<HTMLInputElement>document.getElementById("mydescription")).select();
  }

  editDescription() {
    document.getElementById("descriptiondiv").style.display = "none";
    this.part.description = (<HTMLInputElement>document.getElementById("mydescription")).value;
    this.partdata.editPart(this.part).subscribe(res=>{
      if (res.state){
        alert("data updated");
      }else{
        console.log(res);
      }
    });
  }

  showType(){
    document.getElementById("typediv").style.display = "block";
    (<HTMLInputElement>document.getElementById("mytype")).select();
  }

  editType() {
    document.getElementById("typediv").style.display = "none";
    this.part.vehicle_type = (<HTMLInputElement>document.getElementById("mytype")).value;
    this.partdata.editPart(this.part).subscribe(res=>{
      if (res.state){
        alert("data updated");
      }else{
        console.log(res);
      }
    });
  }

  showCondition(){
    document.getElementById("conditiondiv").style.display = "block";
    (<HTMLInputElement>document.getElementById("mycondition")).select();
  }

  editCondition() {
    document.getElementById("conditiondiv").style.display = "none";
    this.part.condition = (<HTMLInputElement>document.getElementById("mycondition")).value.split(",");
    this.partdata.editPart(this.part).subscribe(res=>{
      if (res.state){
        alert("data updated");
      }else{
        console.log(res);
      }
    });
  }

  showBrand(){
    document.getElementById("branddiv").style.display = "block";
    (<HTMLInputElement>document.getElementById("mybrand")).select();
  }

  editBrand() {
    document.getElementById("branddiv").style.display = "none";
    this.part.brand = (<HTMLInputElement>document.getElementById("mybrand")).value.split(",");
    console.log(this.part);
    this.partdata.editPart(this.part).subscribe(res=>{
      if (res.state){
        alert("data updated");
      }else{
        console.log(res);
      }
    });
  }

  showPrice(){
    document.getElementById("pricediv").style.display = "block";
    (<HTMLInputElement>document.getElementById("myprice")).select();
  }

  editPrice() {
    document.getElementById("pricediv").style.display = "none";
    this.part.price = Number((<HTMLInputElement>document.getElementById("myprice")).value);
    this.partdata.editPart(this.part).subscribe(res=>{
      if (res.state){
        alert("data updated");
      }else{
        console.log(res);
      }
    });
  }

  doneEditing(){
    alert("Data saved");
    this.router.navigate(['/profile']);
  }

  cancelEditing(){
    this.router.navigate(['/profile']);
  }

}
