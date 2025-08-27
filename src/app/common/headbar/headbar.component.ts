import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headbar',
  templateUrl: './headbar.component.html',
  styleUrls: ['./headbar.component.scss'],
  standalone: false,
})
export class HeadbarComponent implements OnInit {
  isMenuOpen = false;

  constructor() {}

  ngOnInit(): void {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
