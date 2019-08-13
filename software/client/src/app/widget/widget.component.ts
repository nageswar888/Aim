import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.sass']
})
export class WidgetComponent implements OnInit {
  public data:any;
  public activeState:string = 'Resources';
  public dataDisplayType:string;
  public cardView:string='cardView';
  public checkboxGroupForm: FormGroup;
  searchByRow:any;

  constructor(private formBuilder: FormBuilder) { }


  ngOnInit() {
    this.searchByRow='';
    this.data='Employees';


    this.dataDisplayType='TableView';






    this.checkboxGroupForm = this.formBuilder.group({
      left: true,
      middle: false,
      right: false
    });
  }
  states = [
    'Resources',
    'Assets',
    'Accounting'
  ]


  CardView(){
    this.dataDisplayType='CardView';
  }
  TableView(){
    this.dataDisplayType='TableView'
  }

  Employee(details){
    this.searchByRow='';
    if(details=='Resources')
      this.data='Employees';
    else
      this.data=details;
    this.activeState = details;
    console.log(details)
  }

}
