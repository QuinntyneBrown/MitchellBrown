import { ChangeDetectionStrategy, Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

export type InputType = 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
export type InputSize = 'normal' | 'large' | 'small';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {
  @Input() type: InputType = 'text';
  @Input() placeholder = '';
  @Input() label = '';
  @Input() required = false;
  @Input() disabled = false;
  @Input() size: InputSize = 'normal';
  @Input() error = false;
  @Input() success = false;
  @Input() id?: string;
  @Input() autocomplete?: string;

  value = '';
  onChange: (value: any) => void = () => {};
  onTouched: () => void = () => {};

  protected get inputClasses(): string {
    const classes = ['form__input'];

    if (this.error) {
      classes.push('form__input--error');
    }

    if (this.success) {
      classes.push('form__input--success');
    }

    if (this.size === 'large') {
      classes.push('form__input--large');
    } else if (this.size === 'small') {
      classes.push('form__input--small');
    }

    return classes.join(' ');
  }

  writeValue(value: any): void {
    this.value = value || '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onInputChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.onChange(this.value);
  }

  onBlur(): void {
    this.onTouched();
  }
}
