import { ApiCreations } from '../../../core/services/creations/api/api-creations.models';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.scss']
})
export class CreationComponent {
  //@Input() se utiliza para recibir un objeto Creations desde el componente padre. 
  @Input() public creation?: ApiCreations;

   //@Output() indica que se trata de una propiedad que puede emitir eventos hacia el componente padre.
   //Es un evento personalizado que se emite cuando se elimina un personaje.
  @Output() public onRemove: EventEmitter<void> = new EventEmitter<void>();

  constructor(private router: Router) {}


  //removeCreation(): Este método se ejecuta cuando se hace clic en el botón de eliminar creación y emite el evento onRemove.

  public removeCreation() {
    this.onRemove.emit();
  }


   //editCreation(): Este método se ejecuta cuando se hace clic en el botón de editar creación y navega a la página de creación con el parámetro id de la creación actual.
   
  public editCreation() {
    this.router.navigate(['create-creations'], { queryParams: {
      id: this.creation?.id
    }});
  }



}
