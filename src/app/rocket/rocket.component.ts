import { Component, OnInit } from '@angular/core';
import { RocketService } from '../rocket.service';

@Component({
  selector: 'app-rocket',
  templateUrl: './rocket.component.html',
  styleUrls: ['./rocket.component.css']
})
export class RocketComponent implements OnInit {

  constructor(private service:RocketService) { }
  employeeData;
  ngOnInit(): void {
  }

  getData(){
  let observable=  this.service.getDataFromAPI();
    observable.subscribe((response)=>{
      console.log(response);
     this.employeeData= response['data'];
     console.log(this.employeeData);
    })

  }

  postData(){
    let observable=this.service.PostDataToAPI();
    observable.subscribe((response)=>{
      console.log(response);
    })
  }
  del(){
  let observable = this.service.deleteDataFromAPI();
    observable.subscribe((response)=>{
      console.log(response);
    })

  }
}
