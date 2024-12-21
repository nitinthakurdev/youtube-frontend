import { AuthConfig } from 'angular-oauth2-oidc';

  export const authConfig: AuthConfig = {
    issuer: 'https://accounts.google.com',
    redirectUri: 'http://localhost:4200',
    clientId: '356948956187-gok2tfv86tsm0ng6n1jkvkcdi177viqf.apps.googleusercontent.com',
    responseType: 'code',
    scope: 'openid profile email ',
    showDebugInformation: true,
    strictDiscoveryDocumentValidation:false,
  };