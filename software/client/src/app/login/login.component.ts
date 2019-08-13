import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalStorage } from "@ngx-pwa/local-storage";
import { Router} from "@angular/router";
import { LoginService} from "./login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public submitted = false;
  public token: string;
  public errorMessage: string = "Invalid email or password";
  public flag: boolean = false

  constructor(private formBuilder: FormBuilder,
              private localstorage: LocalStorage,
              private router:Router,
              private loginService:LoginService) { }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      email: ['admin@gmail.com', [Validators.required,Validators.pattern("^[\\w\\.=-]+@[\\w\\.-]+\\.[\\w]{2,3}$")]],
      password: ['adminadmin', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.loginForm.controls; }


  onSubmit(formdata) {
    this.submitted = true;

    if (!this.loginForm.invalid) {
      this.loginService.login(formdata).subscribe( (responce) =>{
         this.loginService.setToken(responce['token']);
      },
        (error) =>{this.flag = true },
        () =>{ this.router.navigate(['/dashboard'])})

    }
  }

}
