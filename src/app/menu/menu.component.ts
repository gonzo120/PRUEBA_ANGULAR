import { Component,ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  sidenavSmall:boolean = false;
  @ViewChild('sidenav', {static:true}) sidenav!: MatSidenav;
  


  
  sidenavToggle(){
    console.log(this.sidenavSmall)
    this.sidenavSmall = !this.sidenavSmall;
    
  }
}
