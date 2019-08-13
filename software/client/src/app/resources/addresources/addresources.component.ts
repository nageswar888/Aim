import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ResourcesService} from "../../common/services/resources.service";
import {NgFlashMessageService} from "ng-flash-messages";
import { Router } from "@angular/router";

@Component({
  selector: 'app-resources',
  templateUrl: './addresources.component.html',
  styleUrls: ['./addresources.component.sass']
})
export class AddresourcesComponent implements OnInit {

  public AddResourcesForm:FormGroup;
  public submitted:boolean=false;
   constructor(private formBuilder:FormBuilder,private resourceservice:ResourcesService,
              private router: Router,private ngFlashMessageService:NgFlashMessageService) { }

  ngOnInit() {
    this.AddResourcesForm=this.formBuilder.group({
      firstName:['',[Validators.required,Validators.minLength(3)]],
      lastName:['',[Validators.required,Validators.minLength(3)]],
      email:['',[Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]],
      empId:['',[Validators.required]],
      joiningDate:['',[Validators.required]],
      supervisor:['',[Validators.required]],
      address:['',[Validators.required,Validators.minLength(3)]],
      phoneNumber:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      laborCategory:['',[Validators.required,Validators.minLength(3)]],
    })
  }
  get f(){
   return this.AddResourcesForm.controls;
  }

  onSubmit(value) {
    this.submitted = true;
      if (this.AddResourcesForm.invalid) {
      return;
    } else {
      this.resourceservice.postresourcedetails(value).subscribe(users=>{})
       this.ngFlashMessageService.showFlashMessage({
         messages: ["Successfully Registred"],
         dismissible: true,
         timeout: 2000,
         type: 'success'
       });
       setTimeout(() => {
         this.router.navigate(['/dashboard']);
       }, 2000);
     }

  }
}
