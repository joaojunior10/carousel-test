import {Component, OnInit} from '@angular/core';
import Splide from '@splidejs/splide';
import { Video } from '@splidejs/splide-extension-video';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'carousel-test';

  ngOnInit() {
    const splide1 = new Splide('#carousel1', {
      type: 'loop',
      drag: 'free',
      focus: 0,
      perPage: 3
    });
    splide1.mount();
    const splide2 = new Splide('#carousel2', {
      heightRatio: 0.1875,
      cover      : true,
      video      : {
        loop: true,
      },
      type: 'loop',
      drag: 'free',
      focus: 0,
      perPage: 3
    });
    splide2.mount( { Video } );
  }
}
