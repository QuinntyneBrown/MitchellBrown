import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ContactInfo {
  location: string;
  email: string;
  quote?: string;
  quoteAuthor?: string;
}

@Component({
  selector: 'mb-contact-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactSection {
  @Input() title = 'Get in touch';
  @Input() contactInfo: ContactInfo = {
    location: 'Mississauga, ON',
    email: 'mitchellbrownfinance@gmail.com',
    quote: 'Your need of finance is much greater than your need of protection',
    quoteAuthor: 'R. Nelson Nash'
  };
  @Input() imageSrc = '';
  @Input() imageAlt = 'Mitchell Brown Financial office building';
}
