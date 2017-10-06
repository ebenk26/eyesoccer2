import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { VideoPlayer } from '@ionic-native/video-player';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MemberAreaPage } from '../pages/member-area/member-area';
import { ListPage } from '../pages/list/list';
import { EyemeListPage } from '../pages/eyeme/eyeme';
import { LoginPage } from '../pages/login/login';
import { videoPlayPage } from '../pages/video/video';
import { CommentDetailPage } from '../pages/comment-detail/comment-detail';

import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MediaCapture } from '@ionic-native/media-capture';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    videoPlayPage,
    EyemeListPage,
    LoginPage,
    CommentDetailPage,
    MemberAreaPage
  ],
  imports: [
    BrowserModule,
	HttpModule,
    IonicModule.forRoot(MyApp),
	IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    videoPlayPage,
	EyemeListPage,
	LoginPage,
	CommentDetailPage,
	MemberAreaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
	File,
    Transfer,
    Camera,
	MediaCapture,
    FilePath,
	VideoPlayer,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
