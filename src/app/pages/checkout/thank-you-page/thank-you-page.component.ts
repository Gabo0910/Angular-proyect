import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thank-you-page',
  template: `<h1 class="title">Thanks for your purchase</h1>
  <h2 class="subtitle">Your order is on way!</h2>
  `,
  styleUrls: ['./thank-you-page.component.scss']
})
export class ThankYouPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
