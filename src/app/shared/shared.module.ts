import { NgModule } from '@angular/core';

import {
  LayoutsModule
} from '../layouts';

import { BootstrapComponent } from './components/bootstrap/bootstrap.component';

@NgModule({
  declarations: [
    BootstrapComponent,
  ],
  imports: [
    LayoutsModule,
  ],
  exports: [
    BootstrapComponent,
  ]
})
export class SharedModule { }
