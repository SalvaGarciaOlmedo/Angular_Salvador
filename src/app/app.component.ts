import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ComentsComponent } from "./coments/coments.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    /* template:
    "<h1>Hola mundo</h1>", */
    styleUrl: './app.component.css'
    /* styles: "h1{ color: red}", */
    ,
    imports: [RouterOutlet, UserComponent, ComentsComponent]
})
export class AppComponent {
  title = 'Angular17Clase';
  city ='Sevilla';
}
