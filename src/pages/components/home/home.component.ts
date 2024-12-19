import { Component, OnInit } from '@angular/core';
import { ISerchLinks } from '../../../types/interface';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent {

  ShowList: string = "All";
  listScrollAmount: number = 0;
  lastScrollingValue: number | null = null;

  List: ISerchLinks[] = [
    { title: "All", },
    { title: "Music", },
    { title: "Live", },
    { title: "Albums", },
    { title: "Satsang", },
    { title: "T-Series", },
    { title: "Mixes", },
    { title: "Mantras", },
    { title: "Rituals", },
    { title: "Lo-fi", },
    { title: "AI", },
    { title: "Ramayan", },
    { title: "Web Development", },
    { title: "Asian music", },
    { title: "Pop music", },
    { title: "Information", },
    { title: "Recently uploaded", },
    { title: "New to you", },
  ]

  handleListClick(value: string): void {
    this.ShowList = value
  }

  ScrollLeft(): void {
    const div = document.getElementById('list-home');
    if (div) {
      this.listScrollAmount += 200;

      if (this.listScrollAmount + div.clientWidth >= div.scrollWidth) {
        this.listScrollAmount = div.scrollWidth - div.clientWidth;
        this.lastScrollingValue = div.scrollWidth - div.clientWidth;
      }

      div.scrollTo({
        left: this.listScrollAmount,
        behavior: 'smooth',
      });


    }
  }



  ScrollRight(): void {
    const div = document.getElementById('list-home');
    console.log(this.listScrollAmount)
    this.listScrollAmount -= 200;
    if (this.listScrollAmount <= 0) {
      this.listScrollAmount = 0
    }
    if (div) {
      div.scrollTo({
        left: this.listScrollAmount,
        behavior: 'smooth'
      })
    }

  }


}
