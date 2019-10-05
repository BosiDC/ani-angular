import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { HeaderComponent } from "./layout/header/header.component";
import { SearchComponent } from "./components/search/search.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { ResultComponent } from "./components/result/result.component";
import { AboutComponent } from "./pages/about/about.component";
import { ResultItemComponent } from "./components/result-item/result-item.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

//nebular
import {
  NbThemeModule,
  NbLayoutModule,
  NbSidebarModule,
  NbButtonModule,
  NbActionsModule,
  NbInputModule,
  NbCheckboxModule,
  NbCardModule,
  NbSelectModule,
  NbUserModule,
  NbToggleModule,
  NbTabsetModule
} from "@nebular/theme";

import { NbEvaIconsModule } from "@nebular/eva-icons";
import { appRouting } from "./app-routing.module";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { SearchItemComponent } from "./components/search-item/search-item.component";
import { CurrentItemComponent } from "./components/current-item/current-item.component";
import { LoginComponent } from "./pages/login/login.component";
import { NgxAuthFirebaseUIModule } from "ngx-auth-firebaseui";
import { AngularFireModule } from "@angular/fire";
import { environment } from "../environments/environment";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { FavouriteItemComponent } from "./components/favourite-item/favourite-item.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    ProfileComponent,
    ResultComponent,
    AboutComponent,
    ResultItemComponent,
    FooterComponent,
    SidebarComponent,
    SearchItemComponent,
    CurrentItemComponent,
    LoginComponent,
    FavouriteItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    //nebular
    NbThemeModule.forRoot({ name: "dark" }),
    appRouting,
    NbSidebarModule.forRoot(),
    NbButtonModule,
    NbLayoutModule,
    NbEvaIconsModule,
    BrowserAnimationsModule,
    NbActionsModule,
    NbInputModule,
    NbCheckboxModule,
    NbSelectModule,
    NbCardModule,
    NbUserModule,
    NbToggleModule,
    NbTabsetModule,
    NgxAuthFirebaseUIModule.forRoot(
      {
        apiKey: "AIzaSyD-WnXsJ6CAR6B4BbpxIXfmBeRE5cEiddc",
        authDomain: "anii-420.firebaseapp.com",
        databaseURL: "https://anii-420.firebaseio.com",
        projectId: "anii-420",
        storageBucket: "anii-420.appspot.com",
        messagingSenderId: "10244473983",
        appId: "1:10244473983:web:842f9903f631eb40276b4a",
        measurementId: "G-JMJKXCWJK0"
      },
      () => "anii",
      {
        authGuardFallbackURL: "/login",
        authGuardLoggedInURL: "/profle"
      }
    ),

    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
