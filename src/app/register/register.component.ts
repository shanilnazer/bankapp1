import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit  {
  // uname=''
  // acno=''
  // psw=''
  constructor(private ds:DataService,private router:Router,private fb:FormBuilder) { }

  registerForm=this.fb.group({
  uname:['',[Validators.required,Validators.pattern('[a-zA-Z]+')]],
  acno:['',[Validators.required,Validators.pattern('[0-9]+')]],
  psw:['',[Validators.required,Validators.pattern('[0-9]+')]]
})

  ngOnInit(): void {

  }
register(){
  var uname=this.registerForm.value.uname
  var acno=this.registerForm.value.acno
  var psw=this.registerForm.value.psw

  if(this.registerForm.valid){
    const result=this.ds.register(acno,uname,psw)
    if(result){
      this.router.navigateByUrl('')
      alert('registration succes')
    }
    else{
      this.router.navigateByUrl('')
      alert('user already exist')
    }
  }
  else{
    alert('invalid form')
  }
  }
}

