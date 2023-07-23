import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-max-min-meter',
  templateUrl: './max-min-meter.component.html',
  styleUrls: ['./max-min-meter.component.scss']
})
export class MaxMinMeterComponent {
  @Input() minLabel = 'minlabel'
  @Input() maxLabel = 'maxLabel'
  @Output() minChange = new EventEmitter();
  @Output() maxChange = new EventEmitter();
  constructor(){
    
  }

  doMinChange(value:number){
    this.minChange.emit(value);
  }
  doMaxChange(value:number){
    this.maxChange.emit(value);
  }
}
