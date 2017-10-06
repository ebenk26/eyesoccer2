import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import {HomePage} from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	pet: string = "login";
	isAndroid: boolean = false;
	username: string = null;
	password: string = null;
	regisnama: string = null;
	regisemail: string = null;
	regispwd1: string = null;
	regispwd2: string = null;
  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams, private storage: Storage, public http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  
  dismiss() {
    this.viewCtrl.dismiss();
  }

  public uploadLogin() {
		console.log("uploadLogin");
		var link = 'http://eyesoccer.id/login_mobile.php';
        var data = JSON.stringify({username: this.username,password: this.password});
        
        this.http.post(link, data).map(res => res.json()).subscribe(
			data => {
				console.log(data[0]);
				this.storage.set('email_user',data[0].email);
				this.storage.set('id_user',data[0].id_member);
				this.storage.set('name_user',data[0].fullname);
				this.storage.set('pic_user',data[0].pic);
				this.storage.set('title_user',data[0].title);
				this.storage.set('description_user',data[0].description);
				this.storage.set('address_user',data[0].address);
				this.storage.set('klubfav_user',"");
				this.storage.set('supporter_user',"");
				this.viewCtrl.dismiss();
				this.navCtrl.setRoot(HomePage);
			},
			err => {
				console.log("Oops!");
				console.log(err);
			}
		);
  }
  
  public uploadRegis() {
	console.log("registrasi");
  }
}
