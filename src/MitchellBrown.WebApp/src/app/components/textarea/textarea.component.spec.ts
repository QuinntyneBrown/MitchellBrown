import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TextareaComponent } from './textarea.component';
import { ChangeDetectorRef } from '@angular/core';

describe('TextareaComponent', () => {
  let component: TextareaComponent;
  let fixture: ComponentFixture<TextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextareaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render label when provided', () => {
    component.label = 'Description';
    component.id = 'desc';
    fixture.componentRef.injector.get(ChangeDetectorRef).markForCheck();
    fixture.detectChanges();
    const label = fixture.nativeElement.querySelector('label');
    expect(label).toBeTruthy();
    expect(label.textContent.trim()).toBe('Description');
  });

  it('should apply required indicator to label', () => {
    component.label = 'Message';
    component.required = true;
    fixture.componentRef.injector.get(ChangeDetectorRef).markForCheck();
    fixture.detectChanges();
    const label = fixture.nativeElement.querySelector('label');
    expect(label.classList.contains('form__label--required')).toBeTruthy();
  });

  it('should apply error class when error is true', () => {
    component.error = true;
    fixture.componentRef.injector.get(ChangeDetectorRef).markForCheck();
    fixture.detectChanges();
    const textarea = fixture.nativeElement.querySelector('textarea');
    expect(textarea.classList.contains('form__textarea--error')).toBeTruthy();
  });

  it('should apply success class when success is true', () => {
    component.success = true;
    fixture.componentRef.injector.get(ChangeDetectorRef).markForCheck();
    fixture.detectChanges();
    const textarea = fixture.nativeElement.querySelector('textarea');
    expect(textarea.classList.contains('form__textarea--success')).toBeTruthy();
  });

  it('should disable textarea when disabled is true', () => {
    component.disabled = true;
    fixture.componentRef.injector.get(ChangeDetectorRef).markForCheck();
    fixture.detectChanges();
    const textarea = fixture.nativeElement.querySelector('textarea');
    expect(textarea.disabled).toBeTruthy();
  });

  it('should set rows attribute', () => {
    component.rows = 6;
    fixture.componentRef.injector.get(ChangeDetectorRef).markForCheck();
    fixture.detectChanges();
    const textarea = fixture.nativeElement.querySelector('textarea');
    expect(textarea.rows).toBe(6);
  });

  it('should call onChange when textarea value changes', () => {
    spyOn(component, 'onChange');
    const textarea = fixture.nativeElement.querySelector('textarea');
    textarea.value = 'test message';
    textarea.dispatchEvent(new Event('input'));
    expect(component.onChange).toHaveBeenCalledWith('test message');
  });

  it('should call onTouched when textarea loses focus', () => {
    spyOn(component, 'onTouched');
    const textarea = fixture.nativeElement.querySelector('textarea');
    textarea.dispatchEvent(new Event('blur'));
    expect(component.onTouched).toHaveBeenCalled();
  });

  it('should set placeholder attribute', () => {
    component.placeholder = 'Enter your message';
    fixture.componentRef.injector.get(ChangeDetectorRef).markForCheck();
    fixture.detectChanges();
    const textarea = fixture.nativeElement.querySelector('textarea');
    expect(textarea.placeholder).toBe('Enter your message');
  });
});
