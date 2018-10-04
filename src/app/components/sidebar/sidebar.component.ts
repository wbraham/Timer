import { Component, OnInit } from '@angular/core';

declare interface Routing {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: Routing[] = [
    { path: '/timer', title: 'Timer',  icon:'dashboard', class: '' },
    { path: '/my-tasks', title: 'My Tasks',  icon:'content_paste', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
}
