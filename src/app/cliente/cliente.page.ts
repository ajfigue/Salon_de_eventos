import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ClienteService } from 'src/app/servicios/cliente.service';
import { FormBuilder, FormGroup,Validator, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
})
export class ClientePage implements OnInit {
  myform:FormGroup  
  id_editar:number=0;
  constructor(public alertController: AlertController,private _builder:FormBuilder,private cliente: ClienteService) { 
    this.myform=this._builder.group({
      Id_Cliente: ['', [Validators.required]]  ,
      Ident_Cliente: ['', [Validators.required]]  ,
      Nom_cliente: ['', [Validators.required, Validators.maxLength(100)]] ,
      Apel_Cliente: ['', [Validators.required, Validators.maxLength(100)]] ,
      Edad_Cliente: ['', [Validators.required]], 
      Afiliado: ['', [Validators.required, Validators.maxLength(100)]]
    })
  }
  lista_contactos: any;
  nuevocon={
    Id_Cliente:null,
    Ident_Cliente:null,
    Nom_cliente:null,
    Apel_Cliente:null,
    Edad_Cliente:null,
    Afiliado:null
  }

  ngOnInit() {
    this.recuperarTodos();
  }
  
  recuperarTodos() {
    this.cliente.recuperarTodos().subscribe(result => this.lista_contactos = result);
  }

  baja(id:number) {
    if (window.confirm("Esta seguro de eliminar el registro Numero "+id+" ?")) {
      this.cliente.baja(id).subscribe(datos => {
        console.log(datos)
        alert("agenda eliminado ")
        this.myform.reset()
        this.recuperarTodos()
      });
    }

   
  }

  showAlert() {

    this.alertController.create({
      header: 'Informacion',
      subHeader: 'Gracias por su alquiler',
      message: 'Evento Asignado',
      buttons: ['OK']
    }).then(res => {

      res.present();

    });

  }
}

