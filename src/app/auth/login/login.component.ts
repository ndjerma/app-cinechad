import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  errorExists = false;
  errorText = "";

  onSubmit(form: NgForm){
    var email = form.value.email;
    var password = form.value.password;

    // * ovo obrisi posle, za sada radi
    console.log(email, password);
  }
}
