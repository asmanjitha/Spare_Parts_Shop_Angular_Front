import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { PartdataService } from '../../service/partdata.service';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-partdetails',
  templateUrl: './partdetails.component.html',
  styleUrls: ['./partdetails.component.css']
})
export class PartdetailsComponent implements OnInit {

  id: String;
  part: any;
  img: String;
  users: String[];
  comments: String[];
  user: any;
  count:any;
  rating:any;
  temprate:any;

  constructor(
    private partdata: PartdataService,
    private authservice:AuthService,
    private acrouter: ActivatedRoute
  ) {
    // this.id = acrouter.snapshot.params['_id'];
    this.id = acrouter.snapshot.url[1].path;
    console.log(this.id);
    partdata.searchById({id:this.id}).subscribe(res=> {
      this.part = res.part;
      this.img = res.part.img;
      this.comments = res.part.comments;
      this.users = Object.keys(this.comments);
      this.rating = res.part.rating;
      this.count = res.part.count;
      this.temprate = 0;
    });

    this.user = JSON.parse(localStorage.getItem("user"));

   }

  ngOnInit() {
    this.authservice.getProfile().subscribe(res =>{
      this.user = res.user;
      console.log(this.user);
      document.getElementById("ratediv").style.display = "none";
    },err => {
      document.getElementById("rate").style.display = "none";
      document.getElementById("comment").style.display = "none";
      return false;
    });
  }

  showComment(){
    document.getElementById("commentdiv").style.display = "block";
    //(<HTMLInputElement>document.getElementById("myemail")).select();
  }

  saveComment() {
    alert(this.count);
    document.getElementById("commentdiv").style.display = "none";
    if(this.part.comments==null){
      alert("no comments");
      this.part.comments = {};
      this.users = [];
      this.part.comments[this.user.username] = ((<HTMLInputElement>document.getElementById("mycomment")).value);
      this.users.push(this.user.username);
      this.partdata.saveComment(this.part).subscribe(res=>{
        if (res.state){
          alert("data updated");
        }else{
          alert("data not updated");
        }
      });
    }else{
      this.part.comments[this.user.username] = ((<HTMLInputElement>document.getElementById("mycomment")).value);
      this.users.push(this.user.username);
      this.partdata.saveComment(this.part).subscribe(res=>{
        if (res.state){
          alert("data updated");
        }else{
          alert("data not updated");
        }
      });
    }

  }

  closeComment(){
    document.getElementById("commentdiv").style.display = "none";
    (<HTMLInputElement>document.getElementById("mycomment")).value = "";
  }

  showRate(){
    document.getElementById("ratediv").style.display = "block";
  }

  saveRate() {
    document.getElementById("ratediv").style.display = "none";
    this.temprate = Number((<HTMLInputElement>document.getElementById("myrate")).value);
    this.part.rating = (this.rating*this.count + this.temprate)/(this.count + 1);
    this.rating = this.part.rating;
    this.count =+ 1 ;
    this.part.count = this.count;
    this.partdata.saveRate(this.part).subscribe(res=>{
      if (res.state){
        alert("data updated");
      }else{
        alert("data not updated");
      }
    });


  }

  closeRate(){
    document.getElementById("ratediv").style.display = "none";
    (<HTMLInputElement>document.getElementById("myrate")).value = "";
  }

}
