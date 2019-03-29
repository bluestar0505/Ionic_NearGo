import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

  import { SearchPage } from '../search/search';
import { ChattingPage } from '../chatting/chatting';
@Component({
  selector: 'page-chats',
  templateUrl: 'chats.html'
})
export class ChatsPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }
  
  chatting(){
        this.navCtrl.push(ChattingPage)
  }
 
 search() {
    let modal = this.modalCtrl.create(SearchPage);
    modal.present();
  } 

}
