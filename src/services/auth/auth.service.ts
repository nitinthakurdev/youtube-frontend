import { inject, Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from '../../app/auth.config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private oauthService:OAuthService,private http:HttpClient) { 
    this.configure()
  }

  private configure() {
    this.oauthService.initCodeFlow()
    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  login(){
    const data = this.oauthService.initLoginFlow()
    console.log(data)
  }
}
