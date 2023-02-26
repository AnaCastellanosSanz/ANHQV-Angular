import { Episodios } from './../episodios/episodios.models';



export interface Character {
    id: string;
    imagen: string;
    nombre: string;
    actorActriz: string;
    citaCelebre?: string;
    descripcion: string;
    episodios: Episodios;
    createdCharacter?: boolean;
   
}
