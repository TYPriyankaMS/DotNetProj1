import { Component, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy{

  constructor() {
    console.log('constructor of child component is called');

  }
  //step3 of P to child
  @Input() dataFromParent

  //step1 of child to Parent
  student={
    name:'neha',
    marks:100,
    gender:'female',
    course:'angular'
  }

  //step2 create event emitter object to get the emit method

   @Output() childEvent=new EventEmitter();
   ngOnInit(): void {
    console.log('ngOnInit()of child component is called');
    this.childEvent.emit(this.student);
  }
  ngOnChanges(change:SimpleChanges){
    console.log(change);
    console.log('ngOnchanges of childcomponent is called');
  }
ngDoCheck(){
  console.log('ngdochek is called inchild comp');
}

ngAfterContentInit(){
  console.log('ngAfterContentInit() is called');
}

ngAfterContentChecked(){
  console.log('ngAfterContentChecked() is called');
}

ngAfterViewInit(){
  console.log('ngAfterViewInit() is called');
}
ngAfterViewChecked(){
  console.log('ngAfterViewChecked is called');
}
ngOnDestroy(){
  console.log('ngOnDestroy is called');
}


}
