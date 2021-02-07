import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AndrapradeshComponent } from './andrapradesh/andrapradesh.component';
import { ContactComponent } from './contact/contact.component';
import { GujarathComponent } from './gujarath/gujarath.component';
import { HomeComponent } from './home/home.component';
import { JharkhandComponent } from './jharkhand/jharkhand.component';
import { MadyapradeshComponent } from './madyapradesh/madyapradesh.component';
import { MaharashtraComponent } from './maharashtra/maharashtra.component';
import { ThamilnaduComponent } from './thamilnadu/thamilnadu.component';
import { UttarakandComponent } from './uttarakand/uttarakand.component';
import { UttharapradeshComponent } from './uttharapradesh/uttharapradesh.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"gujarath",component:GujarathComponent},
  {path:"andrapradesh",component:AndrapradeshComponent},
  {path:"jharkhand",component:JharkhandComponent},
  {path:"madyapradesh",component:MadyapradeshComponent},
  {path:"maharashtra",component:MaharashtraComponent},
  {path:"uttharakand",component:UttarakandComponent},
  {path:"uttharapradesh",component:UttharapradeshComponent},
  {path:"thamilnadu",component:ThamilnaduComponent},
  {path:"contact",component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
