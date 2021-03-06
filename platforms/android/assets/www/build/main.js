webpackJsonp([3],{

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CommentDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CommentDetailPage = (function () {
    function CommentDetailPage(viewCtrl, navCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.name = null;
        this.avapic = null;
        this.pic = null;
        this.video = null;
        this.type_gallery = null;
        this.title = null;
    }
    CommentDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CommentDetailPage');
        this.name = this.navParams.get('name');
        this.avapic = this.navParams.get('pic');
        this.type_gallery = this.navParams.get('type_gallery');
        this.pic = this.navParams.get('thumb1');
        this.title = this.navParams.get('title');
    };
    CommentDetailPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return CommentDetailPage;
}());
CommentDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-comment-detail',template:/*ion-inline-start:"D:\xampp\htdocs\eyeside3\src\pages\comment-detail\comment-detail.html"*/'\n\n<ion-header>\n\n  <ion-toolbar style="background: rgba(0, 0, 0, 0) url(\'assets/Eyesoccer_files/h14.png\') no-repeat scroll center center / cover ;transform: none;contain: unset;">\n\n    <ion-title>\n\n      \n\n    </ion-title>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="dismiss()">\n\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="cards-bg">\n\n	<ion-list>\n\n		<ion-card>\n\n			<ion-card-header style="padding:0">\n\n			<ion-item>\n\n			  <ion-avatar item-start>\n\n				<img [src]="avapic" style="border: 1px solid black;"/>\n\n			  </ion-avatar>\n\n			  <h2 text-left>{{ name }}</h2>\n\n			</ion-item>\n\n			</ion-card-header>\n\n\n\n			<div *ngIf="type_gallery == \'video\'; then thenBlock else elseBlock"></div>\n\n			<ng-template #thenBlock>\n\n				<video controls="controls" class="videoPlayer" style="max-height:300px;">\n\n				<source src="{{pic}}#t=0.1" type="video/mp4" />\n\n				</video>\n\n			</ng-template>\n\n			<ng-template #elseBlock><div class="divimgEyeme">\n\n				<img [src]="pic" class="imgEyeme"/></div>\n\n			</ng-template>\n\n\n\n			<!--<img [src]="post.thumb1"/>-->\n\n\n\n			<ion-card-content>\n\n			  <ion-card-title>\n\n				{{ title }}\n\n			  </ion-card-title>\n\n			  <!--<p>\n\n				The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.\n\n			  </p>-->\n\n			</ion-card-content>\n\n			\n\n			<ion-item>\n\n				<ion-textarea placeholder="Tulis Komentar"></ion-textarea>\n\n			</ion-item>\n\n			\n\n			<button ion-button small round color="primary" class="right">Kirim</button>\n\n			<div class="margin-bot45">\n\n				<ion-list class="bg-grey">\n\n					<ion-item class="bg-whitesmoke">\n\n						<ion-avatar item-start>\n\n							<img [src]="avapic" style="border: 1px solid black;"/>\n\n						</ion-avatar>\n\n						<h2 text-left>{{ name }}</h2>\n\n					</ion-item>\n\n					<ion-card-content class="padding-bot0">\n\n						ekkekekekekekekek\n\n					</ion-card-content>\n\n					<ion-row class="card-content-md padding-top0">\n\n						<ion-col class="center">\n\n						  <ion-note class="color-blue center">\n\n							Reply\n\n						  </ion-note>\n\n						</ion-col>\n\n						<ion-col class="center">\n\n						  <ion-note class="color-grey">\n\n							11h ago\n\n						  </ion-note>\n\n						</ion-col>\n\n					</ion-row>\n\n				</ion-list>\n\n				\n\n				<ion-list class="bg-grey">\n\n					<ion-item class="bg-whitesmoke">\n\n						<ion-avatar item-start>\n\n							<img [src]="avapic" style="border: 1px solid black;"/>\n\n						</ion-avatar>\n\n						<h2 text-left>{{ name }}</h2>\n\n					</ion-item>\n\n					<ion-card-content class="padding-bot0">\n\n						ekkekekekekekekek\n\n					</ion-card-content>\n\n					<ion-row class="card-content-md padding-top0">\n\n						<ion-col class="center">\n\n						  <ion-note class="color-blue center">\n\n							Reply\n\n						  </ion-note>\n\n						</ion-col>\n\n						<ion-col class="center">\n\n						  <ion-note class="color-grey">\n\n							11h ago\n\n						  </ion-note>\n\n						</ion-col>\n\n					</ion-row>\n\n				</ion-list>\n\n			</div>\n\n		</ion-card>\n\n	</ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\xampp\htdocs\eyeside3\src\pages\comment-detail\comment-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], CommentDetailPage);

//# sourceMappingURL=comment-detail.js.map

/***/ }),

/***/ 120:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 120;

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/comment-detail/comment-detail.module": [
		281,
		2
	],
	"../pages/login/login.module": [
		280,
		1
	],
	"../pages/member-area/member-area.module": [
		279,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 162;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return videoPlayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_video_player__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_transfer__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_path__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__eyeme_eyeme__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var videoPlayPage = (function () {
    function videoPlayPage(nav, navParams, camera, transfer, file, filePath, actionSheetCtrl, toastCtrl, platform, loadingCtrl, storage, http, videoPlayer, navCtrl) {
        var _this = this;
        this.nav = nav;
        this.navParams = navParams;
        this.camera = camera;
        this.transfer = transfer;
        this.file = file;
        this.filePath = filePath;
        this.actionSheetCtrl = actionSheetCtrl;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.http = http;
        this.videoPlayer = videoPlayer;
        this.navCtrl = navCtrl;
        this.caption = null;
        this.lastVideo = null;
        this.nameVideo = null;
        this.iduser = null;
        this.lastImage = null;
        // let filepathvideo = this.navParams.get('filepath');
        console.log(this.navParams.get('filepath'));
        this.lastVideo = this.navParams.get('filepath');
        this.nameVideo = this.navParams.get('filename');
        platform.registerBackButtonAction(function () {
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_10__home_home__["a" /* HomePage */]);
        });
    }
    videoPlayPage.prototype.updateCheckboxpub = function () {
        this.checkboxpub = this.checkboxpub;
    };
    videoPlayPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.navBar.backButtonClick = function (e) {
            console.log("Back button clicked");
            // this.nav.parent.viewCtrl.dismiss();
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_10__home_home__["a" /* HomePage */]);
        };
    };
    videoPlayPage.prototype.playVideo = function () {
        this.videoOpts = { volume: 1.0 };
        this.videoPlayer.play(this.navParams.get('filepath')).then(function () {
            console.log('video completed');
        }).catch(function (err) {
            console.log(err);
        });
    };
    videoPlayPage.prototype.stopPlayingVideo = function () {
        this.videoPlayer.close();
    };
    videoPlayPage.prototype.uploadVideo = function () {
        var _this = this;
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
            params: { 'fileName': filename, 'param': this.caption, 'checkbox': this.checkboxpub, 'userid': this.iduser }
        };
        var fileTransfer = this.transfer.create();
        this.loading = this.loadingCtrl.create({
            content: 'Uploading...',
        });
        this.loading.present();
        // Use the FileTransfer to upload the image
        fileTransfer.upload(targetPath, url, options).then(function (data) {
            _this.loading.dismissAll();
            console.log(data);
            _this.presentToast("Success.");
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__eyeme_eyeme__["a" /* EyemeListPage */], {
                filename: "",
                curname: "",
                corpath: ""
            });
        }, function (err) {
            _this.loading.dismissAll();
            console.log(err);
        });
    };
    videoPlayPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    videoPlayPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        console.log('ionViewDidEnter VideoPage');
        this.storage.get('id_user').then(function (val) {
            _this.iduser = val;
            console.log(_this.iduser);
        }, function (error) { return console.error('Error storing LoginData', error); });
    };
    return videoPlayPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Navbar */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Navbar */])
], videoPlayPage.prototype, "navBar", void 0);
videoPlayPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-videoplay',template:/*ion-inline-start:"D:\xampp\htdocs\eyeside3\src\pages\video\video.html"*/'<ion-header>\n\n<ion-navbar color="primary">\n\n    <ion-title>\n\n    Video Playback\n\n    </ion-title>\n\n</ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <button ion-button (click)="playVideo()">Play Video</button>\n\n    <button ion-button (click)="stopPlayingVideo()">Stop playing Video</button>\n\n	<ion-list>\n\n\n\n   <ion-item>\n\n     <ion-label>Caption</ion-label>\n\n     <ion-input type="text" [(ngModel)]="caption"></ion-input>\n\n   </ion-item>\n\n   \n\n   <ion-item>\n\n     <ion-label>Publish</ion-label>\n\n     <ion-checkbox [(ngModel)]="checkboxpub" (ionChange)="updateCheckboxpub()"></ion-checkbox>\n\n   </ion-item>\n\n\n\n </ion-list>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <ion-toolbar color="primary">\n\n    <ion-buttons>\n\n      <button ion-button icon-left (click)="uploadVideo()" [disabled]="lastVideo === null">\n\n        <ion-icon name="cloud-upload"></ion-icon>Upload\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"D:\xampp\htdocs\eyeside3\src\pages\video\video.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_transfer__["a" /* Transfer */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_path__["a" /* FilePath */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_video_player__["a" /* VideoPlayer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
], videoPlayPage);

//# sourceMappingURL=video.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_video_player__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_member_area_member_area__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_list_list__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_eyeme_eyeme__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_video_video__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_comment_detail_comment_detail__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_file__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_transfer__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_file_path__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_camera__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_media_capture__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_storage__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_video_video__["a" /* videoPlayPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_eyeme_eyeme__["a" /* EyemeListPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_comment_detail_comment_detail__["a" /* CommentDetailPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_member_area_member_area__["a" /* MemberAreaPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/member-area/member-area.module#MemberAreaPageModule', name: 'MemberAreaPage', segment: 'member-area', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/comment-detail/comment-detail.module#CommentDetailPageModule', name: 'CommentDetailPage', segment: 'comment-detail', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_20__ionic_storage__["a" /* IonicStorageModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_video_video__["a" /* videoPlayPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_eyeme_eyeme__["a" /* EyemeListPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_comment_detail_comment_detail__["a" /* CommentDetailPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_member_area_member_area__["a" /* MemberAreaPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_transfer__["a" /* Transfer */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_19__ionic_native_media_capture__["a" /* MediaCapture */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_file_path__["a" /* FilePath */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_video_player__["a" /* VideoPlayer */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\xampp\htdocs\eyeside3\src\app\app.html"*/'\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"D:\xampp\htdocs\eyeside3\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_list__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__video_video__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__eyeme_eyeme__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__member_area_member_area__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_transfer__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_file_path__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_camera__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_media_capture__ = __webpack_require__(166);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













// import { MediaCapture } from '@ionic-native/media-capture';


