import { Component,Output, EventEmitter } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  @Output() logout = new EventEmitter<void>();

  logout1() {
    // Aquí puedes realizar acciones de logout, como limpiar el token, redirigir, etc.
    console.log('Logout');
  }
  
}
