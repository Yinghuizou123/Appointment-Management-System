import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { TodosComponent } from './components/todos/todos.component';
import { CustomersComponent } from './components/customers/customers.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { AuthGaurdService } from './service/auth-gaurd.service';

const routes: Routes = [
  { path: '', component: TodosComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'customers',
    component: CustomersComponent,
    canActivate: [AuthGaurdService]
  },
  {
    path: 'addCustomer',
    component: AddCustomerComponent,
    canActivate: [AuthGaurdService]
  },
  { path: 'logout', component: LogoutComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
