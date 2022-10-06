import {Component, OnInit} from '@angular/core';
import Splide from '@splidejs/splide';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'carousel-test';

  ngOnInit() {
    const splide = new Splide('.splide', {
      type: 'loop',
      drag: 'free',
      focus: 0,
      perPage: 3
    });
    splide.mount();
  }
}
