import { IronThroneComponent } from './iron-throne/iron-throne.component';
import { DemocracyComponent } from './democracy/democracy.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'democracy', component: DemocracyComponent },
  { path: 'iron-throne/:id', component: IronThroneComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
