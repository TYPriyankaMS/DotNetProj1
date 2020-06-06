import { Component, OnInit, OnChanges, DoCheck, OnDestroy, SimpleChanges } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit
//,OnChanges,DoCheck,OnDestroy
{


  constructor(private homeService:DataServiceService) {
    console.log('constructor of home is called');


 }

 ngOnInit() {
    console.log('ngOnInit() home is called');
    console.log(this.homeService.a);
    this.homeService.getData();

   }







// ngOnChanges(change:SimpleChanges){
// console.log('ngOnchanges  home is called');
// }

// ngDoCheck(){
// console.log('ngDocheck home is called');
// }

//

// ngOnDestroy(){
// console.log('ngOnDestroy home is called')
// }

}
