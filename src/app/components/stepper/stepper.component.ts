import { Component, Input } from '@angular/core';

import { IStep } from '../../interfaces/stepper.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stepper',
  imports: [CommonModule],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss'
})
export class StepperComponent {
  @Input({ required: true }) steps: IStep[] = [];
}
