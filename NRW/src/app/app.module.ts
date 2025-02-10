import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { ProgramListComponent } from './program-list/program-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ProgramListComponent
    NavbarComponent,
    CardComponent
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
