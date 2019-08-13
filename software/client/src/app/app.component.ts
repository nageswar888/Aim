import { Component } from '@angular/core';
/*import '../assets/sass/layout.scss';*/
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  constructor(translate: TranslateService)
  {
    translate.setDefaultLang('en');
    translate.use('en');
  }
}
