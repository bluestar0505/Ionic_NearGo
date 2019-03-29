import { Component } from '@angular/core';
import { NavController, ModalController} from 'ionic-angular';

import { SearchPage } from '../search/search';
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html'
})
export class CategoriesPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }
  search() {
    let modal = this.modalCtrl.create(SearchPage);
    modal.present();
  } 

}
