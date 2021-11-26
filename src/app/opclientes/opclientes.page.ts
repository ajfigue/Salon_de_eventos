import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ClienteService } from 'src/app/servicios/cliente.service';
import { FormBuilder, FormGroup,Validator, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-opclientes',
  templateUrl: './opclientes.page.html',
  styleUrls: ['./opclientes.page.scss'],
})
export class OpclientesPage implements OnInit {
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

  alta(value:any) {
    this.nuevocon={
      Id_Cliente:value.Id_Cliente,
      Ident_Cliente:value.Ident_Cliente,
      Nom_cliente:value.Nom_cliente,
      Apel_Cliente:value.Apel_Cliente,
      Edad_Cliente:value.Edad_Cliente,
      Afiliado:value.Afiliado

    }
    this.cliente.alta(this.nuevocon).subscribe(datos => {
      console.log(datos)
      this.myform.reset()
      this.showAlert()
     
     });
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
  
  ngOnInit() {
    
  }

}