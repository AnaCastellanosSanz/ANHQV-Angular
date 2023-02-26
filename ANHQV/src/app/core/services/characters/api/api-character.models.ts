
export interface ApiCharacter {
    id: string;
    imagen: string;
    nombre: string;
    actorActriz: string;
    citaCelebre?: string;
    descripcion: string;
    episodios: CharacterEpisodios;
    createdAt?: string
    
}

export type CharacterEpisodios = '1X05 - ÉRASE UN NIÑO'
| '1X09 - ÉRASE UNA DE MIEDO'
| '2X07 - ÉRASE UNA HUELGA'
| '2X13 - ÉRASE UNA BODA'
| '4X16 - ÉRASE UN DESGOBIERNO'
| '4X19 - ÉRASE UNA LUNA DE MIEL'
| '4X21 - ÉRASE UNAS VACACIONES'
| '6X11 - ÉRASE UNA EMISORA PIRATA'