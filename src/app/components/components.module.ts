import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AvatarSelectorComponent } from './avatar-selector/avatar-selector.component';
import { PopinfoComponent } from './popresumo/popinfo.component';
import { FormsModule } from '@angular/forms';
import { DetalheComponent } from './detalhe/detalhe.component';



@NgModule({
  entryComponents: [
    DetalheComponent,
    PopinfoComponent
  ],
  declarations: [
    AvatarSelectorComponent,
    PopinfoComponent,
    DetalheComponent
  ],

  exports: [
    AvatarSelectorComponent,
    PopinfoComponent,
    DetalheComponent
  ],

  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ]
})
export class ComponentsModule { }
