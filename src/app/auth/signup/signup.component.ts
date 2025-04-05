import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  errorExists = false;
  errorText = "";  

  constructor (private authService: AuthService, private router: Router) {}

  onSubmit(form: NgForm){

    // ? ako ne nadje mail koji vec postoji
    if(!this.authService.getUser(form.value.email)){
      this.errorExists = false;

      var newUser = this.authService.registerUser(form.value.email,
                                                  form.value.password,
                                                  form.value.birthDate);

      this.router.navigate(['']);
    } else {
      this.errorExists = true;
      this.errorText = "User with this email already exists.";
    }


  }
}
