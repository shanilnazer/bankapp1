import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  aim="your perfect banking partner!"
  data="Account number"
  acno=''
  psw=''
  
  userDetails:any={
    1000:{acno:1000,username:"anu",password:123,balance:0},
    1001:{acno:1001,username:"amal",password:123,balance:0},
    1002:{acno:1002,username:"arun",password:123,balance:0},
    1003:{acno:1003,username:"mega",password:123,balance:0}
  }
  constructor(private router:Router,private ds:DataService,private fb:FormBuilder) { }
  loginForm=this.fb.group({
    acno:['',[Validators.required,Validators.pattern("[0-9]+")]],
    psw:['',[Validators.required,Validators.pattern("[0-9]+")]]})

  ngOnInit(): void{

  }

login(){
  var acno=this.loginForm.value.acno
  var psw=this.loginForm.value.psw

  if(this.loginForm.valid){
    const result=this.ds.login(acno,psw)
    if(result){
      this.router.navigateByUrl('dashboard')
      alert('login sucess')
    }
    else{
      alert('incorrect username or password')
    }

  }
  else{
    alert('invalid form')
  }
   
  }
  
}




//   if(acno in userDetails){
//     if(psw==userDetails[acno]['password']){
//       alert('login succes')
//       this.router.navigateByUrl('dashboard')
//     }
//     else{
//       alert('incorrect password')
//     }
//   }
//   else{
//     alert('user not exist')
//   }
//   // alert('login clicked') 
// }

// login(a:any,b:any){
//   this.acno=a.value
//   this.psw=b.value

//   var acno=this.acno
//   var psw=this.psw
//   var userDetails=this.userDetails
//     if(acno in userDetails){
//     if(psw==userDetails[acno]['password']){
//       alert('login succes')
//     }
//     else{
//       alert('incorrect password')
//     }
//   }
//   else{
//     alert('user not exist')
//   }
//   // alert('login clicked') 
// }
  
// acnoChange(event:any){
//   this.acno=event.target.value
//   console.log(this.acno);
// }
// pswChange(event:any){
//   this.psw=event.target.value
//   console.log(this.psw);
  
//   }

