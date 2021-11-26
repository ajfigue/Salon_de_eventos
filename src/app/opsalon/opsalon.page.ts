import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SalonService } from 'src/app/servicios/salon.service';
import { FormBuilder, FormGroup,Validator, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-opsalon',
  templateUrl: './opsalon.page.html',
  styleUrls: ['./opsalon.page.scss'],
})
export class OpsalonPage implements OnInit {
    
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

  alta(value:any) {
    this.nuevocon={
      Nom_Salon:value.Nom_Salon,
      Tam_Salon:value.Tam_Salon,
      Equ_Salin:value.Equ_Salin
    }
    this.salon.alta(this.nuevocon).subscribe(datos => {
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