import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';

/**
 * Generated class for the CommentDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comment-detail',
  templateUrl: 'comment-detail.html',
})
export class CommentDetailPage {
	usernameview: string = null
	useremailview: string = null
	name: string = null;
	avapic: string = null;
	pic: string = null;
	video: string = null;
	type_gallery: string = null;
	title: string = null;
	id: string = null;
	commenttext: string = null;
	posts: any;
  constructor(private storage: Storage, public viewCtrl: ViewController,public navCtrl: NavController, public navParams: NavParams,public http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentDetailPage');
	this.name = this.navParams.get('name');
	this.avapic =	this.navParams.get('pic');
	this.type_gallery =	this.navParams.get('type_gallery');
	this.pic =	this.navParams.get('thumb1');
	this.title =	this.navParams.get('title');
	this.id =	this.navParams.get('id');
  }
  
  ionViewDidEnter() {
		console.log('ionViewDidEnter CommentPage');
		this.storage.get('name_user').then((val) => {
			this.usernameview = val;
		}, error => console.error('Error storing LoginData', error));
		this.storage.get('email_user').then((val) => {
			this.useremailview = val;
		}, error => console.error('Error storing LoginData', error));
		var link = 'http://eyesoccer.id/list_comment.php';
        var data = JSON.stringify({email: this.useremailview,id_place: this.id,commenttext: this.commenttext});
        
        this.http.post(link, data).map(res => res.json()).subscribe(
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

  dismiss() {
    this.viewCtrl.dismiss();
  }
  
  comment(){
		var link = 'http://eyesoccer.id/input_comment.php';
        var data = JSON.stringify({email: this.useremailview,id_place: this.id,commenttext: this.commenttext});
        
        this.http.post(link, data).map(res => res.json()).subscribe(
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

}
