import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OcTeamComponent } from './pages/oc-team/oc-team.component';
import { ComingSoonComponent } from './pages/coming-soon/coming-soon.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'oc-team', component: OcTeamComponent },
  { path: 'coming-soon', component: ComingSoonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