var HomePage = (function () {
    function HomePage(modalCtrl, navCtrl, camera, transfer, file, filePath, actionSheetCtrl, toastCtrl, platform, loadingCtrl, storage, MediaCapture, http) {
        var _this = this;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.camera = camera;
        this.transfer = transfer;
        this.file = file;
        this.filePath = filePath;
        this.actionSheetCtrl = actionSheetCtrl;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.MediaCapture = MediaCapture;
        this.http = http;
        this.aboutPage = __WEBPACK_IMPORTED_MODULE_6__eyeme_eyeme__["a" /* EyemeListPage */];
        this.lastImage = null;
        this.username = null;
        this.usernameview = null;
        this.useremailview = null;
        this.useridview = null;
        this.picview = null;
        this.password = null;
        this.storage.get('name_user').then(function (val) {
            _this.usernameview = val;
        }, function (error) { return console.error('Error storing LoginData', error); });
        this.storage.get('email_user').then(function (val) {
            _this.useremailview = val;
        }, function (error) { return console.error('Error storing LoginData', error); });
        console.log(this.usernameview);
        console.log(this.useremailview);
    }
    HomePage.prototype.pushPage = function () {
        // push another page on to the navigation stack
        // causing the nav controller to transition to the new page
        // optional data can also be passed to the pushed page.
        this.navCtrl.push('./pages/list');
    };
    HomePage.prototype.datarecording = function (data, name) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__video_video__["a" /* videoPlayPage */], {
            filepath: data,
            filename: name
        });
    };
    HomePage.prototype.startrecording = function () {
        var _this = this;
        // this.MediaCapture.captureVideo((videodata) => {console.log(videodata)});
        var options = { duration: 10 };
        this.MediaCapture.captureVideo(options).then(function (data) { return _this.datarecording(data[0].fullPath, data[0].name); }, function (err) { return console.error(err); });
        this.MediaCapture.captureVideo(options).then(function (data) { return _this.datarecording(data[0].fullPath, data[0].name); }, 
        // (data: MediaFile[]) => console.log(data),
        function (err) { return console.error(err); });
    };
    HomePage.prototype.presentActionSheet2 = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
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
                    handler: function () {
                        _this.startrecording();
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    HomePage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Select Image Source',
            buttons: [
                {
                    text: 'Load from Library',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: 'Use Camera',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.CAMERA);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    HomePage.prototype.takePicture = function (sourceType) {
        var _this = this;
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
        this.camera.getPicture(options).then(function (imagePath) {
            // Special handling for Android library
            if (_this.platform.is('android') && sourceType === _this.camera.PictureSourceType.PHOTOLIBRARY) {
                _this.filePath.resolveNativePath(imagePath)
                    .then(function (filePath) {
                    var correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    var currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                    _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__list_list__["a" /* ListPage */], {
                        filename: _this.createFileName(),
                        curname: currentName,
                        corpath: correctPath
                    });
                });
            }
            else {
                var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
                // this.navCtrl.push(ListPage);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__list_list__["a" /* ListPage */], {
                    filename: _this.createFileName(),
                    curname: currentName,
                    corpath: correctPath
                });
            }
        }, function (err) {
            _this.presentToast('Error while selecting image.');
        });
    };
    // Create a new name for the image
    HomePage.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + ".jpg";
        return newFileName;
    };
    // Copy the image to a local folder
    HomePage.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName) {
        var _this = this;
        // Storage.set('photostorage',newFileName);
        this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(function (success) {
            _this.lastImage = newFileName;
        }, function (error) {
            _this.presentToast('Error while storing file.');
        });
    };
    HomePage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    // Always get the accurate path to your apps folder
    HomePage.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            return cordova.file.dataDirectory + img;
        }
    };
    HomePage.prototype.uploadImage = function () {
        var _this = this;
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
            params: { 'fileName': filename }
        };
        var fileTransfer = this.transfer.create();
        this.loading = this.loadingCtrl.create({
            content: 'Uploading...',
        });
        this.loading.present();
        // Use the FileTransfer to upload the image
        fileTransfer.upload(targetPath, url, options).then(function (data) {
            _this.loading.dismissAll();
            _this.presentToast('Image succesful uploaded.');
        }, function (err) {
            _this.loading.dismissAll();
            _this.presentToast('Error while uploading file.');
        });
    };
    HomePage.prototype.uploadLogin = function () {
        var _this = this;
        var link = 'http://eyesoccer.id/login_mobile.php';
        var data = JSON.stringify({ username: this.username, password: this.password });
        this.http.post(link, data).map(function (res) { return res.json(); }).subscribe(function (data) {
            console.log(data[0]);
            _this.storage.set('email_user', data[0].email);
            _this.storage.set('id_user', data[0].id_member);
            _this.storage.set('name_user', data[0].fullname);
            _this.storage.set('pic_user', data[0].pic);
            _this.storage.set('title_user', data[0].title);
            _this.storage.set('description_user', data[0].description);
            _this.storage.set('address_user', data[0].address);
            _this.storage.set('klubfav_user', "");
            _this.storage.set('supporter_user', "");
            _this.storage.get('email_user').then(function (val) {
                _this.useremailview = val;
            }, function (error) { return console.error('Error storing LoginData', error); });
            _this.storage.get('name_user').then(function (val) {
                _this.usernameview = val;
            }, function (error) { return console.error('Error storing LoginData', error); });
            _this.storage.get('pic_user').then(function (val) {
                _this.picview = "http://eyesoccer.id/systems/img_storage/" + val;
            }, function (error) { return console.error('Error storing LoginData', error); });
        }, function (err) {
            console.log("Oops!");
            console.log(err);
        });
    };
    HomePage.prototype.memberPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__member_area_member_area__["a" /* MemberAreaPage */], {
            username: this.usernameview,
            email: this.useremailview
        });
    };
    HomePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        console.log('ionViewDidEnter HomePage');
        this.storage.get('name_user').then(function (val) {
            _this.usernameview = val;
        }, function (error) { return console.error('Error storing LoginData', error); });
        this.storage.get('pic_user').then(function (val) {
            _this.picview = "http://eyesoccer.id/systems/img_storage/" + val;
        }, function (error) { return console.error('Error storing LoginData', error); });
        this.storage.get('id_user').then(function (val) {
            _this.useridview = val;
        }, function (error) { return console.error('Error storing LoginData', error); });
    };
    HomePage.prototype.presentModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__login_login__["a" /* LoginPage */]);
        modal.present();
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"D:\xampp\htdocs\eyeside3\src\pages\home\home.html"*/'\n\n<ion-content padding>\n\n<link rel="stylesheet" type="text/css" href="assets/Eyesoccer_files/bootstrap.css">\n\n    <link rel="stylesheet" type="text/css" href="assets/Eyesoccer_files/font-awesome.css">\n\n\n\n	<link rel="icon" type="image/png" href="assets/Eyesoccer_files/tab_icon.png">\n\n\n\n	<link rel="stylesheet" type="text/css" href="assets/Eyesoccer_files/mycss.css">\n\n	<style>\n\n	.carousel-indicators li{\n\n		border-color:#7d7979;\n\n		z-index:4;\n\n	}\n\n	.carousel-indicators{\n\n		z-index:4;\n\n	}\n\n\n\n\n\n	</style>\n\n\n\n	<style>\n\n	.drop-shadow {\n\n			-webkit-box-shadow: 0 0 5px 0px rgba(0, 0, 0, .5);\n\n			box-shadow: 0 0 5px 0px rgba(0, 0, 0, .5);\n\n		}\n\n	.drop-shadow2 {\n\n			-webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n\n			box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n\n		}\n\n		.thumbnails {\n\n		text-align:center;\n\n	}\n\n	.thumbnail2{\n\n		overflow-x:hidden;\n\n	}\n\n\n\n\n\n	</style>\n\n	\n\n	<script src="assets/Eyesoccer_files/a_002" async="" type="text/javascript"></script>\n\n	<script async="" src="assets/Eyesoccer_files/596cf64cb69de60011989f08.js"></script>\n\n	<script type="text/javascript" async="" src="assets/Eyesoccer_files/js15_as.js"></script>\n\n	<style charset="utf-8" type="text/css" class="firebugResetStyles">/* See license.txt for terms of usage */\n\n\n\n	/** reset styling **/\n\n\n\n	.firebugResetStyles {\n\n\n\n		z-index: 2147483646 !important;\n\n\n\n		top: 0 !important;\n\n\n\n		left: 0 !important;\n\n\n\n		display: block !important;\n\n\n\n		border: 0 none !important;\n\n\n\n		margin: 0 !important;\n\n\n\n		padding: 0 !important;\n\n\n\n		outline: 0 !important;\n\n\n\n		min-width: 0 !important;\n\n\n\n		max-width: none !important;\n\n\n\n		min-height: 0 !important;\n\n\n\n		max-height: none !important;\n\n\n\n		position: fixed !important;\n\n\n\n		transform: rotate(0deg) !important;\n\n\n\n		transform-origin: 50% 50% !important;\n\n\n\n		border-radius: 0 !important;\n\n\n\n		box-shadow: none !important;\n\n\n\n		background: transparent none !important;\n\n\n\n		pointer-events: none !important;\n\n\n\n		white-space: normal !important;\n\n\n\n	}\n\n\n\n	style.firebugResetStyles {\n\n\n\n		display: none !important;\n\n\n\n	}\n\n\n\n\n\n\n\n	.firebugBlockBackgroundColor {\n\n\n\n		background-color: transparent !important;\n\n\n\n	}\n\n\n\n\n\n\n\n	.firebugResetStyles:before, .firebugResetStyles:after {\n\n\n\n		content: "" !important;\n\n\n\n	}\n\n\n\n	/**actual styling to be modified by firebug theme**/\n\n\n\n	.firebugCanvas {\n\n\n\n		display: none !important;\n\n\n\n	}\n\n\n\n\n\n\n\n	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */\n\n\n\n	.firebugLayoutBox {\n\n\n\n		width: auto !important;\n\n\n\n		position: static !important;\n\n\n\n	}\n\n\n\n\n\n\n\n	.firebugLayoutBoxOffset {\n\n\n\n		opacity: 0.8 !important;\n\n\n\n		position: fixed !important;\n\n\n\n	}\n\n\n\n\n\n\n\n	.firebugLayoutLine {\n\n\n\n		opacity: 0.4 !important;\n\n\n\n		background-color: #000000 !important;\n\n\n\n	}\n\n\n\n\n\n\n\n	.firebugLayoutLineLeft, .firebugLayoutLineRight {\n\n\n\n		width: 1px !important;\n\n\n\n		height: 100% !important;\n\n\n\n	}\n\n\n\n\n\n\n\n	.firebugLayoutLineTop, .firebugLayoutLineBottom {\n\n\n\n		width: 100% !important;\n\n\n\n		height: 1px !important;\n\n\n\n	}\n\n\n\n\n\n\n\n	.firebugLayoutLineTop {\n\n\n\n		margin-top: -1px !important;\n\n\n\n		border-top: 1px solid #999999 !important;\n\n\n\n	}\n\n\n\n\n\n\n\n	.firebugLayoutLineRight {\n\n\n\n		border-right: 1px solid #999999 !important;\n\n\n\n	}\n\n\n\n\n\n\n\n	.firebugLayoutLineBottom {\n\n\n\n		border-bottom: 1px solid #999999 !important;\n\n\n\n	}\n\n\n\n\n\n\n\n	.firebugLayoutLineLeft {\n\n\n\n		margin-left: -1px !important;\n\n\n\n		border-left: 1px solid #999999 !important;\n\n\n\n	}\n\n\n\n\n\n\n\n	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */\n\n\n\n	.firebugLayoutBoxParent {\n\n\n\n		border-top: 0 none !important;\n\n\n\n		border-right: 1px dashed #E00 !important;\n\n\n\n		border-bottom: 1px dashed #E00 !important;\n\n\n\n		border-left: 0 none !important;\n\n\n\n		position: fixed !important;\n\n\n\n		width: auto !important;\n\n\n\n	}\n\n\n\n\n\n\n\n	.firebugRuler{\n\n\n\n		position: absolute !important;\n\n\n\n	}\n\n\n\n\n\n\n\n	.firebugRulerH {\n\n\n\n		top: -15px !important;\n\n\n\n		left: 0 !important;\n\n\n\n		width: 100% !important;\n\n\n\n		height: 14px !important;\n\n\n\n		background: url("data:image/png,%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%13%88%00%00%00%0E%08%02%00%00%00L%25a%0A%00%00%00%04gAMA%00%00%D6%D8%D4OX2%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C9e%3C%00%00%04%F8IDATx%DA%EC%DD%D1n%E2%3A%00E%D1%80%F8%FF%EF%E2%AF2%95%D0D4%0E%C1%14%B0%8Fa-%E9%3E%CC%9C%87n%B9%81%A6W0%1C%A6i%9A%E7y%0As8%1CT%A9R%A5J%95*U%AAT%A9R%A5J%95*U%AAT%A9R%A5J%95*U%AAT%A9R%A5J%95*U%AAT%A9R%A5J%95*U%AAT%A9R%A5J%95*U%AAT%A9R%A5J%95*U%AATE9%FE%FCw%3E%9F%AF%2B%2F%BA%97%FDT%1D~K(%5C%9D%D5%EA%1B%5C%86%B5%A9%BDU%B5y%80%ED%AB*%03%FAV9%AB%E1%CEj%E7%82%EF%FB%18%BC%AEJ8%AB%FA\'%D2%BEU9%D7U%ECc0%E1%A2r%5DynwVi%CFW%7F%BB%17%7Dy%EACU%CD%0E%F0%FA%3BX%FEbV%FEM%9B%2B%AD%BE%AA%E5%95v%AB%AA%E3E5%DCu%15rV9%07%B5%7F%B5w%FCm%BA%BE%AA%FBY%3D%14%F0%EE%C7%60%0EU%AAT%A9R%A5J%95*U%AAT%A9R%A5J%95*U%AAT%A9R%A5J%95*U%AAT%A9R%A5J%95*U%AAT%A9R%A5JU%88%D3%F5%1F%AE%DF%3B%1B%F2%3E%DAUCNa%F92%D02%AC%7Dm%F9%3A%D4%F2%8B6%AE*%BF%5C%C2Ym~9g5%D0Y%95%17%7C%C8c%B0%7C%18%26%9CU%CD%13i%F7%AA%90%B3Z%7D%95%B4%C7%60%E6E%B5%BC%05%B4%FBY%95U%9E%DB%FD%1C%FC%E0%9F%83%7F%BE%17%7DkjMU%E3%03%AC%7CWj%DF%83%9An%BCG%AE%F1%95%96yQ%0Dq%5Dy%00%3Et%B5\'%FC6%5DS%95pV%95%01%81%FF\'%07%00%00%00%00%00%00%00%00%00%F8x%C7%F0%BE%9COp%5D%C9%7C%AD%E7%E6%EBV%FB%1E%E0(%07%E5%AC%C6%3A%ABi%9C%8F%C6%0E9%AB%C0\'%D2%8E%9F%F99%D0E%B5%99%14%F5%0D%CD%7F%24%C6%DEH%B8%E9rV%DFs%DB%D0%F7%00k%FE%1D%84%84%83J%B8%E3%BA%FB%EF%20%84%1C%D7%AD%B0%8E%D7U%C8Y%05%1E%D4t%EF%AD%95Q%BF8w%BF%E9%0A%BF%EB%03%00%00%00%00%00%00%00%00%00%B8vJ%8E%BB%F5%B1u%8Cx%80%E1o%5E%CA9%AB%CB%CB%8E%03%DF%1D%B7T%25%9C%D5(%EFJM8%AB%CC\'%D2%B2*%A4s%E7c6%FB%3E%FA%A2%1E%80~%0E%3E%DA%10x%5D%95Uig%15u%15%ED%7C%14%B6%87%A1%3B%FCo8%A8%D8o%D3%ADO%01%EDx%83%1A~%1B%9FpP%A3%DC%C6\'%9C%95gK%00%00%00%00%00%00%00%00%00%20%D9%C9%11%D0%C0%40%AF%3F%EE%EE%92%94%D6%16X%B5%BCMH%15%2F%BF%D4%A7%C87%F1%8E%F2%81%AE%AAvzr%DA2%ABV%17%7C%E63%83%E7I%DC%C6%0Bs%1B%EF6%1E%00%00%00%00%00%00%00%00%00%80cr%9CW%FF%7F%C6%01%0E%F1%CE%A5%84%B3%CA%BC%E0%CB%AA%84%CE%F9%BF)%EC%13%08WU%AE%AB%B1%AE%2BO%EC%8E%CBYe%FE%8CN%ABr%5Dy%60~%CFA%0D%F4%AE%D4%BE%C75%CA%EDVB%EA(%B7%F1%09g%E5%D9%12%00%00%00%00%00%00%00%00%00H%F6%EB%13S%E7y%5E%5E%FB%98%F0%22%D1%B2\'%A7%F0%92%B1%BC%24z3%AC%7Dm%60%D5%92%B4%7CEUO%5E%F0%AA*%3BU%B9%AE%3E%A0j%94%07%A0%C7%A0%AB%FD%B5%3F%A0%F7%03T%3Dy%D7%F7%D6%D4%C0%AAU%D2%E6%DFt%3F%A8%CC%AA%F2%86%B9%D7%F5%1F%18%E6%01%F8%CC%D5%9E%F0%F3z%88%AA%90%EF%20%00%00%00%00%00%00%00%00%00%C0%A6%D3%EA%CFi%AFb%2C%7BB%0A%2B%C3%1A%D7%06V%D5%07%A8r%5D%3D%D9%A6%CAu%F5%25%CF%A2%99%97zNX%60%95%AB%5DUZ%D5%FBR%03%AB%1C%D4k%9F%3F%BB%5C%FF%81a%AE%AB\'%7F%F3%EA%FE%F3z%94%AA%D8%DF%5B%01%00%00%00%00%00%00%00%00%00%8E%FB%F3%F2%B1%1B%8DWU%AAT%A9R%A5J%95*U%AAT%A9R%A5J%95*U%AAT%A9R%A5J%95*U%AAT%A9R%A5J%95*U%AAT%A9R%A5J%95*U%AAT%A9R%A5J%95*U%AAT%A9R%A5J%95*UiU%C7%BBe%E7%F3%B9%CB%AAJ%95*U%AAT%A9R%A5J%95*U%AAT%A9R%A5J%95*U%AAT%A9R%A5J%95*U%AAT%A9R%A5J%95*U%AAT%A9R%A5J%95*U%AAT%A9R%A5J%95*U%AAT%A9R%A5*%AAj%FD%C6%D4%5Eo%90%B5Z%ADV%AB%D5j%B5Z%ADV%AB%D5j%B5Z%ADV%AB%D5j%B5Z%ADV%AB%D5j%B5Z%ADV%AB%D5j%B5Z%ADV%AB%D5j%B5Z%ADV%AB%D5j%B5%86%AF%1B%9F%98%DA%EBm%BBV%AB%D5j%B5Z%ADV%AB%D5j%B5Z%ADV%AB%D5j%B5Z%ADV%AB%D5j%B5Z%ADV%AB%D5j%B5Z%ADV%AB%D5j%B5Z%ADV%AB%D5j%B5Z%AD%D6%E4%F58%01%00%00%00%00%00%00%00%00%00%00%00%00%00%40%85%7F%02%0C%008%C2%D0H%16j%8FX%00%00%00%00IEND%AEB%60%82") repeat-x !important;\n\n\n\n		border-top: 1px solid #BBBBBB !important;\n\n\n\n		border-right: 1px dashed #BBBBBB !important;\n\n\n\n		border-bottom: 1px solid #000000 !important;\n\n\n\n	}\n\n\n\n\n\n\n\n	.firebugRulerV {\n\n\n\n		top: 0 !important;\n\n\n\n		left: -15px !important;\n\n\n\n		width: 14px !important;\n\n\n\n		height: 100% !important;\n\n\n\n		background: url("data:image/png,%89PNG%0D%0A%1A%0A%00%00%00%0DIHDR%00%00%00%0E%00%00%13%88%08%02%00%00%00%0E%F5%CB%10%00%00%00%04gAMA%00%00%D6%D8%D4OX2%00%00%00%19tEXtSoftware%00Adobe%20ImageReadyq%C9e%3C%00%00%06~IDATx%DA%EC%DD%D1v%A20%14%40Qt%F1%FF%FF%E4%97%D9%07%3BT%19%92%DC%40(%90%EEy%9A5%CB%B6%E8%F6%9Ac%A4%CC0%84%FF%DC%9E%CF%E7%E3%F1%88%DE4%F8%5D%C7%9F%2F%BA%DD%5E%7FI%7D%F18%DDn%BA%C5%FB%DF%97%BFk%F2%10%FF%FD%B4%F2M%A7%FB%FD%FD%B3%22%07p%8F%3F%AE%E3%F4S%8A%8F%40%EEq%9D%BE8D%F0%0EY%A1Uq%B7%EA%1F%81%88V%E8X%3F%B4%CEy%B7h%D1%A2E%EBohU%FC%D9%AF2fO%8BBeD%BE%F7X%0C%97%A4%D6b7%2Ck%A5%12%E3%9B%60v%B7r%C7%1AI%8C%BD%2B%23r%00c0%B2v%9B%AD%CA%26%0C%1Ek%05A%FD%93%D0%2B%A1u%8B%16-%95q%5Ce%DCSO%8E%E4M%23%8B%F7%C2%FE%40%BB%BD%8C%FC%8A%B5V%EBu%40%F9%3B%A72%FA%AE%8C%D4%01%CC%B5%DA%13%9CB%AB%E2I%18%24%B0n%A9%0CZ*Ce%9C%A22%8E%D8NJ%1E%EB%FF%8F%AE%CAP%19*%C3%BAEKe%AC%D1%AAX%8C*%DEH%8F%C5W%A1e%AD%D4%B7%5C%5B%19%C5%DB%0D%EF%9F%19%1D%7B%5E%86%BD%0C%95%A12%AC%5B*%83%96%CAP%19%F62T%86%CAP%19*%83%96%CA%B8Xe%BC%FE)T%19%A1%17xg%7F%DA%CBP%19*%C3%BA%A52T%86%CAP%19%F62T%86%CA%B0n%A9%0CZ%1DV%C6%3D%F3%FCH%DE%B4%B8~%7F%5CZc%F1%D6%1F%AF%84%F9%0F6%E6%EBVt9%0E~%BEr%AF%23%B0%97%A12T%86%CAP%19%B4T%86%CA%B8Re%D8%CBP%19*%C3%BA%A52huX%19%AE%CA%E5%BC%0C%7B%19*CeX%B7h%A9%0C%95%E1%BC%0C%7B%19*CeX%B7T%06%AD%CB%5E%95%2B%BF.%8F%C5%97%D5%E4%7B%EE%82%D6%FB%CF-%9C%FD%B9%CF%3By%7B%19%F62T%86%CA%B0n%D1R%19*%A3%D3%CA%B0%97%A12T%86uKe%D0%EA%B02*%3F1%99%5DB%2B%A4%B5%F8%3A%7C%BA%2B%8Co%7D%5C%EDe%A8%0C%95a%DDR%19%B4T%C66%82fA%B2%ED%DA%9FC%FC%17GZ%06%C9%E1%B3%E5%2C%1A%9FoiB%EB%96%CA%A0%D5qe4%7B%7D%FD%85%F7%5B%ED_%E0s%07%F0k%951%ECr%0D%B5C%D7-g%D1%A8%0C%EB%96%CA%A0%A52T%C6)*%C3%5E%86%CAP%19%D6-%95A%EB*%95q%F8%BB%E3%F9%AB%F6%E21%ACZ%B7%22%B7%9B%3F%02%85%CB%A2%5B%B7%BA%5E%B7%9C%97%E1%BC%0C%EB%16-%95%A12z%AC%0C%BFc%A22T%86uKe%D0%EA%B02V%DD%AD%8A%2B%8CWhe%5E%AF%CF%F5%3B%26%CE%CBh%5C%19%CE%CB%B0%F3%A4%095%A1%CAP%19*Ce%A8%0C%3BO*Ce%A8%0C%95%A12%3A%AD%8C%0A%82%7B%F0v%1F%2FD%A9%5B%9F%EE%EA%26%AF%03%CA%DF9%7B%19*Ce%A8%0C%95%A12T%86%CA%B8Ze%D8%CBP%19*Ce%A8%0C%95%D1ae%EC%F7%89I%E1%B4%D7M%D7P%8BjU%5C%BB%3E%F2%20%D8%CBP%19*Ce%A8%0C%95%A12T%C6%D5*%C3%5E%86%CAP%19*Ce%B4O%07%7B%F0W%7Bw%1C%7C%1A%8C%B3%3B%D1%EE%AA%5C%D6-%EBV%83%80%5E%D0%CA%10%5CU%2BD%E07YU%86%CAP%19*%E3%9A%95%91%D9%A0%C8%AD%5B%EDv%9E%82%FFKOee%E4%8FUe%A8%0C%95%A12T%C6%1F%A9%8C%C8%3D%5B%A5%15%FD%14%22r%E7B%9F%17l%F8%BF%ED%EAf%2B%7F%CF%ECe%D8%CBP%19*Ce%A8%0C%95%E1%93~%7B%19%F62T%86%CAP%19*Ce%A8%0C%E7%13%DA%CBP%19*Ce%A8%0CZf%8B%16-Z%B4h%D1R%19f%8B%16-Z%B4h%D1R%19%B4%CC%16-Z%B4h%D1R%19%B4%CC%16-Z%B4h%D1%A2%A52%CC%16-Z%B4h%D1%A2%A52h%99-Z%B4h%D1%A2%A52h%99-Z%B4h%D1%A2EKe%98-Z%B4h%D1%A2EKe%D02%5B%B4h%D1%A2EKe%D02%5B%B4h%D1%A2E%8B%96%CA0%5B%B4h%D1%A2E%8B%96%CA%A0e%B6h%D1%A2E%8B%96%CA%A0e%B6h%D1%A2E%8B%16-%95a%B6h%D1%A2E%8B%16-%95A%CBl%D1%A2E%8B%16-%95A%CBl%D1%A2E%8B%16-Z*%C3l%D1%A2E%8B%16-Z*%83%96%D9%A2E%8B%16-Z*%83%96%D9%A2E%8B%16-Z%B4T%86%D9%A2E%8B%16-Z%B4T%06-%B3E%8B%16-Z%B4T%06-%B3E%8B%16-Z%B4h%A9%0C%B3E%8B%16-Z%B4h%A9%0CZf%8B%16-Z%B4h%A9%0CZf%8B%16-Z%B4h%D1R%19f%8B%16-Z%B4h%D1R%19%B4%CC%16-Z%B4h%D1R%19%B4%CC%16-Z%B4h%D1%A2%A52%CC%16-Z%B4h%D1%A2%A52h%99-Z%B4h%D1%A2%A52h%99-Z%B4h%D1%A2EKe%98-Z%B4h%D1%A2EKe%D02%5B%B4h%D1%A2EKe%D02%5B%B4h%D1%A2E%8B%96%CA0%5B%B4h%D1%A2E%8B%96%CA%A0e%B6h%D1%A2E%8B%96%CA%A0e%B6h%D1%A2E%8B%16-%95a%B6h%D1%A2E%8B%16-%95A%CBl%D1%A2E%8B%16-%95A%CBl%D1%A2E%8B%16-Z*%C3l%D1%A2E%8B%16-Z*%83%96%D9%A2E%8B%16-Z*%83%96%D9%A2E%8B%16-Z%B4T%86%D9%A2E%8B%16-Z%B4T%06-%B3E%8B%16-Z%B4T%06-%B3E%8B%16-Z%B4h%A9%0C%B3E%8B%16-Z%B4h%A9%0CZf%8B%16-Z%B4h%A9%0CZf%8B%16-Z%B4h%D1R%19f%8B%16-Z%B4h%D1R%19%B4%CC%16-Z%B4h%D1R%19%B4%CC%16-Z%B4h%D1%A2%A52%CC%16-Z%B4h%D1%A2%A52h%99-Z%B4h%D1%A2%A52h%99-Z%B4h%D1%A2EKe%98-Z%B4h%D1%A2EKe%D02%5B%B4h%D1%A2EKe%D02%5B%B4h%D1%A2E%8B%96%CA0%5B%B4h%D1%A2E%8B%96%CA%A0e%B6h%D1%A2E%8B%96%CA%A0e%B6h%D1%A2E%8B%16-%95a%B6h%D1%A2E%8B%16-%95A%CBl%D1%A2E%8B%16-%95A%CBl%D1%A2E%8B%16-Z*%C3l%D1%A2E%8B%16-Z*%83%96%D9%A2E%8B%16-Z*%83%96%D9%A2E%8B%16-Z%B4T%86%D9%A2E%8B%16-Z%B4T%06-%B3E%8B%16-Z%B4%AE%A4%F5%25%C0%00%DE%BF%5C\'%0F%DA%B8q%00%00%00%00IEND%AEB%60%82") repeat-y !important;\n\n\n\n		border-left: 1px solid #BBBBBB !important;\n\n\n\n		border-right: 1px solid #000000 !important;\n\n\n\n		border-bottom: 1px dashed #BBBBBB !important;\n\n\n\n	}\n\n\n\n\n\n\n\n	.overflowRulerX > .firebugRulerV {\n\n\n\n		left: 0 !important;\n\n\n\n	}\n\n\n\n\n\n\n\n	.overflowRulerY > .firebugRulerH {\n\n\n\n		top: 0 !important;\n\n\n\n	}\n\n\n\n\n\n\n\n	/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */\n\n\n\n	.fbProxyElement {\n\n\n\n		position: fixed !important;\n\n\n\n		pointer-events: auto !important;\n\n\n\n	}\n\n	</style>\n\n	<!-- body start -->\n\n	<div id="mdl1" class="modal fade" role="dialog" style="display: none;">\n\n\n\n  <div class="modal-dialog">\n\n\n\n    <div class="modal-content" id="set2">\n\n\n\n      <div class="modal-body">\n\n\n\n        <div id="set3">\n\n\n\n		\n\n    <div class="embed-responsive embed-responsive-16by9" style="height:auto !important">\n\n	<img src="assets/Eyesoccer_files/17gustus17.jpg" width="100%">\n\n  \n\n  </div>\n\n\n\n		<div id="topright" data-dismiss="modal"><i class="fa fa-times-circle" style="color:#F27A36;"></i></div>\n\n\n\n		</div>\n\n\n\n      </div>\n\n\n\n    </div>\n\n\n\n  </div>\n\n\n\n</div>\n\n\n\n\n\n\n\n<div id="gotop">\n\n\n\n</div>\n\n<nav class="navbar navbar-fixed-top">\n\n<a href="https://eyesoccer.id/index"><img src="assets/Eyesoccer_files/h1.png" class="img img-responsive hidden-xs hidden-sm"></a>\n\n<div class="hidden-md hidden-lg" id="header_mobile" style="background:url(\'https://eyesoccer.id/img/h14.png\')no-repeat center center;background-size:cover;padding:7px;">\n\n<div class="container-fluid">\n\n<div class="row">\n\n<!--<div class="col-xs-4 col-sm-6 text-left"><div class="row" id="set1"><a onclick="openNav1()" id="a1"><i class="fa fa-futbol-o fa-2x"></i></a></div></div>\n\n<div class="col-xs-4 col-sm-6 text-center"><a href="index" ><img src="https://eyesoccer.id/img/mobile_header.png" class="img img-responsive thumbnail3" id="img2"></a></div>\n\n<div class="col-xs-4 col-sm-6 text-right"><div class="row" id="set1"><a onclick="openNav2()" id="a1"><i class="fa fa-file-text-o fa-2x"></i></a></div></div>-->\n\n<!--<div class="col-xs-6 col-sm-6 text-left"><div class="row" style="padding-top:5px"><a onclick="openNav1()"><img src="https://eyesoccer.id/img/lg3.png" class="img img-responsive" style="width:40px;height:40px;padding-top:0px;"></a></div></div>-->\n\n<div class="col-xs-6 col-sm-6 text-right"><a href="https://eyesoccer.id/index"><img src="assets/Eyesoccer_files/m1.png" class="img img-responsive" id="img2"></a></div>\n\n	\n\n<!--<div class="col-xs-6 col-sm-6 pull-right"><a data-toggle="modal" data-target="#mlogin" class="btn btn-warning btn-sm btn-block clickable">MASUK</a></div>-->\n\n<div class="col-xs-6 col-sm-6 pull-right" style="line-height: 38px;text-align: right;">\n\n<!--<a data-toggle="modal" data-target="#mlogin" class="clickable" style="color:white;font-weight:bold" [hidden]="usernameview !== null">DAFTAR</a>-->\n\n<a (click)="presentModal()" class="clickable" style="color:white;font-weight:bold;position: absolute;bottom: 0%;right: 20px;" [hidden]="usernameview !== null">\n\n		DAFTAR\n\n</a>\n\n<a (click)="memberPage()" class="clickable" style="color:black;font-weight:bold;position: absolute;top: 0;right: 10px;" [hidden]="usernameview === null">\n\n<!--<ion-item style="background-color: transparent;">\n\n<ion-avatar item-start>\n\n	<img [src]="picview" style="border: 1px solid black;"/>\n\n</ion-avatar>-->\n\n{{usernameview}}\n\n<!--</ion-item>-->\n\n</a>\n\n</div>\n\n	</div>\n\n</div>\n\n</div>\n\n<div id="myNav1" class="overlay" style="z-index:6 !important">\n\n  <a href="javascript:void(0)" class="closebtn" onclick="closeNav1()">�</a>\n\n \n\n  <div class="overlay-content">\n\n  \n\n<a href="https://eyesoccer.id/list_pemain" onclick="closeNav1()" class="btn col-xs-12 col-md-6 " id="a1"><div id="back5" class="text-left"><small>Pemain</small></div></a> \n\n<!--<a href="" onclick="closeNav1()" class="btn col-xs-12 col-md-6 " id="a1" class="btn "><div id="back2" class="text-left"><small>Wasit</small></div></a>-->\n\n    <a href="https://eyesoccer.id/list_klub" onclick="closeNav1()" class="btn col-xs-12 col-md-6 " id="a1"><div id="back3" class="text-left"><small>Klub</small></div></a>\n\n    <!--<a href="" onclick="closeNav1()" class="btn col-xs-12 col-md-6 " id="a1" class="btn"><div id="back4" class="text-left"><small>Suporter</small></div></a>-->\n\n    <a href="https://eyesoccer.id/competition_types" class="btn col-xs-12 col-md-6 " onclick="closeNav1()" id="a1"><div id="back2" class="text-left"><small>Pendaftaran</small></div></a>\n\n\n\n   \n\n  </div>\n\n</div>\n\n\n\n</nav>\n\n<style>\n\n.btn-circle {\n\n    width: 30px;\n\n    height: 30px;\n\n    padding: 6px 0px;\n\n    border-radius: 15px;\n\n    text-align: center;\n\n    font-size: 12px;\n\n    line-height: 1.42857;\n\n}\n\n.clickable{\n\n	cursor:pointer;\n\n}\n\n.img-circle{\n\n	width:30px !important;\n\n	height:30px !important;\n\n}\n\n</style>\n\n<link rel="stylesheet" type="text/css" href="assets/Eyesoccer_files/circle-menu.css"><!-- update rizki -->\n\n<link rel="stylesheet" type="text/css" href="assets/Eyesoccer_files/jquery.css"><!-- update rizki -->\n\n<link rel="stylesheet" type="text/css" href="assets/Eyesoccer_files/main.css"><!-- update rizki -->\n\n\n\n<div id="mdl2" class="modal fade" role="dialog">\n\n  <div class="modal-dialog">\n\n    <div class="modal-content">\n\n      <div class="modal-body">\n\n	 \n\n \n\n      <h1 class="text-center" id="t1">SIGN IN</h1>\n\n      <div class="form-group"><input name="username" class="form-control" id="ipt1" type="text"></div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</div>\n\n\n\n\n\n<div id="mlogin" class="modal fade" role="dialog" [hidden]="usernameview !== null">\n\n<div class="modal-dialog">\n\n    <div class="modal-content" width="80%">\n\n    <div class="modal-header text-center"><h1 id="t3">MASUK</h1></div>\n\n      <div class="modal-body">\n\n    <ul class="nav nav-tabs">\n\n		<li class="active"><a data-toggle="tab" href="#tab-login" id="a4">Masuk</a></li>\n\n		<li class=""><a data-toggle="tab" href="#tab-daftar" id="a4">Daftar</a></li>\n\n		</ul>\n\n		<div class="tab-content">\n\n		<div id="tab-login" class="tab-pane fade in active">\n\n		<br>\n\n		\n\n		 <form method="post">\n\n      <div class="form-group" id="t1"><input name="username" class="form-control" id="ipt1" placeholder="Username" required="" type="text" [(ngModel)]="username"></div>\n\n      <div class="form-group" id="t1"><input name="password" class="form-control" id="ipt1" placeholder="Password" required="" type="password" [(ngModel)]="password"></div>\n\n      <div class="form-group" id="t1">\n\n	  <button name="login" class="btn btn-warning col-lg-5" (click)="uploadLogin()" type="button">Login</button>\n\n	  <br></div>\n\n     \n\n      </form>\n\n  		</div>\n\n		<div id="tab-daftar" class="tab-pane fade in ">\n\n		\n\n		<br>\n\n		 <form class="form-horizontal bv-form" action="register_post.php" method="post" id="reg_form" novalidate="novalidate">\n\n    <fieldset>\n\n      \n\n      <!-- Form Name -->\n\n      <legend> Personal Information </legend>\n\n    \n\n<input id="redirect-url" value="https://eyesoccer.id/member-area" type="hidden">\n\n      <!-- Text input-->\n\n      \n\n      <div class="form-group">\n\n        <label class="col-md-4 control-label">Nama Lengkap</label>\n\n        <div class="col-md-6  inputGroupContainer">\n\n          <div class="input-group"> <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>\n\n            <input name="name" placeholder="First Name" class="form-control" type="text">\n\n          </div>\n\n        </div>\n\n      </div>\n\n      \n\n	       <!-- Text input-->\n\n      <div class="form-group has-feedback">\n\n        <label class="col-md-4 control-label">E-Mail *</label>\n\n        <div class="col-md-6  inputGroupContainer">\n\n          <div class="input-group"> <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>\n\n            <input name="email" placeholder="E-Mail Address" class="form-control email" data-bv-field="email" type="emailAddress"><i style="display: none;" class="form-control-feedback" data-bv-icon-for="email"></i>\n\n          </div>\n\n        <small style="display: none;" data-bv-validator="notEmpty" data-bv-validator-for="email" class="help-block">Mohon isi E-mail anda sebagai Username anda </small><small style="display: none;" data-bv-validator="emailAddress" data-bv-validator-for="email" class="help-block">Mohon isi valid E-mail</small></div>\n\n      </div>\n\n      \n\n    \n\n        <div class="form-group has-feedback">\n\n            <label for="password" class="col-md-4 control-label">\n\n                    Password *\n\n                </label>\n\n                <div class="col-md-6  inputGroupContainer">\n\n                <div class="input-group"> <span class="input-group-addon"><i class="glyphicon glyphicon-home"></i></span>\n\n            <input class="form-control" id="userPw" placeholder="password" value="asdfghjkl" name="password" data-minlength="5" data-error="some error" required="" data-bv-field="password" type="password"><i style="display: none;" class="form-control-feedback" data-bv-icon-for="password"></i>\n\n                <span class="glyphicon form-control-feedback"></span>\n\n                <span class="help-block with-errors"></span>\n\n                </div>\n\n             <small style="display: none;" data-bv-validator="notEmpty" data-bv-validator-for="password" class="help-block">Mohon isi E-mail anda sebagai Username anda </small><small style="display: none;" data-bv-validator="identical" data-bv-validator-for="password" class="help-block">Mohon konfirmasi Password anda di bawah ini</small></div>\n\n        </div>\n\n     \n\n        <div class="form-group has-feedback">\n\n            <label for="confirmPassword" class="col-md-4 control-label">\n\n                   Confirm Password *\n\n                </label>\n\n                 <div class="col-md-6  inputGroupContainer">\n\n                <div class="input-group"> <span class="input-group-addon"><i class="glyphicon glyphicon-home"></i></span>\n\n            <input class="form-control {$borderColor}" id="userPw2" placeholder="Confirm password" name="confirmPassword" data-match="#confirmPassword" data-minlength="5" data-match-error="some error 2" required="" data-bv-field="confirmPassword" type="password"><i style="display: none;" class="form-control-feedback" data-bv-icon-for="confirmPassword"></i>\n\n                <span class="glyphicon form-control-feedback"></span>\n\n                <span class="help-block with-errors"></span>\n\n      			 </div>\n\n             <small style="display: none;" data-bv-validator="identical" data-bv-validator-for="confirmPassword" class="help-block">Konfirmasi Password tidak sama</small></div>\n\n        </div>\n\n     \n\n  \n\n      <!-- Button -->\n\n      <div class="form-group">\n\n        <label class="col-md-4 control-label"></label>\n\n        <div class="col-md-4">\n\n          <button type="submit" class="btn btn-warning" id="submit-button" disabled="disabled">Daftar <span class="glyphicon glyphicon-send"></span></button>\n\n        </div>\n\n      </div>\n\n    </fieldset>\n\n  <input value="" type="hidden"></form>\n\n \n\n		</div>\n\n		</div>\n\n	\n\n  <hr>\n\n  \n\n     </div>\n\n     </div>\n\n  </div>\n\n</div>\n\n\n\n<div id="m1" class="modal fade" role="dialog">\n\n   <div class="modal-dialog" id="set7">\n\n    <div class="modal-content" id="set8">\n\n    <div class="modal-header text-center"><h1 id="t3">MASUK</h1></div>\n\n      <div class="modal-body">\n\n     \n\n		<form method="post">\n\n      <div class="form-group" id="t1"><input name="username" class="form-control" id="ipt1" placeholder="Username" required="" type="text"></div>\n\n      <div class="form-group" id="t1"><input name="password" class="form-control" id="ipt1" placeholder="Password" required="" type="password"></div>\n\n      <div class="form-group" id="t1"><input name="opt1_official" value="LOGIN" class="btn btn-block" id="btn1" type="submit"></div><br><br>\n\n      \n\n      </form>\n\n       		</div>\n\n		\n\n	\n\n      </div>\n\n    </div>\n\n  </div>\n\n\n\n\n\n<div id="player_login" class="modal fade" role="dialog">\n\n  <div class="modal-dialog" id="set7">\n\n    <div class="modal-content" id="set8">\n\n    <div class="modal-header text-center"><h1 id="t3">MASUK</h1></div>\n\n      <div class="modal-body">\n\n      <form method="post">\n\n      <div class="form-group" id="t1"><input name="username" class="form-control" id="ipt1" placeholder="Username" required="" type="text"></div>\n\n      <div class="form-group" id="t1"><input name="password" class="form-control" id="ipt1" placeholder="Password" required="" type="password"></div>\n\n      <div class="form-group" id="t1"><input name="opt1_player" value="LOGIN" class="btn btn-block" id="btn1" type="submit"></div><br><br>\n\n            </form>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</div>\n\n\n\n<div id="official_login" class="modal fade" role="dialog">\n\n  <div class="modal-dialog" id="set7">\n\n    <div class="modal-content" id="set8">\n\n    <div class="modal-header text-center"><h1 id="t3">MASUK</h1></div>\n\n      <div class="modal-body">\n\n      <form method="post">\n\n      <div class="form-group" id="t1"><input name="username" class="form-control" id="ipt1" placeholder="Username" required="" type="text"></div>\n\n      <div class="form-group" id="t1"><input name="password" class="form-control" id="ipt1" placeholder="Password" required="" type="password"></div>\n\n      <div class="form-group" id="t1"><input name="opt1_official" value="LOGIN" class="btn btn-block" id="btn1" type="submit"></div><br><br>\n\n            </form>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</div>\n\n\n\n\n\n<div class="container-fluid desktop-view" style="display:none"><!--update rizki-->\n\n\n\n<div class="row">\n\n\n\n<div class="col-lg-1 col-md-1 hidden-xs hidden-sm" id="back1"><br><br>\n\n\n\n<div class="bg-menu img-hover">\n\n	<a data-toggle="modal" id="mloginbtn" data-target="#mlogin" class="btn btn-warning btn-sm btn-block">MASUK</a><br>\n\n<a href="https://eyesoccer.id/list_pemain" title="pemain"><img src="" class="img img-responsive" id="set4"></a></div>\n\n<!--<div class="bg-menu img-hover"><a href="#" title="wasit"><img src="https://eyesoccer.id/img/a22.png" class="img img-responsive" id="set4"></a></div>-->\n\n<div class="bg-menu img-hover"><a href="https://eyesoccer.id/list_klub" title="klub"><img src="" class="img img-responsive" id="set4"></a></div>\n\n<!--<div class="bg-menu img-hover"><a href="#" title="suporter"><img src="https://eyesoccer.id/img/a44.png" class="img img-responsive" id="set4"></a></div>-->\n\n<div class="bg-menu img-hover"><a href="https://eyesoccer.id/beta/eyeprofile/" title="pendaftaran"><img src="" class="img img-responsive" id="set4"></a></div>\n\n<!--<div class="bg-menu img-hover"><a data-toggle="modal" data-target="#mlogin" class="btn" id="btn1">MASUK</a></div>-->\n\n\n\n<style>\n\n.img-hover img {\n\n    -webkit-transition: all .3s ease; /* Safari and Chrome */\n\n  	-moz-transition: all .3s ease; /* Firefox */\n\n  	-o-transition: all .3s ease; /* IE 9 */\n\n  	-ms-transition: all .3s ease; /* Opera */\n\n  	transition: all .3s ease;\n\n}\n\n.img-hover img:hover {\n\n    -webkit-backface-visibility: hidden;\n\n    backface-visibility: hidden;\n\n    -webkit-transform:translateZ(0) scale(1.20); /* Safari and Chrome */\n\n    -moz-transform:scale(1.20); /* Firefox */\n\n    -ms-transform:scale(1.20); /* IE 9 */\n\n    -o-transform:translatZ(0) scale(1.20); /* Opera */\n\n    transform:translatZ(0) scale(1.20);\n\n}\n\n</style>\n\n<br><br>\n\n\n\n</div>\n\n\n\n<div class="col-lg-11 col-md-11"><br>\n\n\n\n\n\n\n\n<div class="hidden-xs hidden-sm">\n\n\n\n<h1 id="t2"><i class="fa fa-newspaper-o"></i> EYENEWS <a href="https://eyesoccer.id/eyenews" id="a2">see all</a></h1>	\n\n\n\n<div class="col-lg-12 col-md-12">\n\n\n\n<div class="row replace_news">\n\n\n\n\n\n\n\n<div class="col-lg-3 col-md-3 replace-1">\n\n<div class="thumbnail drop-shadow2" style="height: 0px;">\n\n      <a href="https://eyesoccer.id/eyenews_detail?eyenews_id=1117">\n\n        <img src="" alt="Lights" style="width:100%;">\n\n        <div class="caption">\n\n          <p>Monaco Siap Lepas Mbappe ke PSG\n\n	\n\n	</p>\n\n        </div>\n\n      </a>\n\n    </div>\n\n \n\n</div>\n\n\n\n\n\n\n\n<div class="col-lg-3 col-md-3 replace-2">\n\n<div class="thumbnail drop-shadow2" style="height: 0px;">\n\n      <a href="https://eyesoccer.id/eyenews_detail?eyenews_id=1114">\n\n        <img src="" alt="Lights" style="width:100%;">\n\n        <div class="caption">\n\n          <p>Cedera Hamsa Lestaluhu Sembuh Lebih Cepat\n\n	\n\n	</p>\n\n        </div>\n\n      </a>\n\n    </div>\n\n \n\n</div>\n\n\n\n\n\n\n\n<div class="col-lg-3 col-md-3 replace-3">\n\n<div class="thumbnail drop-shadow2" style="height: 0px;">\n\n      <a href="https://eyesoccer.id/eyenews_detail?eyenews_id=1112">\n\n        <img src="" alt="Lights" style="width:100%;">\n\n        <div class="caption">\n\n          <p>Gabung di Grup E,  Klopp Siap Balas Dendam ke Sevilla\n\n	\n\n	</p>\n\n        </div>\n\n      </a>\n\n    </div>\n\n \n\n</div>\n\n\n\n\n\n\n\n<div class="col-lg-3 col-md-3 replace-4">\n\n<div class="thumbnail drop-shadow2" style="height: 0px;">\n\n      <a href="https://eyesoccer.id/eyenews_detail?eyenews_id=1111">\n\n        <img src="" alt="Lights" style="width:100%;">\n\n        <div class="caption">\n\n          <p>Barcelona Labeli Dembele Seharga 120 Juta Euro\n\n	\n\n	</p>\n\n        </div>\n\n      </a>\n\n    </div>\n\n \n\n</div>\n\n\n\n\n\n</div><br>\n\n\n\n</div>\n\n\n\n</div>\n\n\n\n<div class="hidden-lg hidden-md">\n\n\n\n<h1 id="t2"><i class="fa fa-newspaper-o"></i> EYENEWS<a href="https://eyesoccer.id/eyenews.php" id="a2">see all</a></h1>\n\n\n\n<div id="myCarousel1" class="carousel slide" data-ride="carousel">\n\n\n\n  \n\n<ol class="carousel-indicators">\n\n    \n\n    \n\n  <li data-target="#myCarousel1" data-slide-to="0" class="active"></li><li data-target="#myCarousel1" data-slide-to="1" class=""></li><li data-target="#myCarousel1" data-slide-to="2" class=""></li><li data-target="#myCarousel1" data-slide-to="3" class=""></li></ol><div class="carousel-inner" role="listbox">\n\n\n\n<div class="item active">\n\n	<div class="thumbnail drop-shadow2" style="">\n\n      <a href="https://eyesoccer.id/eyenews_detail?eyenews_id=1117">\n\n        <img src="" alt="Lights" style="width:100%;">\n\n        <div class="caption">\n\n          <p>Monaco Siap Lepas Mbappe ke PSG\n\n	\n\n	</p>\n\n        </div>\n\n      </a>\n\n    </div>\n\n \n\n    </div>\n\n\n\n\n\n\n\n<div class="item">\n\n	<div class="thumbnail drop-shadow2" style="">\n\n      <a href="https://eyesoccer.id/eyenews_detail?eyenews_id=1114">\n\n        <img src="" alt="Lights" style="width:100%;">\n\n        <div class="caption">\n\n          <p>Cedera Hamsa Lestaluhu Sembuh Lebih Cepat\n\n	\n\n	</p>\n\n        </div>\n\n      </a>\n\n    </div>\n\n \n\n    </div>\n\n\n\n\n\n\n\n<div class="item">\n\n	<div class="thumbnail drop-shadow2" style="">\n\n      <a href="https://eyesoccer.id/eyenews_detail?eyenews_id=1112">\n\n        <img src="" alt="Lights" style="width:100%;">\n\n        <div class="caption">\n\n          <p>Gabung di Grup E,  Klopp Siap Balas Dendam ke Sevilla\n\n	\n\n	</p>\n\n        </div>\n\n      </a>\n\n    </div>\n\n \n\n    </div>\n\n\n\n\n\n\n\n<div class="item">\n\n	<div class="thumbnail drop-shadow2" style="">\n\n      <a href="https://eyesoccer.id/eyenews_detail?eyenews_id=1111">\n\n        <img src="" alt="Lights" style="width:100%;">\n\n        <div class="caption">\n\n          <p>Barcelona Labeli Dembele Seharga 120 Juta Euro\n\n	\n\n	</p>\n\n        </div>\n\n      </a>\n\n    </div>\n\n \n\n    </div>\n\n\n\n    \n\n\n\n   \n\n\n\n  </div>\n\n\n\n</div>\n\n\n\n</div>\n\n\n\n\n\n\n\n<div class="hidden-xs hidden-sm">\n\n\n\n<h1 id="t2"><i class="fa fa-play-circle-o fa-lg"></i> EYETUBE <a href="https://eyesoccer.id/eyetube" id="a2">see all</a></h1>	\n\n\n\n<div class="col-lg-12 col-md-12">\n\n\n\n<div class="row">\n\n\n\n\n\n<div class="col-lg-3 col-md-3">\n\n<div class="thumbnail drop-shadow2" style="height: 0px;">\n\n      <a href="https://eyesoccer.id/eyetube_detail?eyetube_id=147">\n\n        <img src="" alt="Lights" style="width:100%;">\n\n        <div class="caption">\n\n          <p>Eyesoccer Flash : Kalahkan Hoffenheim di Babak Playoff, Liverpool Lolos Ke Fase Grup Liga Champions\n\n	\n\n	</p>\n\n        </div>\n\n      </a>\n\n    </div>\n\n    </div>\n\n\n\n<div class="col-lg-3 col-md-3">\n\n<div class="thumbnail drop-shadow2" style="height: 0px;">\n\n      <a href="https://eyesoccer.id/eyetube_detail?eyetube_id=146">\n\n        <img src="" alt="Lights" style="width:100%;">\n\n        <div class="caption">\n\n          <p>Eyesoccer Fact Evan Dimas\n\n	\n\n	</p>\n\n        </div>\n\n      </a>\n\n    </div>\n\n    </div>\n\n\n\n<div class="col-lg-3 col-md-3">\n\n<div class="thumbnail drop-shadow2" style="height: 0px;">\n\n      <a href="https://eyesoccer.id/eyetube_detail?eyetube_id=145">\n\n        <img src="" alt="Lights" style="width:100%;">\n\n        <div class="caption">\n\n          <p>Eyesoccer Flash : Berau FC Tempuh Jalan Darat 24 Jam Demi Liga Pelajar U-16 Piala Menpora 2017\n\n	\n\n	</p>\n\n        </div>\n\n      </a>\n\n    </div>\n\n    </div>\n\n\n\n<div class="col-lg-3 col-md-3">\n\n<div class="thumbnail drop-shadow2" style="height: 0px;">\n\n      <a href="https://eyesoccer.id/eyetube_detail?eyetube_id=143">\n\n        <img src="" alt="Lights" style="width:100%;">\n\n        <div class="caption">\n\n          <p>Eyesoccer History Edisi 22 Agustus\n\n	\n\n	</p>\n\n        </div>\n\n      </a>\n\n    </div>\n\n    </div>\n\n\n\n</div><br>\n\n\n\n</div>\n\n\n\n</div>\n\n\n\n<div class="hidden-lg hidden-md">\n\n\n\n<h1 id="t2"><i class="fa fa-play-circle-o fa-lg"></i> EYETUBE<a href="https://eyesoccer.id/eyetube" id="a2">see all</a></h1>\n\n\n\n<div id="myCarousel2" class="carousel slide" data-ride="carousel">\n\n \n\n<ol class="carousel-indicators">\n\n  <li data-target="#myCarousel2" data-slide-to="0" class="active"></li><li data-target="#myCarousel2" data-slide-to="1" class=""></li><li data-target="#myCarousel2" data-slide-to="2" class=""></li><li data-target="#myCarousel2" data-slide-to="3" class=""></li></ol><div class="carousel-inner" role="listbox">\n\n\n\n<div class="item active">\n\n\n\n	<div class="thumbnail drop-shadow2" style="">\n\n      <a href="https://eyesoccer.id/eyetube_detail?eyetube_id=147">\n\n        <img src="" alt="Lights" style="width:100%;">\n\n        <div class="caption">\n\n          <p>Eyesoccer Flash : Kalahkan Hoffenheim di Babak Playoff, Liverpool Lolos Ke Fase Grup Liga Champions\n\n	\n\n	</p>\n\n        </div>\n\n      </a>\n\n    </div>\n\n \n\n \n\n\n\n    </div>\n\n\n\n\n\n\n\n<div class="item">\n\n\n\n	<div class="thumbnail drop-shadow2" style="">\n\n      <a href="https://eyesoccer.id/eyetube_detail?eyetube_id=146">\n\n        <img src="" alt="Lights" style="width:100%;">\n\n        <div class="caption">\n\n          <p>Eyesoccer Fact Evan Dimas\n\n	\n\n	</p>\n\n        </div>\n\n      </a>\n\n    </div>\n\n \n\n \n\n\n\n    </div>\n\n\n\n\n\n\n\n<div class="item">\n\n\n\n	<div class="thumbnail drop-shadow2" style="">\n\n      <a href="https://eyesoccer.id/eyetube_detail?eyetube_id=145">\n\n        <img src="" alt="Lights" style="width:100%;">\n\n        <div class="caption">\n\n          <p>Eyesoccer Flash : Berau FC Tempuh Jalan Darat 24 Jam Demi Liga Pelajar U-16 Piala Menpora 2017\n\n	\n\n	</p>\n\n        </div>\n\n      </a>\n\n    </div>\n\n \n\n \n\n\n\n    </div>\n\n\n\n\n\n\n\n<div class="item">\n\n\n\n	<div class="thumbnail drop-shadow2" style="">\n\n      <a href="https://eyesoccer.id/eyetube_detail?eyetube_id=143">\n\n        <img src="" alt="Lights" style="width:100%;">\n\n        <div class="caption">\n\n          <p>Eyesoccer History Edisi 22 Agustus\n\n	\n\n	</p>\n\n        </div>\n\n      </a>\n\n    </div>\n\n \n\n \n\n\n\n    </div>\n\n\n\n  \n\n\n\n\n\n  </div>\n\n\n\n\n\n</div>\n\n\n\n</div>\n\n\n\n<div class="hidden-xs hidden-sm">\n\n\n\n<h1 id="t2"><i class="fa fa-newspaper-o fa-lg"></i> EYEVENT <a href="https://eyesoccer.id/eyevent" id="a2">see all</a></h1>	\n\n\n\n<div class="col-lg-12 col-md-12">\n\n\n\n<div class="row">\n\n\n\n\n\n<div class="col-lg-3 col-md-3">\n\n<div class="thumbnail drop-shadow2" style="height: 0px;">\n\n      <a href="https://eyesoccer.id/eyevent_detail?id_event=38">\n\n        <img src="" alt="Lights" style="width:100%;">\n\n        <div class="caption">\n\n          <p>Pekan 22 Liga 1 Gojek Traveloka\n\n	\n\n	</p>\n\n        </div>\n\n      </a>\n\n    </div>\n\n    </div>\n\n\n\n<div class="col-lg-3 col-md-3">\n\n<div class="thumbnail drop-shadow2" style="height: 0px;">\n\n      <a href="https://eyesoccer.id/eyevent_detail?id_event=37">\n\n        <img src="" alt="Lights" style="width:100%;">\n\n        <div class="caption">\n\n          <p>Pekan 21 Liga 1 Gojek Traveloka\n\n	\n\n	</p>\n\n        </div>\n\n      </a>\n\n    </div>\n\n    </div>\n\n\n\n<div class="col-lg-3 col-md-3">\n\n<div class="thumbnail drop-shadow2" style="height: 0px;">\n\n      <a href="https://eyesoccer.id/eyevent_detail?id_event=36">\n\n        <img src="" alt="Lights" style="width:100%;">\n\n        <div class="caption">\n\n          <p>Pekan 20 Liga 1 Gojek Traveloka\n\n	\n\n	</p>\n\n        </div>\n\n      </a>\n\n    </div>\n\n    </div>\n\n\n\n<div class="col-lg-3 col-md-3">\n\n<div class="thumbnail drop-shadow2" style="height: 0px;">\n\n      <a href="https://eyesoccer.id/eyevent_detail?id_event=35">\n\n        <img src="" alt="Lights" style="width:100%;">\n\n        <div class="caption">\n\n          <p>Liga Indonesia 3 Wilayah Jawa Barat\n\n	\n\n	</p>\n\n        </div>\n\n      </a>\n\n    </div>\n\n    </div>\n\n\n\n</div><br>\n\n\n\n</div>\n\n\n\n</div>\n\n\n\n<div class="hidden-lg hidden-md">\n\n\n\n<h1 id="t2"><i class="fa fa-newspaper-o fa-lg"></i> EYEVENT<a href="https://eyesoccer.id/eyevent" id="a2">see all</a></h1>\n\n\n\n<div id="myCarousel2" class="carousel slide" data-ride="carousel">\n\n \n\n<ol class="carousel-indicators">\n\n  <li data-target="#myCarousel2" data-slide-to="0" class="active"></li><li data-target="#myCarousel2" data-slide-to="1" class=""></li><li data-target="#myCarousel2" data-slide-to="2" class=""></li><li data-target="#myCarousel2" data-slide-to="3" class=""></li></ol><div class="carousel-inner" role="listbox">\n\n\n\n<div class="item active">\n\n\n\n	<div class="thumbnail drop-shadow2" style="">\n\n      <a href="https://eyesoccer.id/eyevent_detail?id_event=38">\n\n        <img src="" alt="Lights" style="width:100%;">\n\n        <div class="caption">\n\n          <p>Pekan 22 Liga 1 Gojek Traveloka\n\n	\n\n	</p>\n\n        </div>\n\n      </a>\n\n    </div>\n\n \n\n \n\n\n\n    </div>\n\n\n\n\n\n\n\n<div class="item">\n\n\n\n	<div class="thumbnail drop-shadow2" style="">\n\n      <a href="https://eyesoccer.id/eyevent_detail?id_event=37">\n\n        <img src="" alt="Lights" style="width:100%;">\n\n        <div class="caption">\n\n          <p>Pekan 21 Liga 1 Gojek Traveloka\n\n	\n\n	</p>\n\n        </div>\n\n      </a>\n\n    </div>\n\n \n\n \n\n\n\n    </div>\n\n\n\n\n\n\n\n<div class="item">\n\n\n\n	<div class="thumbnail drop-shadow2" style="">\n\n      <a href="https://eyesoccer.id/eyevent_detail?id_event=36">\n\n        <img src="" alt="Lights" style="width:100%;">\n\n        <div class="caption">\n\n          <p>Pekan 20 Liga 1 Gojek Traveloka\n\n	\n\n	</p>\n\n        </div>\n\n      </a>\n\n    </div>\n\n \n\n \n\n\n\n    </div>\n\n\n\n\n\n\n\n<div class="item">\n\n\n\n	<div class="thumbnail drop-shadow2" style="">\n\n      <a href="https://eyesoccer.id/eyevent_detail?id_event=35">\n\n        <img src="" alt="Lights" style="width:100%;">\n\n        <div class="caption">\n\n          <p>Liga Indonesia 3 Wilayah Jawa Barat\n\n	\n\n	</p>\n\n        </div>\n\n      </a>\n\n    </div>\n\n \n\n \n\n\n\n    </div>\n\n\n\n  \n\n\n\n   \n\n\n\n  </div>\n\n\n\n\n\n</div>\n\n\n\n</div>\n\n\n\n<br><br>\n\n\n\n\n\n\n\n</div>\n\n\n\n</div>\n\n\n\n</div>\n\n\n\n<!-- update rizki start -->\n\n<div class="container-fluid mobile-view" style="">\n\n	<div class="row">\n\n		<div class="col-lg-12">\n\n			<div class="bx-wrapper" style="max-width: 100%;"><div class="bx-viewport" aria-live="polite" style="width: 100%; overflow: hidden; position: relative; height: 171px;"><ul class="bxslider" style="width: 4215%; position: relative; transition-duration: 0s; transform: translate3d(-1216px, 0px, 0px);"><a style="float: left; list-style: outside none none; position: relative; width: 304px;" class="bx-clone" aria-hidden="true"><li><img src="assets/Eyesoccer_files/SLIDE-MOBILE-eyemarket.png" title="Eyemarket"></li><div class="bx-caption"><span>Eyemarket</span></div></a>\n\n				<a [navPush]="aboutPage" style="float: left; list-style: outside none none; position: relative; width: 304px;" aria-hidden="true"><li><img src="assets/Eyesoccer_files/SLIDE-MOBILE-eyeme.png" title="Eyeme"></li><div class="bx-caption"><span>Eyeme</span></div></a>\n\n				<a style="float: left; list-style: outside none none; position: relative; width: 304px;" aria-hidden="true"><li><img src="assets/Eyesoccer_files/SLIDE-MOBILE-eyenews.png" title="Eyenews"></li><div class="bx-caption"><span>Eyenews</span></div></a>\n\n				<a style="float: left; list-style: outside none none; position: relative; width: 304px;" aria-hidden="true"><li><img src="assets/Eyesoccer_files/SLIDE-MOBILE-eyetube.png" title="Eyetube"></li><div class="bx-caption"><span>Eyetube</span></div></a>\n\n				<a style="float: left; list-style: outside none none; position: relative; width: 304px;" aria-hidden="false"><li><img src="assets/Eyesoccer_files/SLIDE-MOBILE-eyemarket.png" title="Eyemarket"></li><div class="bx-caption"><span>Eyemarket</span></div></a>\n\n			<a [navPush]="aboutPage" style="float: left; list-style: outside none none; position: relative; width: 304px;" class="bx-clone" aria-hidden="true"><li><img src="assets/Eyesoccer_files/SLIDE-MOBILE-eyeme.png" title="Eyeme"></li><div class="bx-caption"><span>Eyeme</span></div></a></ul></div><div class="bx-controls bx-has-controls-direction bx-has-pager"><div class="bx-controls-direction"><a class="bx-prev" href="">Prev</a><a class="bx-next" href="">Next</a></div><div class="bx-pager bx-default-pager"><div class="bx-pager-item"><a href="" data-slide-index="0" class="bx-pager-link">1</a></div><div class="bx-pager-item"><a href="" data-slide-index="1" class="bx-pager-link">2</a></div><div class="bx-pager-item"><a href="" data-slide-index="2" class="bx-pager-link">3</a></div><div class="bx-pager-item"><a href="" data-slide-index="3" class="bx-pager-link active">4</a></div></div></div></div>\n\n		</div>\n\n	</div>\n\n	\n\n	<a>\n\n	<div class="mobile-img-right bg-green">\n\n		<div class="">\n\n			<!--<i class="fa fa-users"></i>-->\n\n			<img class="" src="assets/Eyesoccer_files/icon-eyeprofile.gif">\n\n		</div>\n\n		<div class="title-img-mobilebtm">\n\n			\n\n		</div>\n\n	</div>\n\n	</a>\n\n	<div class="mobile-img-left">\n\n		<img src="assets/Eyesoccer_files/t13650-KylianMbappe.jpg" alt="Monaco Siap Lepas Mbappe ke PSG">		<!--<img class="" src="systems/eyenews_storage/2605-LIGA-1-lowres.jpg">-->\n\n		<div class="title-img-mobile">\n\n			<!--<i class="fa fa-newspaper-o"></i>-->\n\n			<img class="img-mobile-menutopleft" src="assets/Eyesoccer_files/icon-eyenews.png">\n\n		</div>\n\n		<a class="mobile-content-hover"><div class="title-desc-mobile"><div class="text-margin">Monaco Siap Lepas Mbappe ke PSG</div></div></a>	</div>\n\n\n\n	<div class="mobile-img-leftlong">\n\n		<a [navPush]="aboutPage">\n\n		<div class="img-leftlong-top bg-yellow">\n\n						<div class="title-img-mobilecenter">\n\n				<!--<i class="fa fa-camera"></i>-->\n\n				<img class="img-mobile-menucenter" src="assets/Eyesoccer_files/icon-eyeme.png" style="transform: translate(0%, 0%);width: 50px;">\n\n			</div>\n\n			<div class="title-img-mobilebtm">\n\n				\n\n			</div>\n\n			<div style="color: white;font-size: 12px;left: 5px; position: absolute;text-align: center;">\n\n						 New Post<br>3			</div>\n\n		</div>\n\n		</a>\n\n		<a>\n\n		<div class="img-leftlong-bottom bg-blue">\n\n			<div class="title-img-mobilecenter">\n\n				<!--<i class="fa fa-shopping-cart"></i>-->\n\n				<img class="img-mobile-menucenter" src="assets/Eyesoccer_files/icon-eyemarket.png" style="transform: translate(0%, 0%);width: 50px;">\n\n			</div>\n\n			<div class="title-img-mobilebtm">\n\n				\n\n			</div>\n\n		</div>\n\n		</a>\n\n	</div>\n\n	<div class="mobile-img-rightlong">\n\n		<img src="assets/Eyesoccer_files/t1LFClolos.jpg" alt="Eyesoccer Flash : Kalahkan Hoffenheim di Babak Playoff, Liverpool Lolos Ke Fase Grup Liga Champions" style="width:100%;">		<div class="title-img-mobile">\n\n			<!--<i class="fa fa-play-circle-o"></i>-->\n\n			<img class="img-mobile-menu" src="assets/Eyesoccer_files/icon-eyetube.png">\n\n		</div>\n\n		<a class="mobile-content-hover"><div class="title-desc-mobile"><div class="text-margin">Eyesoccer Flash : Kalahkan Hoffenheim di Babak Playoff, Liverpool Lolos Ke Fase Grup Liga Champions</div></div></a>	</div>\n\n	\n\n	<div class="mobile-img-leftlong" style="width: 100%;height:170px">\n\n		<div class="img-leftlong-bottom" style="height:170px;">\n\n			<img src="assets/Eyesoccer_files/t1POSTER-LIGA-1-pekan-22.jpg" alt="Pekan 22 Liga 1 Gojek Traveloka">			<!--<img class="" src="systems/eyenews_storage/2605-LIGA-1-lowres.jpg">-->\n\n			<div class="title-img-mobile">\n\n				<!--i class="fa fa-calendar"></i>-->\n\n				<img class="img-mobile-menu" src="assets/Eyesoccer_files/icon-eyevent.png">\n\n			</div>\n\n			<a class="mobile-content-hover"><div class="title-desc-mobile" style="width: 100%;"><div class="text-margin">Pekan 22 Liga 1 Gojek Traveloka</div></div></a>		</div>\n\n	</div>\n\n</div>\n\n<!-- update rizki end --><!-- update rizki -->\n\n\n\n<input id="totalpic" value="1052" type="hidden">\n\n\n\n<input id="totaltube" value="4" type="hidden">\n\n\n\n<!-- update rizki start-->\n\n<!--<nav class="c-circle-menu" style="background-color: whitesmoke;border: 1px solid black;left: 12px;padding: 5px;" (click)="presentActionSheet()">\n\n<img style="width: 48px;left: 12px;" src="assets/Eyesoccer_files/camera1600.png">\n\n</nav>-->\n\n\n\n<a class="c-circle-menu" style="background-color: whitesmoke;border: 1px solid black;left: 12px;padding: 5px;" (click)="presentModal()" [hidden]="usernameview !== null">\n\n	<img style="width: 48px;left: 12px;" src="assets/Eyesoccer_files/camera1600.png">\n\n</a>\n\n<nav class="c-circle-menu" style="background-color: whitesmoke;border: 1px solid black;left: 12px;padding: 5px;" (click)="presentActionSheet()" [hidden]="usernameview === null">\n\n	<img style="width: 48px;left: 12px;" src="assets/Eyesoccer_files/camera1600.png">\n\n</nav>\n\n\n\n<!--<nav class="c-circle-menu" style="background-color: whitesmoke;border: 1px solid black;right: 12px;padding: 5px;" (click)="presentActionSheet2()">\n\n\n\n       <img style="width: 48px;left: 12px;" src="assets/Eyesoccer_files/camera-512.png">\n\n\n\n</nav>-->\n\n\n\n<a class="c-circle-menu" style="background-color: whitesmoke;border: 1px solid black;right: 12px;padding: 5px;" (click)="presentModal()" [hidden]="usernameview !== null">\n\n	<img style="width: 48px;left: 12px;" src="assets/Eyesoccer_files/camera-512.png">\n\n</a>\n\n<nav class="c-circle-menu" style="background-color: whitesmoke;border: 1px solid black;right: 12px;padding: 5px;" (click)="presentActionSheet2()" [hidden]="usernameview === null">\n\n	<img style="width: 48px;left: 12px;" src="assets/Eyesoccer_files/camera-512.png">\n\n</nav>\n\n\n\n<nav class="c-circle-menu js-menu" style="right: 44%;">\n\n<img style="width: 48px;" src="assets/Eyesoccer_files/imageedit_6_8277776047.png" class="c-circle-menu__toggle2 js-menu-toggle">\n\n  <button class="c-circle-menu__toggle js-menu-toggle" style="display:none">\n\n    <span>Toggle</span>\n\n  </button>\n\n  <ul class="c-circle-menu__items" style="display:none">\n\n    <li class="c-circle-menu__item" style="display:none">\n\n      <a href="#" class="c-circle-menu__link">\n\n        <img src="assets/Eyesoccer_files/tab_icon.png" alt="">\n\n      </a>\n\n    </li>\n\n    <li class="c-circle-menu__item" style="transform:translate(-113px, -10px)">\n\n      <a class="c-circle-menu__link">\n\n        <img src="assets/Eyesoccer_files/tab_icon.png" alt="" style="max-width: 100%;">\n\n      </a>\n\n    </li>\n\n    <li class="c-circle-menu__item" style="transform: translate(-72px, -61px);">\n\n      <a class="c-circle-menu__link">\n\n        <img src="assets/Eyesoccer_files/icon-eyenews.png" alt="">\n\n      </a>\n\n    </li>\n\n    <li class="c-circle-menu__item" style="transform: translate(-17px, -112px);">\n\n      <a class="c-circle-menu__link">\n\n        <img src="assets/Eyesoccer_files/icon-eyevent.png" alt="">\n\n      </a>\n\n    </li>\n\n    <li class="c-circle-menu__item" style="display:none">\n\n      <a href="#" class="c-circle-menu__link">\n\n        <img src="assets/Eyesoccer_files/tools.htm" alt="">\n\n      </a>\n\n    </li>\n\n  </ul>\n\n  <ul class="c-circle-menu__items" style="left: -45px;position: absolute;top: 16px;display:none">\n\n    <li class="c-circle-menu__item circle-menu2-1" style="display:none;">\n\n      <a href="#" class="c-circle-menu__link">\n\n        <img src="assets/Eyesoccer_files/house.htm" alt="">\n\n      </a>\n\n    </li>\n\n    <li class="c-circle-menu__item circle-menu2-2" style="transform: translate(-130px, -26px);">\n\n      <a [navPush]="aboutPage" class="c-circle-menu__link">\n\n        <img src="assets/Eyesoccer_files/icon-eyeme.png" alt="">\n\n      </a>\n\n    </li>\n\n    <li class="c-circle-menu__item circle-menu2-3" style="transform: translate(-95px, -95px);">\n\n      <a class="c-circle-menu__link">\n\n        <img src="assets/Eyesoccer_files/icon-eyemarket.png" alt="">\n\n      </a>\n\n    </li>\n\n    <li class="c-circle-menu__item circle-menu2-4" style="transform: translate(-44px, -156px);">\n\n      <a class="c-circle-menu__link">\n\n        <img src="assets/Eyesoccer_files/icon-eyetube.png" alt="">\n\n      </a>\n\n    </li>\n\n    <li class="c-circle-menu__item circle-menu2-5" style="transform: translate(24px, -195px);">\n\n      <a class="c-circle-menu__link">\n\n        <img src="assets/Eyesoccer_files/icon-eyeprofile-putih.png" alt="">\n\n      </a>\n\n    </li>\n\n	<li class="c-circle-menu__item circle-menu2-6" style="transform: translate(70px, -205px);display:none">\n\n      <a href="#" class="c-circle-menu__link">\n\n        <img src="assets/Eyesoccer_files/tools.htm" alt="">\n\n      </a>\n\n    </li>\n\n  </ul>\n\n  <div class="c-circle-menu__mask js-menu-mask"></div>\n\n</nav>\n\n\n\n<script async="" src="assets/Eyesoccer_files/analytics.js"></script>\n\n<script src="assets/Eyesoccer_files/circleMenu.js"></script>\n\n<!-- update rizki end-->\n\n\n\n<script src="assets/Eyesoccer_files/jquery-3.js"></script>\n\n<script src="assets/Eyesoccer_files/bootstrap.js"></script>\n\n<script src="assets/Eyesoccer_files/main.js"></script><!-- update rizki-->\n\n<script src="assets/Eyesoccer_files/matchheight.js"></script>\n\n<script type="text/javascript" language="javascript" src="assets/Eyesoccer_files/jquery.js"></script>\n\n<script src="assets/Eyesoccer_files/bootstrapvalidator.js"></script>\n\n<script> \n\n\n\n$(document).ready(function(){\n\n   $(\'video\').bind(\'contextmenu\',function() { return false; });\n\n}); \n\n$(document).ready(function(){\n\n  pw=parseInt($(".parent-image").width());\n\n  cw=parseInt($(".child-image").width());\n\n  perpc=(cw/pw)*100;\n\n  if(perpc>=50)\n\n  {\n\n    $(".child-image").width(pw);\n\n  }\n\n//alert(perpc);\n\n  \n\n})\n\n</script>\n\n<script>\n\nfunction openNav1() {document.getElementById("myNav1").style.width = "100%";}\n\nfunction openNav2() {document.getElementById("myNav2").style.width = "100%";}\n\nfunction closeNav1() {document.getElementById("myNav1").style.width = "0%";}	\n\nfunction closeNav2() {document.getElementById("myNav2").style.width = "0%";}  \n\n\n\n$(document).ready(function(){\n\n\n\n    // hide .navbar first\n\n    $(".gotop").hide();\n\n\n\n    // fade in .navbar\n\n    $(function () {\n\n        $(window).scroll(function () {\n\n\n\n                 // set distance user needs to scroll before we start fadeIn\n\n            if ($(this).scrollTop() > 100) {\n\n                $(\'.gotop\').fadeIn();\n\n            } else {\n\n                $(\'.gotop\').fadeOut();\n\n            }\n\n        });\n\n    });\n\n\n\n});\n\n\n\n$(window).on(\'load\',function(){\n\n\n\n$(\'#mdl1\').modal(\'show\');\n\n\n\n});\n\n\n\n$(function(){\n\n	$(".datetimepicker").datetimepicker({\n\n		 format: \'Y-m-d H:i:s\'\n\n	});\n\n	\n\n})\n\n $(function() {\n\n	 \n\n                $(\'.thumbnail\').matchHeight({\n\n                    byRow: true,\n\n                    property: \'height\',\n\n                    target: null,\n\n                    remove: false\n\n                });\n\n        $(\'.thumbnail3\').matchHeight({\n\n                    byRow: true,\n\n                    property: \'height\',\n\n                    target: null,\n\n                    remove: false\n\n                });\n\n            });  \n\n\n\n</script>\n\n\n\n<script>\n\n  (function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){\n\n  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n\n  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n\n  })(window,document,\'script\',\'https://www.google-analytics.com/analytics.js\',\'ga\');\n\n\n\n  ga(\'create\', \'UA-102907561-1\', \'auto\');\n\n  ga(\'send\', \'pageview\');\n\n\n\n</script>\n\n\n\n<!--<style>\n\nbody { padding-bottom: 70px; }\n\n</style> \n\n<nav class="navbar navbar-default navbar-fixed-bottom" style="background-color:#2ED1A2;border-color:#2ED1A2;">\n\n  <div class="container">\n\n    <center><h4 style="color:white;line-height:200%">&copy;eyesoccer.com 2016</h4></center>\n\n  </div>\n\n</nav>-->\n\n\n\n<div class="col-lg-12 col-xs-12" style="background-color:#A6A6A6;border-color:#2ED1A2;position:relative;bottom:0px;left:0px;display:block;width:100%">\n\n<h5 style="color:white;line-height:200%"> eyesoccer.id 2016 | <a style="text-decoration:none;color:white">Tentang Kami</a></h5></div> \n\n<style>\n\n#back1{\n\n	-webkit-border-bottom-right-radius: 20px;\n\n-moz-border-radius-bottomright: 20px;\n\nborder-bottom-right-radius: 20px;\n\n}\n\n</style>\n\n<!-- Histats.com  START  (aync)-->\n\n<script type="text/javascript">var _Hasync= _Hasync|| [];\n\n_Hasync.push([\'Histats.start\', \'1,3847420,4,0,0,0,00010000\']);\n\n_Hasync.push([\'Histats.fasi\', \'1\']);\n\n_Hasync.push([\'Histats.track_hits\', \'\']);\n\n(function() {\n\nvar hs = document.createElement(\'script\'); hs.type = \'text/javascript\'; hs.async = true;\n\nhs.src = (\'//s10.histats.com/js15_as.js\');\n\n(document.getElementsByTagName(\'head\')[0] || document.getElementsByTagName(\'body\')[0]).appendChild(hs);\n\n})();</script>\n\n<noscript><a href="/" target="_blank"><img  src="//sstatic1.histats.com/0.gif?3847420&101" alt="free geoip" border="0"></a></noscript>\n\n<!-- Histats.com  END  -->\n\n<script type="text/javascript">\n\n \n\n   $(".mdl1").show();\n\n   $(document).ready(function() {\n\n	  $("#lastImageView").load(function(){\n\n	  alert("tes");\n\n	  \n\n	  })\n\n	$("body").on("focus","#userPw",function(){\n\n		$(this).val("");\n\n	})	\n\n$(\'#reg_form\').bootstrapValidator({\n\n        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later\n\n        feedbackIcons: {\n\n            valid: \'glyphicon glyphicon-ok\',\n\n            invalid: \'glyphicon glyphicon-remove\',\n\n            validating: \'glyphicon glyphicon-refresh\'\n\n        },\n\n        fields: {\n\n         \n\n            \n\n	 email: {\n\n                validators: {\n\n                    notEmpty: {\n\n                        message: \'Mohon isi E-mail anda sebagai Username anda \'\n\n                    },\n\n                    emailAddress: {\n\n                        message: \'Mohon isi valid E-mail\'\n\n                    }\n\n                }\n\n            },\n\n					\n\n	password: {\n\n            validators: {\n\n				 notEmpty: {\n\n                        message: \'Mohon isi E-mail anda sebagai Username anda \'\n\n                    },\n\n                identical: {\n\n                    field: \'confirmPassword\',\n\n                    message: \'Mohon konfirmasi Password anda di bawah ini\'\n\n                }\n\n            }\n\n        },\n\n        confirmPassword: {\n\n            validators: {\n\n                identical: {\n\n                    field: \'password\',\n\n                    message: \'Konfirmasi Password tidak sama\'\n\n                }\n\n            }\n\n         },\n\n			\n\n            \n\n            }\n\n        }).on(\'success.form.bv\', function(e) {\n\n\n\n			  alert("tes");\n\n           // $(\'#success_message\').slideDown({ opacity: "show" }, "slow");\n\n            $(\'#submit-button\').removeAttr("disabled");\n\n\n\n			\n\n        });\n\n\n\n		$(\'body\').on("click","#submit-button",function(event){\n\n            // Get the BootstrapValidator instance\n\n$.ajax({       \n\n				type: "POST",   \n\n				url: $(\'#reg_form\').attr( \'action\' ),\n\n				data: $(\'#reg_form\').serialize(),\n\n				dataType: "json",  \n\n				success:function(data){  \n\n				if(data.html1!="existed")\n\n				{\n\n					alert("Terima kasih "+data.html1+" anda sudah terdaftar sebagai member kami");\n\n					$(location).attr(\'href\', $("#redirect-url").val());\n\n				}\n\n				else{\n\n					$(".email").val("");\n\n					$(".email").focus();\n\n					alert("E-mail anda sudah terdaftar !");\n\n					\n\n				}\n\n				}   \n\n			});\n\n			event.preventDefault();\n\n	   })\n\n    \n\n});\n\n\n\n</script>\n\n\n\n\n\n\n\n\n\n\n\n<script>\n\n $(function() {\n\n                $(\'.thumbnail\').matchHeight({\n\n                    byRow: true,\n\n                    property: \'height\',\n\n                    target: null,\n\n                    remove: false\n\n                });\n\n            });\n\n  $(function(){\n\n\n\n    setInterval(get_news, 10000);\n\n\n\n//setInterval(get_tube, 10000);\n\n\n\n  })\n\n\n\n  function get_news(){\n\n\n\n    total=$("#totalpic").val();\n\n\n\n   $.ajax({\n\n\n\n    type: "POST",\n\n	data: { \'now\': total},\n\n    url: "checking_news2.php",\n\n    dataType: "json",\n\n    success:function(data){\n\n		//alert(data.html1);\n\n		totalbaru=data.totalterbaru;\n\n		totalbaru++;\n\n      if(totalbaru>1)\n\n		{\n\n\n\n         $.ajax({\n\n\n\n    type: "POST",\n\n	data: { \'now\': total},\n\n    url: "checking_news.php",\n\n    dataType: "json",\n\n    success:function(data){\n\n	\n\n       //total++;\n\n\n\n       $("#totalpic").val(data.total1);\n\n\n\n      //replaced=total-4;\n\n$(".replace_news").fadeOut("slow", function(){\n\n    $(".replace_news").empty().html(data.html1);\n\n   $(".replace_news").fadeIn("slow");\n\n});\n\n    \n\n\n\n\n\n     //alert(  $(".replace-"+replaced).html());\n\n\n\n     \n\n     }\n\n\n\n    });\n\n\n\n		}\n\n\n\n     \n\n\n\n     }\n\n\n\n    });\n\n   \n\n   \n\n   \n\n\n\n   \n\n  }\n\n    \n\n\n\n   /* function get_tube(){\n\n\n\n    total=$("#totaltube").val();\n\n\n\n   \n\n\n\n    $.ajax({\n\n\n\n    method: "POST",\n\n\n\n    url: "checking_tube.php",\n\n\n\n     data: { now: total},\n\n\n\n      success:function(data){\n\n\n\n      if(data.trim()==\'\')\n\n\n\n      {\n\n\n\n        console.log(data);\n\n\n\n      }\n\n\n\n      else{\n\n\n\n       total++;\n\n\n\n       $("#totaltube").val(total);\n\n\n\n      replaced=total-4;\n\n\n\n     $(".replacetube-"+replaced).replaceWith(data);\n\n\n\n     //alert(  $(".replace-"+replaced).html());\n\n\n\n      }\n\n\n\n     }\n\n\n\n    })\n\n\n\n    \n\n\n\n  }*/\n\nif(window.outerWidth < 780){\n\n	$(".desktop-view").hide();\n\n	$(".desktop-view img").attr("src","");\n\n	$(".mobile-view").show();\n\n}else{\n\n	$(".js-menu").hide();\n\n	$(".mobile-view").hide();\n\n	$(".desktop-view").show();\n\n}\n\n</script>\n\n\n\n	<!-- body end -->\n\n</ion-content>'/*ion-inline-end:"D:\xampp\htdocs\eyeside3\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_12__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_transfer__["a" /* Transfer */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_file_path__["a" /* FilePath */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_13__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_14__ionic_native_media_capture__["a" /* MediaCapture */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EyemeListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_transfer__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_path__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__member_area_member_area__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__login_login__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__comment_detail_comment_detail__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var EyemeListPage = (function () {
    function EyemeListPage(modalCtrl, nav, navParams, camera, transfer, file, filePath, actionSheetCtrl, toastCtrl, platform, loadingCtrl, storage, http) {
        var _this = this;
        this.modalCtrl = modalCtrl;
        this.nav = nav;
        this.navParams = navParams;
        this.camera = camera;
        this.transfer = transfer;
        this.file = file;
        this.filePath = filePath;
        this.actionSheetCtrl = actionSheetCtrl;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.http = http;
        this.lastImage = null;
        this.usernameview = null;
        this.lovecount = 0;
        var filename = navParams.get('filename');
        var curname = navParams.get('curname');
        var corpath = navParams.get('corpath');
        platform.registerBackButtonAction(function () {
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_9__home_home__["a" /* HomePage */]);
        });
        this.http.get('http://eyesoccer.id/list_eyeme.php').map(function (res) { return res.json(); }).subscribe(function (data) {
            // this.posts = data.thumbnailUrl;
            _this.posts = data.data;
            console.log(data);
        }, function (err) {
            console.log("Oops!");
            console.log(err);
        });
    }
    EyemeListPage.prototype.presentModal = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_11__login_login__["a" /* LoginPage */]);
        modal.present();
    };
    EyemeListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.navBar.backButtonClick = function (e) {
            console.log("Back button clicked");
            // this.nav.parent.viewCtrl.dismiss();
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_9__home_home__["a" /* HomePage */]);
        };
    };
    EyemeListPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        console.log('ionViewDidEnter EyemePage');
        this.storage.get('name_user').then(function (val) {
            _this.usernameview = val;
        }, function (error) { return console.error('Error storing LoginData', error); });
    };
    EyemeListPage.prototype.memberPage = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_10__member_area_member_area__["a" /* MemberAreaPage */], {
            username: this.usernameview
        });
    };
    EyemeListPage.prototype.presentModalComment = function (pic, name, type_gallery, thumb1, title) {
        var modal2 = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_12__comment_detail_comment_detail__["a" /* CommentDetailPage */], { pic: pic, name: name, type_gallery: type_gallery, thumb1: thumb1, title: title });
        modal2.present();
        modal2.onDidDismiss(function (data) {
            console.log('modal data sent to main form', data);
        });
    };
    EyemeListPage.prototype.love = function (email, id_place) {
        var _this = this;
        var link = 'http://eyesoccer.id/input_love_eyeme.php';
        var data = JSON.stringify({ email: email, id_place: id_place });
        this.http.post(link, data).map(function (res) { return res; }).subscribe(function (data) {
            console.log(data);
            _this.posts.like = _this.posts.like + 1;
        }, function (err) {
            console.log("Oops!");
            console.log(err);
        });
    };
    EyemeListPage.prototype.lovecounts = function (post) {
        post.like = post.like + 1;
    };
    return EyemeListPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Navbar */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Navbar */])
], EyemeListPage.prototype, "navBar", void 0);
EyemeListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-eyeme',template:/*ion-inline-start:"D:\xampp\htdocs\eyeside3\src\pages\eyeme\eyeme.html"*/'<ion-header>\n\n  <ion-navbar color="primary" style="background: rgba(0, 0, 0, 0) url(\'assets/Eyesoccer_files/h14.png\') no-repeat scroll center center / cover ;transform: none;transform: none;contain: unset;">\n\n    <ion-title>\n\n      Eyeme\n\n    </ion-title>\n\n	<a (click)="memberPage()" class="clickable" style="color:black;font-weight:bold;position: absolute;bottom: 30%;right: 20px;" [hidden]="usernameview === null">\n\n		{{usernameview}}\n\n	</a>\n\n	<a (click)="presentModal()" class="clickable" style="color:white;font-weight:bold;position: absolute;bottom: 30%;right: 20px;" [hidden]="usernameview !== null">\n\n		DAFTAR\n\n	</a>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<!--<ion-content padding>\n\n  <ion-list>\n\n    <ion-item *ngFor="let post of posts">\n\n      <ion-img style="width:300px; height:300px" [src]="post.thumb1"></ion-img>\n\n    </ion-item>\n\n  </ion-list>\n\n  \n\n</ion-content>-->\n\n\n\n<ion-content class="cards-bg">\n\n<ion-list *ngFor="let post of posts">\n\n  <ion-card>\n\n	<ion-card-header style="padding:0">\n\n	<ion-item>\n\n      <ion-avatar item-start>\n\n        <img [src]="post.pic" style="border: 1px solid black;"/>\n\n      </ion-avatar>\n\n      <h2 text-left>{{ post.name }}</h2>\n\n	</ion-item>\n\n	</ion-card-header>\n\n	\n\n	<div *ngIf="post.type_gallery == \'video\'; then thenBlock else elseBlock"></div>\n\n	<ng-template #thenBlock>\n\n		<video controls="controls" class="videoPlayer" style="max-height:300px;">\n\n		<source src="{{post.thumb1}}#t=0.1" type="video/mp4" />\n\n		</video>\n\n	</ng-template>\n\n	<ng-template #elseBlock><div style="height: 300px;\n\n    width: auto;\n\n    background: green;\n\n    overflow: hidden;\n\n    text-align: center;\n\n    vertical-align: middle;"><img [src]="post.thumb1" style="width: 100%;\n\n    height: 100%;\n\n    object-fit: cover;\n\n    overflow: hidden;"/></div></ng-template>\n\n	\n\n    <!--<img [src]="post.thumb1"/>-->\n\n\n\n    <ion-card-content>\n\n      <ion-card-title>\n\n        {{ post.title }}\n\n      </ion-card-title>\n\n      <!--<p>\n\n        The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.\n\n      </p>-->\n\n    </ion-card-content>\n\n\n\n	<ion-row class="card-content-md">\n\n		<ion-col>\n\n		  <button ion-button color="primary" clear small icon-start (click)="love(post.email,post.id);lovecounts(post);">\n\n			<ion-icon name=\'star\'></ion-icon>\n\n			{{post.like}} Likes\n\n		  </button>\n\n		</ion-col>\n\n		<ion-col>\n\n		  <button ion-button color="primary" clear small icon-start (click)="presentModalComment(post.pic,post.name,post.type_gallery,post.thumb1,post.title)">\n\n			<ion-icon name=\'text\'></ion-icon>\n\n			4 Comments\n\n		  </button>\n\n		</ion-col>\n\n		<ion-col>\n\n		  <!--<ion-note>\n\n			11h ago\n\n		  </ion-note>-->\n\n		  <button ion-button color="primary" clear small icon-start>\n\n			<ion-icon name=\'share\'></ion-icon>\n\n		  </button>\n\n		</ion-col>\n\n	</ion-row>\n\n\n\n  </ion-card>\n\n  </ion-list>\n\n  </ion-content>\n\n \n\n<ion-footer>\n\n  \n\n</ion-footer>'/*ion-inline-end:"D:\xampp\htdocs\eyeside3\src\pages\eyeme\eyeme.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_transfer__["a" /* Transfer */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_path__["a" /* FilePath */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
], EyemeListPage);

