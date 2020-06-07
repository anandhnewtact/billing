import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemSettingsRoutingModule } from './item-settings-routing.module';
import { ItemAddComponent } from './items/item-add/item-add.component';
import { ItemSettingsComponent } from './item-settings.component';


@NgModule({
  declarations: [ItemAddComponent, ItemSettingsComponent],
  imports: [
    CommonModule,
    ItemSettingsRoutingModule
  ]
})
export class ItemSettingsModule { }
