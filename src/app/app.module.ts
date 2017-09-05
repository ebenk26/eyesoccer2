import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { VideoPlayer } from '@ionic-native/video-player';

import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { EyemeListPage } from '../pages/eyeme/eyeme';
import { videoPlayPage } from '../pages/video/video';

import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MediaCapture } from '@ionic-native/media-capture';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    videoPlayPage,
    EyemeListPage
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
	EyemeListPage
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
