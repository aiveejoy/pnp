import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {

  @Input() event:any;
  @Output() id = new EventEmitter
  constructor() { }

  ngOnInit(): void {
  }

  sendId(data:any){
    this.id.emit(data);
    console.log(data);
  }

}
