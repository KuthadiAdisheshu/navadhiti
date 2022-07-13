import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './drug/dashboard/dashboard.component';
import { Drugform1Component } from './drug/drugform1/drugform1.component';
import { Drugform2Component } from './drug/drugform2/drugform2.component';

const routes: Routes = [
  {path:'',redirectTo:'/dashboard',pathMatch:'full'},
  {path:'dashboard',component:DashboardComponent},
  {path:'drugform1',component:Drugform1Component},
  {path:'drugform2',component:Drugform2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
