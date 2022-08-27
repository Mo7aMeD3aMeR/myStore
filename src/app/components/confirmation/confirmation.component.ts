import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  fullName:string="";
totalPrice:number=0;


  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
     this.fullName = this.route.snapshot.paramMap.get('name')??"";
     this.totalPrice =Number( this.route.snapshot.paramMap.get('price'));

  }


}
