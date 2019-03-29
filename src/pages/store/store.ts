import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

 import { ReviewPage } from '../review/review';
@Component({
  selector: 'page-store',
  templateUrl: 'store.html'
})
export class StorePage {

  constructor(public navCtrl: NavController) {

  }
    slides = [
    {
          
      image: "assets/imgs/background.png",
    },
    {     
   
      image: "assets/imgs/2.png",
    },
    {     
      image: "assets/imgs/3.png",
    }
  ];
  
 
 review(){
        this.navCtrl.push(ReviewPage)
  }

}
