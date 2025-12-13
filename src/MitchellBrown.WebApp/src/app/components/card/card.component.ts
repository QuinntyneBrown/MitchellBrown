import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export type CardBadge = 'featured' | 'sold' | 'default' | '';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() description = '';
  @Input() imageUrl = '';
  @Input() badgeLabel = '';
  @Input() badgeType: CardBadge = '';
  @Input() price = '';
  @Input() priceLabel = '';

  protected get badgeClasses(): string {
    const classes = ['card__badge'];
    
    if (this.badgeType === 'featured') {
      classes.push('card__badge--featured');
    } else if (this.badgeType === 'sold') {
      classes.push('card__badge--sold');
    }
    
    return classes.join(' ');
  }
}
