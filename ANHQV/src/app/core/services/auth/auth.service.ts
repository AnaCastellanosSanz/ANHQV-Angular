import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  //El estado de inicio de sesión se guarda en un objeto ReplaySubject. El objeto ReplaySubject también se inicializa con el valor booleano false para que el estado de inicio de sesión predeterminado sea falso.
  public userLogged$: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);

  constructor() {
    this.userLogged$.next(false);
  }

  //El método login() establece el valor booleano en verdadero.
  public login() {
    this.userLogged$.next(true);
  }

  //El método logout() establece el valor booleano en falso. 
  public logout() {
    this.userLogged$.next(false);
  }
}
