import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-eventdetail',
  templateUrl: 'eventdetail.html'
})
export class EventdetailPage {

  constructor(public navCtrl: NavController) {

  }
    
slides = [
    {
          
      image: "assets/imgs/9.png",
    },
    {     
   
      image: "assets/imgs/10.png",
    },
    {     
      image: "assets/imgs/11.png",
    }
  ];

}
