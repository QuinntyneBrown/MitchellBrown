import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputComponent } from './input.component';
import { ChangeDetectorRef } from '@angular/core';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render label when provided', () => {
    component.label = 'Email Address';
    component.id = 'email';
    fixture.componentRef.injector.get(ChangeDetectorRef).markForCheck();
    fixture.detectChanges();
    const label = fixture.nativeElement.querySelector('label');
    expect(label).toBeTruthy();
    expect(label.textContent.trim()).toBe('Email Address');
  });

  it('should apply required indicator to label', () => {
    component.label = 'Name';
    component.required = true;
    fixture.componentRef.injector.get(ChangeDetectorRef).markForCheck();
    fixture.detectChanges();
    const label = fixture.nativeElement.querySelector('label');
    expect(label.classList.contains('form__label--required')).toBeTruthy();
  });

  it('should set input type correctly', () => {
    component.type = 'email';
    fixture.componentRef.injector.get(ChangeDetectorRef).markForCheck();
    fixture.detectChanges();
    const input = fixture.nativeElement.querySelector('input');
    expect(input.type).toBe('email');
  });

  it('should apply error class when error is true', () => {
    component.error = true;
    fixture.componentRef.injector.get(ChangeDetectorRef).markForCheck();
    fixture.detectChanges();
    const input = fixture.nativeElement.querySelector('input');
    expect(input.classList.contains('form__input--error')).toBeTruthy();
  });

  it('should apply success class when success is true', () => {
    component.success = true;
    fixture.componentRef.injector.get(ChangeDetectorRef).markForCheck();
    fixture.detectChanges();
    const input = fixture.nativeElement.querySelector('input');
    expect(input.classList.contains('form__input--success')).toBeTruthy();
  });

  it('should apply size classes correctly', () => {
    component.size = 'large';
    fixture.componentRef.injector.get(ChangeDetectorRef).markForCheck();
    fixture.detectChanges();
    let input = fixture.nativeElement.querySelector('input');
    expect(input.classList.contains('form__input--large')).toBeTruthy();

    component.size = 'small';
    fixture.componentRef.injector.get(ChangeDetectorRef).markForCheck();
    fixture.detectChanges();
    input = fixture.nativeElement.querySelector('input');
    expect(input.classList.contains('form__input--small')).toBeTruthy();
  });

  it('should disable input when disabled is true', () => {
    component.disabled = true;
    fixture.componentRef.injector.get(ChangeDetectorRef).markForCheck();
    fixture.detectChanges();
    const input = fixture.nativeElement.querySelector('input');
    expect(input.disabled).toBeTruthy();
  });

  it('should call onChange when input value changes', () => {
    spyOn(component, 'onChange');
    const input = fixture.nativeElement.querySelector('input');
    input.value = 'test value';
    input.dispatchEvent(new Event('input'));
    expect(component.onChange).toHaveBeenCalledWith('test value');
  });

  it('should call onTouched when input loses focus', () => {
    spyOn(component, 'onTouched');
    const input = fixture.nativeElement.querySelector('input');
    input.dispatchEvent(new Event('blur'));
    expect(component.onTouched).toHaveBeenCalled();
  });

  it('should set placeholder attribute', () => {
    component.placeholder = 'Enter your email';
    fixture.componentRef.injector.get(ChangeDetectorRef).markForCheck();
    fixture.detectChanges();
    const input = fixture.nativeElement.querySelector('input');
    expect(input.placeholder).toBe('Enter your email');
  });
});
