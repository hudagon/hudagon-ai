import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.css']
})
export class HamburgerComponent implements OnInit {
  bar1: any | undefined;
  bar2: any | undefined;
  bar3: any | undefined;
  
  ngOnInit(): void {
    this.bar1 = document.getElementById("bar1")
    this.bar2 = document.getElementById("bar2")
    this.bar3 = document.getElementById("bar3")
  }
  
  toggleHamburger() {
    this.bar1.classList.toggle("toggle");
    this.bar2.classList.toggle("toggle");
    this.bar3.classList.toggle("toggle");
  }
}
