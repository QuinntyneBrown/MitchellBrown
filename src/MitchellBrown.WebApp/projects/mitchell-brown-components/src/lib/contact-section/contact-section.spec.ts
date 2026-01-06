import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactSection } from './contact-section';

describe('ContactSection', () => {
  let component: ContactSection;
  let fixture: ComponentFixture<ContactSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactSection]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display default title', () => {
    const titleElement = fixture.nativeElement.querySelector('.contact-section__title');
    expect(titleElement?.textContent).toBe('Get in touch');
  });

  it('should display contact location', () => {
    const textElement = fixture.nativeElement.querySelector('.contact-section__text');
    expect(textElement?.textContent).toBe('Mississauga, ON');
  });

  it('should display email as mailto link', () => {
    const emailElement = fixture.nativeElement.querySelector('.contact-section__email');
    expect(emailElement?.textContent).toBe('mitchellbrownfinance@gmail.com');
    expect(emailElement?.getAttribute('href')).toBe('mailto:mitchellbrownfinance@gmail.com');
  });

  it('should display quote when provided', () => {
    const quoteElement = fixture.nativeElement.querySelector('.contact-section__quote-text');
    expect(quoteElement).toBeTruthy();
    expect(quoteElement?.textContent).toContain('need of finance');
  });

  it('should display quote author', () => {
    const authorElement = fixture.nativeElement.querySelector('.contact-section__quote-author');
    expect(authorElement?.textContent).toBe('R. Nelson Nash');
  });

  it('should display image when imageSrc is provided', () => {
    component.imageSrc = 'test-image.jpg';
    fixture.detectChanges();

    const imageElement = fixture.nativeElement.querySelector('.contact-section__image');
    expect(imageElement?.getAttribute('src')).toBe('test-image.jpg');
  });

  it('should not display image container when imageSrc is empty', () => {
    component.imageSrc = '';
    fixture.detectChanges();

    const imageContainer = fixture.nativeElement.querySelector('.contact-section__image-container');
    expect(imageContainer).toBeNull();
  });

  it('should have proper aria-label on email link', () => {
    const emailElement = fixture.nativeElement.querySelector('.contact-section__email');
    expect(emailElement?.getAttribute('aria-label')).toBe('Send email to mitchellbrownfinance@gmail.com');
  });
});
