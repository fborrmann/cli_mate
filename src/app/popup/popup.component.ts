import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Project } from '../data_types';
import { projects } from '../example_projects';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  project: Project = new Project();
  @Output() event: EventEmitter<Project> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  save(): void {
    this.project.image = "/assets/default.PNG";
    this.event.emit(this.project);
  }

}
