import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCard, ServiceCardData } from '../service-card/service-card';

@Component({
  selector: 'mb-services-section',
  standalone: true,
  imports: [CommonModule, ServiceCard],
  templateUrl: './services-section.html',
  styleUrl: './services-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServicesSection {
  @Input() title = 'What we do';
  @Input() services: ServiceCardData[] = [];
}
