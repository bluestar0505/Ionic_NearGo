import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { RegisterPage } from '../register/register';
import { PasswordPage } from '../password/password';
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})
export class SigninPage {

  constructor(public navCtrl: NavController) {

  }
  
 
 tabs(){
        this.navCtrl.setRoot(TabsPage)
  }
  register(){
        this.navCtrl.push(RegisterPage)
  } 
  password(){
        this.navCtrl.push(PasswordPage)
  }

}
