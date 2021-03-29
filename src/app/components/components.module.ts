import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PopinfoComponent } from './popresumo/popinfo.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  entryComponents: [
    PopinfoComponent
  ],
  declarations: [
    PopinfoComponent
  ],

  exports: [
    PopinfoComponent
  ],

  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ]
})
export class ComponentsModule { }
