import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NgFlashMessageService} from "ng-flash-messages";
import {PurchaseordersService} from "../../common/services/purchaseorders.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-purchaseorders',
  templateUrl: './addpurchaseorders.component.html',
  styleUrls: ['./addpurchaseorders.component.sass']
})
export class AddpurchaseordersComponent implements OnInit {
  public PurchaseOrderForm:FormGroup;
  public submitted:boolean=false;
  constructor(private  formBuilder:FormBuilder,private ngFlashMessageService:NgFlashMessageService,
              private router: Router,private purchaseorderSevice:PurchaseordersService) { }

  ngOnInit() {
    this.PurchaseOrderForm=this.formBuilder.group({
      vendor:['',[Validators.required,Validators.minLength(3)]],
      purchasedOn:['',[Validators.required]],
      status:['',[Validators.required]],
      recievedDate:['',[Validators.required]],
      assetRequestId:['',[Validators.required]],
      description:['',[Validators.required,Validators.minLength(3)]],
      createdBy:['',[Validators.required]],
    })
  }

  get f(){
    return this.PurchaseOrderForm.controls;
  }
  onSubmit(value: any) {
     this.submitted=true;
    if(this.PurchaseOrderForm.invalid){
      return;
    }
    else {
      this.purchaseorderSevice.postpurchaseorderdetails(value).subscribe(users=>{})
      this.ngFlashMessageService.showFlashMessage({
        messages: ["Successfully Registred"],
        dismissible: true,
        timeout: 2000,
        type: 'success'
      });

      setTimeout(() => {
        this.router.navigate(['/viewpurchaseorders']);
      }, 2000);
    }

  }
}
