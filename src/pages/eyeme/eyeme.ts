import { Component, ViewChild } from '@angular/core';
import { NavController, Navbar, ActionSheetController, ToastController, Platform, LoadingController, Loading } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { File } from '@ionic-native/file';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';

import {HomePage} from '../home/home';
 
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
	
  constructor(public nav:NavController,private navParams: NavParams, private camera: Camera, private transfer: Transfer, private file: File, private filePath: FilePath, public actionSheetCtrl: ActionSheetController, public toastCtrl: ToastController, public platform: Platform, public loadingCtrl: LoadingController, private storage: Storage,public http: Http) { 
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
 ionViewDidLoad() {
        this.navBar.backButtonClick = (e:UIEvent) => {
            console.log("Back button clicked");
            // this.nav.parent.viewCtrl.dismiss();
			this.nav.setRoot(HomePage);
        };
    }
	
	

}
