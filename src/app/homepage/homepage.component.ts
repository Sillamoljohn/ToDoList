import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  categories = [
    { title: 'Work', active: true },
    { title: 'Personal',  active: false }
  ];
  constructor() {}

  ngOnInit(): void {}
}
