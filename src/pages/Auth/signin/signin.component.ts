import { Component, inject, OnInit } from '@angular/core';
import { AuthConfig } from 'angular-oauth2-oidc';
import { AuthService } from '../../../services/auth/auth.service';


@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [],
  templateUrl: './signin.component.html',
  styles: ``
})
export class SigninComponent implements OnInit  {
  auth = inject(AuthService)

  ngOnInit(): void {
    this.auth.login()
  }

}
