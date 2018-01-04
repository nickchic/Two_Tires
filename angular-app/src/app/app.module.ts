import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { CookieModule } from '../../node_modules/ngx-cookie';

import { TitleizePipe } from './titleize.pipe';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegComponent } from './reg/reg.component';
import { BikeOfDayComponent } from './bike-of-day/bike-of-day.component';
import { SearchComponent } from './search/search.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ListingComponent } from './listing/listing.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';

import { BikeService } from './bike.service';
import { UserService } from './user.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegComponent,
    BikeOfDayComponent,
    SearchComponent,
    CreateComponent,
    EditComponent,
    ListingComponent,
    TitleizePipe,
    HomeComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    CookieModule.forRoot()
  ],
  providers: [BikeService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
