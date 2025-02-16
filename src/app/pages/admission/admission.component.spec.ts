import { render } from '@testing-library/angular';
import { AdmissionComponent } from './admission.component';
import { screen } from '@testing-library/dom';

import userEvent from '@testing-library/user-event';
import { faker } from '@faker-js/faker';

it('should create', async () => {
  const component = await render(AdmissionComponent);
  expect(component).toBeTruthy();
});

it(`it shouldn't return an error in the input in its default state`, async () => {
  const component = await render(AdmissionComponent);
  expect(component.fixture.componentInstance.cpfField.errors).toBeFalsy();
});

it('should return an error when some text is entered in the cpf field', async () => {
  const component = await render(AdmissionComponent);

  const input = screen.getByRole('textbox');
  await userEvent.type(input, faker.company.name());
  expect(component.fixture.componentInstance.cpfField.errors).toBeTruthy();
});

it('should return an error when a cpf with special characters is entered', async () => {
  const component = await render(AdmissionComponent);

  const input = screen.getByRole('textbox');
  await userEvent.type(input, '111.111.111-11');
  expect(component.fixture.componentInstance.cpfField.errors).toBeTruthy();
});

it('should return an error when an invalid cpf is entered', async () => {
  const component = await render(AdmissionComponent);

  const input = screen.getByRole('textbox');
  await userEvent.type(input, faker.number.int({ min: 1, max: 10 }).toString());
  expect(component.fixture.componentInstance.cpfField.errors?.['pattern']).toBeTruthy();
});

it(`it shouldn't return an error when a valid CPF is entered`, async () => {
  const component = await render(AdmissionComponent);

  const input = screen.getByRole('textbox');
  const cpf = faker.number.int({ min: 10000000000, max: 99999999999 });

  await userEvent.type(input, cpf.toString());
  expect(component.fixture.componentInstance.cpfField.errors?.['pattern']).toBeFalsy();
});

