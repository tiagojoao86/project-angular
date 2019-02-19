import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, UrlSegment, Router } from "@angular/router";
import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";
import { Route } from "@angular/compiler/src/core";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

    constructor(private authService: AuthService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.authService.isAuthenticated();
    }

    canLoad(route: Route): 
                    Observable<boolean> | Promise<boolean> | boolean {
        if (this.authService.isAuthenticated()){
            return true;
        }
        else{
            this.router.navigate(['/signin']);
            return false;
        }
    }

}