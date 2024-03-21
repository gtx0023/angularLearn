import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminComponent} from './admin/admin.component';
import {AuthComponent} from './auth/auth.component';
import {RouterModule} from "@angular/router";
import {AddFormComponent} from './add-form/add-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


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
    path: 'addForm',
    component: AddFormComponent
  },
  {
    path: '**',
    component: AdminComponent
  }
])

@NgModule({
  declarations: [
    AdminComponent,
    AuthComponent,
    AddFormComponent
  ],
  imports: [
    CommonModule,
    routes,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule {
}
