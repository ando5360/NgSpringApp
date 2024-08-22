import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-text-wobble',
  standalone: true,
  imports: [MatFormFieldModule],
  animations: [
    trigger('wobble', [
      state('left', style({ marginRight: '20px' })),
      state('center', style({ marginRight: '0px' })),
      state('right', style({ marginLeft: '20px' })),
      transition('left <=> center', [animate('0.05s')]),
      transition('center <=> right', [animate('0.05s')]),
      transition('right <=> center', [animate('0.05s')]),
    ])
  ],
  template: `
    <mat-hint style="color: red; font-family: 'Teko'; font-weight: 500; text-decoration: underline;" [@wobble]="animationState">
      {{text}}
    </mat-hint>
  `,
  styles: ``
})
export class TextWobbleComponent implements OnInit, OnDestroy {
  @Input() subject: BehaviorSubject<boolean> = new BehaviorSubject(false);
  @Input() text: string = '';

  animationState: string = 'center'; // Initial state
  private states = ['left', 'center', 'right'];
  private intervalId: any;
  private timeoutId: any;

  ngOnInit() {
    this.subject.subscribe((errorIsPresent) => {
      if (errorIsPresent) {
        this.startAnimation();
      } else {
        this.stopAnimation();
      }
    });
  }

  startAnimation() {
    if (this.intervalId) {
      clearInterval(this.intervalId); // Clear any existing interval
    }
    let index = 0;
    this.intervalId = setInterval(() => {
      this.animationState = this.states[index];
      index = (index + 1) % this.states.length; // Cycle through states
    }, 50);
    // Stop the animation after 2.5 seconds
    this.timeoutId = setTimeout(() => {
      this.stopAnimation();
    }, 500);
  }

  stopAnimation() {
    if (this.intervalId) {
      clearInterval(this.intervalId); // Clear the interval when animation stops
      this.intervalId = null;
    }
    if (this.timeoutId) {
      clearTimeout(this.timeoutId); // Clear the timeout if needed
      this.timeoutId = null;
    }
  }

  ngOnDestroy() {
    this.stopAnimation(); // Ensure the interval and timeout are cleared on component destruction
  }
}