import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../../components/button/button.component';
import { CardComponent } from '../../components/card/card.component';
import { InputComponent } from '../../components/input/input.component';
import { TextareaComponent } from '../../components/textarea/textarea.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { InquiryService } from '../../services/inquiry.service';

interface Service {
  title: string;
  description: string;
  imageUrl: string;
}

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonComponent,
    CardComponent,
    InputComponent,
    TextareaComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  inquiryForm: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  services: Service[] = [
    {
      title: 'Financial Needs Analysis',
      description: 'We can help you with meeting your financial goals, manage risk and plan for future needs such as life insurance coverage, retirement, or debt repayment.',
      imageUrl: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23E5E5E5" width="400" height="300"/%3E%3Ccircle cx="200" cy="150" r="60" fill="%23999"/%3E%3C/svg%3E'
    },
    {
      title: 'Estate Planning',
      description: 'We can help you understand strategies to preserve wealth and ensure financial security for beneficiaries.',
      imageUrl: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23E5E5E5" width="400" height="300"/%3E%3Ccircle cx="200" cy="150" r="60" fill="%23999"/%3E%3C/svg%3E'
    },
    {
      title: 'Insurance Needs',
      description: 'Assess which types of life and other finances will be needed most, and building up wealth for future generations.',
      imageUrl: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23E5E5E5" width="400" height="300"/%3E%3Ccircle cx="200" cy="150" r="60" fill="%23999"/%3E%3C/svg%3E'
    }
  ];

  constructor(
    private fb: FormBuilder,
    private inquiryService: InquiryService
  ) {
    this.inquiryForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required]]
    });
  }

  onHeroCTA(): void {
    // Scroll to form section
    const formSection = document.getElementById('request-info');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  onSubmit(): void {
    if (this.inquiryForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      this.submitError = false;
      this.submitSuccess = false;

      const inquiry = this.inquiryForm.value;
      
      this.inquiryService.inquiryCreate(inquiry).subscribe({
        next: () => {
          this.submitSuccess = true;
          this.isSubmitting = false;
          this.inquiryForm.reset();
        },
        error: () => {
          this.submitError = true;
          this.isSubmitting = false;
        }
      });
    }
  }
}
