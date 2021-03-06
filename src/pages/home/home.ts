import { Component } from '@angular/core';
import { ModalController, NavController, ActionSheetController, ToastController, Platform, LoadingController, Loading } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import {ListPage} from '../list/list';
import {videoPlayPage} from '../video/video';
import {EyemeListPage} from '../eyeme/eyeme';
import {MemberAreaPage} from '../member-area/member-area';
import { LoginPage } from '../login/login';

import { File } from '@ionic-native/file';
import { Transfer, TransferObject } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';
// import { MediaCapture } from '@ionic-native/media-capture';
import { Storage } from '@ionic/storage';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions, CaptureVideoOptions } from '@ionic-native/media-capture';
 
declare var cordova: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	aboutPage = EyemeListPage;
	lastImage: string = null;
	loading: Loading;
	username: string = null;
	usernameview: string = null;
	useremailview: string = null;
	useridview: string = null;
	picview: string = null;
	password: string = null;
	
  constructor(public modalCtrl: ModalController, public navCtrl: NavController, private camera: Camera, private transfer: Transfer, private file: File, private filePath: FilePath, public actionSheetCtrl: ActionSheetController, public toastCtrl: ToastController, public platform: Platform, public loadingCtrl: LoadingController, private storage: Storage, private MediaCapture: MediaCapture, public http: Http) {
	this.storage.get('name_user').then((val) => {
		this.usernameview = val;
	}, error => console.error('Error storing LoginData', error));
	this.storage.get('email_user').then((val) => {
		this.useremailview = val;
	}, error => console.error('Error storing LoginData', error));
	console.log(this.usernameview);
	console.log(this.useremailview);
  }
	
  pushPage(){
    // push another page on to the navigation stack
    // causing the nav controller to transition to the new page
    // optional data can also be passed to the pushed page.
    this.navCtrl.push('./pages/list');
  }
  public datarecording(data,name) {
	this.navCtrl.push(videoPlayPage, {
		filepath: data,
		filename: name
	});
  }
  public startrecording() {
    // this.MediaCapture.captureVideo((videodata) => {console.log(videodata)});
	let options: CaptureVideoOptions = { duration: 10 };
    this.MediaCapture.captureVideo(options).then(
		(data: MediaFile[]) => this.datarecording(data[0].fullPath,data[0].name),
		(err: CaptureError) => console.error(err)
	);
  this.MediaCapture.captureVideo(options).then(
		(data: MediaFile[]) => this.datarecording(data[0].fullPath,data[0].name),
		// (data: MediaFile[]) => console.log(data),
		(err: CaptureError) => console.error(err)
	);
  }
  public presentActionSheet2() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Upload Video Kamu',
      buttons: [
        // {
        //   text: 'Galeri Video',
        //   handler: () => {
        //     this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
        //   }
        // },
        {
          text: 'Rekam Video',
          handler: () => {
            this.startrecording();
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }
  
   public presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Image Source',
      buttons: [
        {
          text: 'Load from Library',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.CAMERA);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }
  
	public takePicture(sourceType) {
	  // Create options for the Camera Dialog
	  var options = {
		quality: 100,
		sourceType: sourceType,
		saveToPhotoAlbum: false,
		width: 300,
	    height: 300,
		targetWidth: 300,
	    targetHeight: 300,
		allowEdit: true,
		correctOrientation: true
	  };
	 
	  // Get the data of an image
	  this.camera.getPicture(options).then((imagePath) => {
		// Special handling for Android library
		if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
		  this.filePath.resolveNativePath(imagePath)
			.then(filePath => {
			  let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
			  let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
			  this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
				this.navCtrl.push(ListPage, {
					filename: this.createFileName(),
					curname: currentName,
					corpath: correctPath
				});
			});
		} else {
		  var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
		  var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
		  this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
		  // this.navCtrl.push(ListPage);
		  this.navCtrl.push(ListPage, {
			  filename: this.createFileName(),
			  curname: currentName,
			  corpath: correctPath
			});
		}
	  }, (err) => {
		this.presentToast('Error while selecting image.');
	  });
	}

	// Create a new name for the image
	private createFileName() {
	  var d = new Date(),
	  n = d.getTime(),
	  newFileName =  n + ".jpg";
	  return newFileName;
	}
	 
	// Copy the image to a local folder
	private copyFileToLocalDir(namePath, currentName, newFileName) {
	// Storage.set('photostorage',newFileName);
	  this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(success => {
		this.lastImage = newFileName;
		
	  }, error => {
		this.presentToast('Error while storing file.');
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
	 
	// Always get the accurate path to your apps folder
	public pathForImage(img) {
	  if (img === null) {
		return '';
	  } else {
		return cordova.file.dataDirectory + img;
	  }
	}
	
	public uploadImage() {
	  // Destination URL
	  var url = "https://eyesoccer.id/upload_eyeme";
	 
	  // File for Upload
	  var targetPath = this.pathForImage(this.lastImage);
	 
	  // File name only
	  var filename = this.lastImage;
	 
	  var options = {
		fileKey: "file",
		fileName: filename,
		chunkedMode: false,
		mimeType: "multipart/form-data",
		params : {'fileName': filename}
	  };
	 
	  const fileTransfer: TransferObject = this.transfer.create();
	 
	  this.loading = this.loadingCtrl.create({
		content: 'Uploading...',
	  });
	  this.loading.present();
	 
	  // Use the FileTransfer to upload the image
	  fileTransfer.upload(targetPath, url, options).then(data => {
		this.loading.dismissAll()
		this.presentToast('Image succesful uploaded.');
	  }, err => {
		this.loading.dismissAll()
		this.presentToast('Error while uploading file.');
	  });
	}
	
	public uploadLogin() {
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
				this.storage.get('email_user').then((val) => {
					this.useremailview = val;
				}, error => console.error('Error storing LoginData', error));
				this.storage.get('name_user').then((val) => {
					this.usernameview = val;
				}, error => console.error('Error storing LoginData', error));
				this.storage.get('pic_user').then((val) => {
					this.picview = "http://eyesoccer.id/systems/img_storage/"+val;
				}, error => console.error('Error storing LoginData', error));
			},
			err => {
				console.log("Oops!");
				console.log(err);
			}
		);
	}
	
	memberPage(){
	this.navCtrl.push(MemberAreaPage,{
		username: this.usernameview,
		email: this.useremailview
	});
	}
	
	ionViewDidEnter() {
		console.log('ionViewDidEnter HomePage');
		this.storage.get('name_user').then((val) => {
			this.usernameview = val;
		}, error => console.error('Error storing LoginData', error));
		this.storage.get('pic_user').then((val) => {
			this.picview = "http://eyesoccer.id/systems/img_storage/"+val;
		}, error => console.error('Error storing LoginData', error));
		this.storage.get('id_user').then((val) => {
			this.useridview = val;
		}, error => console.error('Error storing LoginData', error));
	}
	
	presentModal() {
		let modal = this.modalCtrl.create(LoginPage);
		modal.present();
	}
}