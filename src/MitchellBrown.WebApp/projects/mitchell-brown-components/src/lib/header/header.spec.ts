import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Header, NavItem } from './header';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header]
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display title when no logo is provided', () => {
    component.title = 'Test Title';
    fixture.detectChanges();

    const titleElement = fixture.nativeElement.querySelector('.header__title');
    expect(titleElement?.textContent).toBe('Test Title');
  });

  it('should display logo when logoSrc is provided', () => {
    component.logoSrc = 'test-logo.png';
    component.logoAlt = 'Test Logo';
    fixture.detectChanges();

    const logoElement = fixture.nativeElement.querySelector('.header__logo');
    expect(logoElement?.getAttribute('src')).toBe('test-logo.png');
    expect(logoElement?.getAttribute('alt')).toBe('Test Logo');
  });

  it('should toggle menu when toggle button is clicked', () => {
    expect(component.isMenuOpen).toBe(false);

    component.toggleMenu();
    expect(component.isMenuOpen).toBe(true);

    component.toggleMenu();
    expect(component.isMenuOpen).toBe(false);
  });

  it('should close menu', () => {
    component.isMenuOpen = true;
    component.closeMenu();
    expect(component.isMenuOpen).toBe(false);
  });

  it('should emit navItemClick and close menu when nav item is clicked', () => {
    const navItem: NavItem = { label: 'Home', href: '/' };
    component.isMenuOpen = true;

    const navItemClickSpy = vi.spyOn(component.navItemClick, 'emit');

    component.onNavItemClick(navItem);

    expect(navItemClickSpy).toHaveBeenCalledWith(navItem);
    expect(component.isMenuOpen).toBe(false);
  });

  it('should emit logoClick when logo is clicked', () => {
    const logoClickSpy = vi.spyOn(component.logoClick, 'emit');

    component.onLogoClick();

    expect(logoClickSpy).toHaveBeenCalled();
  });

  it('should render nav items', () => {
    component.navItems = [
      { label: 'Home', href: '/', active: true },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' }
    ];
    fixture.detectChanges();

    const navLinks = fixture.nativeElement.querySelectorAll('.header__nav-link');
    expect(navLinks.length).toBe(3);
    expect(navLinks[0].textContent.trim()).toBe('Home');
    expect(navLinks[0].classList.contains('header__nav-link--active')).toBe(true);
    expect(navLinks[1].textContent.trim()).toBe('About');
    expect(navLinks[2].textContent.trim()).toBe('Contact');
  });
});
