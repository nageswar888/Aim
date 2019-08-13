import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
 import { Router } from "@angular/router";
import { NgFlashMessageService } from "ng-flash-messages";
import { AssetrequestService } from "../../common/services/assetrequest.service";

@Component({
  selector: 'app-assetrequests',
  templateUrl: './addassetrequests.component.html',
  styleUrls: ['./addassetrequests.component.sass']
})
export class AddassetrequestsComponent {

  public submitted:boolean=false;

    AssetRequestForm=this.formBuilder.group({
      assetType:['',[Validators.required ]],
      resourceId:['',[Validators.required ]],
      projectId:['',[Validators.required ]],
      dueDate:['',[Validators.required]],
      status:['',[Validators.required]],
      createdBy:['',[Validators.required]],
      reason:['',[Validators.required ]],
      description:['',[Validators.required ]]
     })

  constructor(private formBuilder:FormBuilder,private assetrequestService:AssetrequestService,
              private router: Router,private ngFlashMessageService:NgFlashMessageService) { }

  get f(){
    return this.AssetRequestForm.controls;
  }
  onSubmit(value) {
    this.submitted = true;
     if (this.AssetRequestForm.invalid) {
      return;
    } else {
       this.assetrequestService.postassetrequestdetails(value).subscribe(users=>{})
      this.ngFlashMessageService.showFlashMessage({
        messages: ["Successfully Registred"],
        dismissible: true,
        timeout: 10000,
        type: 'success'
      });
      setTimeout(() => {
        this.router.navigate(['/viewassetrequests']);
      }, 2000);
    }

  }
}
