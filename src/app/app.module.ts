import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { routerConfig } from './router.config';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ContactComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routerConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
