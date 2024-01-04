import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { COEPriortizationComponent } from './coepriortization/coepriortization.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HrLabReviewComponent } from './hr-lab-review/hr-lab-review.component';
import { MainPageComponent } from './main-page/main-page.component';
import { bulbComponent } from './lightbulb/bulb-app.component'; //DN


const routes: Routes = [
  {path:'MainPage', component:MainPageComponent},
  {path: '', component:bulbComponent}, //DN
  {path:'COEPriortization', component:COEPriortizationComponent},
  {path:'HRLabsReview', component:HrLabReviewComponent},
  {path:'Dashboard', component:DashboardComponent},
  {path:'Lightbulb', component:bulbComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
