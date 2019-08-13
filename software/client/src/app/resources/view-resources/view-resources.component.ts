import { Component, OnInit } from '@angular/core';
import { LocalStorage} from "@ngx-pwa/local-storage";
import { AssetsService} from "../../common/assets.service";
import { ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-view-resources',
  templateUrl: './view-resources.component.html',
  styleUrls: ['./view-resources.component.sass']
})
export class ViewResourcesComponent implements OnInit {
  public employee: boolean;
  public assets: boolean;
  public details: object;
  public id: number;

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
      this.assetService.getDetails(data,this.id).subscribe( responce => {
        this.details = responce[0]
      })
    });
  }
}
