import { Component } from '@angular/core';
import { BreadcrumbComponent } from "../breadcrumb/breadcrumb.component";
import { IconComponent } from '../icon/icon.component';
import { ButtonComponent, ButtonSize, ButtonStyle } from '../button/button.component';
import { AvatarComponent } from '../avatar/avatar.component';

@Component({
  selector: 'app-header',
  imports: [BreadcrumbComponent, IconComponent, ButtonComponent, AvatarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public buttonSizeEnum = ButtonSize;
  public buttonStyleEnum = ButtonStyle;
}
