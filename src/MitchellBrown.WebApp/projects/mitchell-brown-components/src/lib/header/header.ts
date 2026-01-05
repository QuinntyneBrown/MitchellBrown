import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}

@Component({
  selector: 'mb-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Header {
  @Input() title = '';
  @Input() logoSrc = '';
  @Input() logoAlt = '';
  @Input() navItems: NavItem[] = [];

  @Output() navItemClick = new EventEmitter<NavItem>();
  @Output() logoClick = new EventEmitter<void>();

  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  onNavItemClick(item: NavItem): void {
    this.navItemClick.emit(item);
    this.closeMenu();
  }

  onLogoClick(): void {
    this.logoClick.emit();
  }
}
