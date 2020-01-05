import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PersonaService } from '../persona-service';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styles: []
})
export class FormularioComponent implements OnInit {

  nombreInput: string;
  idPersona: number;
  constructor(private personaService: PersonaService,
              private router: Router,
              private route: ActivatedRoute
    ) {

     }

  ngOnInit() {

  }

  onGuardarPersona() {
    const personaGuardar = new Persona(this.idPersona, this.nombreInput);
    this.personaService.agregarPersona(personaGuardar);
    this.router.navigate(['personas']);
  }
}
