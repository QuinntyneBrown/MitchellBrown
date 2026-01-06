import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { RouterOutlet } from '@angular/router';
import { Header, NavItem } from 'mitchell-brown-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: true,
  imports: [
    Header,
    RouterOutlet
  ],
  styleUrl: './app.scss'
})
export class App {
  viewModel$: Observable<{}> = null!;

  navItems: NavItem[] = [
    { label: 'Life Insurance', href: '/services/life-insurance' },
    { label: 'Investments', href: '/services/investments' },
    { label: 'Retirement Planning', href: '/services/retirement-planning' },
    { label: 'Estate Planning', href: '/services/estate-planning' }
  ];

  onNavItemClick(item: NavItem): void {
    // Navigation will be handled by the router in the future
  }

  onLogoClick(): void {
    // Navigate to home will be handled by the router
  }
}
