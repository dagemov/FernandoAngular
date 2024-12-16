import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';


@Component
({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})

export class MenuComponent  implements OnInit
{
  menuItems: MenuItem[] | undefined;

  constructor(private route:Router){}

    ngOnInit() {
        this.menuItems = [
            {
                label: 'Pipes Angular',
                icon: 'pi pi-desktop',
                items:[
                  {
                    label:"text and dates",
                    icon:'pi pi-aling-left',
                    routerLink:"",

                  },
                  {
                    label:'Numbers',
                    icon:"pi pi-dollar",
                    routerLink:'numbers'
                  },
                  {
                    label:'No comons',
                    icon:'pi pi-globe',
                    routerLink:'uncommom'
                  }
                ]
            },
            {
                label: 'Customs Pipes',
                icon: 'pi pi-cog',
                items:[
                  {
                    label:'New item',
                    icon:'pi pi-cog'
                  }
                ]
            },

        ]
    }

}
