import { Component } from '@angular/core';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    SiteHeaderComponent,
    RouterOutlet,
  ],
})
export class AppComponent {}
