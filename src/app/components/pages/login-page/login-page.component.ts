import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm !: FormGroup;
  isSubmitted = false;
  returnUrl=''

  constructor(private fb:FormBuilder,
    private userService:UserService,
    private activatedRoute:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.createLoginForm();
    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl;
  }

  createLoginForm(){
    this.loginForm = this.fb.group({
      email:['', [Validators.required,Validators.email]],
      password:['', Validators.required]
    });
  }

  get fc(){
    return this.loginForm.controls;
  }

  submit(){
    this.isSubmitted = true;
    if(this.loginForm.invalid) return;
    const { email,password } = this.loginForm.value;
    const loginPayload={
      email,
      password
    }
    console.log(loginPayload);
    this.userService.login(loginPayload).subscribe(()=>{
      this.router.navigateByUrl(this.returnUrl);
    })

  }

}
