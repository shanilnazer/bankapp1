import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit{
  acno:any
  transaction:any
  constructor(private ds:DataService){
   this.acno=this.ds.currentacno

   this.transaction=this.ds.gettransaction(this.acno)
   
   //for(i of transaction)
    
  }
  ngOnInit(): void {
    
  }
}
