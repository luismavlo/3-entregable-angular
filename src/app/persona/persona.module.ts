import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonasComponent } from './personas/personas.component';
import { AgregarComponent } from './agregar/agregar.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PersonasComponent,
    AgregarComponent,
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class PersonaModule { }
