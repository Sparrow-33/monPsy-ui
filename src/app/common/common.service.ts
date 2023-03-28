import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  title = 'monpsy-ui2';
  scrollTop = false;
  navigationOpen = false
  stickyMenu = false;
  dropdown = false;
  darkMode = false;
  page = "home"
  filterTab = 2;
  billPlan = "monthly"
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  onScroll() {
    this.scrollTop = (window.pageYOffset > 50) ? true : false;
  }
  onWindowScroll() {
    this.stickyMenu = (window.pageYOffset > 20) ? true : false;
  }

  toggleDropdown() {
    this.dropdown = !this.dropdown;
  }
}
