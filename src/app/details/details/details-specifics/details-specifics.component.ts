import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../../services/details.service';

@Component({
  selector: 'app-details-specifics',
  templateUrl: './details-specifics.component.html',
  styleUrls: ['./details-specifics.component.css']
})
export class DetailsSpecificsComponent implements OnInit {

  constructor(private detailsService: DetailsService) { }

  ngOnInit() {
    debugger;
    this.detailsService.Increment();
  }

}
