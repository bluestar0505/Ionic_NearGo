import { Component } from '@angular/core';
import { NavController,  ModalController} from 'ionic-angular';

 import { StorePage } from '../store/store';
 import { EventdetailPage } from '../eventdetail/eventdetail';
 import { OfferdetailPage } from '../offerdetail/offerdetail';
 import { SearchPage } from '../search/search';
 import { MapPage } from '../map/map';
@Component({
  selector: 'page-saved',
  templateUrl: 'saved.html'
})
export class SavedPage {
   near: string = "stores";
  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
  }
  
store(){
        this.navCtrl.push(StorePage)
  } 
  offerdetail(){
        this.navCtrl.push(OfferdetailPage)
  }
  eventdetail(){
        this.navCtrl.push(EventdetailPage)
  }
  map(){
        this.navCtrl.push(MapPage)
  }
 search() {
    let modal = this.modalCtrl.create(SearchPage);
    modal.present();
  } 
}
