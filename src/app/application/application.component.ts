import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
  visibleSidebar = false;
  items: MenuItem[];
  constructor() { }

  ngOnInit() {
    this.items = [
      {label: 'Main Page', routerLink:'/MainPage'},
      {label: 'Hr Labs Review', icon:'pi pi-list', routerLink:'/HRLabsReview'},
      {label: 'COE Priortization', icon:'pi pi-sort-amount-down', routerLink:'/COEPriortization'},
      {label: 'Dashboard', icon:'pi pi-chart-bar', routerLink:'/Dashboard'},
  ];
  }

}
