import { Component, OnInit } from '@angular/core';
import { RestapiService } from '../../restapi.service';
import { Customer } from '../../models/Customer';
@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  customer: Customer = new Customer(
    0,
    '',
    '',
    this.getDate(),
    this.getTime(),
    '',
    '',
    false
  );
  date: Date;
  time: String;
  alert: boolean = false;
  getDate() {
    var today = new Date();
    var curDate = today.getFullYear() + '-';
    if (today.getMonth() + 1 < 10) curDate += '0';
    curDate += today.getMonth() + 1 + '-';
    if (today.getDate() < 10) curDate += '0';
    curDate += today.getDate();
    return curDate;
  }
  getTime() {
    var today = new Date();
    var curTime = '';
    if (today.getHours() < 10) curTime += '0';
    curTime += today.getHours() + ':';
    if (today.getMinutes() < 10) curTime += '0';
    curTime += today.getMinutes();
    return curTime;
  }

  constructor(private service: RestapiService) {}

  ngOnInit(): void {
    console.log(this.customer);
  }

  createCustomer(): void {
    this.service.addCustomer(this.customer).subscribe(data => {
      this.alert = true;
    });
  }
  closeAlert() {
    this.alert = false;
  }
}
