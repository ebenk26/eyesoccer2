import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import {HomePage} from '../home/home';
import { Http } from '@angular/http';
/**
 * Generated class for the MemberAreaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-member-area',
  templateUrl: 'member-area.html',
})
export class MemberAreaPage {
	pet: string = "profil";
	usernameview: string = null;
	useremailview: string = null;
	useraddressview: string = null;
	userklubview: string = null;
	usersupporterview: string = null;
	useridview: string = null;
	userpicview: string = null;
  constructor(private storage: Storage,public navCtrl: NavController, public navParams: NavParams, public http: Http, public toastCtrl: ToastController) {
		this.storage.get('email_user').then((val) => {
			this.useremailview = val;
			console.log(val);
		}, error => console.error('Error storing LoginData', error));
		this.storage.get('name_user').then((val) => {
			this.usernameview = val;
			console.log(val);
		}, error => console.error('Error storing LoginData', error));
		this.storage.get('address_user').then((val) => {
			this.useraddressview = val;
			console.log(val);
		}, error => console.error('Error storing LoginData', error));
		this.storage.get('klubfav_user').then((val) => {
			this.userklubview = val;
			console.log(val);
		}, error => console.error('Error storing LoginData', error));
		this.storage.get('supporter_user').then((val) => {
			this.usersupporterview = val;
			console.log(val);
		}, error => console.error('Error storing LoginData', error));
		this.storage.get('id_user').then((val) => {
			this.useridview = val;
			console.log(val);
		}, error => console.error('Error storing LoginData', error));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MemberAreaPage');
  }
  
	public uploadLogout() {
		let firstViewCtrl = this.navCtrl.first();
		console.log("logout");
		this.storage.clear();
		// this.navCtrl.push(HomePage,{parent: HomePage}.dismiss());
		// this.navCtrl.popToRoot({animate: false}).then(() => firstViewCtrl.dismiss());
		this.navCtrl.setRoot(HomePage);
	}
	
	public uploadUpdate() {
		console.log("update");
		var link = 'http://eyesoccer.id/update_profile_mobile.php';
        var data = JSON.stringify({username: this.usernameview,useremail: this.useremailview,useraddress: this.useraddressview});
        
        this.http.post(link, data).map(res => res.json()).subscribe(
			data => {
				var link2 = 'http://eyesoccer.id/login_mobileview.php';
				var data2 = JSON.stringify({useremail: this.useremailview,username: this.usernameview,useraddress: this.useraddressview});
				
				this.http.post(link2, data2).map(res => res.json()).subscribe(
					datares => {
						this.presentToast('Success.');
						console.log(datares[0]);
						this.storage.set('email_user',datares[0].email);
						this.storage.set('id_user',datares[0].id_member);
						this.storage.set('name_user',datares[0].fullname);
						this.storage.set('pic_user',datares[0].pic);
						this.storage.set('title_user',datares[0].title);
						this.storage.set('description_user',datares[0].description);
						this.storage.set('address_user',datares[0].address);
						this.storage.set('klubfav_user',"");
						this.storage.set('supporter_user',"");
						this.storage.get('name_user').then((val) => {
							this.usernameview = val;
						}, error => console.error('Error storing LoginData', error));
						this.storage.get('pic_user').then((val) => {
							this.userpicview = "http://eyesoccer.id/systems/img_storage/"+val;
						}, error => console.error('Error storing LoginData', error));
						this.storage.get('address_user').then((val) => {
							this.useraddressview = val;
						}, error => console.error('Error storing LoginData', error));
						this.storage.get('klubfav_user').then((val) => {
							this.userklubview = val;
						}, error => console.error('Error storing LoginData', error));
						this.storage.get('supporter_user').then((val) => {
							this.usersupporterview = val;
						}, error => console.error('Error storing LoginData', error));
					},
					err => {
						console.log("Oops2!");
						console.log(err);
					}
				);
			},
			err => {
				console.log("Oops!");
				console.log(err);
			}
		);
	}
	
	private presentToast(text) {
	  let toast = this.toastCtrl.create({
		message: text,
		duration: 3000,
		position: 'top'
	  });
	  toast.present();
	}
}
