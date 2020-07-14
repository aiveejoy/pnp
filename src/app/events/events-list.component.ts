import { Component, OnInit, OnDestroy } from '@angular/core';
import { Event, Participant } from "../Services/data_models";
import { Services } from "../Services/services";
import { Subscription } from "rxjs";
import { Router } from '@angular/router';


@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styles: ['.body-content{font-size:25px;}']
})

export class EventsListsComponent implements OnInit, OnDestroy {
  events: Event[];
  event: any;
  isViewingList = true;
  getEventSubcribe: Subscription

  constructor(private eventService: Services,
    private router: Router) { }

  ngOnInit() {
    this.getEventSubcribe = this.eventService.getEvents().subscribe(res => {
      this.events = res
    })

    this.eventService.currentUserAccount.subscribe(currentUser =>{
      console.log(currentUser);
    })
  }

  logout(){
    this.eventService.updateCurrentUser({
      username: '',
      password: ''
    })
    console.log("naka logout ka dae :)");
    this.router.navigate(['/login']);
  }

  ngOnDestroy() {
    this.getEventSubcribe.unsubscribe()
  }

  gettingId(data: number) {
    this.events.map(event => {
      if (event.id === data) {
        this.event = event;
        console.log(this.event)
      }
      this.isViewingList = false;
    });
  }
  returnToTableView() {
    this.isViewingList = true;
  }

  addEvent(event: Event) {
    this.eventService.addEvent(event)
    console.log(event)
  }

  addNewParticipantEvent(data: Participant) {
    this.events.map(event => {
      if (event.id === this.event.id) {
        event.participants.push(data);
        this.eventService.updateEvent(event)
      }
    });
  }
}




