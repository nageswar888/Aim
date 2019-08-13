import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent} from "./login/login.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

import { AuthGuard} from "./login/Auth/auth.guard";
import {TableComponent} from "./common/table/table.component";
import {WidgetComponent} from "./widget/widget.component"
import {CardViewComponent} from "./common/card-view/card-view.component";
import {ViewResourcesComponent} from "./resources/view-resources/view-resources.component";
import {ViewAssetsComponent} from "./assets/view-assets/view-assets.component";
import { AddassettypesComponent } from "./assettypes/addassettypes/addassettypes.component";
import { ViewpurchasesComponent } from "./purchaseorders/viewpurchases/viewpurchases.component";
import { ViewprojectsComponent } from "./projects/viewprojects/viewprojects.component";
import { ViewassetrequestsComponent } from "./assetrequests/viewassetrequests/viewassetrequests.component";
import { AddassetrequestsComponent } from "./assetrequests/addassetrequests/addassetrequests.component";
import { AddprojectsComponent } from "./projects/addprojects/addprojects.component";
import { AddresourcesComponent } from "./resources/addresources/addresources.component";
import { ViewassettypesComponent } from "./assettypes/viewassettypes/viewassettypes.component";
import { AddpurchaseordersComponent } from "./purchaseorders/addpurchasesorders/addpurchaseorders.component";
import { AddassetComponent } from "./assets/addasset/addasset.component";
import { AddinvoicesComponent } from "./invoices/addinvoices/addinvoices.component";


const routes: Routes = [
  { path:'', redirectTo: '/login', pathMatch:'full'},
  { path: 'login', component:LoginComponent},
  { path: 'dashboard', component:DashboardComponent,canActivate:[AuthGuard]},
  { path:'widget', component:WidgetComponent,canActivate:[AuthGuard]},
  { path:'table' , component:TableComponent,canActivate:[AuthGuard]},
  { path:'addasset', component:AddassetComponent,canActivate:[AuthGuard]},
  { path:'addassettypes', component:AddassettypesComponent,canActivate:[AuthGuard]},
  { path:'viewassettypes', component:ViewassettypesComponent,canActivate:[AuthGuard]},
  { path:'addprojects', component:AddprojectsComponent,canActivate:[AuthGuard]},
  { path:'viewprojects', component:ViewprojectsComponent,canActivate:[AuthGuard]},
  { path:'addresources', component:AddresourcesComponent,canActivate:[AuthGuard]},
  { path:'addpurchaseorders', component:AddpurchaseordersComponent,canActivate:[AuthGuard]},
  { path:'viewpurchaseorders', component:ViewpurchasesComponent,canActivate:[AuthGuard]},
  { path:'cardView', component:CardViewComponent,canActivate:[AuthGuard]},
  { path:'addinvoices', component:AddinvoicesComponent,canActivate:[AuthGuard]},
  { path: 'view-resources/:id', component: ViewResourcesComponent, canActivate: [AuthGuard]},
  { path: 'view-assets/:id', component: ViewAssetsComponent, canActivate: [AuthGuard]},
  { path:'assetrequests', component:AddassetrequestsComponent,canActivate:[AuthGuard]},
  { path:'viewassetrequests', component:ViewassetrequestsComponent,canActivate:[AuthGuard]},


  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
