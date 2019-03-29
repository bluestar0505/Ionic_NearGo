import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

  import { TabsPage } from '../tabs/tabs';
@Component({
  selector: 'page-password',
  templateUrl: 'password.html'
})
export class PasswordPage {

  constructor(public navCtrl: NavController) {

  }

tabs(){
        this.navCtrl.setRoot(TabsPage)
  }

}
