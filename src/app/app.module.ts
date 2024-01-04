import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'; 
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { navComponent } from './app-nav/nav-app.component'; //DN
import { bulbComponent } from './lightbulb/bulb-app.component'; //DN
import { myIdeasComponent } from './my-ideas/ideas.component'; // DN

//The routing module Daniel Used
import { RouterModule} from '@angular/router'; //DN

//PrimeNG stuffs
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';                 //api
import {ButtonModule} from 'primeng/button';
import {SidebarModule} from 'primeng/sidebar';
import {MenuModule} from 'primeng/menu';
import {PanelModule} from 'primeng/panel';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MainPageComponent } from './main-page/main-page.component';
import { ApplicationComponent } from './application/application.component';
import { HrLabReviewComponent } from './hr-lab-review/hr-lab-review.component';
import { COEPriortizationComponent } from './coepriortization/coepriortization.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewIdeaFormComponent } from './new-idea-form/new-idea-form.component';
import { from } from 'rxjs';
import { ViewIdeasComponent } from './view-ideas/view-ideas.component';



@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ApplicationComponent,
    HrLabReviewComponent,
    COEPriortizationComponent,
    DashboardComponent,
    navComponent,  //DN
    NewIdeaFormComponent,
    bulbComponent, //DN
    ViewIdeasComponent,
    myIdeasComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AccordionModule,
    ButtonModule,
    SidebarModule,
    MenuModule,
    PanelModule,
    RouterModule.forRoot([  // DN
      { path: '', component: AppComponent },
      {path:'Dashboard', component: DashboardComponent}
    ]),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
