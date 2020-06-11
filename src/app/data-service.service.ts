import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }

  a=100;
  getData(){
    console.log(" data is fectched");
  }
}
