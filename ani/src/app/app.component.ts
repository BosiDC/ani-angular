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
  <nb-layout-header fixed>Anii</nb-layout-header>

  <nb-sidebar>Anime Search</nb-sidebar>

  <nb-layout-column>
    Page Content <button nbButton>Hello World</button>
  </nb-layout-column>
</nb-layout>
  
  `

})
export class AppComponent {
  title = 'ani';
}
