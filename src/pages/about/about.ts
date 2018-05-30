import { Component, Inject, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Leader } from '../../shared/leader';
import { LeaderProvider } from '../../providers/leader/leader';

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  leaders: Leader[];
  errMess: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public leaderservice: LeaderProvider,
    @Inject('BaseURL') public BaseURL ) {
  }

  ngOnInit() {
    this.leaderservice.getLeaders()
      .subscribe(leaders => this.leaders = leaders, errmess => this.errMess = <any>errmess);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

}
