import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-info',
 	templateUrl: 'info.html',
 })
 export class InfoPage {
 	public items:any;
 	public objs:any;
 	public nats:any;
 	constructor(public navCtrl: NavController, 
 		public navParams: NavParams, public http:HttpClient) {
 		this.loadData();
 
 this.nats=[
 	{title: ' Argentina', cap:'buenos aires'},
 		{title: 'Brazil', cap:'brazilia'},
 		{title: 'Ecuador', cap:'quito'},
 		{title: ' Bolivia', cap:'sucre'},
 		{title: 'Paraguay', cap:'asuncion'},
 		{title: 'Chile ', cap:'santiago'},
 		{title: 'Uruguay',cap:'montevideo'},
 		{title: 'Colombia',cap:'bogota'},
 		{title: 'Venezuela',cap:'Caracas'},
 		{title: 'Mexico',cap:'DF'}

 ]


 		this.objs = [
 		{title: 'Pacific Coast'},
 		{title: 'Atlantic'},
 		{title: 'Islands'},
 		{title: 'Andes Mountains'},
 		{title: 'Patagonia'},
 		{title: 'Amazon Forest'},
 		{title: 'Atacama'},
 		{title: 'Pampa'}
 		]
 	}

 	loadData(){
 		let data:Observable<any>;
 		data = this.http.get('https://jsonplaceholder.typicode.com/posts')
 		data.subscribe(res => {
 			this.items=res;
 		})
 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad InfoPage');
 	}
 	natClick(natcap:number){
alert('The capital is ' + natcap)

 	}

 }
