import { ChangeDetectionStrategy, Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-textarea',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextareaComponent),
      multi: true
    }
  ]
})
export class TextareaComponent implements ControlValueAccessor {
  @Input() placeholder = '';
  @Input() label = '';
  @Input() required = false;
  @Input() disabled = false;
  @Input() rows = 4;
  @Input() error = false;
  @Input() success = false;
  @Input() id?: string;

  value = '';
  onChange: (value: any) => void = () => {};
  onTouched: () => void = () => {};

  protected get textareaClasses(): string {
    const classes = ['form__textarea'];

    if (this.error) {
      classes.push('form__textarea--error');
    }

    if (this.success) {
      classes.push('form__textarea--success');
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

  onTextareaChange(event: Event): void {
    const target = event.target as HTMLTextAreaElement;
    if (!target) return;
    this.value = target.value;
    this.onChange(this.value);
  }

  onBlur(): void {
    this.onTouched();
  }
}
