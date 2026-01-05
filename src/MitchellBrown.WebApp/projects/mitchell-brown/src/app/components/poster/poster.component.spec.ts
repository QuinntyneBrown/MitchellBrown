import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PosterComponent } from './poster.component';
import { ChangeDetectorRef } from '@angular/core';

describe('PosterComponent', () => {
  let component: PosterComponent;
  let fixture: ComponentFixture<PosterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PosterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title when provided', () => {
    component.title = 'Welcome';
    fixture.componentRef.injector.get(ChangeDetectorRef).markForCheck();
    fixture.detectChanges();
    const title = fixture.nativeElement.querySelector('.poster__title');
    expect(title).toBeTruthy();
    expect(title.textContent).toBe('Welcome');
  });

  it('should render subtitle when provided', () => {
    component.subtitle = 'To our amazing platform';
    fixture.componentRef.injector.get(ChangeDetectorRef).markForCheck();
    fixture.detectChanges();
    const subtitle = fixture.nativeElement.querySelector('.poster__subtitle');
    expect(subtitle).toBeTruthy();
    expect(subtitle.textContent).toBe('To our amazing platform');
  });

  it('should not render title when not provided', () => {
    component.title = '';
    fixture.componentRef.injector.get(ChangeDetectorRef).markForCheck();
    fixture.detectChanges();
    const title = fixture.nativeElement.querySelector('.poster__title');
    expect(title).toBeFalsy();
  });

  it('should not render subtitle when not provided', () => {
    component.subtitle = '';
    fixture.componentRef.injector.get(ChangeDetectorRef).markForCheck();
    fixture.detectChanges();
    const subtitle = fixture.nativeElement.querySelector('.poster__subtitle');
    expect(subtitle).toBeFalsy();
  });

  it('should apply default poster class', () => {
    component.variant = 'default';
    fixture.componentRef.injector.get(ChangeDetectorRef).markForCheck();
    fixture.detectChanges();
    const poster = fixture.nativeElement.querySelector('.poster');
    expect(poster).toBeTruthy();
    expect(poster.classList.contains('poster--gradient')).toBeFalsy();
    expect(poster.classList.contains('poster--dark')).toBeFalsy();
  });

  it('should apply gradient variant class', () => {
    component.variant = 'gradient';
    fixture.componentRef.injector.get(ChangeDetectorRef).markForCheck();
    fixture.detectChanges();
    const poster = fixture.nativeElement.querySelector('.poster');
    expect(poster.classList.contains('poster--gradient')).toBeTruthy();
  });

  it('should apply dark variant class', () => {
    component.variant = 'dark';
    fixture.componentRef.injector.get(ChangeDetectorRef).markForCheck();
    fixture.detectChanges();
    const poster = fixture.nativeElement.querySelector('.poster');
    expect(poster.classList.contains('poster--dark')).toBeTruthy();
  });

  it('should set background image style when provided', () => {
    component.backgroundImage = 'test-bg.jpg';
    fixture.componentRef.injector.get(ChangeDetectorRef).markForCheck();
    fixture.detectChanges();
    const poster = fixture.nativeElement.querySelector('.poster');
    expect(poster.style.backgroundImage).toContain('test-bg.jpg');
  });

  it('should not set background image style when not provided', () => {
    component.backgroundImage = '';
    fixture.componentRef.injector.get(ChangeDetectorRef).markForCheck();
    fixture.detectChanges();
    const poster = fixture.nativeElement.querySelector('.poster');
    expect(poster.style.backgroundImage).toBe('');
  });
});
