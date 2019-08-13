import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NgFlashMessageService} from "ng-flash-messages";
import {ProjectsService} from "../../common/services/projects.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-projects',
  templateUrl: './addprojects.component.html',
  styleUrls: ['./addprojects.component.sass']
})
export class AddprojectsComponent implements OnInit {
  public ProjectForm:FormGroup;
  submitted:boolean=false;

  constructor(private formBuilder:FormBuilder,private ngFlashMessageService: NgFlashMessageService,
              private router: Router,private projectservice:ProjectsService) { }
  ngOnInit() {
    this.ProjectForm=this.formBuilder.group({
      name:['',[Validators.required,Validators.minLength(3)]],
      vendor:['',[Validators.required,Validators.minLength(3)]],
      startDate:['',[Validators.required]],
    })
  }
  get f(){
    return this.ProjectForm.controls;
  }
  onSubmit(value) {
    this.submitted = true;
     if (this.ProjectForm.invalid) {
      return;
    } else {
      this.projectservice.postprojectdetails(value).subscribe(users=>{})
      this.ngFlashMessageService.showFlashMessage({
        messages: ["Successfully Registred"],
        dismissible: true,
        timeout: 2000,
        type: 'success'
      });
      setTimeout(() => {
        this.router.navigate(['/viewprojects']);
      }, 2000);
    }
    }

}
