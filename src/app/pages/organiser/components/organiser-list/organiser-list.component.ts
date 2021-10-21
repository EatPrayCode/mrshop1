import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { dataProfiles } from 'src/app/mock-data/constants';

@Component({
  selector: 'app-organiser-list',
  templateUrl: './organiser-list.component.html',
  styleUrls: ['./organiser-list.component.scss']
})
export class OrganiserListComponent implements OnInit {

  allTasks: any[] = [...dataProfiles[0].toOrganiseTasks, ...dataProfiles[0].toOrganiseTasks, ...dataProfiles[0].toOrganiseTasks];

  @Output() addTaskToListEvt = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  addTaskToList(message: any) {
    this.addTaskToListEvt.emit(message);
  }

}
