import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  user = {
    email: '',
    password: ''
  }

  constructor(private authService: AuthService, private router: Router) {}

  signUp() {
    this.authService.signUp(this.user)
      .subscribe(
        response => {
          console.log(response)
          localStorage.setItem('token', response.token)
          this.router.navigate(['/private'])
        },
        error => console.log(error)
      )
  }
}
