import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';
import { ChangeDetectorRef } from '@angular/core';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should apply primary variant class by default', () => {
    const button = fixture.nativeElement.querySelector('button');
    expect(button.classList.contains('btn')).toBeTruthy();
    expect(button.classList.contains('btn--primary')).toBeTruthy();
  });

  it('should apply correct variant class', () => {
    component.variant = 'secondary';
    fixture.componentRef.injector.get(ChangeDetectorRef).markForCheck();
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('button');
    expect(button.classList.contains('btn--secondary')).toBeTruthy();
  });

  it('should apply size classes correctly', () => {
    component.size = 'large';
    fixture.componentRef.injector.get(ChangeDetectorRef).markForCheck();
    fixture.detectChanges();
    let button = fixture.nativeElement.querySelector('button');
    expect(button.classList.contains('btn--large')).toBeTruthy();

    component.size = 'small';
    fixture.componentRef.injector.get(ChangeDetectorRef).markForCheck();
    fixture.detectChanges();
    button = fixture.nativeElement.querySelector('button');
    expect(button.classList.contains('btn--small')).toBeTruthy();
  });

  it('should apply block class when block is true', () => {
    component.block = true;
    fixture.componentRef.injector.get(ChangeDetectorRef).markForCheck();
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('button');
    expect(button.classList.contains('btn--block')).toBeTruthy();
  });

  it('should apply disabled class when disabled is true', () => {
    component.disabled = true;
    fixture.componentRef.injector.get(ChangeDetectorRef).markForCheck();
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('button');
    expect(button.classList.contains('btn--disabled')).toBeTruthy();
    expect(button.disabled).toBeTruthy();
  });

  it('should emit buttonClick event when clicked', () => {
    spyOn(component.buttonClick, 'emit');
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    expect(component.buttonClick.emit).toHaveBeenCalled();
  });

  it('should not emit buttonClick event when disabled', () => {
    component.disabled = true;
    fixture.detectChanges();
    spyOn(component.buttonClick, 'emit');
    const button = fixture.nativeElement.querySelector('button');
    button.dispatchEvent(new MouseEvent('click'));
    expect(component.buttonClick.emit).not.toHaveBeenCalled();
  });

  it('should set aria-label when provided', () => {
    component.ariaLabel = 'Test Button';
    fixture.componentRef.injector.get(ChangeDetectorRef).markForCheck();
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('button');
    expect(button.getAttribute('aria-label')).toBe('Test Button');
  });

  it('should set button type attribute', () => {
    component.type = 'submit';
    fixture.componentRef.injector.get(ChangeDetectorRef).markForCheck();
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('button');
    expect(button.type).toBe('submit');
  });
});
