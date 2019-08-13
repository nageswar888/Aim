import { Component, OnInit } from '@angular/core';
 import { AssetrequestService } from "../../common/services/assetrequest.service";

@Component({
  selector: 'app-viewassetrequests',
  templateUrl: './viewassetrequests.component.html',
  styleUrls: ['./viewassetrequests.component.sass']
})
export class ViewassetrequestsComponent implements OnInit {
//pagination
  public total: number;
  public itemsperpage: number=6;
  public pageno: number=1;
  public page: { pageNo: number; itemsPerPage: number };
  public rowsData: object;
  constructor(private assetrequestservice:AssetrequestService) { }


  ngOnInit() {
    this.getdata();
  }
  getPagination(pageNumber) {

    this.pageno = pageNumber;
    this.page = {
      pageNo: this.pageno,
      itemsPerPage: this.itemsperpage
    };
    this.assetrequestservice.getassetrequestdetails(this.page).subscribe(assetrequestdata=>{
       this.rowsData=assetrequestdata.rows;
      this.total=assetrequestdata.count;
    })
  }
  getdata() {
    this.page = {
      pageNo: this.pageno,
      itemsPerPage: this.itemsperpage
    };
    this.assetrequestservice.getassetrequestdetails(this.page).subscribe(assetrequestdata=>{
       this.rowsData=assetrequestdata.rows;
      this.total=assetrequestdata.count;
    })
  }

}
