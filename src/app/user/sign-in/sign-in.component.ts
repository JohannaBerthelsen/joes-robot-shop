import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IUserCredentials } from '../user.model';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'bot-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  standalone: true,
  imports: [FormsModule, NgIf],
})
export class SignInComponent {
  credentials: IUserCredentials = { email: '', password: '' };
  signInError: boolean = false;

  constructor(private userService: UserService, private router: Router) {}

  signIn() {
    this.signInError = false;
    this.userService.signIn(this.credentials).subscribe({
      next: () => this.router.navigate(['/catalog']),
      error: () => (this.signInError = true),
    });
  }
}
