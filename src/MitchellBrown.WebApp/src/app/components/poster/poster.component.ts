import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type PosterVariant = 'default' | 'gradient' | 'dark';

@Component({
  selector: 'app-poster',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './poster.component.html',
  styleUrl: './poster.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PosterComponent {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() variant: PosterVariant = 'default';
  @Input() backgroundImage = '';

  protected get posterClasses(): string {
    const classes = ['poster'];
    
    if (this.variant === 'gradient') {
      classes.push('poster--gradient');
    } else if (this.variant === 'dark') {
      classes.push('poster--dark');
    }
    
    return classes.join(' ');
  }

  protected get backgroundStyle(): { [key: string]: string } {
    if (this.backgroundImage) {
      return {
        'background-image': `url(${this.backgroundImage})`
      };
    }
    return {};
  }
}
