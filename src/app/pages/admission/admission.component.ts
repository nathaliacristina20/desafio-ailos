import { Component, OnDestroy } from '@angular/core';
import { ActionBarComponent } from '../../components/action-bar/action-bar.component';
import { ButtonComponent, ButtonSize, ButtonStyle } from '../../components/button/button.component';
import { InputComponent } from '../../components/input/input.component';
import { CardComponent } from '../../components/cpf-card/card.component';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IPeople } from '../../interfaces/people.interface';
import { PeopleService } from '../../services/people.service';
import { CommonModule } from '@angular/common';
import { StepperComponent } from '../../components/stepper/stepper.component';
import { IStep } from '../../interfaces/stepper.interface';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-admission',
  imports: [ActionBarComponent, StepperComponent, ButtonComponent, InputComponent, CardComponent, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './admission.component.html',
  styleUrl: './admission.component.scss'
})
export class AdmissionComponent implements OnDestroy {
  public buttonSizeEnum = ButtonSize;
  public buttonStyleEnum = ButtonStyle;

  public cpfField = new FormControl<string>('', { validators: [Validators.pattern(/^\d{11}$/)] });
  public people: IPeople | undefined = undefined;

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

  private destroy$ = new Subject<boolean>();

  constructor(private peopleService: PeopleService) {
    this.peopleService.getPeopleState()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (people) => {
          this.people = people;
        },
        error: (error) => {
          console.error(error);
          this.clearSuccess();
        }
      })
  }

  public ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  public search() {
    if (this.cpfField.valid) {
      this.searchPeople();
    }
  }

  private searchPeople() {
    if (this.cpfField.valid) {
      this.peopleService.getPeople(this.cpfField.value ?? "")
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (people) => {
            this.peopleService.setState(people);
          }
        });
    }
  }

  public clearSuccess() {
    if (this.cpfField.invalid && this.people) {
      this.peopleService.clearState();
    }
  }
}
