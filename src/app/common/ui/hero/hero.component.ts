import { Component } from '@angular/core';
import {CommonService} from "../../common.service";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  common:any;
  constructor(private commonService:CommonService) {
    this.common  = commonService;
  }
}
