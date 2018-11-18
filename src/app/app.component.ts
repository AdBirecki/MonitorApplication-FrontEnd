import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private router: Router) {
    
  }

  public toUsersMain($event: Event) {
      this.router.navigate(["users-main"]);
  }

  public toUsersDetails($event: Event) {
      this.router.navigate(["users-main", "users-details"]);
  }

  public toUsersData($event: Event) {
      this.router.navigate(["users-main", "users-data"]);
  }

  public toDetailsMain($event: Event) {
      this.router.navigate(["details-main"]);
  }

  public toDetailsOptions($event: Event) {
      this.router.navigate(["details-main", "details-options"]);
  }

  public toDetailsSpecifics($event: Event) {
      this.router.navigate(["details-main", "details-specifics"]);
  }

}
