import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  registerForm!: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(6)]);
  confirmPassword = new FormControl('', [Validators.required, Validators.minLength(6)]);
  constructor(private router: Router){}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword
    })

  }

  getEmailError(){
    return this.email.hasError('required') ? 'Email is required' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  getPasswordError(){
    return this.password.hasError('required') ? 'Password is required' :
      this.password.hasError('minlength') ? 'Password must be atleast 6 characters long':
        '';
  }

  getConfirmPasswordError(){
    return this.confirmPassword.hasError('required') ? 'Password is required' :
      this.confirmPassword.hasError('minlength') ? 'Password must be atleast 6 characters long':
        '';
  }

  onSubmit(){
    const email = this.registerForm.value.email;
    const password = this.registerForm.value.password;
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (user.email === this.email.value) {
      alert('User already exists');
      return;
    }

    if(this.password.value !== this.confirmPassword.value){
      alert('Passwords do not match');


    }
    else{
      localStorage.setItem('user', JSON.stringify(this.registerForm.value));
      alert('Registered successfully');
      this.registerForm.reset();
      this.router.navigate(['/']);

    }
  }

}
