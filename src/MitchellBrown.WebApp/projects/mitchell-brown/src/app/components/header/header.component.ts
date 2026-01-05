import { Component } from '@angular/core';
import { Header, NavItem } from 'mitchell-brown-components';

@Component({
  selector: 'app-header',
  imports: [Header],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  navItems: NavItem[] = [
    { label: 'Life Insurance', href: '/services/life-insurance' },
    { label: 'Investments', href: '/services/investments' },
    { label: 'Retirement Planning', href: '/services/retirement-planning' },
    { label: 'Estate Planning', href: '/services/estate-planning' }
  ];

  onNavItemClick(item: NavItem): void {
    // Navigation will be handled by the router in the future
    console.log('Navigation clicked:', item);
  }

  onLogoClick(): void {
    console.log('Logo clicked - navigate to home');
  }
}
