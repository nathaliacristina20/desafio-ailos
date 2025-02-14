import { Component, Input } from '@angular/core';
import { People } from '../../services/people.service';

@Component({
  selector: 'app-cpf-card',
  imports: [],
  templateUrl: './cpf-card.component.html',
  styleUrl: './cpf-card.component.scss'
})
export class CpfCardComponent {
  @Input() people!: People;
}
