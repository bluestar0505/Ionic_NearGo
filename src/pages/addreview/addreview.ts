import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
@Component({
  selector: 'page-addreview',
  templateUrl: 'addreview.html'
})
export class AddreviewPage {

  constructor(public navCtrl: NavController) {

  }
  
tabs(){
        this.navCtrl.setRoot(TabsPage)
  }

}
