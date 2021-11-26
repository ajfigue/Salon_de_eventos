import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SalonService } from 'src/app/servicios/salon.service';
import { FormBuilder, FormGroup,Validator, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-salon',
  templateUrl: './salon.page.html',
  styleUrls: ['./salon.page.scss'],
})
export class SalonPage implements OnInit {
  myform:FormGroup  
  id_editar:number=0;
  constructor(public alertController: AlertController,private _builder:FormBuilder,private salon: SalonService) { 
    this.myform=this._builder.group({
      Nom_Salon: ['', [Validators.required, Validators.maxLength(100)]]  ,
      Tam_Salon: ['', [Validators.required]]  ,
      Equ_Salin: ['', [Validators.required, Validators.maxLength(100)]]
    })
  }
  lista_contactos: any;
  nuevocon={
    Nom_Salon:null,
    Tam_Salon:null,
    Equ_Salin:null
  }

  ngOnInit() {
    this.recuperarTodos();
  }
  
  recuperarTodos() {
    this.salon.recuperarTodos().subscribe(result => this.lista_contactos = result);
  }

  baja(id:number) {
    if (window.confirm("Esta seguro de eliminar el registro Numero "+id+" ?")) {
      this.salon.baja(id).subscribe(datos => {
        console.log(datos)
        alert("agenda eliminado ")
        this.myform.reset()
        this.recuperarTodos()
      });
    }

   
  }

}
