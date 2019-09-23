import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultComponent } from './components/result/result.component';
import { AboutComponent } from './pages/about/about.component';
import { ProfileComponent } from './components/profile/profile.component';


const routes: Routes = [{ path: '', component: ResultComponent },
{ path: 'about', component: AboutComponent }, { path: 'profile', component: ProfileComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
