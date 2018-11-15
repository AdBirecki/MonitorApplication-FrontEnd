import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsMainComponent } from './detailsView/details-main/details-main.component';
import { DetailsOptionsComponent } from './detailsView/details-options/details-options.component';
import { DetailsSpecificsComponent } from './detailsView/details-specifics/details-specifics.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DetailsMainComponent, 
    DetailsSpecificsComponent, 
    DetailsOptionsComponent]
})
export class DetailsModule { }
