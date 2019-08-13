import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NgFlashMessageService} from "ng-flash-messages";
import {AddassetService} from "../../common/services/addasset.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-addasset',
  templateUrl: './addasset.component.html',
  styleUrls: ['./addasset.component.sass']
})
export class AddassetComponent implements OnInit {

  public AddAssetsForm:FormGroup;
  public  submitted:boolean=false;
  constructor(private formBuilder:FormBuilder,private ngFlashMessageService: NgFlashMessageService,
              private router: Router,private addassetservice:AddassetService) { }

  ngOnInit() {
    this.AddAssetsForm=this.formBuilder.group({
      name:['',[Validators.required,Validators.minLength(3)]],
      company:['',[Validators.required,Validators.minLength(3)]],
      serialNumber:['',[Validators.required]],
      assetType:['',[Validators.required]],
      model:['',[Validators.required]],
      yearOfManufacture:['',[Validators.required]],
      warrantyExpiryDate:['',[Validators.required]],
      description:['',[Validators.required,Validators.minLength(3)]],
      subscriptionType:['',[Validators.required]],
      tag:['',[Validators.required]],
      invoiceLineItemId:['',Validators.required]
      }
    )
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.AddAssetsForm.controls;
  }
  onSubmit(value) {
    this.submitted = true;
      if (this.AddAssetsForm.invalid) {
      return;
    } else {
       this.addassetservice.postassetdetails(value).subscribe(users=>{})
         this.ngFlashMessageService.showFlashMessage({
           messages: ["Successfully Registred"],
           dismissible: true,
           timeout: 2000,
           type: 'success'
         });

       setTimeout(() => {
         this.router.navigate(['/dashboard']);
       }, 2000);    }
  }
}

