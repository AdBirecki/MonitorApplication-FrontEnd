import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../../details/services/details.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  
  constructor(private detailsService: DetailsService) { }

  ngOnInit() {
   this.detailsService.Value = 10;
   this.valueToDisplay = this.detailsService.Value;
  }
  private valueToDisplay: number = 0;
}
