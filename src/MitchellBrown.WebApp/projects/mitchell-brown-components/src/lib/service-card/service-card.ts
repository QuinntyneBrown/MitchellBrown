import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ServiceCardData {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
}

@Component({
  selector: 'mb-service-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-card.html',
  styleUrl: './service-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServiceCard {
  @Input() title = '';
  @Input() description = '';
  @Input() imageSrc = '';
  @Input() imageAlt = '';
}
