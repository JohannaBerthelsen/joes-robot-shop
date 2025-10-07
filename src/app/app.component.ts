import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { CartComponent } from './cart/cart.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    HomeComponent,
    CatalogComponent,
    SiteHeaderComponent,
    CartComponent,
    RouterOutlet,
  ],
})
export class AppComponent {}
