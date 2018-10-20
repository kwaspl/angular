import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { LoginSmartComponent  } from './commponents/smart/login-smart/login-smart.component';


const routes: Routes = [
    { path: '', component : LoginSmartComponent},
    { path: 'ui', loadChildren: './customers.module#CustomersModule'},
    { path: '**', component : LoginSmartComponent}
  ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ], 
  exports : [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }