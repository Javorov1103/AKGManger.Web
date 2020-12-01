import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserLoginModel } from '../../models/userloginmodel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public user: UserLoginModel = { username: "", password: ""};

  public loginForm: FormGroup;
  constructor( private authService: AuthService, private router: Router,private formBuilder: FormBuilder,)
   { 
   }

  ngOnInit(): void {
    this.buildForm();
  }

  login() {
    this.authService.login(this.user).subscribe(
    {
      next(data) {
        this.authService.saveToken(data['token']);
      },
      error(msg) {
        console.log(msg);
      },
      complete() {
        console.log("completed");
      }
    }
    );
  }

  private buildForm() {
    this.loginForm = this.formBuilder.group({
        username: [null, Validators.required],
        password: [null, Validators.required],
        rememberMe: [true]
    });
}

}
