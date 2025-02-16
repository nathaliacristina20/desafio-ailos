import { Component } from '@angular/core';
import { ActionBarComponent } from '../../components/action-bar/action-bar.component';
import { ButtonComponent, ButtonSize, ButtonStyle } from '../../components/button/button.component';
import { InputComponent } from '../../components/input/input.component';
import { CardComponent } from '../../components/cpf-card/card.component';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { People } from '../../interfaces/people.interface';
import { PeopleService } from '../../services/people.service';
import { CommonModule } from '@angular/common';
import { StepperComponent } from '../../components/stepper/stepper.component';
import { IStep } from '../../interfaces/stepper.interface';

@Component({
  selector: 'app-admission',
  imports: [ActionBarComponent, StepperComponent, ButtonComponent, InputComponent, CardComponent, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './admission.component.html',
  styleUrl: './admission.component.scss'
})
export class AdmissionComponent {
  public buttonSizeEnum = ButtonSize;
  public buttonStyleEnum = ButtonStyle;

  public cpfField = new FormControl<string>('', { validators: [Validators.pattern(/^\d{11}$/)] });

  public searchCpfSuccess = false;
  public people: People | undefined = undefined;

  public steps: IStep[] = [
    {
      name: "Início",
      active: true,
    },
    {
      name: "Documentos",
      active: false,
    }, 
    {
      name: "Dados cadastrais",
      active: false,
    },
    {
      name: "Admissão",
      active: false,
    }
  ];

  constructor(private peopleService: PeopleService) { }

  public search() {
    if (this.cpfField.valid) {
      this.searchPeople();
    }
  }

  private searchPeople() {
    this.peopleService.getPeople(this.cpfField.value ?? '')
      .subscribe({
        next: (data) => {
          this.searchCpfSuccess = true;
          this.people = data;
        },
        error: (error) => {
          console.error(error);
          this.clearSuccess();
        }
      });
  }

  public clearSuccess() {
    this.searchCpfSuccess = false;
    this.people = undefined;
  }
}