//# sourceMappingURL=eyeme.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberAreaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the MemberAreaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var MemberAreaPage = (function () {
    function MemberAreaPage(storage, navCtrl, navParams, http, toastCtrl) {
        var _this = this;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.pet = "profil";
        this.usernameview = null;
        this.useremailview = null;
        this.useraddressview = null;
        this.userklubview = null;
        this.usersupporterview = null;
        this.useridview = null;
        this.userpicview = null;
        this.storage.get('email_user').then(function (val) {
            _this.useremailview = val;
            console.log(val);
        }, function (error) { return console.error('Error storing LoginData', error); });
        this.storage.get('name_user').then(function (val) {
            _this.usernameview = val;
            console.log(val);
        }, function (error) { return console.error('Error storing LoginData', error); });
        this.storage.get('address_user').then(function (val) {
            _this.useraddressview = val;
            console.log(val);
        }, function (error) { return console.error('Error storing LoginData', error); });
        this.storage.get('klubfav_user').then(function (val) {
            _this.userklubview = val;
            console.log(val);
        }, function (error) { return console.error('Error storing LoginData', error); });
        this.storage.get('supporter_user').then(function (val) {
            _this.usersupporterview = val;
            console.log(val);
        }, function (error) { return console.error('Error storing LoginData', error); });
        this.storage.get('id_user').then(function (val) {
            _this.useridview = val;
            console.log(val);
        }, function (error) { return console.error('Error storing LoginData', error); });
    }
    MemberAreaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MemberAreaPage');
    };
    MemberAreaPage.prototype.uploadLogout = function () {
        var firstViewCtrl = this.navCtrl.first();
        console.log("logout");
        this.storage.clear();
        // this.navCtrl.push(HomePage,{parent: HomePage}.dismiss());
        // this.navCtrl.popToRoot({animate: false}).then(() => firstViewCtrl.dismiss());
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    MemberAreaPage.prototype.uploadUpdate = function () {
        var _this = this;
        console.log("update");
        var link = 'http://eyesoccer.id/update_profile_mobile.php';
        var data = JSON.stringify({ username: this.usernameview, useremail: this.useremailview, useraddress: this.useraddressview });
        this.http.post(link, data).map(function (res) { return res.json(); }).subscribe(function (data) {
            var link2 = 'http://eyesoccer.id/login_mobileview.php';
            var data2 = JSON.stringify({ useremail: _this.useremailview, username: _this.usernameview, useraddress: _this.useraddressview });
            _this.http.post(link2, data2).map(function (res) { return res.json(); }).subscribe(function (datares) {
                _this.presentToast('Success.');
                console.log(datares[0]);
                _this.storage.set('email_user', datares[0].email);
                _this.storage.set('id_user', datares[0].id_member);
                _this.storage.set('name_user', datares[0].fullname);
                _this.storage.set('pic_user', datares[0].pic);
                _this.storage.set('title_user', datares[0].title);
                _this.storage.set('description_user', datares[0].description);
                _this.storage.set('address_user', datares[0].address);
                _this.storage.set('klubfav_user', "");
                _this.storage.set('supporter_user', "");
                _this.storage.get('name_user').then(function (val) {
                    _this.usernameview = val;
                }, function (error) { return console.error('Error storing LoginData', error); });
                _this.storage.get('pic_user').then(function (val) {
                    _this.userpicview = "http://eyesoccer.id/systems/img_storage/" + val;
                }, function (error) { return console.error('Error storing LoginData', error); });
                _this.storage.get('address_user').then(function (val) {
                    _this.useraddressview = val;
                }, function (error) { return console.error('Error storing LoginData', error); });
                _this.storage.get('klubfav_user').then(function (val) {
                    _this.userklubview = val;
                }, function (error) { return console.error('Error storing LoginData', error); });
                _this.storage.get('supporter_user').then(function (val) {
                    _this.usersupporterview = val;
                }, function (error) { return console.error('Error storing LoginData', error); });
            }, function (err) {
                console.log("Oops2!");
                console.log(err);
            });
        }, function (err) {
            console.log("Oops!");
            console.log(err);
        });
    };
    MemberAreaPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    return MemberAreaPage;
}());
MemberAreaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-member-area',template:/*ion-inline-start:"D:\xampp\htdocs\eyeside3\src\pages\member-area\member-area.html"*/'<!--\n\n  Generated template for the MemberAreaPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="primary" style="background: rgba(0, 0, 0, 0) url(\'assets/Eyesoccer_files/h14.png\') no-repeat scroll center center / cover ;transform: none;transform: none;contain: unset;">\n\n    <ion-title>\n\n      Member Area\n\n    </ion-title>\n\n	<a class="clickable" style="color:black;font-weight:bold;position: absolute;bottom: 30%;right: 20px;" [hidden]="usernameview === null">\n\n		{{usernameview}}\n\n	</a>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n	<div padding>\n\n	  <ion-segment [(ngModel)]="pet">\n\n		<ion-segment-button value="profil">\n\n		  Profil\n\n		</ion-segment-button>\n\n		<ion-segment-button value="gallery">\n\n		  Gallery\n\n		</ion-segment-button>\n\n	  </ion-segment>\n\n	</div>\n\n	\n\n	<div [ngSwitch]="pet">\n\n	  <ion-list *ngSwitchCase="\'profil\'">\n\n		<ion-item>\n\n		  <ion-label>Nama</ion-label>\n\n		  <ion-input type="text" [value]="usernameview" [(ngModel)]="usernameview"></ion-input>\n\n		</ion-item>\n\n		<ion-item>\n\n		  <ion-label>Email</ion-label>\n\n		  <ion-input type="text" [value]="useremailview" disabled="true"></ion-input>\n\n		</ion-item>\n\n		<ion-item>\n\n		  <ion-label>Alamat</ion-label>\n\n		  <ion-input type="text" [value]="useraddressview" [(ngModel)]="useraddressview"></ion-input>\n\n		</ion-item>\n\n		<ion-item>\n\n		  <ion-label>Klub Favorit</ion-label>\n\n		  <ion-input type="text" [value]="userklubview" [(ngModel)]="userklubview"></ion-input>\n\n		</ion-item>\n\n		<ion-item>\n\n		  <ion-label>Supporter</ion-label>\n\n		  <ion-input type="text" [value]="usersupporterview" [(ngModel)]="usersupporterview"></ion-input>\n\n		</ion-item>\n\n	<!--<ion-item>\n\n		  <ion-label>User ID</ion-label>\n\n		  <ion-input type="text" [value]="usersupporterview" [(ngModel)]="useridview"></ion-input>\n\n		</ion-item>-->\n\n		<!--<button class="btn btn-error" (click)="uploadLogout()">\n\n		Keluar\n\n		</button>-->\n\n		<ion-row>\n\n			<ion-col offset-4>\n\n				<button ion-button round color="secondary" (click)="uploadUpdate()">Update</button>\n\n			</ion-col>\n\n		</ion-row>\n\n		<ion-row>\n\n			<ion-col offset-4>\n\n				<button ion-button round color="danger" (click)="uploadLogout()">Keluar</button>\n\n			</ion-col>\n\n		</ion-row>\n\n	  </ion-list>\n\n\n\n	  <ion-list *ngSwitchCase="\'gallery\'">\n\n	  \n\n	  </ion-list>\n\n	</div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\xampp\htdocs\eyeside3\src\pages\member-area\member-area.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
], MemberAreaPage);

