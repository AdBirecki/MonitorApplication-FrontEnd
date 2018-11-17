import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersDataComponent } from './users/users-data/users-data.component';
import { UsersMainComponent } from './users/users-main/users-main.component';
import { UsersDetailsComponent } from './users/users-details/users-details.component';

const routes: Routes = [
  {  
      path: 'users-main', 
      component: UsersMainComponent, 
      children: [
        {
          path: 'users-data', component: UsersDataComponent
        },
        {
          path: 'users-details', component: UsersDetailsComponent
        }
  ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class UsersRoutingModule { }
