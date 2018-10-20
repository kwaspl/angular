import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module'
import { LoginSmartComponent } from './commponents/smart/login-smart/login-smart.component';
import { LoginPresentationComponent } from './commponents/presentation/login-presentation/login-presentation.component';
import { MatCardModule, MatInputModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: [AppComponent,
    LoginSmartComponent,
    LoginPresentationComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }