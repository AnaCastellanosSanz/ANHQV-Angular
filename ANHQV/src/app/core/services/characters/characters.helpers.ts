import { Episodios } from './../episodios/episodios.models';
import { Character } from './character.models';
import { ApiCharacter } from "./api/api-character.models";


export function transformCharacter(apiCharacter: ApiCharacter, selectedEpisodio?: Episodios): Character {
  
  //Si selectedEpisodio tiene un valor, se asigna ese valor directamente a la propiedad episodios. Si selectedEpisodio es undefined, se crea un objeto de Episodios con la propiedad title igual al valor de apiCharacter.episodios y se lo asigna a la propiedad episodios.

  return {
      ...apiCharacter,
      episodios: selectedEpisodio
          ? selectedEpisodio
          : { title: apiCharacter.episodios }
  };
}