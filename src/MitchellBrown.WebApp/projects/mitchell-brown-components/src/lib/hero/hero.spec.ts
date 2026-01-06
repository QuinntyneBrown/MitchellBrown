import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Hero } from './hero';

describe('Hero', () => {
  let component: Hero;
  let fixture: ComponentFixture<Hero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hero]
    }).compileComponents();

    fixture = TestBed.createComponent(Hero);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display default headline', () => {
    const headlineElement = fixture.nativeElement.querySelector('.hero__headline');
    expect(headlineElement?.textContent).toContain('Let');
    expect(headlineElement?.textContent).toContain('finances');
    expect(headlineElement?.textContent).toContain('grow.');
  });

  it('should display emphasis word', () => {
    component.headlineEmphasis = 'your';
    fixture.detectChanges();

    const emphasisElement = fixture.nativeElement.querySelector('.hero__headline-emphasis');
    expect(emphasisElement?.textContent).toBe('your');
  });

  it('should display default CTA text', () => {
    const ctaButton = fixture.nativeElement.querySelector('.hero__cta');
    expect(ctaButton?.textContent.trim()).toBe('Request a Free Info Session');
  });

  it('should display custom CTA text', () => {
    component.ctaText = 'Get Started';
    fixture.detectChanges();

    const ctaButton = fixture.nativeElement.querySelector('.hero__cta');
    expect(ctaButton?.textContent.trim()).toBe('Get Started');
  });

  it('should emit ctaClick when CTA button is clicked', () => {
    const ctaClickSpy = vi.spyOn(component.ctaClick, 'emit');

    component.onCtaClick();

    expect(ctaClickSpy).toHaveBeenCalled();
  });

  it('should have proper aria-label on CTA button', () => {
    component.ctaAriaLabel = 'Custom aria label';
    fixture.detectChanges();

    const ctaButton = fixture.nativeElement.querySelector('.hero__cta');
    expect(ctaButton?.getAttribute('aria-label')).toBe('Custom aria label');
  });

  it('should apply hero class to section', () => {
    const section = fixture.nativeElement.querySelector('section');
    expect(section?.classList.contains('hero')).toBe(true);
  });

  it('should have role banner on section', () => {
    const section = fixture.nativeElement.querySelector('section');
    expect(section?.getAttribute('role')).toBe('banner');
  });

  it('should render headline with correct structure', () => {
    const headline = fixture.nativeElement.querySelector('.hero__headline');
    const textSpans = headline.querySelectorAll('.hero__headline-text');
    const emphasisSpan = headline.querySelector('.hero__headline-emphasis');

    expect(textSpans.length).toBeGreaterThan(0);
    expect(emphasisSpan).toBeTruthy();
  });
});
