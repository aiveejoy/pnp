import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-participants-list',
  templateUrl: './participants-list.component.html',
  styleUrls: ['./participants-list.component.scss']
})
export class ParticipantsListComponent implements OnInit {
  @Input()event:any
  
  constructor() { }

  ngOnInit(): void {
  }

}
