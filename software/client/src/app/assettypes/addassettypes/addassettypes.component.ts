import { Component, DoCheck, OnChanges, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import {NgFlashMessageService} from "ng-flash-messages";
import {AssettypeService} from "../../common/services/assettype.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-assettypes',
  templateUrl: './addassettypes.component.html',
  styleUrls: ['./addassettypes.component.sass']
})
export class AddassettypesComponent {
  showForm:boolean = true;

  public AssetTypeForm: FormGroup;
  public submitted:boolean = false;

  constructor(private formBuilder: FormBuilder, private ngFlashMessageService: NgFlashMessageService,
              private router: Router, private route: ActivatedRoute, private assettypeservice: AssettypeService
  ) {
    this.prepareForm();
  }

  prepareForm() {
    this.AssetTypeForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      type: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.minLength(3)]]
    })
  }

  get f() {
    return this.AssetTypeForm.controls;
  }


  onSubmit(value) {
    this.submitted = true;
     if (this.AssetTypeForm.invalid) {
      return;
    } else {
       this.assettypeservice.postassettypedetails(value).subscribe(users=>{});
      this.ngFlashMessageService.showFlashMessage({
        messages: ["Successfully Registred"],
        dismissible: true,
        timeout: 2000,
        type: 'success'
      });

      setTimeout(() => {
        this.router.navigate(['/viewassettypes']);
      }, 2000);
    }
  }

}
