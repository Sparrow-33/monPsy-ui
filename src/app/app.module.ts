import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from "./app-routing.module";
import { AppComponent } from './app.component';
import { NavBarComponent } from './common/ui/nav-bar/nav-bar.component';
import { FooterComponent } from './common/ui/footer/footer.component';
import { SigninComponent } from './common/ui/signin/signin.component';
import { HeroComponent } from './common/ui/hero/hero.component';
import { SignupComponent } from './common/ui/signup/signup.component';
import {DoctorModule} from "./doctor/doctor.module";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    SigninComponent,
    HeroComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DoctorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
