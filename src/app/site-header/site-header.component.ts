import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'bot-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css'],
  standalone: true,
  imports: [RouterModule]
})
export class SiteHeaderComponent {}
