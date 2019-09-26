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
    <img src="../assets/anii-wht.png" style="width: 120px;" >

  </nb-layout-header>

  <nb-layout-column>
    Page Content <button nbButton>Hello World</button>
  </nb-layout-column>
</nb-layout>
  
  `

})
export class AppComponent {
  title = 'ani';
}
