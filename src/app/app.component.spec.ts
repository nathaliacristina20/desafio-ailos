import { AppComponent } from './app.component';
import { render } from '@testing-library/angular';

describe('AppComponent', () => {
  it('should create the app', async () => {
    const component = await render(AppComponent);
    expect(component).toBeTruthy();
  });
});
