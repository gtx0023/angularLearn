import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminComponent} from './admin/admin.component';
import {AuthComponent} from './auth/auth.component';
import {RouterModule} from "@angular/router";


let routes = RouterModule.forChild([
  {
    path: '/',
    component: AdminComponent
  },
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: '**',
    component: AdminComponent
  }
])

@NgModule({
  declarations: [
    AdminComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    routes
  ]
})
export class AdminModule {
}
