import { Component, OnInit } from '@angular/core';
import { ProjectsService } from "../../common/services/projects.service";

@Component({
  selector: 'app-viewprojects',
  templateUrl: './viewprojects.component.html',
  styleUrls: ['./viewprojects.component.sass']
})
export class ViewprojectsComponent implements OnInit {
//pagination
  public total: number;
  public itemsperpage: number=6;
  public pageno: number=1;
  public page: { pageNo: number; itemsPerPage: number };
  public rowsData: object;
  constructor(private projectservice:ProjectsService) { }


    ngOnInit() {
      this.getdata();
    }
    getPagination(pageNumber) {

      this.pageno = pageNumber;
      this.page = {
        pageNo: this.pageno,
        itemsPerPage: this.itemsperpage
      };
     this.projectservice.getprojectdetails(this.page).subscribe(projectdata=>{
       this.rowsData=projectdata.rows;
      this.total=projectdata.count;
      })
    }
    getdata() {
      this.page = {
        pageNo: this.pageno,
        itemsPerPage: this.itemsperpage
      };
     this.projectservice.getprojectdetails(this.page).subscribe(projectdata=>{
       this.rowsData=projectdata.rows;
      this.total=projectdata.count;
      })
    }

}
