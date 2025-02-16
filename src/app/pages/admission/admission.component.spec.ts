import { render, RenderResult } from '@testing-library/angular';
import { AdmissionComponent } from './admission.component';
import { screen } from '@testing-library/dom';

import userEvent from '@testing-library/user-event';
import { faker } from '@faker-js/faker';
import { PeopleService } from '../../services/people.service';
import { ButtonComponent } from '../../components/button/button.component';
import { CommonModule } from '@angular/common';
import { ActionBarComponent } from '../../components/action-bar/action-bar.component';
import { StepperComponent } from '../../components/stepper/stepper.component';
import { InputComponent } from '../../components/input/input.component';
import { CardComponent } from '../../components/cpf-card/card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

let component: RenderResult<AdmissionComponent>;

beforeEach(async () => {
  component = await render(AdmissionComponent, {
    componentImports: [
      ActionBarComponent,
      StepperComponent,
      ButtonComponent,
      InputComponent,
      CardComponent,
      FormsModule,
      ReactiveFormsModule,
      CommonModule,
    ],
  });
});

it('should create', () => {
  expect(component).toBeTruthy();
});

it(`it shouldn't return an error in the input in its default state`, () => {
  expect(component.fixture.componentInstance.cpfField.errors).toBeFalsy();
});

it('should return an error when some text is entered in the cpf field', async () => {
  const input = screen.getByRole('textbox');
  await userEvent.type(input, faker.company.name());

  const getPeopleSpyOn = jest.spyOn(PeopleService.prototype, 'getPeople');

  const submit = screen.getByRole('button', { name: /consultar por cpf/i });
  await userEvent.click(submit);

  expect(getPeopleSpyOn).not.toHaveBeenCalled();
  expect(component.fixture.componentInstance.cpfField.errors).toBeTruthy();
});

it('should return an error when a cpf with special characters is entered', async () => {
  const input = screen.getByRole('textbox');
  await userEvent.type(input, '111.111.111-11');

  const getPeopleSpyOn = jest.spyOn(PeopleService.prototype, 'getPeople');

  const submit = screen.getByRole('button', { name: /consultar por cpf/i });
  await userEvent.click(submit);

  expect(getPeopleSpyOn).not.toHaveBeenCalled();  
  expect(component.fixture.componentInstance.cpfField.errors).toBeTruthy();
});

it('should return an error when an invalid cpf is entered', async () => {
  const input = screen.getByRole('textbox');
  await userEvent.type(input, faker.number.int({ min: 1, max: 10 }).toString());

  const getPeopleSpyOn = jest.spyOn(PeopleService.prototype, 'getPeople');

  const submit = screen.getByRole('button', { name: /consultar por cpf/i });
  await userEvent.click(submit);

  expect(getPeopleSpyOn).not.toHaveBeenCalled();
  expect(component.fixture.componentInstance.cpfField.errors?.['pattern']).toBeTruthy();
});

it(`it shouldn't return an error when a valid CPF is entered`, async () => {
  const input = screen.getByRole('textbox');
  const cpf = faker.number.int({ min: 10000000000, max: 99999999999 });

  const getPeopleSpyOn = jest.spyOn(PeopleService.prototype, 'getPeople');

  await userEvent.type(input, cpf.toString());

  const submit = screen.getByRole('button', { name: /consultar por cpf/i });
  await userEvent.click(submit);

  expect(component.fixture.componentInstance.cpfField.errors?.['pattern']).toBeFalsy();
  expect(getPeopleSpyOn).toHaveBeenCalled();
});

