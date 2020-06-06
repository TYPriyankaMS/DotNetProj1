import { Component, OnInit, DoCheck } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit{

  constructor(private neha:DataServiceService) { }
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
