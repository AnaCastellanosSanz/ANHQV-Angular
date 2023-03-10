import { CreationsService } from './../../core/services/creations/creations.service';
import { Creations } from './../../core/services/creations/creations.models';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, of, switchMap } from 'rxjs';


@Component({
  selector: 'app-create-creations',
  templateUrl: './create-creations.component.html',
  styleUrls: ['./create-creations.component.scss']
})
export class CreateCreationsComponent  {

  //El componente contiene una propiedad creationForm que es de tipo FormGroup. El FormGroup es un grupo de campos de formulario que contiene una lógica común. Cada campo del formulario se define como un FormControl, que es un campo específico de nuestro formulario con cierta lógica especial que se puede utilizar desde TypeScript.

  public creationForm?: FormGroup;
  public urlImg: string = '';
  public canEdit: boolean = false;
  public creationId?: string;

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private creationsService: CreationsService,
    private router: Router
  ) {
    this.activatedRoute.queryParams.pipe(
      map((queryParams) => queryParams['id']),
      switchMap((id: string) => {
        if (!id) {
          // of me crea un obervable de un valor que le diga
          return of(undefined);
        } else {
          this.creationId = id;
          return this.creationsService.getCreationDetail(id);
        }
      }),
    ).subscribe((creation?: Creations) => {
      this.canEdit = !!creation;
      this.createNewForm(creation);
    });
  }


  public createNewForm(creation?: Creations) {
    this.creationForm = this.fb.group({
      nombre: new FormControl(creation?.nombre || '', [Validators.required]),
      descripcion: new FormControl(creation?.descripcion ||'', [Validators.required]),
      citaCelebre: new FormControl(creation?.citaCelebre ||'', [Validators.required]),
      imagen: new FormControl(creation?.imagen || '', [Validators.required]),
      actorActriz: new FormControl(creation?.actorActriz ||'', [Validators.required]),
      
    });
  }

  //createNewCreation() que crea una nueva creación o actualiza una existente en el servicio CreationsService. Se llama a createNewCreation() cuando se envía el formulario de la creación.
  
  public createNewCreation() {
    if (!this.creationForm?.valid) { return; }
    const creationRequest = this.canEdit && this.creationId
      ? this.creationsService.editCreation(this.creationId, this.creationForm?.value)
      : this.creationsService.createCreation(this.creationForm?.value);
    creationRequest.subscribe(() => {
      this.creationForm?.reset();
      this.router.navigate(['creations']);
    });
  }

}
