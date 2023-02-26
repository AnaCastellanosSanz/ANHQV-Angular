import { Component, OnInit } from '@angular/core';
import { AudioService } from 'src/app/core/services/audio/audio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public imageUrl = '../../../assets/play.png';
  public audioUrl = '../../../assets/cancion.mp3';

  constructor(

    private audioService: AudioService

    ) {}


  //Le paso el play creado en service
  playAudio() {
    this.audioService.play(this.audioUrl);
  }

  //Le paso el stop creado en service
  stopAudio() {
    this.audioService.stop();
  }
}
