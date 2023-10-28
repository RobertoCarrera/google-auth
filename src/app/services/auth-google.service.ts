import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root'
})
export class AuthGoogleService {

  constructor(private oAuthService: OAuthService) { 
    this.initLogin();
  }

  initLogin(){

    const config: AuthConfig = {

      issuer: 'https://accounts.google.com', //Siempre se establece que es un https
      strictDiscoveryDocumentValidation: false, //Si estamos conectándonos de forma local: false, sino: true
      clientId: '411923189675-uj5gfskqb6cvvpqqomi4jdg3cfoeuguv.apps.googleusercontent.com', //Mapeamos el ID del cliente. Lo generamos en la consola de Google
      redirectUri: window.location.origin + '/main', //Página de redireccionamiento
      scope: 'openid profile email' //Traer información de nuestra cuenta de Google
    }

    this.oAuthService.configure(config);
    this.oAuthService.setupAutomaticSilentRefresh();
    this.oAuthService.loadDiscoveryDocumentAndTryLogin();
  }

  login(){

    this.oAuthService.initLoginFlow();
  }

  logout(){

    this.oAuthService.logOut();
  }

  getProfile(){

    return this.oAuthService.getIdentityClaims();
  }
}
