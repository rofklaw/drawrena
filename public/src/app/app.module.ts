import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LogregComponent } from './logreg/logreg.component';
import { LogregService} from './logreg/logreg.service';

import { routing } from './app.routes';
import { LoginComponent } from './logreg/login/login.component';
import { RegisterComponent } from './logreg/register/register.component';
import { EaselComponent } from './easel/easel.component';

@NgModule({
  declarations: [
    AppComponent,
    LogregComponent,
    LoginComponent,
    RegisterComponent,
    EaselComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [LogregService],
  bootstrap: [AppComponent]
})
export class AppModule { }
