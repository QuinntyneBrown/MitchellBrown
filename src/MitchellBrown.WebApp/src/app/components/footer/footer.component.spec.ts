import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';
import { ChangeDetectorRef } from '@angular/core';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render logo when provided', () => {
    component.logo = 'MyCompany';
    fixture.componentRef.injector.get(ChangeDetectorRef).markForCheck();
    fixture.detectChanges();
    const logo = fixture.nativeElement.querySelector('.footer__logo');
    expect(logo).toBeTruthy();
    expect(logo.textContent).toBe('MyCompany');
  });

  it('should render description when provided', () => {
    component.description = 'We build amazing products';
    fixture.componentRef.injector.get(ChangeDetectorRef).markForCheck();
    fixture.detectChanges();
    const description = fixture.nativeElement.querySelector('.footer__description');
    expect(description).toBeTruthy();
    expect(description.textContent).toBe('We build amazing products');
  });

  it('should not render logo when not provided', () => {
    component.logo = '';
    fixture.componentRef.injector.get(ChangeDetectorRef).markForCheck();
    fixture.detectChanges();
    const logo = fixture.nativeElement.querySelector('.footer__logo');
    expect(logo).toBeFalsy();
  });

  it('should render footer sections', () => {
    component.sections = [
      {
        title: 'Products',
        links: [
          { label: 'Product 1', url: '/product1' },
          { label: 'Product 2', url: '/product2' }
        ]
      },
      {
        title: 'Company',
        links: [
          { label: 'About', url: '/about' }
        ]
      }
    ];
    fixture.componentRef.injector.get(ChangeDetectorRef).markForCheck();
    fixture.detectChanges();
    const sections = fixture.nativeElement.querySelectorAll('.footer__section');
    expect(sections.length).toBeGreaterThanOrEqual(2);
    
    const titles = fixture.nativeElement.querySelectorAll('.footer__title');
    expect(titles[0].textContent).toBe('Products');
    expect(titles[1].textContent).toBe('Company');
  });

  it('should render links in sections', () => {
    component.sections = [
      {
        title: 'Products',
        links: [
          { label: 'Product 1', url: '/product1' },
          { label: 'Product 2', url: '/product2' }
        ]
      }
    ];
    fixture.componentRef.injector.get(ChangeDetectorRef).markForCheck();
    fixture.detectChanges();
    const links = fixture.nativeElement.querySelectorAll('.footer__list .footer__link');
    expect(links.length).toBe(2);
    expect(links[0].textContent).toBe('Product 1');
    expect(links[0].href).toContain('/product1');
  });

  it('should render copyright when provided', () => {
    component.copyright = '© 2024 MyCompany';
    fixture.componentRef.injector.get(ChangeDetectorRef).markForCheck();
    fixture.detectChanges();
    const copyright = fixture.nativeElement.querySelector('.footer__copyright');
    expect(copyright).toBeTruthy();
    expect(copyright.textContent).toBe('© 2024 MyCompany');
  });

  it('should render bottom links when provided', () => {
    component.bottomLinks = [
      { label: 'Privacy', url: '/privacy' },
      { label: 'Terms', url: '/terms' }
    ];
    fixture.componentRef.injector.get(ChangeDetectorRef).markForCheck();
    fixture.detectChanges();
    const bottomLinks = fixture.nativeElement.querySelectorAll('.footer__bottom-links .footer__link');
    expect(bottomLinks.length).toBe(2);
    expect(bottomLinks[0].textContent).toBe('Privacy');
    expect(bottomLinks[1].textContent).toBe('Terms');
  });

  it('should not render bottom links section when array is empty', () => {
    component.bottomLinks = [];
    fixture.componentRef.injector.get(ChangeDetectorRef).markForCheck();
    fixture.detectChanges();
    const bottomLinksContainer = fixture.nativeElement.querySelector('.footer__bottom-links');
    expect(bottomLinksContainer).toBeFalsy();
  });
});
