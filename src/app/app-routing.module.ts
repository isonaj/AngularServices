import { IronThroneCandidatesComponent } from './iron-throne-candidates/iron-throne-candidates.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeathListComponent } from './death-list/death-list.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: DeathListComponent },
  { path: 'about', component: AboutComponent },
  { path: 'iron-throne-candidates', component: IronThroneCandidatesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
