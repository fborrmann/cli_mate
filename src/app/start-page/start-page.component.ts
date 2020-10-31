import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

  location: string;

  constructor( private router : Router, private service: DataService ) { }

  ngOnInit(): void {
  }

  projects(): void {
    this.service.location = this.location;
    this.router.navigateByUrl('/projects');
  }
}
