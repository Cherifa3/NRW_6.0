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
    OcTeamComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
