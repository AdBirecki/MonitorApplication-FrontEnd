import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';
import { UsersModule } from './users/users.module';
import { DetailsModule } from './details/details.module';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    UsersModule,
    DetailsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
