import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Footer, FooterLink } from './footer';

describe('Footer', () => {
  let component: Footer;
  let fixture: ComponentFixture<Footer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer]
    }).compileComponents();

    fixture = TestBed.createComponent(Footer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display company name', () => {
    const companyElement = fixture.nativeElement.querySelector('.footer__company');
    expect(companyElement?.textContent).toBe('Mitchell Brown Financial');
  });

  it('should display custom company name', () => {
    component.companyName = 'Test Company';
    fixture.detectChanges();

    const companyElement = fixture.nativeElement.querySelector('.footer__company');
    expect(companyElement?.textContent).toBe('Test Company');
  });

  it('should generate copyright text with current year', () => {
    const year = new Date().getFullYear();
    expect(component.copyrightText).toContain(year.toString());
    expect(component.copyrightText).toContain('Mitchell Brown Financial');
  });

  it('should display custom copyright text', () => {
    component.copyright = 'Custom Copyright 2024';
    fixture.detectChanges();

    const copyrightElement = fixture.nativeElement.querySelector('.footer__copyright');
    expect(copyrightElement?.textContent).toBe('Custom Copyright 2024');
  });

  it('should render footer links', () => {
    const mockLinks: FooterLink[] = [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Contact', href: '/contact' }
    ];

    component.links = mockLinks;
    fixture.detectChanges();

    const navLinks = fixture.nativeElement.querySelectorAll('.footer__nav-link');
    expect(navLinks.length).toBe(3);
    expect(navLinks[0].textContent.trim()).toBe('Privacy Policy');
    expect(navLinks[0].getAttribute('href')).toBe('/privacy');
  });

  it('should not display nav when no links provided', () => {
    component.links = [];
    fixture.detectChanges();

    const nav = fixture.nativeElement.querySelector('.footer__nav');
    expect(nav).toBeNull();
  });

  it('should render as footer element', () => {
    const footer = fixture.nativeElement.querySelector('footer');
    expect(footer).toBeTruthy();
    expect(footer?.classList.contains('footer')).toBe(true);
  });

  it('should have proper aria-label on nav', () => {
    component.links = [{ label: 'Test', href: '/test' }];
    fixture.detectChanges();

    const nav = fixture.nativeElement.querySelector('.footer__nav');
    expect(nav?.getAttribute('aria-label')).toBe('Footer navigation');
  });
});
