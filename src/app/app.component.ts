import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: 'Inicio', icon: 'bookmarks' },
    { title: 'Eventos Agendados', url: 'Agendados', icon: 'albums' },
    { title: 'Agendar Evento', url: 'Agregar_e', icon: 'bag-add' },
    { title: 'Clientes Registrados', url: 'cliente', icon: 'person-circle' },
    { title: 'Agregar Cliente', url: 'opclientes', icon: 'person-add' },
    { title: 'Salones Disponibles', url: 'salon', icon: 'archive' },
    { title: 'Agregar Salon', url: 'opsalon', icon: 'duplicate' },
  ];
  public labels = ['Proximamente'];
  constructor() {}
}
