import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {B2cCommunicateComponent} from "@/app/b2c-communicate/b2c-communicate.component";
import {HelloComponent} from "@/app/hello/hello.component";
import {SimpleGuard} from "@/app/guard/simple.guard";


const routes: Routes = [
  {
    path: 'hello',
    component: HelloComponent,
    canActivate: [SimpleGuard]
  },
  {
    path: 'b2c',
    component: B2cCommunicateComponent,
    canActivate: [SimpleGuard]
  },
  {
    path: 'admin',
    loadChildren: () => import('@/app/admin/admin.module').then(m => m.AdminModule),
    canActivate: [SimpleGuard]
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
