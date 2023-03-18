import { Component,OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  email = new FormControl('', [Validators.required,Validators.email]);
  password = new FormControl('',[Validators.required,Validators.minLength(6)]);

  constructor(private router: Router,private authService: AuthService){}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password
    })

  }

  getEmailError(){
    return this.email.hasError('required') ? 'Email Is required' :
      this.email.hasError('email') ? 'Not a valid email ' :
        '';
  }

  getPasswordError(){
    return this.password.hasError('required') ? 'Password is required' :
      this.password.hasError('minlength') ? 'Password must be atleast 6 characters long' :
        '';
  }

  login(){

      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;

      if (!email || !password){
        alert('Please enter your email and password');
        return;
      }

      if (this.authService.login(email, password)) {
        alert('Logged in successfully');
        this.router.navigateByUrl('/weather-report');
      } else {
        alert('Invalid email or password');
      }

      // console.log(this.loginForm.value);
      // const user = JSON.parse(localStorage.getItem('user') || '{}');

      // if (user.email === email && user.password === password){
      //   alert('Logged in successfully');
      //   this.router.navigateByUrl('/weather-report');

      // }else {
      //   alert('Invalid email or password');
      // }
    }



}
