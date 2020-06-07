import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    // { path: '/dashboard', title: 'Dashboard',  icon: 'pe-7s-graph', class: '' },
    // { path: '/user', title: 'User',  icon:'pe-7s-user', class: '' },
    { path: '/stock', title: 'stock',  icon:'pe-7s-cart', class: '' },
    // { path: '/table', title: 'item-settings',  icon:'pe-7s-settings', class: '' },
    // { path: '/typography', title: 'billing',  icon:'pe-7s-print', class: '' },
    { path: '/billing', title: 'billing',  icon:'pe-7s-print', class: '' },
    { path: '/item-settings', title: 'item-settings',  icon:'pe-7s-settings', class: '' },
    { path: '/customer', title: 'customers',  icon:'pe-7s-settings', class: '' },



//     { path: '/icons', title: 'Icons',  icon:'pe-7s-science', class: '' },
//     { path: '/maps', title: 'Maps',  icon:'pe-7s-map-marker', class: '' },
//     { path: '/notifications', title: 'Notifications',  icon:'pe-7s-bell', class: '' },
//     { path: '/upgrade', title: 'Upgrade to PRO',  icon:'pe-7s-rocket', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
