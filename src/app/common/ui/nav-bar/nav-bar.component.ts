import { Component } from '@angular/core';
import {CommonService} from "../../common.service";
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
   common: any;
  constructor(private cService: CommonService) {
    this.common = cService
  }


}
