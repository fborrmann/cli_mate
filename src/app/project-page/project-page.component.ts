import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Project } from '../data_types';
import { projects } from '../example_projects';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {
  location: string;
  projects: Project[] = projects

  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.location = this.service.location;
  }

}
