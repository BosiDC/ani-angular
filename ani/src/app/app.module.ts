import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
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
  NbSelectModule
} from "@nebular/theme";
import { NbEvaIconsModule } from "@nebular/eva-icons";
import { appRouting } from "./app-routing.module";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { SearchItemComponent } from "./Components/search-item/search-item.component";
import { CurrentItemComponent } from './components/current-item/current-item.component';

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
    CurrentItemComponent
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
    NbCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
