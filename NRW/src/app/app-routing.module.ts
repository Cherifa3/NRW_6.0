import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OcTeamComponent } from './pages/oc-team/oc-team.component';
import { ComingSoonComponent } from './pages/coming-soon/coming-soon.component';
import { ProgramComponent } from './pages/program/program.component';
import { ForumComponent } from './pages/forum/forum.component';
import { SpeakersComponent } from './pages/speakers/speakers.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'oc-team', component: OcTeamComponent },
  { path: 'Technical-challenges', component: ComingSoonComponent },
  { path: 'program', component: ProgramComponent },
  { path: 'forum', component: ForumComponent },
  {path: 'speakers', component: SpeakersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
