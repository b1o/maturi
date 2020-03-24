import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class LandingPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
