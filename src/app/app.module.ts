import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeathListComponent } from './death-list/death-list.component';
import { AboutComponent } from './about/about.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { GotService } from './services/got.service';
import { IronThroneCandidatesComponent } from './iron-throne-candidates/iron-throne-candidates.component';
import { IronThroneComponent } from './iron-throne/iron-throne.component';

@NgModule({
  declarations: [
    AppComponent,
    DeathListComponent,
    AboutComponent,
    IronThroneCandidatesComponent,
    IronThroneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GotService],
  bootstrap: [AppComponent]
})
export class AppModule { }
