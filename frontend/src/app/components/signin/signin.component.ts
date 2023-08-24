import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  user = {
    email: '',
    password: ''
  }

  constructor(private authService: AuthService, private router: Router) { }

  signIn() {
    this.authService.signIn(this.user)
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
