import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Advice } from '../model/advice';
import { AdviceService } from '../service/advice.service';

const MOBILE_WIDTH = 600;

@Component({
  selector: 'app-advice',
  templateUrl: './advice.component.html',
  styleUrls: ['./advice.component.scss'],
})
export class AdviceComponent implements OnInit {
  @ViewChild('btn') btn?: ElementRef;

  advice: Advice | null = null;
  error: boolean = false;
  loading: boolean = false;

  private desktop: boolean = true;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.desktop = event.target.innerWidth >= MOBILE_WIDTH;
  }

  constructor(private readonly adviceService: AdviceService) {}

  ngOnInit(): void {
    this.desktop = window.innerWidth >= MOBILE_WIDTH;
    this.getAdvice();
  }

  get id(): string {
    if (this.error || this.loading || this.advice === null) {
      return '';
    }
    return '#' + this.advice.id;
  }

  get text(): string {
    if (this.advice === null) {
      return 'Click on dice to generate your advice!';
    }
    if (this.error) {
      return 'Sorry we had a problem with generating your advice. Please try again later';
    }
    if (this.loading) {
      return 'Loading...';
    }
    return '"' + this.advice.advice + '"';
  }

  get deviderUrl(): string {
    return this.desktop
      ? '../../assets/images/pattern-divider-desktop.svg'
      : '../../assets/images/pattern-divider-mobile.svg';
  }

  getAdvice(event?: MouseEvent) {
    if (event) {
      const currentTransform = this.btn?.nativeElement.style.webkitTransform;
      const targetTransform =
        currentTransform === '' || currentTransform === 'rotateY(0deg)'
          ? 'rotateY(180deg)'
          : 'rotateY(0deg)';
      this.btn?.nativeElement?.setAttribute(
        'style',
        'transform: ' + targetTransform
      );
    }

    this.loading = true;
    this.error = false;
    this.adviceService.getAdvice().subscribe({
      next: (advice) => {
        this.advice = advice.slip;
      },
      error: (e) => {
        this.error = true;
      },
      complete: () => (this.loading = false),
    });
  }
}
