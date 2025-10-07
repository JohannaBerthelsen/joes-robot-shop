import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'catalog', component: CatalogComponent, title: 'Catalog' },
  { path: 'cart', component: CartComponent, title: 'Cart' },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
