
//Service permite que el componente pueda ser utilizado en cualquier parte de la página.
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  
  audio = new Audio();


  //"play" reproduce un archivo de audio dado una URL, cargando y reproduciendo el audio con el objeto Audio.
  play(url: string) {
    this.audio.src = url;
    this.audio.load();
    this.audio.play();
  }

  //"stop" detiene la reproducción actual de audio y restablece el tiempo de reproducción a cero.
   stop() {
    this.audio.pause();
    this.audio.currentTime = 0;
  }
}