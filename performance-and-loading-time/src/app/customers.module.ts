import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuSmartComponent }  from './commponents/smart/menu-smart/menu-smart.component';
import { ShellPresentationComponent } from './commponents/presentation/shell-presentation/shell-presentation.component';
import { MenuPresentationComponent } from  './commponents/presentation/menu-presentation/menu-presentation.component';
import { AboutPresentationComponent } from './commponents/presentation/about-presentation/about-presentation.component';
import { ContactPresentationComponent } from './commponents/presentation/contact-presentation/contact-presentation.component';

import { AboutSmartComponent  } from './commponents/smart/about-smart/about-smart.component';
import { ContactSmartComponent  } from './commponents/smart/contact-smart/contact-smart.component';
import { MatModuleModule } from './mat-module.module';

import {CommonModule} from '@angular/common';

const routes: Routes = [
  { path: '', component : ShellPresentationComponent,
      children: [
        {path: 'about', component : AboutSmartComponent }, 
        {path: 'contact', component : ContactSmartComponent }
      ]
    }
];

@NgModule({
  imports: [CommonModule,  MatModuleModule , RouterModule.forChild(routes) ], 
  exports: [ RouterModule ], 
  declarations: [ MenuPresentationComponent, MenuSmartComponent,
                  ShellPresentationComponent,
                  AboutSmartComponent, AboutPresentationComponent,
                  ContactSmartComponent, ContactPresentationComponent]
})
export class CustomersModule {}