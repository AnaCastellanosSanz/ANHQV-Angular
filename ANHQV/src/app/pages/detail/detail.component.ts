import { Character } from './../../core/services/characters/character.models';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharactersService} from 'src/app/core/services/characters/characters.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {

  public character?: Character;

  constructor(
    private activatedRoute: ActivatedRoute,
    private charactersService: CharactersService,
    private router: Router
    
  ) {
    // En el constructor, primero se suscribe a los queryParams de la ruta activa.
    this.activatedRoute.queryParams.subscribe((queryParams) => {
      console.log(queryParams);
    });
    // A continuación, se suscribe a los params de la ruta activa. En este caso, se espera un parámetro de ruta llamado id que se utiliza para recuperar los detalles del personaje correspondiente mediante la llamada al método getCharacterDetail del servicio CharactersService. El resultado se asigna a la propiedad character del componente.
    this.activatedRoute.params.subscribe((params) => {
      const characterId = params['id'];
      this.charactersService.getCharacterDetail(characterId).subscribe((character) => {
        this.character = character;
      })
    });
  }

  //El componente también tiene un método llamado back que navega a la página character-list utilizando el servicio Router.
  public back(){
    this.router.navigate(['character-list'])
  }

}
