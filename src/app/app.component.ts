import { Component } from '@angular/core';
import { rate } from '../video-rate-parameter';

@Component({
  selector: 'video-test',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  videoRate = rate;
}
