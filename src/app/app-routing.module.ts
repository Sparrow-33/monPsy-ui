import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {SigninComponent} from "./common/ui/signin/signin.component";
import {HeroComponent} from "./common/ui/hero/hero.component";
import {SignupComponent} from "./common/ui/signup/signup.component";
import {DoctorComponent} from "./doctor/doctor/doctor.component";

const routes: Routes = [
  {path: '', component: HeroComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  // {path:'doc',redirectTo:'doc1'},
  { path:'doc',
  loadChildren:() => import('./doctor/doctor.module').then(d => d.DoctorModule)},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}
