import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Routes/home/home.component';
import { LinkShareComponent } from './Routes/link-share/link-share.component';
import { VideosComponent } from './Routes/videos/videos.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'LinkShare', component: LinkShareComponent },
  { path: 'Videos', component: VideosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
