import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AddreviewPage } from '../addreview/addreview';
@Component({
  selector: 'page-review',
  templateUrl: 'review.html'
})
export class ReviewPage {

  constructor(public navCtrl: NavController) {

  }

  addreview(){
        this.navCtrl.push(AddreviewPage)
  }
}
