import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-flipper-item',
  templateUrl: './flipper-item.component.html',
  styleUrls: ['./flipper-item.component.scss'],
})
export class FlipperItemComponent implements OnInit, OnChanges {
  @Input() currentNumber = 0;
  @Input() text: 'SECONDS' | 'MINUTES' | 'HOURS' | 'DAYS' = 'SECONDS';

  @Input() fontSize = 40;
  @Input() fontSizeLabel = 20;

  numberToDisplay: number = 0;
  playAnimation: boolean = false;

  ngOnInit(): void {
    this.numberToDisplay = this.currentNumber;
  }

  ngOnChanges(): void {
    this.playAnimation = true;
  }

  onAnimationFinish(): void {
    this.playAnimation = false;
    this.numberToDisplay = this.currentNumber;
  }

  get current(): string {
    let text = this.numberToDisplay + '';
    return text.length >= 2 ? text : '0' + text;
  }

  get next(): string {
    let nextNumber = this.numberToDisplay - 1;
    if (nextNumber < 0) {
      nextNumber = this.currentNumber;
    }
    let text = nextNumber + '';
    return text.length >= 2 ? text : '0' + text;
  }
}
