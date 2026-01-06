import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from 'mitchell-brown-components';
import { ServicesSection, ServiceCardData } from 'mitchell-brown-components';
import { ContactSection, ContactInfo } from 'mitchell-brown-components';
import { InquiryForm, InquiryFormData } from 'mitchell-brown-components';
import { Footer } from 'mitchell-brown-components';
import { InquiryService } from '../../services/inquiry.service';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    Hero,
    ServicesSection,
    ContactSection,
    InquiryForm,
    Footer
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  services: ServiceCardData[] = [
    {
      title: 'Financial Needs Analysis',
      description: 'We can help you with meeting your financial goals, manage risk and plan for future needs such as life insurance coverage, retirement, or debt repayment.',
      imageSrc: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23E5E5E5" width="400" height="300"/%3E%3Ccircle cx="200" cy="150" r="60" fill="%23999"/%3E%3C/svg%3E',
      imageAlt: 'Financial Needs Analysis'
    },
    {
      title: 'Estate Planning',
      description: 'We can help you understand strategies to preserve wealth and ensure financial security for beneficiaries.',
      imageSrc: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23E5E5E5" width="400" height="300"/%3E%3Ccircle cx="200" cy="150" r="60" fill="%23999"/%3E%3C/svg%3E',
      imageAlt: 'Estate Planning'
    },
    {
      title: 'Insurance Needs',
      description: 'Assess which types of life and other insurance will be needed most, and building up wealth for future generations.',
      imageSrc: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23E5E5E5" width="400" height="300"/%3E%3Ccircle cx="200" cy="150" r="60" fill="%23999"/%3E%3C/svg%3E',
      imageAlt: 'Insurance Needs'
    }
  ];

  contactInfo: ContactInfo = {
    location: 'Mississauga, ON',
    email: 'mitchellbrownfinance@gmail.com',
    quote: '"Your need of finance is much greater than your need of protection"',
    quoteAuthor: 'R. Nelson Nash'
  };

  contactImageSrc = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400'%3E%3Crect fill='%237BC8F6' width='600' height='400'/%3E%3Crect x='150' y='100' width='100' height='200' fill='%23999'/%3E%3Crect x='350' y='80' width='120' height='220' fill='%23777'/%3E%3C/svg%3E";

  constructor(
    private inquiryService: InquiryService
  ) {}

  onHeroCTA(): void {
    // Scroll to form section
    const formSection = document.getElementById('request-info');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  onFormSubmit(formData: InquiryFormData): void {
    if (!this.isSubmitting) {
      this.isSubmitting = true;
      this.submitError = false;
      this.submitSuccess = false;

      this.inquiryService.inquiryCreate(formData).subscribe({
        next: () => {
          this.submitSuccess = true;
          this.isSubmitting = false;
        },
        error: () => {
          this.submitError = true;
          this.isSubmitting = false;
        }
      });
    }
  }
}
