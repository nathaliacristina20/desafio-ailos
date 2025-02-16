import { Component } from '@angular/core';
import { ButtonSize, ButtonStyle } from '../button/button.component';

@Component({
  selector: 'app-action-bar',
  imports: [],
  templateUrl: './action-bar.component.html',
  styleUrl: './action-bar.component.scss'
})
export class ActionBarComponent {
  public buttonSizeEnum = ButtonSize;
  public buttonStyleEnum = ButtonStyle;
}
