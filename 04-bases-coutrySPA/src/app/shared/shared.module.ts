import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AboutPageComponent } from './pages/about-page/about-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { LoadingComponent } from './components/loading/loading.component';




@NgModule({
  declarations: [
    AboutPageComponent,
    ContactComponent,
    HomePageComponent,
    SidebarComponent,
    SearchBoxComponent,
    LoadingComponent,


  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    AboutPageComponent,
    ContactComponent,
    HomePageComponent,
    SidebarComponent,
    SearchBoxComponent,
    LoadingComponent
  ]
})
export class SharedModule { }
