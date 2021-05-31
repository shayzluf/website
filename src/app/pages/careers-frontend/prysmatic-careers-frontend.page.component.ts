import { Component, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class CanActivateCareers implements CanActivate {
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;
  constructor() {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
    return environment.hiring;
  }
}


@Component({
    selector: 'prysmatic-careers-frontend-page',
    templateUrl: './prysmatic-careers-frontend.page.component.html',
    styleUrls: ['./prysmatic-careers-frontend.page.component.css']
})
export class PrysmaticCareersFrontendPageComponent {
     constructor() {

    }
}