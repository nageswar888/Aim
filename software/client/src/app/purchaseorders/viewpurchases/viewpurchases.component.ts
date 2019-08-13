import { Component, OnInit } from '@angular/core';
import { PurchaseordersService } from "../../common/services/purchaseorders.service";

@Component({
  selector: 'app-viewpurchases',
  templateUrl: './viewpurchases.component.html',
  styleUrls: ['./viewpurchases.component.sass']
})
export class ViewpurchasesComponent implements OnInit {
//pagination
  public total: number;
  public itemsperpage: number=6;
  public pageno: number=1;
  public page: { pageNo: number; itemsPerPage: number };
  public rowsData: object;
  constructor(private purchaseorderSevice:PurchaseordersService) { }


    ngOnInit() {
      this.getdata();
    }
    getPagination(pageNumber) {

      this.pageno = pageNumber;
      this.page = {
        pageNo: this.pageno,
        itemsPerPage: this.itemsperpage
      };
    this.purchaseorderSevice.getpurchaseorderdetails(this.page).subscribe(purchasesdata=>{
      this.rowsData=purchasesdata.rows;
      this.total=purchasesdata.count;
    })
    }
    getdata() {
      this.page = {
        pageNo: this.pageno,
        itemsPerPage: this.itemsperpage
      };
    this.purchaseorderSevice.getpurchaseorderdetails(this.page).subscribe(purchasesdata=>{
      this.rowsData=purchasesdata.rows;
      this.total=purchasesdata.count;
    })
    }

}
