import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Events } from './components/events/events';
import { EventDetail } from './components/event-detail/event-detail';
import { Gallery } from './components/gallery/gallery';
import { Contact } from './components/contact/contact';
import { NoticeBoard } from './components/notice-board/notice-board';
import { ResidentDirectory } from './components/resident-directory/resident-directory';

@NgModule({
  declarations: [
    App,
    Header,
    Footer,
    Home,
    About,
    Events,
    EventDetail,
    Gallery,
    Contact,
    NoticeBoard,
    ResidentDirectory
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
