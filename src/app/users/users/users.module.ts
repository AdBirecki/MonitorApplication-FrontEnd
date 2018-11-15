import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersDataService } from '../services/users-data.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [UsersDataService],
  declarations: []
})
export class UsersModule { }
