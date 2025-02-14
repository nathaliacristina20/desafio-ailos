import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  imports: [CommonModule],
  templateUrl: './icon.component.html',
})
export class IconComponent {
  @Input() icon = "";
  @Input() color = "#fff";
  @Input() size = 20;
}
