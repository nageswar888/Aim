import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { AssetsService } from "../common/assets.service";
import { Router } from "@angular/router";
import { LocalStorage } from "@ngx-pwa/local-storage";
import { Paginate } from "../common/card-view/card-view.component";

@Component({
  selector: 'app-resource-card',
  templateUrl: './resource-card.component.html',
  styleUrls: ['./resource-card.component.sass']
})
export class ResourceCardComponent implements OnInit {

  display=true;
  visible=false;

  @Input() cardData;
  rowsData:any;
  keys:any;
  name:any;// name and company fields is for asset type search
  company:any;
  searchByRow:any;
  page:Paginate;
  total:any;
  p=1;// for pagination purpose
  dataNotAvailable:boolean;
  advancedSearch:FormGroup;
  as:boolean;
  constructor(private assetService :AssetsService,
              private fb: FormBuilder,
              private router: Router,
              private localstorage: LocalStorage) {}

  ngOnInit() {
    this.dataNotAvailable=false;
    this.company="";

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
    this.assetService.getJsonData(this.cardData,this.page).subscribe( data =>{
      console.log(data);
      this.keys=Object.keys(data["rows"][0]);
      this.verifyObject(data);
    });
  }

  ngOnChanges(){ // Every time data changes in search method  this method calls and filters related data and displays

    this.searchByRow="";
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

    this.visible=false;
    setTimeout( () => { this.visible=true }, 300 );
    this.page={
      pageNo:this.p,
      itemsPerPage:5,
      search:'',
      advancedSearch_Name:this.advancedSearch.value.Name,
      advancedSearch_serialNumber:this.advancedSearch.value.serialNumber,
      advancedSearch_Model:this.advancedSearch.value.Model,
      as:this.as
    };
    this.assetService.getJsonData(this.cardData,this.page).subscribe(data=>{
      this.keys=Object.keys(data["rows"][0]);
      this.verifyObject(data);
    });

  }

  verifyObject(data){
    this.keys=Object.keys(data["rows"][0]);
    this.rowsData=data["rows"];
    console.log(this.rowsData);
    this.total=data["count"];
    if(this.cardData=="Assets"){
      for(let index=0;index<this.rowsData.length;index++){
        this.rowsData[index]["AssetType"]=this.rowsData[index]["AssetType"]["type"];
      }

    }


    let checkBoxGroup=[];
    for(let i1=0;i1<this.rowsData.length;i1++){
      checkBoxGroup.push(this.fb.control(false))
    }

  }

  searchData(){
    this.page={
      pageNo:this.p,
      itemsPerPage:5,
      search:this.searchByRow,
      advancedSearch_Name:this.advancedSearch.value.Name,
      advancedSearch_serialNumber:this.advancedSearch.value.serialNumber,
      advancedSearch_Model:this.advancedSearch.value.Model,
      as:this.as,
    };

    this.assetService.getJsonData(this.cardData,this.page).subscribe( data =>{
      this.rowsData=data["rows"];
      if(this.rowsData!=undefined && data["rows"].length!=0){
        this.dataNotAvailable=false;
        this.verifyObject(data);
      }
      else{
        this.dataNotAvailable=true;
      }
    });

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
    this.assetService.getJsonData(this.cardData,this.page).subscribe(data=>{
      this.verifyObject(data);
    });
  }



  profile(id){
    this.localstorage.setItem('profile',this.cardData).subscribe(() =>{})

    if(this.cardData == 'Employees')
      this.router.navigate(['/view-resources',id])
    else
      this.router.navigate(['/view-assets',id])

  }

}
