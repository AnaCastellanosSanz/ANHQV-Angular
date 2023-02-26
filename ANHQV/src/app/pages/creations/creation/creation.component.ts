import { ApiCreations } from '../../../core/services/creations/api/api-creations.models';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.scss']
})
export class CreationComponent {

  @Input() public creation?: ApiCreations;
  @Output() public onRemove: EventEmitter<void> = new EventEmitter<void>();

  constructor(private router: Router) {}

  public removeCreation() {
    this.onRemove.emit();
  }

  public editCreation() {
    this.router.navigate(['create-creations'], { queryParams: {
      id: this.creation?.id
    }});
  }



}
