import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ResultComponent } from "./components/result/result.component";
import { AboutComponent } from "./pages/about/about.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { SearchComponent } from "./components/search/search.component";
import { LoginComponent } from "./pages/login/login.component";
import { LoggedInGuard } from "ngx-auth-firebaseui";
import { StatsComponent } from "./pages/stats/stats.component";

const routes: Routes = [
  { path: "", component: ResultComponent },
  { path: "about", component: AboutComponent },
  { path: "stats", component: StatsComponent },
  {
    path: "profile",
    component: ProfileComponent,
    canActivate: [LoggedInGuard]
  },
  { path: "search", component: SearchComponent },
  { path: "login", component: LoginComponent }
];

export const appRouting = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
