import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {B2cCommunicateComponent} from "@/app/b2c-communicate/b2c-communicate.component";
import {HelloComponent} from "@/app/hello/hello.component";


const routes: Routes = [
  {
    path: 'hello',
    component: HelloComponent
  },
  {
    path: 'b2c',
    component: B2cCommunicateComponent
  },
  {
    path: '**',
    component: B2cCommunicateComponent
  }
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
