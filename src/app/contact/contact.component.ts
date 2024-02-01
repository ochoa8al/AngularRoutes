import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  miFormulario: FormGroup;

  constructor( private fb : FormBuilder){
    this.miFormulario = fb.group({
      nombre: ['',[ Validators.required,Validators.minLength(3)]],
      correo: ['',[Validators.email, Validators.required]]
    })
  }

  Enviar(){
    console.log(this.miFormulario);
  };

  hayError(campo:string,validacion:string){
    return this.miFormulario.get(campo)?.hasError(validacion) &&
      this.miFormulario.get(campo)?.touched    
  }

}
