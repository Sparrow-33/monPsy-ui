import { Component } from '@angular/core';
import {CommonService} from "./common/common.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  common:any;
  constructor(private commonService:CommonService) {
    this.common  = commonService;
  }



}
