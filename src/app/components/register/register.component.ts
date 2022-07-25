import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../service/auth.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  name: String ;
  username: String ;
  email: String ;
  password: String ;


  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  registerData() {
      const user = {
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password
    };
    this.authService.registerUser(user).subscribe(res => {
      console.log("Sign up successfully");
      this.router.navigate(['/login']);
    });
  }
}
