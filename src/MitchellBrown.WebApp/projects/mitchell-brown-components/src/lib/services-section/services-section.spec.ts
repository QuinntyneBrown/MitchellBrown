import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServicesSection } from './services-section';
import { ServiceCardData } from '../service-card/service-card';

describe('ServicesSection', () => {
  let component: ServicesSection;
  let fixture: ComponentFixture<ServicesSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesSection]
    }).compileComponents();

    fixture = TestBed.createComponent(ServicesSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display default title', () => {
    const titleElement = fixture.nativeElement.querySelector('.services-section__title');
    expect(titleElement?.textContent).toBe('What we do');
  });

  it('should display custom title', () => {
    component.title = 'Our Services';
    fixture.detectChanges();

    const titleElement = fixture.nativeElement.querySelector('.services-section__title');
    expect(titleElement?.textContent).toBe('Our Services');
  });

  it('should render service cards', () => {
    const mockServices: ServiceCardData[] = [
      {
        title: 'Service 1',
        description: 'Description 1',
        imageSrc: 'img1.jpg',
        imageAlt: 'Alt 1'
      },
      {
        title: 'Service 2',
        description: 'Description 2',
        imageSrc: 'img2.jpg',
        imageAlt: 'Alt 2'
      },
      {
        title: 'Service 3',
        description: 'Description 3',
        imageSrc: 'img3.jpg',
        imageAlt: 'Alt 3'
      }
    ];

    component.services = mockServices;
    fixture.detectChanges();

    const serviceCards = fixture.nativeElement.querySelectorAll('mb-service-card');
    expect(serviceCards.length).toBe(3);
  });

  it('should render no cards when services array is empty', () => {
    component.services = [];
    fixture.detectChanges();

    const serviceCards = fixture.nativeElement.querySelectorAll('mb-service-card');
    expect(serviceCards.length).toBe(0);
  });

  it('should have grid layout', () => {
    const grid = fixture.nativeElement.querySelector('.services-section__grid');
    expect(grid).toBeTruthy();
  });

  it('should render as section element', () => {
    const section = fixture.nativeElement.querySelector('section');
    expect(section).toBeTruthy();
    expect(section?.classList.contains('services-section')).toBe(true);
  });

  it('should pass correct props to service cards', () => {
    const mockServices: ServiceCardData[] = [
      {
        title: 'Test Service',
        description: 'Test Description',
        imageSrc: 'test.jpg',
        imageAlt: 'Test Alt'
      }
    ];

    component.services = mockServices;
    fixture.detectChanges();

    const serviceCard = fixture.nativeElement.querySelector('mb-service-card');
    expect(serviceCard).toBeTruthy();
  });
});
