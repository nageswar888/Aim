import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { AssetsService } from "../common/assets.service";
import { ActivatedRoute, Router } from "@angular/router";
import { LocalStorage } from "@ngx-pwa/local-storage";

@Component({
  selector: 'app-resource-table',
  templateUrl: './resource-table.component.html',
  styleUrls: ['./resource-table.component.sass']
})
export class ResourceTableComponent implements OnInit {

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



  }


  advanceSearch() {
    if(this.advancedSearch.value.Name=='' && this.advancedSearch.value.EmailId=='' && this.advancedSearch.value.Mobile_Number=='' && this.advancedSearch.value.date==''){
      this.as=false;
    }
    else{
      this.as=true;
    }
    let dateValue='';
    if(this.advancedSearch.value.date!=''){
      dateValue=(this.advancedSearch.value.date.getFullYear()+'-'+parseInt(this.advancedSearch.value.date.getMonth()+1))+'-'+this.advancedSearch.value.date.getDate()
    }
    this.page={
      pageNo:this.p,
      itemsPerPage:5,
      search:this.searchByRow,
      advancedSearch_Name:this.advancedSearch.value.Name,
    advancedSearch_EmailId:this.advancedSearch.value.EmailId,
    advancedSearch_phoneNumber:this.advancedSearch.value.Mobile_Number,
      date:dateValue,
    as:this.as
    };
    this.assetService.getJsonData(this.tableData,this.page).subscribe( data =>{
      this.keys=Object.keys(data["rows"][0]);
      this.verifyObject(data);
    });
  }

  ngOnChanges() { //gets data from Table and displays in  table
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


    this.advancedSearch=this.fb.group({
      Name:[''],
      EmailId:[''],
      Mobile_Number:[''],
      yearOfManufacture:[''],
      date:['']
    });
    if(this.advancedSearch.value.Name=='' && this.advancedSearch.value.EmailId=='' && this.advancedSearch.value.Mobile_Number=='' && this.advancedSearch.value.date==''){
      this.as=false;
    }
    else{
      this.as=true;
    }
    let dateValue='';
    if(this.advancedSearch.value.date!=''){
      dateValue=(this.advancedSearch.value.date.getFullYear()+'-'+parseInt(this.advancedSearch.value.date.getMonth()+1))+'-'+this.advancedSearch.value.date.getDate()
    }
    this.keys=undefined;
    this.searchByRow=this.searchByRowValue;
    setTimeout( () => {


      this.page={
        pageNo:this.p,
        itemsPerPage:5,
        search:this.searchByRowValue,
        advancedSearch_Name:this.advancedSearch.value.Name,
        advancedSearch_EmailId:this.advancedSearch.value.EmailId,
        advancedSearch_phoneNumber:this.advancedSearch.value.Mobile_Number,
        date:dateValue,
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
      advancedSearch_EmailId:this.advancedSearch.value.EmailId,
      advancedSearch_phoneNumber:this.advancedSearch.value.Mobile_Number,
      date:(this.advancedSearch.value.date.getFullYear()+'-'+parseInt(this.advancedSearch.value.date.getMonth()+1))+'-'+this.advancedSearch.value.date.getDate(),
      as:this.as
    };
    this.assetService.getJsonData(this.tableData,this.page).subscribe(data=>{

      this.keys=Object.keys(data["rows"][0]);

      console.log(data["rows"]);
      this.verifyObject(data);
    });

  }

  searchData(){
    let dateValue='';
    if(this.advancedSearch.value.date!=''){
      dateValue=(this.advancedSearch.value.date.getFullYear()+'-'+parseInt(this.advancedSearch.value.date.getMonth()+1))+'-'+this.advancedSearch.value.date.getDate()
    }
    this.page={
      pageNo:this.p,
      itemsPerPage:5,
      search:this.searchByRow,
      advancedSearch_Name:this.advancedSearch.value.Name,
      advancedSearch_EmailId:this.advancedSearch.value.EmailId,
      advancedSearch_phoneNumber:this.advancedSearch.value.Mobile_Number,
      date:dateValue,
      as:this.as
    };
    this.assetService.getJsonData(this.tableData,this.page).subscribe( data =>{
      this.rowsData=data["rows"];
      console.log(this.rowsData);
      if(this.rowsData!=undefined && data["rows"].length!=0)
      {
        this.dataNotAvailable=false;
        this.verifyObject(data);
      }
      else
      {
        this.dataNotAvailable=true;
      }
    });

  }

  ViewDetails(id){
    this.localstorage.setItem('profile',this.tableData).subscribe(() =>{});
      this.router.navigate(['/view-resources',id]);
  }



}
export class Paginate{
  pageNo:any;
  itemsPerPage:any;
  search:any;
  advancedSearch_Name:any;
  advancedSearch_EmailId:any;
  advancedSearch_phoneNumber:any;
  date:any;
  as:boolean
}
