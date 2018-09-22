import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetallePage } from '../detalle/detalle';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // agregar 1
  elementos: any[];
  
  constructor(public navCtrl: NavController) {
    
    // agregar 2
    this.elementos = []
    for (let i = 1; i <= 10; i++){
      this.elementos.push(
        {
          nombre: "Elemento "+i,
          id: i
        }
      );

    }


  }

  // agregar 3
  elSeleccionado(elem){
    // alert(elem.id)
    this.navCtrl.push(DetallePage, elem)
  }


}
