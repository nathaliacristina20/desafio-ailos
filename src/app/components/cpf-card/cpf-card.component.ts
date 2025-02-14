import { Component, Input } from '@angular/core';
import { People } from '../../services/people.service';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-cpf-card',
  imports: [IconComponent],
  templateUrl: './cpf-card.component.html',
  styleUrl: './cpf-card.component.scss'
})
export class CpfCardComponent {
  @Input() people!: People;
}