//# sourceMappingURL=member-area.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(viewCtrl, navCtrl, navParams, storage, http) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.http = http;
        this.pet = "login";
        this.isAndroid = false;
        this.username = null;
        this.password = null;
        this.regisnama = null;
        this.regisemail = null;
        this.regispwd1 = null;
        this.regispwd2 = null;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    LoginPage.prototype.uploadLogin = function () {
        var _this = this;
        console.log("uploadLogin");
        var link = 'http://eyesoccer.id/login_mobile.php';
        var data = JSON.stringify({ username: this.username, password: this.password });
        this.http.post(link, data).map(function (res) { return res.json(); }).subscribe(function (data) {
            console.log(data[0]);
            _this.storage.set('email_user', data[0].email);
            _this.storage.set('id_user', data[0].id_member);
            _this.storage.set('name_user', data[0].fullname);
            _this.storage.set('pic_user', data[0].pic);
            _this.storage.set('title_user', data[0].title);
            _this.storage.set('description_user', data[0].description);
            _this.storage.set('address_user', data[0].address);
            _this.storage.set('klubfav_user', "");
            _this.storage.set('supporter_user', "");
            _this.viewCtrl.dismiss();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
        }, function (err) {
            console.log("Oops!");
            console.log(err);
        });
    };
    LoginPage.prototype.uploadRegis = function () {
        console.log("registrasi");
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"D:\xampp\htdocs\eyeside3\src\pages\login\login.html"*/'\n\n<ion-header>\n\n  <ion-toolbar style="background: rgba(0, 0, 0, 0) url(\'assets/Eyesoccer_files/h14.png\') no-repeat scroll center center / cover ;transform: none;contain: unset;">\n\n    <ion-title>\n\n      \n\n    </ion-title>\n\n    <ion-buttons start>\n\n      <button ion-button (click)="dismiss()">\n\n        <span ion-text color="primary" showWhen="ios">Cancel</span>\n\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n	<div padding>\n\n	  <ion-segment [(ngModel)]="pet">\n\n		<ion-segment-button value="login">\n\n		  LOGIN\n\n		</ion-segment-button>\n\n		<ion-segment-button value="daftar">\n\n		  DAFTAR\n\n		</ion-segment-button>\n\n	  </ion-segment>\n\n	</div>\n\n\n\n	<div [ngSwitch]="pet">\n\n	  <ion-list *ngSwitchCase="\'login\'">\n\n		<ion-item>\n\n		  <ion-label>Email</ion-label>\n\n		  <ion-input type="text" [(ngModel)]="username"></ion-input>\n\n		</ion-item>\n\n		<ion-item>\n\n		  <ion-label>Password</ion-label>\n\n		  <ion-input type="password" [(ngModel)]="password"></ion-input>\n\n		</ion-item>\n\n		<ion-row>\n\n			<ion-col>\n\n				<button ion-button round block color="secondary" (click)="uploadLogin()">LOGIN</button>\n\n			</ion-col>\n\n		</ion-row>\n\n	  </ion-list>\n\n\n\n	  <ion-list *ngSwitchCase="\'daftar\'">\n\n		<ion-item>\n\n		  <ion-label>Nama</ion-label>\n\n		  <ion-input type="text" [(ngModel)]="regisnama"></ion-input>\n\n		</ion-item>\n\n		<ion-item>\n\n		  <ion-label>Email</ion-label>\n\n		  <ion-input type="text" [(ngModel)]="regisemail"></ion-input>\n\n		</ion-item>\n\n		<ion-item>\n\n		  <ion-label>Password</ion-label>\n\n		  <ion-input type="text" [(ngModel)]="regispwd1"></ion-input>\n\n		</ion-item>\n\n		<ion-item>\n\n		  <ion-label>Konfirmasi Password</ion-label>\n\n		  <ion-input type="text" [(ngModel)]="regispwd2"></ion-input>\n\n		</ion-item>\n\n		<ion-row>\n\n			<ion-col>\n\n				<button ion-button round block color="secondary" (click)="uploadRegis()">DAFTAR</button>\n\n			</ion-col>\n\n		</ion-row>\n\n	  </ion-list>\n\n	</div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\xampp\htdocs\eyeside3\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__eyeme_eyeme__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_transfer__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_path__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ListPage = (function () {
    function ListPage(navParams, camera, transfer, file, filePath, actionSheetCtrl, toastCtrl, platform, loadingCtrl, storage, navCtrl) {
        this.navParams = navParams;
        this.camera = camera;
        this.transfer = transfer;
        this.file = file;
        this.filePath = filePath;
        this.actionSheetCtrl = actionSheetCtrl;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.lastImage = null;
        this.caption = null;
        this.iduser = null;
        this.param = {};
        var filename = navParams.get('filename');
        var curname = navParams.get('curname');
        var corpath = navParams.get('corpath');
        this.copyFileToLocalDir(corpath, curname, filename);
    }
    ListPage.prototype.updateCheckboxpub = function () {
        this.checkboxpub = this.checkboxpub;
    };
    ListPage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Select Image Source',
            buttons: [
                {
                    text: 'Load from Library',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: 'Use Camera',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.CAMERA);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    ListPage.prototype.takePicture = function (sourceType) {
        var _this = this;
        // Create options for the Camera Dialog
        var options = {
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        // Get the data of an image
        this.camera.getPicture(options).then(function (imagePath) {
            // Special handling for Android library
            if (_this.platform.is('android') && sourceType === _this.camera.PictureSourceType.PHOTOLIBRARY) {
                _this.filePath.resolveNativePath(imagePath)
                    .then(function (filePath) {
                    var correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    var currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                    _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
                });
            }
            else {
                var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
            }
        }, function (err) {
            _this.presentToast('Error while selecting image.');
        });
    };
    // Create a new name for the image
    ListPage.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + ".jpg";
        return newFileName;
    };
    // Copy the image to a local folder
    ListPage.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName) {
        var _this = this;
        this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(function (success) {
            _this.lastImage = newFileName;
        }, function (error) {
            _this.presentToast('Error while storing file.');
        });
    };
    ListPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    // Always get the accurate path to your apps folder
    ListPage.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            return cordova.file.dataDirectory + img;
        }
    };
    ListPage.prototype.uploadImage = function () {
        var _this = this;
        // Destination URL
        var url = "http://eyesoccer.id/upload_eyeme.php";
        // File for Upload
        var targetPath = this.pathForImage(this.lastImage);
        // File name only
        var filename = this.lastImage;
        var options = {
            fileKey: "file",
            fileName: filename,
            chunkedMode: false,
            mimeType: "multipart/form-data",
            params: { 'fileName': filename, 'param': this.caption, 'checkbox': this.checkboxpub, 'userid': this.iduser }
        };
        var fileTransfer = this.transfer.create();
        this.loading = this.loadingCtrl.create({
            content: 'Uploading...',
        });
        this.loading.present();
        // Use the FileTransfer to upload the image
        fileTransfer.upload(targetPath, url, options).then(function (data) {
            _this.loading.dismissAll();
            // this.presentToast('Image succesful uploaded.');
            // this.presentToast(JSON.stringify(data));
            _this.presentToast("Success.");
            // alert(JSON.stringify(data));
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__eyeme_eyeme__["a" /* EyemeListPage */], {
                filename: "",
                curname: "",
                corpath: ""
            });
        }, function (err) {
            _this.loading.dismissAll();
            _this.presentToast('Error while uploading file.');
            // alert(JSON.stringify(err));
        });
    };
    ListPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        console.log('ionViewDidEnter ListPage');
        this.storage.get('id_user').then(function (val) {
            _this.iduser = val;
            console.log(_this.iduser);
        }, function (error) { return console.error('Error storing LoginData', error); });
    };
    return ListPage;
}());
ListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"D:\xampp\htdocs\eyeside3\src\pages\list\list.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n      Eyeme Upload\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n \n\n<ion-content padding>\n\n  <img src="{{pathForImage(lastImage)}}" style="width: 100%" [hidden]="lastImage === null">\n\n  <h3 [hidden]="lastImage !== null">Please Select Image!</h3>\n\n  \n\n  <ion-list>\n\n\n\n   <ion-item>\n\n     <ion-label>Caption</ion-label>\n\n     <ion-input type="text" [(ngModel)]="caption"></ion-input>\n\n   </ion-item>\n\n   \n\n   <ion-item>\n\n     <ion-label>Publish</ion-label>\n\n     <ion-checkbox [(ngModel)]="checkboxpub" (ionChange)="updateCheckboxpub()"></ion-checkbox>\n\n   </ion-item>\n\n\n\n </ion-list>\n\n</ion-content>\n\n \n\n<ion-footer>\n\n  <ion-toolbar color="primary">\n\n    <ion-buttons>\n\n      <!--<button ion-button icon-left (click)="presentActionSheet()">\n\n        <ion-icon name="camera"></ion-icon>Select Image\n\n      </button>-->\n\n      <button ion-button icon-left (click)="uploadImage()" [disabled]="lastImage === null">\n\n        <ion-icon name="cloud-upload"></ion-icon>Upload\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"D:\xampp\htdocs\eyeside3\src\pages\list\list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_transfer__["a" /* Transfer */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_path__["a" /* FilePath */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
], ListPage);

//# sourceMappingURL=list.js.map

/***/ })

},[208]);
//# sourceMappingURL=main.js.map