import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BikeOfDayComponent } from './bike-of-day/bike-of-day.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { LoginComponent } from './login/login.component';
import { RegComponent } from './reg/reg.component';
import { SearchComponent } from './search/search.component';
import { ListingComponent } from './listing/listing.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: HomeComponent
    },
    {
        path: 'search',
        pathMatch: 'full',
        component: SearchComponent
    },
    {
        path: 'listings',
        pathMatch: 'full',
        component: ListingComponent
    },
    {
        path: 'reg',
        pathMatch: 'full',
        component: RegComponent
    },
    {
        path: 'login',
        pathMatch: 'full',
        component: LoginComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
