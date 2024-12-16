import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component
({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})

export class MenuComponent  implements OnInit
{
  public menuItems: MenuItem[] =[];

  ngOnInit() {
    this.menuItems = [
        { label: 'New', icon: 'pi pi-plus' },
        { label: 'Search', icon: 'pi pi-search' }
    ];
}
}