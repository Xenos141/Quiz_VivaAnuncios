import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  departamentos = [];
  constructor(public navCtrl: NavController, public http: HttpClient) {
    this.http.get('/v1/api/pin-data?url=/s-renta-inmuebles/guadalajara-y-zona-metro/v1c1098l10567p1&geo=(21.10631012145462,-102.42214381725364),(20.21712862656199,-104.32387728274637)')
      .subscribe(data => {
        console.log(JSON.stringify(data));
        if (data.hasOwnProperty('ads')) {
          console.log(data.ads.all);
        }
        if (data.hasOwnProperty('ads')) {
          this.departamentos = data.ads;
        }
      },
        error => {
          console.log(JSON.stringify(error));
        });
  }
  Informacion(departamento) {

  }
}
//El precio del inmueble se ubica en la propiedad ad, despues en la propiedad price y por ultimo en formattedAmount
//La imagen del inmueble se ubica en la propiedad ad, despues en la propiedad pictures y por ultimo en url, nada más que se pone: {{departamento.pictures[0].url}}. Pictures es un arreglo
//El municipio del inmueble se ubica en la propiedad ad, despues en la propiedad geo y por ultimo en Name
//La colonia del inmueble se ubica en la propiedad ad, despues en la propiedad geo y por ultimo en displayName
