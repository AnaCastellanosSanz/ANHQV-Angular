import { Character } from './../../core/services/characters/character.models';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { episodios } from 'src/app/core/services/characters/character.data';
import { CharacterEpisodios } from 'src/app/core/services/characters/api/api-character.models';
import { incredibleEpisode } from './validators/material.validator';
import { ActivatedRoute, Router } from '@angular/router';
import { map, of, switchMap } from 'rxjs';
import { CharactersService } from 'src/app/core/services/characters/characters.service';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.scss']
})
export class CreateCharacterComponent {

  //El componente contiene una propiedad characterForm que es de tipo FormGroup. El FormGroup es un grupo de campos de formulario que contiene una lógica común. Cada campo del formulario se define como un FormControl, que es un campo específico de nuestro formulario con cierta lógica especial que se puede utilizar desde TypeScript.
  public characterForm?: FormGroup;
  public episodiosEl: CharacterEpisodios[] = episodios;
  public canEdit: boolean = false;
  public characterId?: string;
  public isCharacterCreated: boolean = false;

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private charactersService: CharactersService,
    private router: Router
  ) {
    this.activatedRoute.queryParams.pipe(
      map((queryParams) => queryParams['id']),
      switchMap((id: string) => {
        if (!id) {
          // of me crea un obervable de un valor que le diga
          return of(undefined);
        } else {
          this.characterId = id;
          return this.charactersService.getCharacterDetail(id);
        }
      }),
    ).subscribe((character?: Character) => {
      this.canEdit = !!character;
      this.createNewForm(character);
    });
  }

  
  public createNewForm(character?: Character) {
    this.characterForm = this.fb.group({
      nombre: new FormControl(character?.nombre || '', [Validators.required]),
      imagen: new FormControl(character?.imagen || '', [Validators.required]),
      citaCelebre: new FormControl(character?.citaCelebre || '', [Validators.required]),
      actorActriz: new FormControl(character?.actorActriz || '', [Validators.required]),
      descripcion: new FormControl(character?.descripcion ||'', [Validators.required]),
      episodios: new FormControl(character?.episodios || '', [Validators.required, incredibleEpisode()]),
    });
  }

  //createNewCharacter() que crea un nuevo personaje o actualiza uno existente en el servicio CharactersService. Se llama a createNewCharacter() cuando se envía el formulario del personaje.
  public createNewCharacter() {
    if (!this.characterForm?.valid) { return; }
    const characterRequest = this.canEdit && this.characterId
      ? this.charactersService.editCharacter(this.characterId, this.characterForm?.value)
      : this.charactersService.createCharacter(this.characterForm?.value);
      characterRequest.subscribe(() => {
      this.characterForm?.reset();
      this.router.navigate(['character-list']);
    });
  }

}

