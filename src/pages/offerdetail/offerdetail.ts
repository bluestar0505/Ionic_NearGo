import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-offerdetail',
  templateUrl: 'offerdetail.html'
})
export class OfferdetailPage {

  constructor(public navCtrl: NavController) {

  }
    slides = [
    {
          
      image: "assets/imgs/8.png",
    },
    {     
   
      image: "assets/imgs/5.png",
    },
    {     
      image: "assets/imgs/6.png",
    }
  ];
  

}
