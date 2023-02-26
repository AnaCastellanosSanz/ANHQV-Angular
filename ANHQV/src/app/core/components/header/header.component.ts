import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isLogged: boolean = false;
  public isOpen = false;

  constructor(
    private router: Router,
    private auth: AuthService
  ) {}

  // Esto nos permite verificar si el usuario está conectado o no, y actualiza la variable "isLogged" con el resultado.
  public ngOnInit(): void {
    this.auth.userLogged$.subscribe((isLogged) => this.isLogged = isLogged);
  }

  //Ruta que lleva a la página de not-found, se accede a ella cuando la url no existe.
  public navigateToNotFound() {
    this.router.navigate(['no-existe']);
  }


  //Métododo que llama al menu desplegable que se activa para el diseño responsive.
  public toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}
