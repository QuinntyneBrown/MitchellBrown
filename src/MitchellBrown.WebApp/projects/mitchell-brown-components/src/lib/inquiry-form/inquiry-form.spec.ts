import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { InquiryForm } from './inquiry-form';

describe('InquiryForm', () => {
  let component: InquiryForm;
  let fixture: ComponentFixture<InquiryForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InquiryForm, ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(InquiryForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form with empty values', () => {
    expect(component.form.get('name')?.value).toBe('');
    expect(component.form.get('email')?.value).toBe('');
    expect(component.form.get('subject')?.value).toBe('');
    expect(component.form.get('message')?.value).toBe('');
  });

  it('should require name field', () => {
    const nameControl = component.form.get('name');
    expect(nameControl?.valid).toBe(false);
    
    nameControl?.setValue('John Doe');
    expect(nameControl?.valid).toBe(true);
  });

  it('should require email field with valid email', () => {
    const emailControl = component.form.get('email');
    expect(emailControl?.valid).toBe(false);
    
    emailControl?.setValue('invalid');
    expect(emailControl?.valid).toBe(false);
    
    emailControl?.setValue('test@example.com');
    expect(emailControl?.valid).toBe(true);
  });

  it('should not require subject field', () => {
    const subjectControl = component.form.get('subject');
    expect(subjectControl?.valid).toBe(true);
  });

  it('should require message field with minimum length', () => {
    const messageControl = component.form.get('message');
    expect(messageControl?.valid).toBe(false);
    
    messageControl?.setValue('Short');
    expect(messageControl?.valid).toBe(false);
    
    messageControl?.setValue('This is a longer message with more than 10 characters');
    expect(messageControl?.valid).toBe(true);
  });

  it('should emit formSubmit when form is valid', () => {
    const formSubmitSpy = vi.spyOn(component.formSubmit, 'emit');
    
    component.form.patchValue({
      name: 'John Doe',
      email: 'john@example.com',
      subject: 'Test Subject',
      message: 'This is a test message with sufficient length'
    });

    component.onSubmit();

    expect(formSubmitSpy).toHaveBeenCalledWith({
      name: 'John Doe',
      email: 'john@example.com',
      subject: 'Test Subject',
      message: 'This is a test message with sufficient length'
    });
  });

  it('should not emit formSubmit when form is invalid', () => {
    const formSubmitSpy = vi.spyOn(component.formSubmit, 'emit');
    
    component.onSubmit();

    expect(formSubmitSpy).not.toHaveBeenCalled();
  });

  it('should mark all controls as touched when submitting invalid form', () => {
    component.onSubmit();

    expect(component.form.get('name')?.touched).toBe(true);
    expect(component.form.get('email')?.touched).toBe(true);
    expect(component.form.get('message')?.touched).toBe(true);
  });

  it('should show error when field is invalid and touched', () => {
    const nameControl = component.form.get('name');
    nameControl?.markAsTouched();

    expect(component.shouldShowError('name')).toBe(true);
  });

  it('should not show error when field is valid', () => {
    const nameControl = component.form.get('name');
    nameControl?.setValue('John Doe');
    nameControl?.markAsTouched();

    expect(component.shouldShowError('name')).toBe(false);
  });

  it('should return correct error messages', () => {
    const nameControl = component.form.get('name');
    nameControl?.markAsTouched();
    expect(component.getErrorMessage('name')).toContain('required');

    const emailControl = component.form.get('email');
    emailControl?.setValue('invalid');
    emailControl?.markAsTouched();
    expect(component.getErrorMessage('email')).toContain('valid email');
  });
});
