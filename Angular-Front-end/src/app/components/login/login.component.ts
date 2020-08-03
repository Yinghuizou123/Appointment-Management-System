import { Component, OnInit } from '@angular/core';
import { RestapiService } from '../../restapi.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../..//service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  loading = false;
  alert: boolean = false;
  invalidLogin = false;
  constructor(
    private router: Router,
    private loginservice: AuthenticationService
  ) {}

  ngOnInit(): void {}
  checkLogin() {
    this.loading = true;
    this.loginservice.authenticate(this.username, this.password).subscribe(
      data => {
        this.loading = false;
        this.router.navigate(['customers']);
        this.invalidLogin = false;
      },
      error => {
        this.loading = false;
        this.alert = true;
        this.invalidLogin = true;
      }
    );
  }
  closeAlert() {
    this.alert = false;
  }
}
