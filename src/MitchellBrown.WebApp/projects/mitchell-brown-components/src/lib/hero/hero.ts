import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mb-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Hero {
  @Input() headline = 'Let your finances grow.';
  @Input() headlineEmphasis = 'your';
  @Input() ctaText = 'Request a Free Info Session';
  @Input() ctaAriaLabel = 'Request a free information session';

  @Output() ctaClick = new EventEmitter<void>();

  onCtaClick(): void {
    this.ctaClick.emit();
  }
}
