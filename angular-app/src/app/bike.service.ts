import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject, Observable } from 'Rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Bike } from './bike';

@Injectable()
export class BikeService {

    bikesObserver = new BehaviorSubject([]);

    constructor(private _http: Http) { }

    create_bike(bike: Bike): Observable<Bike>{
      return this._http.post('/bikes', bike)
          .map((response)=>{
              console.log(response);
              return response.json();
          })
          .catch((error)=> Observable.throw(error))
    }

    getAllBikes(): Observable<Bike[]>{
      return this._http.get('/bikes')
          .map((response)=>{
              console.log(response);
              return response.json();
          })
           .catch((error)=> Observable.throw(error))
    }

    deleteBike(bike: Bike): Observable<Bike>{
        return this._http.delete(`/bikes/${bike._id}`)
            .map((response)=>{
                console.log(response);
                return response.json();
            })
            .catch((error)=> Observable.throw(error))
    }

    editBike(bike: Bike): Observable<Bike>{
        return this._http.put(`/bikes/${bike._id}`, bike)
            .map((response)=>{
                console.log(response);
            })
            .catch((error)=> Observable.throw(error))
    }

    updateUrl(e:Event):void{
        console.log('error happened', e);
        e.srcElement.setAttribute('src', 'assets/img/no_bike.png')
    }

}
