import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Customer } from './models/Customer';

export class Customer {
  constructor(
    public id: number,
    public name: string,
    public phone: string,
    public date: string,
    public time: string,
    public detail: string,
    public other: string,
    public completed: boolean
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class RestapiService {
  public baseUrl: string = 'http://localhost:8080';
  //need to fix this later
  constructor(private http: HttpClient) {}
  public getCustomers() {
    return this.http.get<Customer[]>(this.baseUrl + '/allCustomer');
  }
  public deleteCustomer(customer) {
    return this.http.delete<Customer>(
      this.baseUrl + '/deleteCustomer' + '/' + customer.id
    );
  }
  public changeCompleted(customer) {
    return this.http.put<Customer>(
      this.baseUrl + '/changeCustomerCompleted' + '/' + customer.id,
      customer
    );
  }

  public addCustomer(customer) {
    return this.http.post<Customer>(this.baseUrl + '/addCustomer', customer);
  }
  public updateCustomer(customer) {
    return this.http.put<Customer>(this.baseUrl + '/updateCustomer', customer);
  }
}
