import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private sidebarService: NbSidebarService) {

   }

  ngOnInit() {
  }

  toggle(){
    this.sidebarService.toggle(true);
    return false;
  }

}
