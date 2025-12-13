import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponent } from './card.component';
import { ChangeDetectorRef } from '@angular/core';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title when provided', () => {
    component.title = 'Test Card';
    fixture.componentRef.injector.get(ChangeDetectorRef).markForCheck();
    fixture.detectChanges();
    const title = fixture.nativeElement.querySelector('.card__title');
    expect(title).toBeTruthy();
    expect(title.textContent).toBe('Test Card');
  });

  it('should render subtitle when provided', () => {
    component.subtitle = 'Test Subtitle';
    fixture.componentRef.injector.get(ChangeDetectorRef).markForCheck();
    fixture.detectChanges();
    const subtitle = fixture.nativeElement.querySelector('.card__subtitle');
    expect(subtitle).toBeTruthy();
    expect(subtitle.textContent).toBe('Test Subtitle');
  });

  it('should render description when provided', () => {
    component.description = 'Test Description';
    fixture.componentRef.injector.get(ChangeDetectorRef).markForCheck();
    fixture.detectChanges();
    const description = fixture.nativeElement.querySelector('.card__description');
    expect(description).toBeTruthy();
    expect(description.textContent).toBe('Test Description');
  });

  it('should render image when imageUrl is provided', () => {
    component.imageUrl = 'test.jpg';
    component.title = 'Test';
    fixture.componentRef.injector.get(ChangeDetectorRef).markForCheck();
    fixture.detectChanges();
    const img = fixture.nativeElement.querySelector('.card__image');
    expect(img).toBeTruthy();
    expect(img.src).toContain('test.jpg');
    expect(img.alt).toBe('Test');
  });

  it('should not render image wrapper when imageUrl is not provided', () => {
    component.imageUrl = '';
    fixture.componentRef.injector.get(ChangeDetectorRef).markForCheck();
    fixture.detectChanges();
    const imageWrapper = fixture.nativeElement.querySelector('.card__image-wrapper');
    expect(imageWrapper).toBeFalsy();
  });

  it('should render badge when badgeLabel is provided', () => {
    component.imageUrl = 'test.jpg';
    component.badgeLabel = 'Featured';
    fixture.componentRef.injector.get(ChangeDetectorRef).markForCheck();
    fixture.detectChanges();
    const badge = fixture.nativeElement.querySelector('.card__badge');
    expect(badge).toBeTruthy();
    expect(badge.textContent).toBe('Featured');
  });

  it('should apply featured badge class', () => {
    component.imageUrl = 'test.jpg';
    component.badgeLabel = 'Featured';
    component.badgeType = 'featured';
    fixture.componentRef.injector.get(ChangeDetectorRef).markForCheck();
    fixture.detectChanges();
    const badge = fixture.nativeElement.querySelector('.card__badge');
    expect(badge.classList.contains('card__badge--featured')).toBeTruthy();
  });

  it('should apply sold badge class', () => {
    component.imageUrl = 'test.jpg';
    component.badgeLabel = 'Sold';
    component.badgeType = 'sold';
    fixture.componentRef.injector.get(ChangeDetectorRef).markForCheck();
    fixture.detectChanges();
    const badge = fixture.nativeElement.querySelector('.card__badge');
    expect(badge.classList.contains('card__badge--sold')).toBeTruthy();
  });

  it('should render price when provided', () => {
    component.price = '$99.99';
    fixture.componentRef.injector.get(ChangeDetectorRef).markForCheck();
    fixture.detectChanges();
    const price = fixture.nativeElement.querySelector('.card__price');
    expect(price).toBeTruthy();
    expect(price.textContent).toBe('$99.99');
  });

  it('should render price label when provided', () => {
    component.price = '$99.99';
    component.priceLabel = 'per month';
    fixture.componentRef.injector.get(ChangeDetectorRef).markForCheck();
    fixture.detectChanges();
    const priceLabel = fixture.nativeElement.querySelector('.card__price-label');
    expect(priceLabel).toBeTruthy();
    expect(priceLabel.textContent).toBe('per month');
  });

  it('should not render footer when price is not provided', () => {
    component.price = '';
    fixture.componentRef.injector.get(ChangeDetectorRef).markForCheck();
    fixture.detectChanges();
    const footer = fixture.nativeElement.querySelector('.card__footer');
    expect(footer).toBeFalsy();
  });
});
