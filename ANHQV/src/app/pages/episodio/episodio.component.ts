import { EpisodiosService } from './../../core/services/episodios/episodios.service';
import { Episodios } from './../../core/services/episodios/episodios.models';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-episodio',
  templateUrl: './episodio.component.html',
  styleUrls: ['./episodio.component.scss']
})
export class EpisodioComponent implements OnInit {

  //@ViewChildren se utiliza para seleccionar todos los elementos del DOM que tengan la referencia videoPlayer. El resultado se almacena en una propiedad llamada videoPlayers, que es de tipo QueryList<HTMLVideoElement>.
  @ViewChildren('videoPlayer') videoPlayers!: QueryList<HTMLVideoElement>;

  public episodios: Episodios[] = [];

  constructor(
    private episodiosService: EpisodiosService,
    private router: Router,
    private elementRef: ElementRef
  ){}

  public ngOnInit(): void {
    this.episodiosService.getEpisodios().subscribe((episodiosApi) => {
      this.episodios = episodiosApi;
    })
  }


  //playVideo y pauseVideo tienen un parámetro que representa el elemento de video HTML que se quiere reproducir o pausar.
  playVideo(video: HTMLVideoElement) {
    video.play();
  }

  pauseVideo(video: HTMLVideoElement) {
    video.pause();
  }

}
