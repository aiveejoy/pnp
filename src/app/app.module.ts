import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {EventsListsComponent} from './events/events-list.component';
import { EventDetailsComponent } from './event/event-details/event-details.component';
import { ParticipantsListComponent } from './participants-list/participants-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsListsComponent,
    EventDetailsComponent,
    ParticipantsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
