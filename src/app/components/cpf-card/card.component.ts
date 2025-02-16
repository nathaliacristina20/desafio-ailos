import { Component, Input } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { IPeople } from '../../interfaces/people.interface';

@Component({
  selector: 'app-card',
  imports: [IconComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() people!: IPeople;
}
