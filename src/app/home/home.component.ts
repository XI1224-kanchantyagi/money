import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public isOpen: boolean;
  constructor() {}

  ngOnInit(): void {
    this.isOpen = false;
  }

  public toggleSidebar(event: boolean): void {
    this.isOpen = event;
  }

}
