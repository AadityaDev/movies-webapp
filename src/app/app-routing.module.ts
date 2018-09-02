import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ForgotPaasswordComponent } from './auth/forgot-paassword/forgot-paassword.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent, data: { text: 'Dashboard' } },
  { path: 'login', component: LoginComponent, data: { text: 'Login' } },
  { path: 'register', component: RegisterComponent, data: { text: 'Register' } },
  { path: 'forgot-password', component: ForgotPaasswordComponent, data: { text: 'Forgot Password' } }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
