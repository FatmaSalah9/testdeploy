import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './view/includes/header/header.component';
import { UserDetailsComponent } from './view/Pages/user-details/user-details.component';
import { UserListComponent } from './view/Pages/user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadingComponent } from './view/includes/loading/loading.component';
import { FooterComponent } from './view/includes/footer/footer.component';
import { BannerComponent } from './view/includes/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserDetailsComponent,
    UserListComponent,
    LoadingComponent,
    FooterComponent,
    BannerComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
