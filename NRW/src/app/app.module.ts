import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { ProgramListComponent } from './program-list/program-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component'; 
import { MarqueeComponent } from './marquee/marquee.component';
import { HomeComponent } from './pages/home/home.component';
import { CountdownComponent } from './countdown/countdown.component';
import { OcTeamComponent } from './pages/oc-team/oc-team.component';
import { ComingSoonComponent } from './pages/coming-soon/coming-soon.component';
import { ProgramComponent } from './pages/program/program.component';
import { ChatbotComponent } from './chatbot-circle/chatbot-circle.component';
import { ForumComponent } from './pages/forum/forum.component'; 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarWhiteComponent } from './navbar-white/navbar-white.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ProgramListComponent,
    NavbarComponent,
    CardComponent,
    MarqueeComponent,
    HomeComponent,
    CountdownComponent,
    OcTeamComponent,
    ComingSoonComponent ,
    ProgramComponent,
    ChatbotComponent,
    ForumComponent,
    NavbarWhiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
