import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuSmartComponent }  from './commponents/smart/menu-smart/menu-smart.component';
import { ShellPresentationComponent } from './commponents/presentation/shell-presentation/shell-presentation.component';
import { MenuPresentationComponent } from  './commponents/presentation/menu-presentation/menu-presentation.component';
import { MutableTableComponent } from './commponents/presentation/mutable-presentation/mutable-table/mutable-table.component';
import { ImmutablePresentationComponent } from './commponents/presentation/immutable-presentation/immutable-presentation.component';

import { MutableSmartComponent  } from './commponents/smart/mutable-smart/mutable-smart.component';
import { ImmutableSmartComponent  } from './commponents/smart/immutable-smart/immutable-smart.component';
import { MatModuleModule } from './mat-module.module';

import {CommonModule} from '@angular/common';
import { MutableActionsComponent } from './commponents/presentation/mutable-presentation/mutable-actions/mutable-actions.component';

const routes: Routes = [
  { path: '', component : ShellPresentationComponent,
      children: [
        {path: 'mutable', component : MutableSmartComponent }, 
        {path: 'immutable', component : ImmutableSmartComponent }
      ]
    }
];

@NgModule({
  imports: [CommonModule,  MatModuleModule , RouterModule.forChild(routes) ], 
  exports: [ RouterModule ], 
  declarations: [ MenuPresentationComponent, MenuSmartComponent,
                  ShellPresentationComponent,
                  MutableSmartComponent, MutableTableComponent, MutableActionsComponent,
                  ImmutableSmartComponent, ImmutablePresentationComponent]
})
export class CustomersModule {}