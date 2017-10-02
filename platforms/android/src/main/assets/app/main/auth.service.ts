import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import * as ApplicationSettings from "application-settings";

@Injectable()
export class AuthService {

	BaseUrl: string = 'http://192.168.0.104:4000/api/';
  	UserToken: string;

  	constructor(private http: Http, private options: RequestOptions) { }

  	AuthUser(user) {

    const req = this.http.post(this.BaseUrl + 'authentication', user)
      .subscribe(
      res => {
        if (res.json().success) {
        	console.log(res);
          this.StoreToken(res.json().response);
          return true;
        }
      },
      err => {
        console.log("Error occured");
      }
    );
  }

  StoreToken(token) {

    if (ApplicationSettings.getString('token') === undefined) {
      ApplicationSettings.setString('token', token);
      this.UserToken = token;
      this.ConfigHeaders();
    }
    else {
      ApplicationSettings.remove('token');
      ApplicationSettings.setString('token', token);
      this.UserToken = token;
      this.ConfigHeaders();
    }

  }

  isConnected() {
    if(ApplicationSettings.getString('token') != undefined) {
      return true;
    } else {
      return false;
    }

  }

  ConfigHeaders() {
    this.options = new RequestOptions({
      headers: new Headers({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.UserToken
      })
    });
  }


}
