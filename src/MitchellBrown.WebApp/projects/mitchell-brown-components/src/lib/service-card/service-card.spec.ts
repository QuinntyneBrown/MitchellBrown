import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServiceCard } from './service-card';

describe('ServiceCard', () => {
  let component: ServiceCard;
  let fixture: ComponentFixture<ServiceCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceCard]
    }).compileComponents();

    fixture = TestBed.createComponent(ServiceCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display title', () => {
    component.title = 'Test Service';
    fixture.detectChanges();

    const titleElement = fixture.nativeElement.querySelector('.service-card__title');
    expect(titleElement?.textContent).toBe('Test Service');
  });

  it('should display description', () => {
    component.description = 'Test description';
    fixture.detectChanges();

    const descElement = fixture.nativeElement.querySelector('.service-card__description');
    expect(descElement?.textContent).toBe('Test description');
  });

  it('should display image when imageSrc is provided', () => {
    component.imageSrc = 'test-image.jpg';
    component.imageAlt = 'Test Alt';
    fixture.detectChanges();

    const imageElement = fixture.nativeElement.querySelector('.service-card__image');
    expect(imageElement?.getAttribute('src')).toBe('test-image.jpg');
    expect(imageElement?.getAttribute('alt')).toBe('Test Alt');
  });

  it('should not display image container when imageSrc is empty', () => {
    component.imageSrc = '';
    fixture.detectChanges();

    const imageContainer = fixture.nativeElement.querySelector('.service-card__image-container');
    expect(imageContainer).toBeNull();
  });

  it('should use title as alt text when imageAlt is not provided', () => {
    component.imageSrc = 'test-image.jpg';
    component.title = 'Test Title';
    component.imageAlt = '';
    fixture.detectChanges();

    const imageElement = fixture.nativeElement.querySelector('.service-card__image');
    expect(imageElement?.getAttribute('alt')).toBe('Test Title');
  });

  it('should have loading="lazy" on image', () => {
    component.imageSrc = 'test-image.jpg';
    fixture.detectChanges();

    const imageElement = fixture.nativeElement.querySelector('.service-card__image');
    expect(imageElement?.getAttribute('loading')).toBe('lazy');
  });

  it('should render as article element', () => {
    const article = fixture.nativeElement.querySelector('article');
    expect(article).toBeTruthy();
    expect(article?.classList.contains('service-card')).toBe(true);
  });
});
