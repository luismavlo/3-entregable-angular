import { Component, Input } from '@angular/core';
import { Persona } from '../interfaces/persona.interface';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent {

  @Input() personas: Persona[] = [];
  
  clasification ( age: number ): string{
    
    if(age >= 0 && age<= 11){
      return "Niño"
    }else if(age >= 12 && age < 18){
      return "Adolescente"
    }else if(age >= 18 && age <= 59){
      return "Adulto"
    }else if(age >= 60){
      return "Adulto mayor"
    }
    return "sin identificar"
  }
  
}
