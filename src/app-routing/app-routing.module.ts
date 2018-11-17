import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { PageNotFoundComponent } from '../app/errors/page-not-found/page-not-found.component';
import { DetailsRoutingModule } from '../app/details/details-routing.module';
import { UsersRoutingModule } from '../app/users/users-routing.module';

const appRoutes: Routes = [
  {path:'', redirectTo: '/a', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
      RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
