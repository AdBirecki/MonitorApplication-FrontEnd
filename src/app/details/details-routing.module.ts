import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsMainComponent } from './details/details-main/details-main.component';
import { DetailsOptionsComponent } from './details/details-options/details-options.component';
import { DetailsSpecificsComponent } from './details/details-specifics/details-specifics.component';

const routes: Routes = [
  { 
    path:'details-main', 
    component: DetailsMainComponent, 
    children: [
      {
        path: 'details-options',
        component: DetailsOptionsComponent 
      },
      {
        path: 'details-specifics',
        component: DetailsSpecificsComponent
      }
  ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class DetailsRoutingModule { }
