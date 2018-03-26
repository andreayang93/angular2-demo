import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // template: `<app-login></app-login>`,
  template:`
  <button routerLink="/login">Login</button>
  <button routerLink="/admin">Admin</button>
  <button routerLink="">Home</button>
  <router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
}
