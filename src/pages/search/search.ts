import { Component } from '@angular/core';
import { NavController,ViewController } from 'ionic-angular';

 import { CategoriesPage } from '../categories/categories';
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  constructor(public navCtrl: NavController,  public viewCtrl: ViewController) {

  }
  dismiss() {
		this.viewCtrl.dismiss();
	}
    

 categories(){
        this.navCtrl.push(CategoriesPage)
  } 

}
