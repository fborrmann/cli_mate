import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public location: string;
  public loggedIn: boolean;

  constructor() { }
}
