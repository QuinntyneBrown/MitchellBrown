import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface FooterLink {
  label: string;
  href: string;
}

@Component({
  selector: 'mb-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Footer {
  @Input() companyName = 'Mitchell Brown Financial';
  @Input() copyright = '';
  @Input() links: FooterLink[] = [];

  get copyrightText(): string {
    const year = new Date().getFullYear();
    return this.copyright || `© ${year} ${this.companyName}. All rights reserved.`;
  }
}
