import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Services } from "../../Services/services";
import { Event,Participant } from "../../Services/data_models";


@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {

  @Input() event: any;
  @Output() id = new EventEmitter
  constructor(
    private route: ActivatedRoute,
    private service: Services,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.service.getEvent(this.route.snapshot.params.id)
    .then(event=> this.event = event as Event);
  }

  sendId(data: any) {
    this.id.emit(data);
  }

  viewList(){
      this.router.navigate(['/events'])
  }

  addParticipant(participant: Participant){
    this.event.participant.push(participant);
    this.service.updateEvent(this.event)
  }

}
