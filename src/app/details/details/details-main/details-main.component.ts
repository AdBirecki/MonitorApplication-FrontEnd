import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../../services/details.service';



@Component({
  selector: 'app-details-main',
  templateUrl: './details-main.component.html',
  styleUrls: ['./details-main.component.css']
})
export class DetailsMainComponent implements OnInit {

  constructor(private detailsService: DetailsService) { }

  ngOnInit() {
    this.detailsService.Value = 23;
    this.valueToDisplay = this.detailsService.Value;
   }
   private valueToDisplay: number = 0;

}
