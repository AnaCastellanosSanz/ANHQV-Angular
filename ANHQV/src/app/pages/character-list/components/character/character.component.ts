import { Character } from './../../../../core/services/characters/character.models';
import { Component,Input, Output, EventEmitter  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent {

 //@Input() se utiliza para recibir un objeto Character desde el componente padre. 
 @Input() public character?: Character;

 //@Output() indica que se trata de una propiedad que puede emitir eventos hacia el componente padre.
 //Es un evento personalizado que se emite cuando se elimina un personaje.
 @Output() public onRemove: EventEmitter<void> = new EventEmitter<void>();

 constructor(private router: Router) {}

 //removeCharacter(): Este método se ejecuta cuando se hace clic en el botón de eliminar personaje y emite el evento onRemove.
 public removeCharacter() {
   this.onRemove.emit();
 }

 //editCharacter(): Este método se ejecuta cuando se hace clic en el botón de editar personaje y navega a la página de creación de personajes con el parámetro id del personaje actual.
 public editCharacter() {
  this.router.navigate(['create-character'], { queryParams: {
    id: this.character?.id
  }});
}

 //navigateToDetail(): Este método se ejecuta cuando se hace clic en el botón de detalles del personaje y navega a la página de detalles del personaje actual.
 public navigateToDetail() {
   //Esto se pone porque puede aparecer como undifined
   if (this.character) {
     this.router.navigate(['detail', this.character.id]);
   }
 }
}
