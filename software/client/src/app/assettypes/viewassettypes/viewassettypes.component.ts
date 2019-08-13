import { Component, OnInit } from '@angular/core';
import { AssettypeService } from "../../common/services/assettype.service";
import { NgFlashMessageService } from "ng-flash-messages";

@Component({
  selector: 'app-viewassettypes',
  templateUrl: './viewassettypes.component.html',
  styleUrls: ['./viewassettypes.component.sass']
})
export class ViewassettypesComponent implements OnInit {

//pagination
  public total: number;
  public itemsperpage: number=6;
  public pageno: number=1;
  public page: { pageNo: number; itemsPerPage: number };
  public rowsData: object;
  constructor(private assettypeservice:AssettypeService) {}

    ngOnInit() {
      this.getdata();
    }
    getPagination(pageNumber) {

      this.pageno = pageNumber;
      this.page = {
        pageNo: this.pageno,
        itemsPerPage: this.itemsperpage
      };
      this.assettypeservice.getassettypedetails(this.page).subscribe(assettypedata=>{
       this.rowsData=assettypedata.rows;
        this.total=assettypedata.count;
       })
    }
    getdata() {
      this.page = {
        pageNo: this.pageno,
        itemsPerPage: this.itemsperpage
      };
      this.assettypeservice.getassettypedetails(this.page).subscribe(assettypedata=>{
       this.rowsData=assettypedata.rows;
       this.total=assettypedata.count;
       })
    }
}
