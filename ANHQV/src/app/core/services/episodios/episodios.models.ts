import { CharacterEpisodios } from "../characters/api/api-character.models";

export interface Episodios {
    title: CharacterEpisodios;
    description?: string;
    video?: string;
    id?: string;
}