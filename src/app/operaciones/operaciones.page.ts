import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ContactoService } from 'src/app/servicios/contacto.service';
import { FormBuilder, FormGroup,Validator, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-operaciones',
  templateUrl: './operaciones.page.html',
  styleUrls: ['./operaciones.page.scss'],
})
export class OperacionesPage implements OnInit {
  myform:FormGroup  
  id_editar:number=0;
  constructor(public alertController: AlertController,private _builder:FormBuilder,private contacto: ContactoService) { 
    this.myform=this._builder.group({
      Id_Cliente: ['', [Validators.required]]  ,
      Id_Salon: ['', [Validators.required]]  ,
      Fecha: ['', [Validators.required, Validators.maxLength(100)]] ,
      Valor_Alq: ['', [Validators.required]] ,
      Met_Pago: ['', [Validators.required, Validators.maxLength(100)]] 
    })
  }
  lista_contactos: any;
  nuevocon={
    Id_Cliente:null,
    Id_Salon:null,
    Fecha:null,
    Valor_Alq:null,
    Met_Pago:null
  }

  ngOnInit() {
    this.recuperarTodos();
  }
  
  recuperarTodos() {
    this.contacto.recuperarTodos().subscribe(result => this.lista_contactos = result);
  }

  baja(id:number) {
    if (window.confirm("Esta seguro de eliminar el registro Numero "+id+" ?")) {
      this.contacto.baja(id).subscribe(datos => {
        console.log(datos)
        alert("agenda eliminado ")
        this.myform.reset()
        this.recuperarTodos()
      });
    }

   
  }
}
