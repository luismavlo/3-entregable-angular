import { Component } from '@angular/core';
import { Persona } from '../interfaces/persona.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  personas: Persona[] = []

  newPerson: Persona = {
    name: '',
    surname: '',
    age: 0
  }

  addNewPerson( persona: Persona ){
    this.personas.push( persona )
  }

}
