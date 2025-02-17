
import { Component,ViewChild } from '@angular/core';
import { NavController,IonicPage,Slides } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-music-store',
  templateUrl: 'music-store.html'
})
export class MusicStorePage {
  @ViewChild('SwipedTabsSlider') SwipedTabsSlider: Slides ;

  SwipedTabsIndicator :any= null;
  tabs:any=[];

 
  constructor(public navCtrl: NavController) {
  	this.tabs=["Music Play","Playlist"];
  }
  ionViewWillEnter(){
    this.SwipedTabsSlider.slideTo(0,100);
}

  ionViewDidEnter() {
    this.SwipedTabsIndicator = document.getElementById("indicator1");
  }

  selectTab(index) {    
    this.SwipedTabsIndicator.style.webkitTransform = 'translate3d('+(100*index)+'%,0,0)';
    this.SwipedTabsSlider.slideTo(index, 500);
  }

  updateIndicatorPosition() {
      // this condition is to avoid passing to incorrect index
  	if( this.SwipedTabsSlider.length()> this.SwipedTabsSlider.getActiveIndex())
  	{
  		this.SwipedTabsIndicator.style.webkitTransform = 'translate3d('+(this.SwipedTabsSlider.getActiveIndex() * 100)+'%,0,0)';
  	}
    
    }

  animateIndicator($event) {
  	if(this.SwipedTabsIndicator)
   	    this.SwipedTabsIndicator.style.webkitTransform = 'translate3d(' + (($event.progress* (this.SwipedTabsSlider.length()-1))*100) + '%,0,0)';
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ImageStorePage');
  }

}
