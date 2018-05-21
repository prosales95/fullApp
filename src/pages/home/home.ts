import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RegisterPage} from '../register/register';
import {InfoPage} from '../info/info';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	public inputVal:string;
	username:string;
	password:string;
	data: Observable<any>;
	result: any =[];
	constructor(public navCtrl: NavController, public http:HttpClient) {


	}

	buttonClick(){
		console.log("Clicked");
		alert(this.inputVal + "I see you are obedient. I like that.")
	}

	goRegister(){
		this.navCtrl.push(RegisterPage)

	}

	goInfo(){
		this.navCtrl.push(InfoPage)
	}

	login(){
		console.log ("Username " + this.username);
		console.log("Password "+this.password);
	}

	getData() {
		var url ='https://jsonplaceholder.typicode.com/posts/1' ;
		this.data =this.http.get(url);
		this.data.subscribe (data => {
			console.log(data);
			this.result=data;
		})
		console.log('getData executed');
	}

}
