import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square-flex',
  templateUrl: './square-flex.component.html',
  styleUrls: ['./square-flex.component.scss']
})
export class SquareFlexComponent {
  @Input() divWidth = 100;
  @Input() divHeight = 100;
}
