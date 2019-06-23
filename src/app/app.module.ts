import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { GotService } from './services/got.service';
import { IronThroneCandidatesComponent } from './iron-throne-candidates/iron-throne-candidates.component';
import { IronThroneComponent } from './iron-throne/iron-throne.component';
import { HomeComponent } from './home/home.component';
import { DemocracyComponent } from './democracy/democracy.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IronThroneCandidatesComponent,
    IronThroneComponent,
    DemocracyComponent
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
