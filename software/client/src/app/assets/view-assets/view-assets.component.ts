import { Component, OnInit } from '@angular/core';
import { LocalStorage} from "@ngx-pwa/local-storage";
import { AssetsService} from "../../common/assets.service";
import { ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-view-assets',
  templateUrl: './view-assets.component.html',
  styleUrls: ['./view-assets.component.sass']
})
export class ViewAssetsComponent implements OnInit {
  private employee: boolean;
  private assets: boolean;
  public details: object;
  private id: number;
  constructor(private localstorage:LocalStorage,
              private assetService:AssetsService,
              private router:ActivatedRoute) { }

  ngOnInit() {
    //get id

    this.router.params.subscribe(params => {
      this.id = +params['id'];
    });

    //get Details
    this.localstorage.getItem('profile').subscribe( data =>{
      if(data.url == "Employees")
        this.employee = true;
      else
        this.assets = true;
      this.assetService.getDetails(data,this.id).subscribe( responce => {
        this.details = responce[0]
      })
    })
  }

  assetAssignments(){
    //alert("hello")
    this.assetService.getAssignments(this.id).subscribe( responce => { console.log(responce)})

  }
}
