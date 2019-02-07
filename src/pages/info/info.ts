import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ThrowStmt } from '@angular/compiler';

/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {
departamentos = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.departamentos = this.navParams.get('departamentos')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }

}
