import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { templateJitUrl } from '@angular/compiler';

@Component({
  selector: 'app-root', 
  //templateUrl: './app.component.html',
 // styleUrls: ['./app.component.css'],

  //nebular template:
  template: `

  <nb-layout>
  <nb-layout-header fixed>
    <img routerLink='/' src="../assets/anii-wht.png" style="width: 120px;" >
    <nb-actions size=medium>
      <nb-action routerLink='/'>Profile</nb-action>
      <nb-action routerLink='/'>Browse</nb-action>
      <nb-action routerLink='/'>About</nb-action>
      <nb-action ><button nbButton outline status="info" size="small" routerLink='/'>Login</button></nb-action>
    </nb-actions>

    <form>
      <input type='text' nbInput status='info' placeholder="Search e.g Kimetsu No Yaiba" fieldSize="small" shape="round" >
    </form>

  </nb-layout-header>
<nb-sidebar>
  Some Actions
</nb-sidebar>
<nb-layout>
  <nb-layout-column class="colored-column-warning">Second</nb-layout-column>
  <nb-layout-column class="colored-column-info">Third</nb-layout-column>
  <nb-layout-column left class="colored-column-success">First (but third in template)</nb-layout-column>
</nb-layout>
  
  `

})
export class AppComponent {
  title = 'ani';
}
