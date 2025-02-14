import { Component, Input } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { People } from '../../interfaces/people.interface';

@Component({
  selector: 'app-cpf-card',
  imports: [IconComponent],
  templateUrl: './cpf-card.component.html',
  styleUrl: './cpf-card.component.scss'
})
export class CpfCardComponent {
  @Input() people!: People;
}
