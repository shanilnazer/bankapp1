import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // acno=''
  // psw=''
  // amnt=''

  // acno1=''
  // psw1=''
  // amnt1=''
  dateandtime:any
  acno:any
  user=''
  

  constructor(private ds:DataService,private fb:FormBuilder,private router:Router){
    this.dateandtime=new Date()
  
    //access username
    this.user=this.ds.currentuser
  }
  depositForm=this.fb.group({acno:[''],psw:[''],amnt:['']})

  withdrawForm=this.fb.group({acno1:[''],psw1:[''],amnt1:['']})
  ngOnInit(): void {
    if(!localStorage.getItem('currentacno')){
      alert('please login first')
      this.router.navigateByUrl('')

    }
  }
  Deposit(){
    var acno=this.depositForm.value.acno
    var psw=this.depositForm.value.psw
    var amnt=this.depositForm.value.amnt

    const result=this.ds.Deposit(acno,psw,amnt)

    if(result){
      alert(`${amnt}created to your ac and the balance is ${result}`)
    }
    else{
      alert('incorrect acno or password')
    }

  }

  Withdraw(){
    var acno1=this.withdrawForm.value.acno1
    var psw1=this.withdrawForm.value.psw1
    var amnt1=this.withdrawForm.value.amnt1
    const result=this.ds.Withdraw(acno1,psw1,amnt1)

    if(result){
      alert(`${amnt1}is debited and the balance is ${result}`)
    }

     
  }
logout(){
  localStorage.removeItem('currentuser')
  localStorage.removeItem('currentacno')
  this.router.navigateByUrl('')
}
deleteconfirm(){
  this.acno=JSON.parse(localStorage.getItem('currentacno') || "")
}
}
