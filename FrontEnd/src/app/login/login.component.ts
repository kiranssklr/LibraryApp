import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // user={
  //   emailId:'',
  //   password:''
  // }

  loginForm: FormGroup;
  isSubmitted  =  false;

  constructor(private authService:AuthService, private router:Router, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.loginForm  =  this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$")]],
      password: ['', Validators.required]
    });
  }

  login(){
    console.log(this.loginForm.value);
    this.isSubmitted = true;
    if(this.loginForm.invalid){
      return;
    }
    this.authService.login(this.loginForm.value);
    this.router.navigateByUrl('/admin');
  }

  loginValidate(){
  //   if(this.user.emailId.trim()==''||this.user.password.trim()==''){
  //       alert('Username or Password cannot be empty');        
  //   }
  //   else{
  //       alert('Thank you for logged in');
  //   }
  }

  get formControls() { 
    return this.loginForm.controls; 
  }
}
