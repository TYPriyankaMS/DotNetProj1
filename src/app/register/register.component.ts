import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ControlContainer, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  regGroup
  // name=new FormControl();
  // password=new FormControl();
  // email=new FormControl();


  constructor(private fb:FormBuilder){ }

  submitted=false;
  ngOnInit(): void {
    // this.regGroup= new FormGroup({
    //   username:this.name,
    //   password:this.password,
    //   email:this.email
    // })
    this.regGroup=this.fb.group({
      username:['',[Validators.required,Validators.minLength(5)]],//form control object of username
      password:[null,[Validators.required,Validators.minLength(4)]], //form control object of password
      email:['',[Validators.required,Validators.email]] //form control object of email
    });
  }

  get f(){
    return this.regGroup.controls;
  }
  onSubmit(){
    console.log("this is submitted")
    this.submitted=true;
    if(this.regGroup.invalid){
      console.log('this is regGroup is invalid');
      return ;
    }
    alert("successfully registered");
  }

  reset(){
    this.submitted=false;
    this.regGroup.reset();
  }


}
