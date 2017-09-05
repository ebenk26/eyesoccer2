import { Component, ViewChild } from '@angular/core';
import { NavController, Navbar, ActionSheetController, ToastController, Platform, LoadingController, Loading } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { VideoPlayer ,VideoOptions } from '@ionic-native/video-player';

import { File } from '@ionic-native/file';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';

import {HomePage} from '../home/home';
import {EyemeListPage} from '../eyeme/eyeme';
 
declare var cordova: any;

@Component({
  selector: 'page-videoplay',
  templateUrl: 'video.html'
})
export class videoPlayPage {
@ViewChild(Navbar) navBar:Navbar;
caption: string = null;
checkboxpub: boolean;
lastVideo: string = null;
nameVideo: string = null;
videoOpts : VideoOptions ;
	posts: any;
  lastImage: string = null;
	loading: Loading;
	
  constructor(public nav:NavController,private navParams: NavParams, private camera: Camera, private transfer: Transfer, private file: File, private filePath: FilePath, public actionSheetCtrl: ActionSheetController, public toastCtrl: ToastController, public platform: Platform, public loadingCtrl: LoadingController, private storage: Storage,public http: Http,private videoPlayer : VideoPlayer, public navCtrl: NavController) { 
	// let filepathvideo = this.navParams.get('filepath');
	console.log(this.navParams.get('filepath'));
	this.lastVideo = this.navParams.get('filepath');
	this.nameVideo = this.navParams.get('filename');
	platform.registerBackButtonAction(()=>{
		this.nav.setRoot(HomePage);
	});
  }
  
  updateCheckboxpub() {
		this.checkboxpub = this.checkboxpub;
	  }
	  
 ionViewDidLoad() {
        this.navBar.backButtonClick = (e:UIEvent) => {
            console.log("Back button clicked");
            // this.nav.parent.viewCtrl.dismiss();
			this.nav.setRoot(HomePage);
        };
    }
	
	public playVideo(){
	 	this.videoOpts = {volume : 1.0};
	 	this.videoPlayer.play(this.navParams.get('filepath')).then(() => {
	 	console.log('video completed');
	 	}).catch(err => {
	 	console.log(err);
	 	});    
	}
	public stopPlayingVideo(){
	 	this.videoPlayer.close();
	}
	
	public uploadVideo() {
	  // Destination URL
	  var url = "http://eyesoccer.id/upload_video.php";
	 
	  // File for Upload
	  var targetPath = this.navParams.get('filepath');
	 
	  // File name only
	  var filename = this.navParams.get('filename');
	 
	  var options = {
		fileKey: "file",
		fileName: filename,
		chunkedMode: false,
		mimeType: "video/mp4",
		params : {'fileName': filename, 'param': this.caption, 'checkbox': this.checkboxpub}
	  };
	 
	  const fileTransfer: TransferObject = this.transfer.create();
	 
	  this.loading = this.loadingCtrl.create({
		content: 'Uploading...',
	  });
	  this.loading.present();
	 
	  // Use the FileTransfer to upload the image
	  fileTransfer.upload(targetPath, url, options).then(data => {
		this.loading.dismissAll()
		console.log(data);
		this.presentToast("Success.");
		this.navCtrl.push(EyemeListPage, {
			filename: "",
			curname: "",
			corpath: ""
		});
	  }, err => {
		this.loading.dismissAll()
		console.log(err);
	  });
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
