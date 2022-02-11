import { Component, Input } from '@angular/core';
import { Persona } from '../interfaces/persona.interface';
import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent  {

@Input() newPerson: Persona = {
  name: '',
  surname: '',
  age: 0
}


@Output() outNewPerson: EventEmitter<Persona>  = new EventEmitter();

agregar(){
  if(this.newPerson.name.trim().length === 0){
    return;
  }

  this.outNewPerson.emit( this.newPerson )

  this.newPerson = {
    name: '',
    surname: '',
    age: 0
  }
  
 }

}
