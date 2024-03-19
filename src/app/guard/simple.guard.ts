import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Router} from '@angular/router';
import {HelloComponent} from "@app/hello/hello.component";

@Injectable({
  providedIn: 'root'
})
export class SimpleGuard  {

  private firstNavigation = true;

  constructor(private router: Router) {
  }
  canActivate( route: ActivatedRouteSnapshot): boolean {
    if (this.firstNavigation) {
      this.firstNavigation = false;
      if (route.component !== HelloComponent) {
        this.router.navigateByUrl('/');
        return false;
      }
    }
    return true;
  }

}
