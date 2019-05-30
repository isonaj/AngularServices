import { IronThroneComponent } from './iron-throne/iron-throne.component';
import { IronThroneCandidatesComponent } from './iron-throne-candidates/iron-throne-candidates.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeathListComponent } from './death-list/death-list.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: DeathListComponent },
  { path: 'about', component: AboutComponent },
  { path: 'iron-throne-candidates', component: IronThroneCandidatesComponent },
  { path: 'iron-throne/:id', component: IronThroneComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
