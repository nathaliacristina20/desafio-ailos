import { Component } from '@angular/core';

import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { SidenavComponent } from "../../components/sidenav/sidenav.component";

@Component({
  selector: 'app-home',
  imports: [RouterModule, SidenavComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent { 
}
