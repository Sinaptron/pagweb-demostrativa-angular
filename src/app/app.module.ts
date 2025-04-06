import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component'; // Asegúrate de que esté importado

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent // Asegúrate de que esté declarado aquí
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
