import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable, take } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}


  //Una guardia se utiliza para restringir el acceso a ciertos componentes de la aplicación a los usuarios que han iniciado sesión. 

  //El método canActivate se ejecutará cada vez que un usuario intente acceder a un componente de la aplicación. El método verificará si el usuario ha iniciado sesión y, en caso afirmativo, permitirá el acceso. Si el usuario no ha iniciado sesión, el método te devuelve a la página de login para que te inicies sesión y puedas acceder al componente.

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('Entrando a guardia');
    return this.auth.userLogged$.pipe(
      take(1),
      map((isLogged: boolean) => {
        if (isLogged) { return true; }
        return this.router.createUrlTree(['login']);
      })
    )
  }
  
}
