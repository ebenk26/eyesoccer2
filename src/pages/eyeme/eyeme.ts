import { Component, ViewChild } from '@angular/core';
import { ModalController, NavController, Navbar, ActionSheetController, ToastController, Platform, LoadingController, Loading } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { File } from '@ionic-native/file';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';

import {HomePage} from '../home/home';
import {MemberAreaPage} from '../member-area/member-area';
import { LoginPage } from '../login/login';
import { CommentDetailPage } from '../comment-detail/comment-detail';
 
declare var cordova: any;

@Component({
  selector: 'page-eyeme',
  templateUrl: 'eyeme.html'
})
export class EyemeListPage {
@ViewChild(Navbar) navBar:Navbar;
	posts: any;
  lastImage: string = null;
	loading: Loading;
	usernameview: string = null;
	useremailview: string = null;
	lovecount = 0;
	
  constructor(public modalCtrl: ModalController, public nav:NavController,private navParams: NavParams, private camera: Camera, private transfer: Transfer, private file: File, private filePath: FilePath, public actionSheetCtrl: ActionSheetController, public toastCtrl: ToastController, public platform: Platform, public loadingCtrl: LoadingController, private storage: Storage,public http: Http) { 
	let filename = navParams.get('filename');
    let curname = navParams.get('curname');
    let corpath = navParams.get('corpath');
	platform.registerBackButtonAction(()=>{
		this.nav.setRoot(HomePage);
	});
	this.http.get('http://eyesoccer.id/list_eyeme.php').map(res => res.json()).subscribe(
		data => {
			// this.posts = data.thumbnailUrl;
			this.posts = data.data;
			console.log(data);
		},
		err => {
			console.log("Oops!");
			console.log(err);
		}
	);
  }
	presentModal() {
		let modal = this.modalCtrl.create(LoginPage);
		modal.present();
	}
 ionViewDidLoad() {
        this.navBar.backButtonClick = (e:UIEvent) => {
            console.log("Back button clicked");
            // this.nav.parent.viewCtrl.dismiss();
			this.nav.setRoot(HomePage);
        };
    }
	
	ionViewDidEnter() {
		console.log('ionViewDidEnter EyemePage');
		this.storage.get('name_user').then((val) => {
			this.usernameview = val;
		}, error => console.error('Error storing LoginData', error));
		this.storage.get('email_user').then((val) => {
			this.useremailview = val;
		}, error => console.error('Error storing LoginData', error));
	}

	memberPage(){
	this.nav.push(MemberAreaPage,{
		username: this.usernameview
	});
	}
	
	presentModalComment(pic,name,type_gallery,thumb1,title,id) {
		let modal2 = this.modalCtrl.create(CommentDetailPage, { pic: pic, name:name, type_gallery:type_gallery, thumb1:thumb1, title:title, id:id});
		modal2.present();
		modal2.onDidDismiss(data => {
			console.log('modal data sent to main form', data);
			this.http.get('http://eyesoccer.id/list_eyeme.php').map(res => res.json()).subscribe(
				data => {
					// this.posts = data.thumbnailUrl;
					this.posts = data.data;
					console.log(data);
				},
				err => {
					console.log("Oops!");
					console.log(err);
				}
			);
		});
	}
	love(email,id_place,posts): void {
		var link = 'http://eyesoccer.id/input_love_eyeme.php';
        var data = JSON.stringify({email: email,id_place: id_place});
        
        this.http.post(link, data).map(res => res).subscribe(
		data => {
			console.log(data);
			posts.like = data["_body"];
			// this.presentToast('Success.');
		},
		err => {
			console.log("Oops!");
			console.log(err);
		});
	}
	public lovecounts(post): void {
		post.like = post.like + 1;
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
