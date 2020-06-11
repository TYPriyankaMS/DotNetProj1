import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-activated-router',
  templateUrl: './activated-router.component.html',
  styleUrls: ['./activated-router.component.css']
})
export class ActivatedRouterComponent implements OnInit {
id
user
  constructor(private actRoute:ActivatedRoute ) {

    this.actRoute.params.subscribe(data=>{
      this.id=data.id;
    });
    this.actRoute.queryParams.subscribe(data=>{
      this.user=data
    });
   }

  ngOnInit(): void {
  }

}
