import { Component, OnInit, DoCheck } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit{
id
user
  constructor(private neha:DataServiceService,actRoute:ActivatedRoute) {

    actRoute.params.subscribe(data=>{
     this.id= data.id
    });
    actRoute.queryParams.subscribe(data=>{
      this.user=data;
    });
  }
  dataFromChild;
  //step 1 of Parent to child
  employee={
    name:'Priyanka',
    salary:200,
    gender:'female',
    designation:'softwate-Engineer'
  }

  ngOnInit(): void {
   console.log( this.neha.a);
    this.neha.getData();
  }


}
