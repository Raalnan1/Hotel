import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Routes/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { LinkShareComponent } from './Routes/link-share/link-share.component';
import { VideosComponent } from './Routes/videos/videos.component';
import { ChannelModule } from './Modules/channel/channel.module';
import { APIModule } from './Modules/api/api.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { APIService } from './Services/api.service';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    LinkShareComponent,
    VideosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule, ChannelModule
    , HttpClientModule
  ],
  providers: [APIService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
