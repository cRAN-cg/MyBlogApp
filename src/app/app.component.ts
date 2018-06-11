import { Component } from '@angular/core';
import { Blog } from './blog.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  blogList: Blog[] = [];
  title = 'blog';
}
