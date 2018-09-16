import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule }    from '@angular/common/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SmartComponent } from './smart/chat/smart.component';
import { PresnetationComponent } from './presentation/chat/presnetation.component'
import { PresentationLoginComponent } from './presentation/login/presentation-login/presentation-login.component';
import { SmartLoginComponent } from './smart/login/smart-login/smart-login.component';
import { SmartMenuBarComponent } from './smart/menu/smart-menu-bar/smart-menu-bar.component';
import { PresentationMenuBarnComponent } from './presentation/menu/presentation-menu-barn/presentation-menu-barn.component';

import { CommunicationService } from './services/communication.service';
import { UserInfoService } from './services/user-info.service';
import { KeyExchangeService } from './services/key-exchange.service';

import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { MaterialDesignModule } from './material-design.module';
import { AppRoutingModule } from './router.module';
import { AppComponentsModule } from './components.module';

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
    MaterialDesignModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [CommunicationService,
              UserInfoService,
              KeyExchangeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
