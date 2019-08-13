import {Component, ElementRef, Input, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {AssetsService} from "../assets.service";
import {ActivatedRoute, Router} from "@angular/router";
import { LocalStorage} from "@ngx-pwa/local-storage";
import {Paginate} from "../card-view/card-view.component"
import { FormBuilder, FormGroup } from "@angular/forms";
declare var $;
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})
export class TableComponent implements OnInit,OnChanges{
 @Input() tableData;
  @Input() searchByRowValue;
  dtOptions:any;
  rowsData:any;
  keys:any;
  test:any;
  searchByRow:any;
  dataNotAvailable:boolean;

  page:Paginate;
  p: number = 1;
  total: any;
  as=false;

  advancedSearch:FormGroup;
  constructor(private assetService :AssetsService,
              private route: ActivatedRoute,
              private router: Router,
              private localstorage: LocalStorage,
              private fb: FormBuilder) {
    this.dataNotAvailable=false;

  }

  ngOnInit(): void {


    this.dtOptions = {
      pagingType: 'full_numbers',
      paging:false,
      searching:false,
      info:false,
      dom: 'Bfrtip',
      buttons: [],
      language:{
        'search':'Search For Data',
        'CSV':'Data'
      }
    };
  }


  advanceSearch() {
    if(this.advancedSearch.value.Name!="" && this.advancedSearch.value.serialNumber!="" && this.advancedSearch.value.Model!=""){
      this.as=false;
    }
    else{
      this.as=true;
    }


    this.page={
      pageNo:this.p,
      itemsPerPage:5,
      search:this.searchByRow,
      advancedSearch_Name:this.advancedSearch.value.Name,
      advancedSearch_serialNumber:this.advancedSearch.value.serialNumber,
      advancedSearch_Model:this.advancedSearch.value.Model,
      as:this.as
    };
    this.assetService.getJsonData(this.tableData,this.page).subscribe( data =>{
      this.keys=Object.keys(data["rows"][0]);
      this.verifyObject(data);
    });
  }

  ngOnChanges() { //gets data from Table and displays in  table


    this.advancedSearch=this.fb.group({
      Name:[''],
      serialNumber:[''],
      Model:[''],
      yearOfManufacture:['']
    });
    if(this.advancedSearch.value.Name=='' && this.advancedSearch.value.serialNumber=='' && this.advancedSearch.value.Model=='' && this.advancedSearch.value.yearOfManufacture==''){
      this.as=false;
    }
    else{
      this.as=true;
    }
    this.keys=undefined;
    this.searchByRow=this.searchByRowValue;
    setTimeout( () => {

      this.page={
        pageNo:this.p,
        itemsPerPage:5,
        search:this.searchByRowValue,
        advancedSearch_Name:this.advancedSearch.value.Name,
        advancedSearch_serialNumber:this.advancedSearch.value.serialNumber,
        advancedSearch_Model:this.advancedSearch.value.Model,
        as:this.as
      };

      this.assetService.getJsonData(this.tableData,this.page).subscribe(data=>{
        this.keys=Object.keys(data["rows"][0]);
        this.verifyObject(data);
      });
      }, 10 );



  }

  verifyObject(data){
    this.keys=Object.keys(data["rows"][0]);

    this.rowsData=data["rows"];
    this.total=data["count"];
    if(this.tableData=="Assets"){
      console.log(this.rowsData.length);
      for(let index=0;index<this.rowsData.length;index++){
        this.rowsData[index]["AssetType"]=this.rowsData[index]["AssetType"]["type"];
      }

    }
  }

  getPage(data){
    this.p=data;
    this.page={
      pageNo:data,
      itemsPerPage:5,
      search:this.searchByRow,
      advancedSearch_Name:this.advancedSearch.value.Name,
      advancedSearch_serialNumber:this.advancedSearch.value.serialNumber,
      advancedSearch_Model:this.advancedSearch.value.Model,
      as:this.as
    };
    this.assetService.getJsonData(this.tableData,this.page).subscribe(data=>{

      this.keys=Object.keys(data["rows"][0]);

      console.log(data["rows"]);
      this.verifyObject(data);
    });

  }

  searchData(){
    this.page={
      pageNo:this.p,
      itemsPerPage:5,
      search:this.searchByRow,
      advancedSearch_Name:this.advancedSearch.value.Name,
      advancedSearch_serialNumber:this.advancedSearch.value.serialNumber,
      advancedSearch_Model:this.advancedSearch.value.Model,
      as:this.as
    };
    this.assetService.getJsonData(this.tableData,this.page).subscribe( data =>{
      this.rowsData=data["rows"];
      console.log(this.rowsData);
      if(this.rowsData!=undefined && data["rows"].length!=0){
        this.dataNotAvailable=false;
        this.verifyObject(data);
      }
      else{
        this.dataNotAvailable=true;
      }    });

  }

  ViewDetails(id){

    this.localstorage.setItem('profile',this.tableData).subscribe(() =>{});

      console.log("jkhfjdfhgfa")
    if(this.tableData == 'Employees')
      this.router.navigate(['/view-resources',id]);
    else
      this.router.navigate(['/view-assets',id]);
  }


}


