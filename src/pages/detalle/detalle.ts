import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalle',
  templateUrl: 'detalle.html',
})
export class DetallePage {
  elemento: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.elemento = navParams;
    alert(JSON.stringify(this.elemento, null, 4));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallePage');
  }

}
