import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',  // Asegúrate de que la ruta esté bien escrita
  styleUrls: ['./app.component.css']    // Asegúrate de que la ruta esté bien escrita
})
export class AppComponent {
  menuActive = false;

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }
}
