import { Component } from '@angular/core';

@Component({
  selector: 'app-calcpage',
  templateUrl: './calcpage.component.html',
  styleUrls: ['./calcpage.component.css']
})
export class CalcpageComponent {
  a:any;
  b:any;
  res:any;
  add(){
    this.res=Number(this.a)+Number(this.b);
  }
  sub(){
    this.res=this.a-this.b;
  }
  mul(){
    this.res=this.a*this.b;
  }
  div(){
    this.res=this.a/this.b;
  }
  clear(){
    this.a="";
    this.b="";
    this.res="";
  }

}
