import { Component, OnInit } from '@angular/core';
import { RestapiService } from '../../restapi.service';
import { Customer } from '../../models/Customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  phone: string;
  alertMessage: string = '';
  alert: boolean = false;
  totalRecords: number;
  page: number = 1;
  EditRowID: any = '';
  customers: Customer[];
  constructor(private service: RestapiService) {}

  ngOnInit(): void {
    this.service
      .getCustomers()
      .subscribe(response => this.handleSuccessResponse(response));
  }
  setClasses(customer) {
    //Only apply is-complete style, when customer.completed is true
    let classes = {
      'is-complete': customer.completed
    };
    return classes;
  }
  public custom_sort(a, b) {
    if (!a.completed && !b.completed) {
      let aStringDate = a.date.substring(0, 10);
      let bStringDate = b.date.substring(0, 10);
      if (aStringDate === bStringDate) {
        return a.time.localeCompare(b.time);
      } else {
        return aStringDate.localeCompare(bStringDate);
      }
    } else if (a.completed && b.completed) {
      let aStringDate = a.date.substring(0, 10);
      let bStringDate = b.date.substring(0, 10);
      if (aStringDate === bStringDate) {
        return b.time.localeCompare(a.time);
      } else {
        return bStringDate.localeCompare(aStringDate);
      }
    } else if (a.completed) {
      return 1;
    } else {
      return -1;
    }
  }

  handleSuccessResponse(response) {
    this.customers = response;
    console.log(this.customers);
    this.customers.sort(this.custom_sort);
    this.totalRecords = this.customers.length;
  }
  deleteCustomer(customer: Customer): void {
    //Delete from UI
    this.customers = this.customers.filter(u => u.id !== customer.id);
    //delete from server
    this.service.deleteCustomer(customer).subscribe(data => {});
    this.alert = true;
    this.alertMessage = 'delete';
  }
  ChangeCustomerCompleted(customer: Customer): void {
    this.service.changeCompleted(customer).subscribe(data => {});
    customer.completed = !customer.completed;
    this.customers.sort(this.custom_sort);
    this.alert = true;
    this.alertMessage = ' completed status change';
  }
  updateCustomer(customer: Customer): void {
    this.service.updateCustomer(customer).subscribe(data => {});
    this.customers.sort(this.custom_sort);
    this.edit(0);
    this.alert = true;
    this.alertMessage = 'update';
  }

  edit(val) {
    this.EditRowID = val;
  }
  closeAlert() {
    this.alert = false;
  }
  search() {
    if (this.phone != '') {
      this.customers = this.customers.filter(res => {
        return res.phone
          .toLocaleLowerCase()
          .match(this.phone.toLocaleLowerCase());
      });
    } else if (this.phone == '') {
      this.ngOnInit();
    }
  }
}
