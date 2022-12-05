import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  desktop: boolean = true;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.desktop = event.target.innerWidth >= 610;
  }

  ngOnInit() {
    this.desktop = window.innerWidth >= 610;
  }

  pageViews: number = 100;
  yearly: boolean = false;

  min = 50;
  max = 150;

  get discountText(): string {
    return this.desktop ? '25% descount' : '-25%';
  }

  get price(): number {
    const fullPrice = (this.pageViews * 16) / 100;
    return this.yearly ? 0.75 * fullPrice : fullPrice;
  }

  get priceInputBackground(): string {
    const percentage = this.getPercentage();
    return `linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ${percentage}%, hsl(223, 50%, 87%) ${percentage}%, hsl(223, 50%, 87%) 100%)`;
  }

  private getPercentage(): number {
    if (this.pageViews === this.min) {
      return 0;
    }
    if (this.pageViews === this.max) {
      return 100;
    }
    return (100 * (this.pageViews - this.min)) / (this.max - this.min);
  }
}
