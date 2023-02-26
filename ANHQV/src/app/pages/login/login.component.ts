import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public email: string = "";
  public password: string = "";

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  
  //El método loginUser se utiliza para iniciar sesión con la clase de servicio AuthService. Una vez que el usuario se ha autenticado, el router se utilizará para navegar a la vista de cuenta.

  public loginUser() {
    this.auth.login();
    this.router.navigate(['account']);
  }
}


