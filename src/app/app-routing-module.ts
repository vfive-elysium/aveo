import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { EventDetail } from './components/event-detail/event-detail';
import { Events } from './components/events/events';
import { Gallery } from './components/gallery/gallery';
import { Home } from './components/home/home';
import { NoticeBoard } from './components/notice-board/notice-board';
import { ResidentDirectory } from './components/resident-directory/resident-directory';

const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'events', component: Events },
  { path: 'events/:id', component: EventDetail },
  { path: 'gallery', component: Gallery },
  { path: 'contact', component: Contact },
  { path: 'notice-board', component: NoticeBoard },
  { path: 'residents', component: ResidentDirectory },
  { path: '**', redirectTo: '' }  // fallback route
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
