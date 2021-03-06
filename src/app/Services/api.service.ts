import { HttpClient } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { AppComponent } from '../app.component';
import { UserIdentityModel } from '../Models/UserIdentityModel';
import { ChannelModule } from '../Modules/channel/channel.module';

@Injectable({
  providedIn: 'root'
})

@NgModule({})

export class APIService {
  apiURL = "http://localhost:3000/UserIdentity";
  UserIdentity: any;
  CurrentChannel: string;

  getUserIdentity() {

    switch (this.CurrentChannel) {
      case 'LocalHost':
        this.apiURL = "http://localhost:3000/UserIdentity";
        break;
      default:
        this.apiURL = "http://localhost:3000/UserIdentity";
    }

    return this.HttpClient.get<UserIdentityModel[]>(this.apiURL);
  };

  constructor(private HttpClient: HttpClient, private channelModule: ChannelModule) {
    this.CurrentChannel = channelModule.getChannel();
    console.log('this.CurrentChannel(ln21): ', this.CurrentChannel);
  };
}
