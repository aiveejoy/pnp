import { Injectable } from '@angular/core';
import { CanActivate, Router } from "@angular/router";
import { Services } from "../Services/services";

@Injectable({
    providedIn: 'root'
})
export class EventsRouteActivator implements CanActivate {

    constructor(
        private router: Router,
        private eventService: Services
    ){}

    canActivate(){
        let isLoggedIn: boolean;
        if (this.eventService.userAccount.value.username === '' && this.eventService.userAccount.value.password === ''){
            isLoggedIn= false;
            this.router.navigate(['/login']);
        }else{
            isLoggedIn = true;
        }
        return isLoggedIn;
    }
}