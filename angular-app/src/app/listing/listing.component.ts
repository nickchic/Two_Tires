import { Component, OnInit } from '@angular/core';
import { User } from './../user';
import { UserService } from './../user.service';
import { BikeService } from './../bike.service';
import { Bike } from './../bike';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

    user: User = new User();
    user_bikes: Bike[] = [];
    logged_in: boolean;
    showForm: boolean[] = [];

    constructor(private _userService: UserService, private _bikeService: BikeService) { }

    ngOnInit() {
        if(this._userService.logged_in()){
            if(!this._userService.user_filled){
                this._userService.getUserStored()
                    .subscribe(
                        user => {
                            this.user = user;
                            this.fillBike(user);
                            this.logged_in = true;
                        },
                        errorResponse => console.log(errorResponse)
                    );
            } else if(this._userService.user_filled){
                this.user = this._userService.logged_in_user;
                this.fillBike(this._userService.logged_in_user);
                this.logged_in = true;
            }
        }
    }

    fillBike(user: User){
        console.log('fill in bike', user.bikes);
        this.user_bikes = user.bikes
        for(let i = 0; i < this.user_bikes.length; i++){
            this.showForm[i] = false;
        }
    }

    deleteBike(bike_to_delete: Bike){
        console.log('delete bike', bike_to_delete);
        this._bikeService.deleteBike(bike_to_delete)
            .subscribe(
                bike => {
                    console.log('bike deleted')

                }
            );
        this.user_bikes.splice(this.user_bikes.indexOf(bike_to_delete), 1);
    }

    addBike(bike: Bike){
        console.log('adding bike', bike);
        this.user_bikes.push(bike);
    }

}
