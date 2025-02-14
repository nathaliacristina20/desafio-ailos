import { Component } from '@angular/core';
import { ButtonSize, ButtonStyle } from '../button/button.component';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  public buttonSizeEnum = ButtonSize;
  public buttonStyleEnum = ButtonStyle;
}
