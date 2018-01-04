import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  constructor(private _userService: UserService){ }

  ngOnInit() {
      // if(this._userService.logged_in()){ this._userService.getUserStored(); }
      this._userService.showTime();
  }
}
