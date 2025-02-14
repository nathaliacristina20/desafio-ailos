import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

export enum ButtonSize {
  SMALL = 'small',
  MEDIUM = 'medium',
}

export enum ButtonStyle {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() size: ButtonSize = ButtonSize.SMALL;
  @Input() buttonStyle: ButtonStyle = ButtonStyle.PRIMARY;
  @Input() ariaLabel: string = "";

  public buttonSizeEnum = ButtonSize;
  public buttonStyleEnum = ButtonStyle;

  @Output() buttonClicked = new EventEmitter<string>();
}
