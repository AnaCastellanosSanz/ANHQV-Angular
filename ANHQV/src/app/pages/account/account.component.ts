import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  //El método logoutUser() se encarga de cerrar la sesión del usuario y navegar hacia la página principal.
  public logoutUser() {
    this.auth.logout();
    this.router.navigate(['home']);
  }
}
