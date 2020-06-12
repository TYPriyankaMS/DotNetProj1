import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RocketService {

  constructor(private http:HttpClient) { }

  getDataFromAPI(){
  let observable=  this.http.get('https://reqres.in/api/users?page=2');

  return observable;
  }

  PostDataToAPI(){
    let user={
      name:'priyanka',
      job:'software engineer',
      gender:'female'
    }
  let observable = this.http.post('https://reqres.in/api/users',user);
  return observable;
  }

  deleteDataFromAPI(){
   let observable= this.http.delete('https://reqres.in/api/users/2');
   return observable;
  }
}
