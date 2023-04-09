import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocComponentComponent } from './ui/doc-component/doc-component.component';
import { AppointmentsComponent } from './ui/appointments/appointments.component';
import { DoctorComponent } from './doctor/doctor.component';
import {RouterOutlet} from "@angular/router";
import {DoctorRoutingModule} from "./doctor-routing.module";



@NgModule({
  declarations: [
    DocComponentComponent,
    AppointmentsComponent,
    DoctorComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    DoctorRoutingModule
  ]
})
export class DoctorModule { }
