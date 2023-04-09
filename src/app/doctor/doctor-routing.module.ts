import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {DocComponentComponent} from "./ui/doc-component/doc-component.component";
import {AppointmentsComponent} from "./ui/appointments/appointments.component";
import {DoctorComponent} from "./doctor/doctor.component";


const routes: Routes = [
  // {path:"doc", component:DoctorComponent,
  //   children: [
      {path:"", component:DocComponentComponent},
      {path:"appointments", component:AppointmentsComponent}
//     ]
//   }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DoctorRoutingModule{}

