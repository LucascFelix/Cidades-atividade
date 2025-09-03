import { Component } from '@angular/core';
import { Cidade } from '../../Cidade';
import { FormBuilder, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-cidade',
  standalone: false,
  templateUrl: './cidade.html',
  styleUrl: './cidade.css'
})
export class cidade {
    cidades: Cidade [] = [];
    formGroupCidades: FormGroup;

    constructor(private formBuilder: FormBuilder){
      this.formGroupCidades = formBuilder.group({
        id: [''],
        nome: [''],
        estado: [''],
        populacao: [''],
        areaKm2: ['']
      });
    }

    save(){
      this.cidades.push(this.formGroupCidades.value)
      this.formGroupCidades.reset();
    }
}
