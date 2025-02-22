import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CountWorkpointPageRoutingModule } from './count-workpoint-routing.module';

import { CountWorkpointPage } from './count-workpoint.page';
import { EditWorkpointComponent } from 'src/app/components/edit-workpoint/edit-workpoint.component';
import { ToolbarComponent } from 'src/app/components/toolbar/toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CountWorkpointPageRoutingModule
  ],
  declarations: [
    CountWorkpointPage,
    EditWorkpointComponent,
    ToolbarComponent,
  ]
})
export class CountWorkpointPageModule {}
