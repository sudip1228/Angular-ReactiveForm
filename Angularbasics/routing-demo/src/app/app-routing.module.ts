import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';


const routes: Routes = [//for routing
  {path:'', redirectTo:'/departments', pathMatch:'full'},//redirecting routes. path='prefix' can also be used if you need
  {path: 'departments', component: DepartmentListComponent},
  {path: 'departments/:id', 
  component: DepartmentDetailComponent,
  children: [//follwoing are the child routes of 'departments/:id'.

    {path:'overview', component: DepartmentOverviewComponent},
    {path:'contact', component:DepartmentContactComponent}
  ]
},

  {path:'employees', component:EmployeeListComponent},
  {path:"**",component:PageNotFoundComponent}//"**" indicates that you can put any url in web-browser.this is called a wildcard route and it should be always at the bottom
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[DepartmentListComponent,
  EmployeeListComponent,
  PageNotFoundComponent,DepartmentDetailComponent,DepartmentOverviewComponent,DepartmentContactComponent]
