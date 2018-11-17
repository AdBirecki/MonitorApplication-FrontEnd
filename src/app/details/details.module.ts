import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsMainComponent } from './details/details-main/details-main.component';
import { DetailsOptionsComponent } from './details/details-options/details-options.component';
import { DetailsSpecificsComponent } from './details/details-specifics/details-specifics.component';
import { DetailsService } from './services/details.service';
import { DetailsRoutingModule } from './details-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DetailsRoutingModule
  ],
  exports:[DetailsRoutingModule],
  providers: [DetailsService],
  declarations: [
    DetailsMainComponent, 
    DetailsSpecificsComponent, 
    DetailsOptionsComponent]
})
export class DetailsModule { }
