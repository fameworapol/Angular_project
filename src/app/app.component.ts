import { Component } from '@angular/core';

@Component({
  //selector ใช้ระบุถึง component
  selector: 'app-root' ,
  //templateUrl อ้างอิงไปยังไฟล์ template ของ component
  templateUrl: './app.component.html',
  //styleUrls อ้างอิงไปยังไฟล์ stylesheet ของ component
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-project';
  ninjaName = 'naruto';
  value = 0;
  myMinLabel = "myMinLabel"
  myMaxLabel = "myMaxLabel"
  squareHeight = 100
  squareWidth = 200
  ninjaConsole(){
    console.log("ninjaConsole = ",this.ninjaName);
  }
  
  changeNinjaName(name:string){
    this.ninjaName = name;
  }

  callBuffet(value:string){
    const price = Number(value);
    this.value = (price*3)/4;
  }

  testClick(){
    console.log("test Event Binding");
  }
  testNumberChange(value:number){
    console.log("test Number Change :",value);
  }
  
  doAppMinChange(value:any){
    console.log("minchange");
  }

  doAppMaxChange(value:any){
    console.log("maxchange");
  }

}
