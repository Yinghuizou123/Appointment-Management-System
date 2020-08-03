import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from '../restapi.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}
  authenticate(username, password) {
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(username + ':' + password)
    });
    return this.http
      .get<Customer[]>('http://localhost:8080/allCustomer', {
        headers
      })
      .pipe(
        map(userData => {
          sessionStorage.setItem('usernameTangying!', username);
          let authString = 'Basic ' + btoa(username + ':' + password);
          sessionStorage.setItem('basicauth', authString);
          return userData;
        })
      );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('usernameTangying!');
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem('usernameTangying!');
  }
}
