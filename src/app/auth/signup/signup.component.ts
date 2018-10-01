import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm: FormGroup;
  errorMessage: string;

  constructor(private _formBuilder: FormBuilder, //permet la construction du formulaire reactif
              private _authService: AuthService, //appel au service d'authentification
              private _router: Router) { } //permet de générer la route à suivre une fois authentifié

  ngOnInit() {
    //initialise le formulaire
    this.initForm();
  }

  initForm(){
    this.signUpForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern( /[0-9a-zA-Z]{6,}/)]]
    });
  }

  /**
   * Description : Envoie du formulaire contenant les informations de l'utilisateur
   */
  onSubmit(){
    const email = this.signUpForm.get('email').value;
    const password = this.signUpForm.get('password').value;
    this._authService.createNewUser(email, password).then( 
      () =>{
        this._router.navigate(['/books']);
      },
      (error) =>{
        this.errorMessage = error;
      });
  }
}
