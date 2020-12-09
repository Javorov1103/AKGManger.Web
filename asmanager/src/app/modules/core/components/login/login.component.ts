import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor( private authService: AuthService, private router: Router,private formBuilder: FormBuilder)
   { 
   }

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['']);
  }

    this.buildForm();
  }

  login() {
    this.authService.login(this.loginForm.value)
    .subscribe((data) => {
      this.authService.saveToken(data['token']);
      this.router.navigate([""])
    });
  }

  private buildForm() {
    this.loginForm = this.formBuilder.group({
        companyId:[null,Validators.required],
        username: [null, Validators.required],
        password: [null, Validators.required],
        rememberMe: [true]
    });
}

}
