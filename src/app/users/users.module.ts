import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersDataService } from './services/users-data.service';
import { UsersDataComponent } from './users/users-data/users-data.component';
import { UsersDetailsComponent } from './users/users-details/users-details.component';
import { UsersMainComponent } from './users/users-main/users-main.component';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  exports: [UsersRoutingModule],
  providers: [UsersDataService],
  declarations: [
    UsersDataComponent, 
    UsersDetailsComponent, 
    UsersMainComponent]
})
export class UsersModule { }
