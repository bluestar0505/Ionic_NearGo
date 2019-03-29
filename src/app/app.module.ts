import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


import { AccountPage } from '../pages/account/account';
import { AddreviewPage } from '../pages/addreview/addreview';
import { CategoriesPage } from '../pages/categories/categories';
import { ChatsPage } from '../pages/chats/chats';
import { ChattingPage } from '../pages/chatting/chatting';
import { ConditionPage } from '../pages/condition/condition';
import { EventdetailPage } from '../pages/eventdetail/eventdetail';
import { HelpPage } from '../pages/help/help';
import { HomePage } from '../pages/home/home';
import { MapPage } from '../pages/map/map';
import { OfferdetailPage } from '../pages/offerdetail/offerdetail';
import { PasswordPage } from '../pages/password/password';
import { ProfilePage } from '../pages/profile/profile';
import { RegisterPage } from '../pages/register/register';
import { ReviewPage } from '../pages/review/review';
import { SavedPage } from '../pages/saved/saved';
import { SearchPage } from '../pages/search/search';
import { SigninPage } from '../pages/signin/signin';
import { StorePage } from '../pages/store/store';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    AccountPage,
    AddreviewPage,
    CategoriesPage,
    ChatsPage,
    ChattingPage,
    ConditionPage,
    EventdetailPage,
    HelpPage,
    HomePage,
    MapPage,
    OfferdetailPage,
    PasswordPage,
    ProfilePage,
    RegisterPage,
    ReviewPage,
    SavedPage,
    SearchPage,
    SigninPage,
    StorePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ], 
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AccountPage,
    AddreviewPage,
    CategoriesPage,
    ChatsPage,
    ChattingPage,
    ConditionPage,
    EventdetailPage,
    HelpPage,
    HomePage,
    MapPage,
    OfferdetailPage,
    PasswordPage,
    ProfilePage,
    RegisterPage,
    ReviewPage,
    SavedPage,
    SearchPage,
    SigninPage,
    StorePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
