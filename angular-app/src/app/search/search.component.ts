import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';
import { BikeService } from './../bike.service';
import { User } from './../user';
import { Bike } from './../bike';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    all_bikes: Bike[] = [];
    searchTerm: string;

    bike_search: Bike = new Bike();

    constructor(private _bikeService: BikeService) { }

    ngOnInit() {
        this.getBikes();
        this.isImage('http://www.bikesdirect.com/products/gravity/mountain_bikes/fsx_white_21.jpg');
        this.isImage('http://www.dsvssdcsdcsdcsdcsdc.dfsfsdf/dsfsdfs');
    }

    search(event: Event){
        event.preventDefault();
        console.log('Search!', this.bike_search);
        // this.all_bikes = this.all_bikes.filter(bike => bike.title.toLowerCase().includes(this.searchTerm.toLowerCase()) )
        this.all_bikes = this.all_bikes.filter(
            bike => {
                var titleMatch: boolean = false;
                var locMatch: boolean = false;
                var priceMatch: boolean = false;
                if(!this.bike_search.title || bike.title.toLowerCase().includes(this.bike_search.title.toLowerCase())){
                    titleMatch = true;
                }

                if(!this.bike_search.location || bike.location.toLowerCase().includes(this.bike_search.location.toLowerCase())) {
                    locMatch = true;
                }
                if(!this.bike_search.price || bike.price <= this.bike_search.price) {
                    priceMatch = true;
                }
                console.log('titleMatch', titleMatch);
                console.log('locMatch', locMatch);

                return (titleMatch && locMatch && priceMatch);
            })

        if(this.all_bikes.length === 0){
            this.all_bikes = null;
        }
    }

    reset(){
        this.bike_search = new Bike();
        this.getBikes();
    }
    getBikes(){
        this._bikeService.getAllBikes()
            .subscribe(
                bikes => this.all_bikes = bikes
            );
    }

    isImage(src:string): void {
        // this.http.get(src)
        //     .catch(error => console.log('got error', error))
    }

}
