import { CharactersService } from './../../core/services/characters/characters.service';
import { Character } from './../../core/services/characters/character.models';
import { episodios } from 'src/app/core/services/characters/character.data';
import { CharacterEpisodios } from 'src/app/core/services/characters/api/api-character.models';
import { Component, OnInit } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  public characters$?: Observable<Character[]>;
  public characterName: string = '';
  public characterEpisodios?: CharacterEpisodios;
  public episodiosEl: CharacterEpisodios[] = episodios;
  public myCharacters: Character[] = [];

  constructor(
    private charactersService: CharactersService,
    private router: Router) {}
    

  public ngOnInit(): void {
      //CharactersService recupera una lista de personajes y se almacena en la propiedad characters$. La propiedad characters$ es un observable que contiene una lista de personajes.
      this.characters$ = this.charactersService.getCharacters();
  }
  //El método navigateToCreateCharacter() navega a la página create-character para crear un nuevo personaje.
  public navigateToCreateCharacter() {
    this.router.navigate(['create-character']);
  }
  

  //removeCharacterFromList() elimina un personaje de la lista y actualiza la lista después de la eliminación, utilizando el método deleteCharacter() del servicio CharactersService y el operador switchMap() de RxJS.
  public removeCharacterFromList(id?: string) {
    if (!id) { return; }
    this.characters$ = this.charactersService.deleteCharacter(id).pipe(
      // Concatenar una petición a otra. Cuando termine una emisión se lanza la siguiente
      // y el receptor lo emitido por la última emisión
      switchMap((product) => {
        return this.charactersService.getCharacters();
      })
    );
  }

  public pagina: number = 0;

  public prevPage(){
    if(this.pagina > 0){
      this.pagina -= 9;
    }
  }

  public nextPage(){
    if (this.pagina < 80) {
      this.pagina += 9 ;
    }
  }

}
