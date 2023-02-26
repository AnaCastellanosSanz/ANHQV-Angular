import { episodios } from 'src/app/core/services/characters/character.data';


import { Character } from '../../../../core/services/characters/character.models';
import { CharacterEpisodios } from 'src/app/core/services/characters/api/api-character.models';
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  //La función transform es donde se define la lógica del filtro. Recibe tres parámetros: la lista de personajes, el nombre del personaje y los episodios. Si no se recibe ninguna lista de personajes, el método devuelve un arreglo vacío. Si no se especifica el nombre y los episodios, devuelve la lista completa de personajes.
  transform(value: Character[] | null, name: string = '', episodios?: CharacterEpisodios): Character[] {
    if (!value) { return []; }
    if (!name && !episodios) { return value; }
    //Luego se utiliza el método filter para filtrar la lista de personajes según el nombre y los episodios. Si el nombre está incluido en el nombre del personaje y el título de los episodios coincide con los episodios especificados o no se especifica ningún episodio, el personaje se incluirá en el resultado del filtro.
    return value.filter((character) => {
      return character.nombre.includes(name)
       && (character.episodios.title === episodios || !episodios);
    });
  }

}
