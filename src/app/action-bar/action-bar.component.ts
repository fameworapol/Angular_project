import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BookService } from '../shared/book.service';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss']
})
export class ActionBarComponent {
  counter:number = 0;
  serviceRes:string = "";
  @Input() step:number = 1;
  @Output() numeberChange = new EventEmitter()
  constructor(private service:BookService){}
  testDIService(){
    this.serviceRes = this.service.httpBook();
  }
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
