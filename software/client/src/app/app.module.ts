
import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharedModule} from "./common/shared.module";

import { HeaderComponent } from './header/header.component';
 import { AccountsComponent } from './accounts/accounts.component';

import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WidgetComponent } from './widget/widget.component';

import { AuthGuard} from "./login/Auth/auth.guard";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import {TableComponent} from "./common/table/table.component";
import {DataTablesModule} from "angular-datatables";
import {AddassetComponent } from './assets/addasset/addasset.component';
import {NgFlashMessagesModule} from "ng-flash-messages";
import {QueryApi} from "./common/request/QueryApi";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {
  MatAutocompleteModule,
  MatButtonModule, MatDatepickerModule,
  MatDividerModule,
  MATERIAL_SANITY_CHECKS,
  MatInputModule, MatNativeDateModule, MatSlideToggleModule
} from "@angular/material";

import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { CardViewComponent } from "./common/card-view/card-view.component";
import { AuthService } from "./interceptors/auth.service";
import { TooltipModule } from "ng2-tooltip-directive";
import { TableDataPipe } from "./common/table/table-data.pipe";
import { NgxPaginationModule } from "ngx-pagination";
import { ViewResourcesComponent } from './resources/view-resources/view-resources.component';
import { ViewAssetsComponent } from './assets/view-assets/view-assets.component';
/*import { DataTablesModule } from 'angular-datatables';*/
import {AddassettypesComponent } from './assettypes/addassettypes/addassettypes.component';
import {AddresourcesComponent } from './resources/addresources/addresources.component';
import {AddprojectsComponent } from './projects/addprojects/addprojects.component';
import {AddpurchaseordersComponent } from './purchaseorders/addpurchasesorders/addpurchaseorders.component';
import { AddinvoicesComponent } from './invoices/addinvoices/addinvoices.component';
import { ViewassettypesComponent } from './assettypes/viewassettypes/viewassettypes.component';
import { ViewprojectsComponent } from './projects/viewprojects/viewprojects.component';
import { ViewpurchasesComponent } from './purchaseorders/viewpurchases/viewpurchases.component';
import { AddassetrequestsComponent } from './assetrequests/addassetrequests/addassetrequests.component';
import { ViewassetrequestsComponent } from './assetrequests/viewassetrequests/viewassetrequests.component';


import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {HttpClient} from '@angular/common/http';
import {HttpLoaderFactory} from "./common/shared.module";


import { MatMenuModule} from '@angular/material/menu';
import { ResourceTableComponent } from './resource-table/resource-table.component';
import { ResourceCardComponent } from './resource-card/resource-card.component';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
     AccountsComponent,
    LoginComponent,
    DashboardComponent,
    WidgetComponent,
    TableComponent,
    AddassetComponent,
    AddassettypesComponent,
    AddresourcesComponent,
    AddprojectsComponent,
    CardViewComponent,
    AddinvoicesComponent,
    ViewassettypesComponent,
    ViewprojectsComponent,
    TableDataPipe,
    AddpurchaseordersComponent,
    ViewpurchasesComponent,
    AddassetrequestsComponent,
    ViewassetrequestsComponent,
    ViewAssetsComponent,
    ViewResourcesComponent,
    ResourceTableComponent,
    ResourceCardComponent,


    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule,
    MatButtonToggleModule,
    DataTablesModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    TooltipModule,
    NgxPaginationModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgFlashMessagesModule.forRoot(),
    TranslateModule.forRoot(
      {
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      }
    ),

    MatMenuModule,
    NgFlashMessagesModule.forRoot()
  ],
  providers: [AuthGuard,
   QueryApi,  { provide: HTTP_INTERCEPTORS,  useClass: AuthService, multi: true }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
