import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-router',
  templateUrl: './router.component.html',
  styleUrls: ['./router.component.css']
})
export class RouterComponent implements OnInit {

  constructor(private router:Router) { }
  ngOnInit(): void {
  }

  navigate(id:number,name:string,imageUrl:string){
      console.log(id);
     console.log(name);
    console.log(imageUrl);
  this.router.navigate([`parent/${id}`],{
    queryParams:{
      username:name,
      url:imageUrl
    }
  })
  }

}
