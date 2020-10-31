import { Component, OnInit } from '@angular/core';
import { Project } from '../data_types';
import { projects } from '../example_projects';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {

  projects: Project[] = projects

  constructor() { }

  ngOnInit(): void {
  }

}
