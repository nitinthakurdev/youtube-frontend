import {NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [NgIf,RouterLink,RouterLinkActive,NgFor,RouterOutlet,NgClass],
  templateUrl: './layout.component.html',
  styles: ``
})
export class LayoutComponent {
  showSearch:boolean= false
  showSidebar:boolean = false

  handleShowSearch (x:boolean) {
    this.showSearch = x
  }

  footerLinks = [
    {path:"",title:"About"},
    {path:"",title:"Press"},
    {path:"",title:"Copyright"},
    {path:"",title:"Contact us"},
    {path:"",title:"Creators"},
    {path:"",title:"Advertise"},
    {path:"",title:"Developers"},
  ]
  
  handleShowSideBar(){
    this.showSidebar = !this.showSidebar
  }

}
