import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { CommunicationService } from './services/communication.service';
import { UserInfoService } from './services/user-info.service'
import { SmartComponent } from './smart/chat/smart.component';
import { KeyExchangeService } from './services/key-exchange.service';
import { PresnetationComponent } from './presentation/chat/presnetation.component'
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule, MatDividerModule } from '@angular/material';
import { PresentationLoginComponent } from './presentation/login/presentation-login/presentation-login.component';
import { SmartLoginComponent } from './smart/login/smart-login/smart-login.component';
import { SmartMenuBarComponent } from './smart/menu/smart-menu-bar/smart-menu-bar.component';
import { PresentationMenuBarnComponent } from './presentation/menu/presentation-menu-barn/presentation-menu-barn.component';


const routes: Routes = [
    { path: 'chat', component: SmartComponent },
    { path: 'login', component: SmartLoginComponent },
    {path : '', component : SmartLoginComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    SmartComponent,
    PresnetationComponent,
    PresentationLoginComponent,
    SmartLoginComponent,
    SmartMenuBarComponent,
    PresentationMenuBarnComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatTableModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CommunicationService,
              UserInfoService,
              KeyExchangeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
