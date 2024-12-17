import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [NgIf],
  templateUrl: './layout.component.html',
  styles: ``
})
export class LayoutComponent {
  showSearch:boolean= false

  handleShowSearch (x:boolean) {
    this.showSearch = x
  }

}
