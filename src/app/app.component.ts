import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  user = {id: 101 , name: "kongpop" , address:"Thailand"}
  i:number = 0;
  nameInput:string="";
  saHi(){
    return "Hi from : " + this.user.name;
  }

  addCount(){
    this.i++;
  }
  DelCount(){
    this.i--;
  }

  readName(name:string){
    this.nameInput=name;
    console.log(name);
    
  }
  valid: boolean = 1>2;
  validAge:boolean = false;

  readAge(age:string){
    let a = parseInt(age)
    this.validAge = a>=18 && a<=25
  }
  menus = ["Shabu", "KFV", "MK" , "BBQ" , "Salad"];

  courses = [
    {id:1, title:"TypScript"},
    {id:2, title:"Java"},
    {id:3, title:"PHP"},
    {id:4, title:"Angular"},
    {id:5, title:"Flutter"},
    
    
  ]
}
