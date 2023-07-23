import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss']
})
export class ActionBarComponent {
  counter:number = 0;
  @Input() step:number = 1;
  @Output() numeberChange = new EventEmitter()
  constructor(){}
  decrease(){
    if (this.counter<=0) {
      return
    }
    this.counter-=this.step
    console.log(this.counter);
    this.numeberChange.emit(this.counter);
  }
  increase(){
    if (this.counter>100) {
      return
    }
    this.counter+=this.step
    console.log(this.counter);
    this.numeberChange.emit(this.counter);
  }
}
