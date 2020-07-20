import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-participants-list',
  templateUrl: './participants-list.component.html',
  styleUrls: ['./participants-list.component.scss']
})
export class ParticipantsListComponent implements OnInit {
  // @Input() event: any
  @Input() participants: any;
  @Output() backEvent = new EventEmitter();
  @Output() addparticipantevent = new EventEmitter();
  fullName;
  position;
  company;

  constructor() { }

  ngOnInit(): void {
  }

  returnToTable() {
    this.backEvent.emit();
  }
  register(data) {
    console.log('you click the button', data);
    this.participants.push(data);
    this.addparticipantevent.emit(data);
    this.fullName = '';
    this.position = '';
    this.company = '';
  }

}
