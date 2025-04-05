import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  errorExists = false;
  errorText = "";
  
  constructor (private authService: AuthService, private router: Router) {}

  onSubmit(form: NgForm){

    var email = form.value.email;
    var password = form.value.password;
    
    /*
      ? ovo ispod je provera validnosti emaila, u smislu ako ne nadjemo email koji
      ? smo trazili onda znaci da korisnik nije registrovan pomocu ovog emaila
    */
    var emailValid = this.authService.getUser(email);

    // ? ista prica samo za pass
    var passwordValid = this.authService.isPasswordCorrect(email, password);

    // ? provera za obe greske
    if(!emailValid){
      this.errorExists = true;
      this.errorText = "User " + email + " isn't registered. ";
    } else if(!passwordValid){
      this.errorExists = true;
      this.errorText = "Your password is incorrect. ";
    } else {
      this.router.navigate(['']);
    }


  }



}
