import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule, MatInputModule, MatCardModule } from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  imports: [
    MatButtonModule, MatCheckboxModule, MatInputModule, MatToolbarModule,
    MatMenuModule,MatIconModule, MatCardModule, MatTableModule
  ],
  exports: [
    MatButtonModule, MatCheckboxModule, MatInputModule, MatToolbarModule,
    MatMenuModule,MatIconModule, MatCardModule, MatTableModule
  ],
  declarations: []
})
export class MatModuleModule { }