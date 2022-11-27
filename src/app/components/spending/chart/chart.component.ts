import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  Renderer2,
} from '@angular/core';
import { SpendingPerDay } from '../../../model/spending-per-day';

const LABELS = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const MAX_HEIGHT = 150;

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements AfterViewInit {
  @Input() spendings: number[] = [];

  currentFocusIndex = -1;

  constructor(
    private readonly elRef: ElementRef,
    private readonly renderer: Renderer2
  ) {}

  ngAfterViewInit(): void {
    this.adjustChartHeight();
  }

  get spendingsPerDay(): SpendingPerDay[] {
    if (this.spendings.length <= 0) {
      return [];
    }
    const max = Math.max(...this.spendings);
    const result = [];
    for (let i = 0; i < this.spendings.length; i++) {
      const value = this.spendings[i];
      result.push({
        value: value,
        barHeight: this.getHeightInPx(max, value),
        max: value === max,
        label: LABELS[i],
        focus: i === this.currentFocusIndex,
      });
    }
    return result;
  }

  toogleFocus(index: number) {
    this.currentFocusIndex = this.currentFocusIndex === index ? -1 : index;
  }

  private getHeightInPx(max: number, value: number): string {
    if (value === max) {
      return `${MAX_HEIGHT}px`;
    }
    const height = (value * MAX_HEIGHT) / max;
    return `${height}px`;
  }

  private adjustChartHeight() {
    const initHeight = this.elRef.nativeElement.clientHeight;
    const tooltipHeight =
      document.getElementById('chartValueTooltip')?.clientHeight;
    const sum = initHeight + tooltipHeight + 10;
    this.renderer.setStyle(this.elRef.nativeElement, 'height', `${sum}px`);
  }
}
