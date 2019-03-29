import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ProfilePage } from '../profile/profile';
import { SavedPage } from '../saved/saved';
import { ConditionPage } from '../condition/condition';
import { HelpPage } from '../help/help';
@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {

  constructor(public navCtrl: NavController) {

  }
  
  profile(){
        this.navCtrl.push(ProfilePage)
  } 
  saved(){
        this.navCtrl.push(SavedPage)
  }
  condition(){
        this.navCtrl.push(ConditionPage)
  } 
  help(){
        this.navCtrl.push(HelpPage)
  }

}
