import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { GujarathComponent } from './gujarath/gujarath.component';
import { AndrapradeshComponent } from './andrapradesh/andrapradesh.component';
import { MadyapradeshComponent } from './madyapradesh/madyapradesh.component';
import { UttarakandComponent } from './uttarakand/uttarakand.component';
import { MaharashtraComponent } from './maharashtra/maharashtra.component';
import { UttharapradeshComponent } from './uttharapradesh/uttharapradesh.component';
import { JharkhandComponent } from './jharkhand/jharkhand.component';
import { ThamilnaduComponent } from './thamilnadu/thamilnadu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutusComponent,
    GujarathComponent,
    AndrapradeshComponent,
    MadyapradeshComponent,
    UttarakandComponent,
    MaharashtraComponent,
    UttharapradeshComponent,
    JharkhandComponent,
    ThamilnaduComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
