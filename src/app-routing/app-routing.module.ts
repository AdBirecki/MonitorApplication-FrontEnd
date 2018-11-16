import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { PageNotFoundComponent } from '../app/errors/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {path:'', redirectTo: '/a', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
