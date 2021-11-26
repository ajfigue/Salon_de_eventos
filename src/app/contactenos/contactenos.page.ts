import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ContactoService } from 'src/app/servicios/contacto.service';
import { FormBuilder, FormGroup,Validator, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.page.html',
  styleUrls: ['./contactenos.page.scss'],
})
export class ContactenosPage implements OnInit {
    
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

  alta(value:any) {
    this.nuevocon={
      Id_Cliente:value.Id_Cliente,
      Id_Salon:value.Id_Salon,
      Fecha:value.Fecha,
      Valor_Alq:value.Valor_Alq,
      Met_Pago:value.Met_Pago
    }
    this.contacto.alta(this.nuevocon).subscribe(datos => {
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
